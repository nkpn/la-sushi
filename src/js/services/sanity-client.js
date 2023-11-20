import {createClient} from '@sanity/client';

// documentation
// https://www.npmjs.com/package/@sanity/client

export const client = createClient({
    projectId: 'p4kn0cp6',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  export async function getProducts() {
    const posts = await client.fetch('*[_type == "product"]')
    return posts
  }