import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/indicators")({
  server: {
    handlers: {
      GET: async () => {
        const { handleIndicators } = await import("@/lib/forms/handle.server");
        return handleIndicators();
      },
    },
  },
});
