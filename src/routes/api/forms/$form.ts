import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/forms/$form")({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        const { handleFormPost } = await import("@/lib/forms/handle.server");
        return handleFormPost(request, params.form);
      },
    },
  },
});
