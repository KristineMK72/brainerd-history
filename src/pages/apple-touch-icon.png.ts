import type { APIRoute } from "astro";

const BYTES = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAIAAACyr5FlAAADDklEQVR4nO3dQW4rRRRA0f4IiRkjdsJ2GLIshmyHPTGIZFmE65/kJ+161eeMI+XJ71bZGcT97Zfffj3g//z07AFYlzhI4iCJgyQOkjhI4iCJgyQOkjhI4iCJgyQOkjhI4iCJgyQOkjhI4iCJgyQOkjhI4iCJgyQOkjhI4iD9/OwBnuyfv/54/AO///n3OZMs6NsF/5H6u0GUq4VyoTg+3MRrF6nkEnF8Yhb3tk9k8zi+KIt7Gyey818rJ5Rx2m95ij1vjqcsbL8rZMOb41lHeb8rZLc4nruhzfrYKo4VdrPCDJ9lnzjW2co6k/ygTeJYbR+rzfMxO8Sx5ibWnOpdxsex8g5Wnu0txsfB15kdx/pHc/0JHxgcx5TXfcqcrw2Og682NY5Zx3HWtDdT4+AEI+OYeBAnzjwyDs4hDtK8OCbezy/GTT4vDk4jDpI4SMPiGPe2/R+z5h8WB2cSB0kcJHGQxEESB0kcJHGQxEESB2lYHNO/A2PW/MPi4EziIImDNC+OWW/b98ZNPi8OTiMO0sg4xt3Px8yZR8bBOabGMesgzpr2ZmocnGBwHFOO45Q5XxscxzHhdV9/wgdmx8GXGh/Hykdz5dneYnwcx6o7WHOqd9khjmO9Taw2z8dsEsex0j7WmeQH7RPHscZWVpjhs2wVx/Hs3exUxrFfHMfzNrRZGceuDwB8cdqXYeyXxYsNb46bc3a2axnH3jfHjSdSf8wl4njhWfbvdaE4bj5cyUWauLliHPe+G8rVgri38wfSt3i8+yuXcYiDB8RBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkMRBEgdJHCRxkK7+uHIecHOQxEESB0kcJHGQxEESB0kcJHGQxEESB0kcJHGQxEESB0kcJHGQxEESB0kcJHGQxEESB0kcJHGQxEESB0kcpH8BdvR6wWx6GcgAAAAASUVORK5CYII=",
  "base64"
);

export const GET: APIRoute = () =>
  new Response(BYTES, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
