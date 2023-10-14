import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-10-13",
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN_ID,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
