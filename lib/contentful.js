// lib/contentful.js
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export async function fetchBlogPosts() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=blog&include=2`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    },
  )

  const data = await res.json()
  const assets = new Map(data.includes.Asset.map((asset) => [asset.sys.id, asset]))

  return data.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    slug: item.fields.slug,
    image: `https:${assets.get(item.fields.image.sys.id).fields.file.url}`,
    date: item.fields.date,
    brief: item.fields.brief,
    seoHeading: item.fields.seoHeading,
    seoDescription: item.fields.seoDescription,
  }))
}

export async function fetchBlogPost(slug) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=blog&fields.slug=${slug}&include=2`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    },
  )

  const data = await res.json()
  if (!data.items.length) return null

  const assets = data.includes.Asset
  const entries = data.includes.Entry || []
  const item = data.items[0]

  // Create a map for easier access to the main featured image
  const assetsMap = new Map(assets.map((asset) => [asset.sys.id, asset]))

  return {
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description, // Return the full description object
    slug: item.fields.slug,
    image: `https:${assetsMap.get(item.fields.image.sys.id).fields.file.url}`,
    date: item.fields.date,
    brief: item.fields.brief,
    seoHeading: item.fields.seoHeading,
    seoDescription: item.fields.seoDescription,
    // Add the schema field directly from Contentful
    schema: item.fields.schema,
    // Include assets and entries for rich text rendering
    includes: {
      assets: {
        block: assets, // Pass all assets for embedded asset blocks
        hyperlink: assets, // Pass all assets for hyperlinks
      },
      entries: {
        block: entries, // Pass all entries for embedded entry blocks
        inline: entries, // Pass all entries for inline entries
        hyperlink: entries, // Pass all entries for hyperlinks
      },
    },
  }
}
