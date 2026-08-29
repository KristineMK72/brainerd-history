import type { APIRoute } from "astro";

const BYTES = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAACfUlEQVR4nO2WPWgUQRTH573Z2c1e1ouowRA1pDAJKigEEjAoUVNYqiBiYZVObKxsLBTBylSWVmpjIRZWQoQEJKBBsQkpYkAjwmni5cvc7e3HzHsWp6JwmbuNSSH4r3Zh9v97O+8/H+DtyoutFG6pe2YAgADYGoBEAIBUU6rp5+smAQAECBGW4ijRO/N+6/acIQ7XIiLGBiBOPXcwhoyhi6cPnjm+v7MtjwiFYmn09ceHz6YrifZch4htDpYUAQgmRoA7VwbPDXZFsU5SI4RQDuaa1Kvpz5dHni+uRkpJ4nUZtikCgDjWN4YHzp/oXlgKy5VUG9aGw1jPL4X9B9ruXh1yJFjcbQBEiCpJ36H2Cye755dD5SAiVFOEAMrBryuVY4f3nB3sisuJxPV9LOVzSqd69ylHilo1IkKizVBvB0hksYEpYhYSO9vyhrhm+AGE1tTeGri+svTZGlPmcqQtUUQUUayNIUtaLQAQzG9n5yUC1yqQiF3lTL0v6jBBmb0HxOT47ujk3NyXb82+0uYPBhErieUofTz+Dl1Zs4I6AGbhOlhcDq/fmyDmwFfa/AikNuQq2RJ4tx9MTs8ueE3KklTbQhNCIEKlnAwc2Xtz+GhPx44wSolF4KtCsTTy6M2TsRm/2d34Sq5KIoRhsi3w+np2X3tU39qSu3X/5cRUYXGx5Aee3V00stkZYj/npobGXsx+WlgrR8nT8ZmVtSjXgLuou9lVRcQSQQaechAA/MAjFqYBd9H4ecBCGOJqL389bCZgw/oP2GQAM9uPl78FeK6T8xpK9i9lGA0IHwqrxlAmQP2t4ncRs2CBmOHyle1/sXpJyvRJtuHZ9e8DvgMHUScGMkMMSAAAAABJRU5ErkJggg==",
  "base64"
);

export const GET: APIRoute = () =>
  new Response(BYTES, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
