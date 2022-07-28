//connect to sanity project
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0tvlmn67",
  dataset: "sanity_clothes",
  apiVersion: "2022-07-28",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

//import images from products on sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
