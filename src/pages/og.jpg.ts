import type { APIRoute } from "astro";

const SRC =
  "https://tile.loc.gov/storage-services/service/pnp/mrg/03700/03754v.jpg";

export const GET: APIRoute = async () => {
  const upstream = await fetch(SRC);
  const bytes = await upstream.arrayBuffer();
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
