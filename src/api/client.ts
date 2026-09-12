import { createClient } from "@sanity/client";

export default createClient({
  projectId: "wb1h97dq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2026-09-12",
});
