<?php
/**
 * Plugin Name: RSU Forms
 * Description: Recibe respuestas de formularios del blog de forma privada.
 */

const RSU_FORMS = ['diagnostico', 'registro_taller', 'evaluacion', 'satisfaccion'];

add_action('init', function () {
    register_post_type('rsu_submission', [
        'label'        => 'Respuestas RSU',
        'public'       => false,
        'show_ui'      => true,
        'show_in_rest' => false,
        'supports'     => ['title'],
        'menu_icon'    => 'dashicons-feedback',
    ]);
});

function rsu_check_secret(WP_REST_Request $request): bool {
    $secret = defined('RSU_FORMS_SECRET') ? RSU_FORMS_SECRET : '';
    return $secret !== '' && hash_equals($secret, (string) $request->get_header('x-rsu-secret'));
}

add_action('rest_api_init', function () {
    register_rest_route('rsu/v1', '/submissions', [
        [
            'methods'             => 'POST',
            'permission_callback' => 'rsu_check_secret',
            'callback'            => function (WP_REST_Request $request) {
                $form = sanitize_key($request['form']);
                $payload = $request['payload'];
                if (!in_array($form, RSU_FORMS, true) || !is_array($payload)) {
                    return new WP_Error('bad_request', 'Solicitud inválida', ['status' => 400]);
                }
                $id = wp_insert_post([
                    'post_type'   => 'rsu_submission',
                    'post_status' => 'private',
                    'post_title'  => $form . ' - ' . current_time('mysql'),
                ]);
                if (is_wp_error($id)) {
                    return $id;
                }
                update_post_meta($id, 'rsu_form', $form);
                update_post_meta($id, 'rsu_payload', wp_slash(wp_json_encode($payload, JSON_UNESCAPED_UNICODE)));
                return ['id' => (string) $id];
            },
        ],
        [
            'methods'             => 'GET',
            'permission_callback' => 'rsu_check_secret',
            'callback'            => function (WP_REST_Request $request) {
                $query = new WP_Query([
                    'post_type'      => 'rsu_submission',
                    'post_status'    => 'private',
                    'meta_key'       => 'rsu_form',
                    'meta_value'     => sanitize_key($request['form']),
                    'fields'         => 'ids',
                    'posts_per_page' => 1,
                ]);
                return ['count' => (int) $query->found_posts];
            },
        ],
    ]);
});
