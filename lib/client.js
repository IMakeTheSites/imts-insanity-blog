import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
  projectId: 'ysqxn84u',
  dataset: 'production',
};

export const client = createClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  useCdn: false,
  apiVersion: '2023-03-29',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
