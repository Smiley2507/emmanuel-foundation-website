import { groq } from 'next-sanity'

// Get all blog posts
export const postsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  "categories": categories[]->{ 
    title,
    slug,
    color
  },
  author->{
    name,
    slug,
    image {
      asset->{
        _id,
        url
      }
    }
  }
}`

// Get a single blog post by slug
export const postQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  body,
  "categories": categories[]->{ 
    title,
    slug,
    color
  },
  author->{
    name,
    slug,
    bio,
    image {
      asset->{
        _id,
        url
      }
    }
  }
}`

// Get all post slugs for static generation
export const postPathsQuery = groq`*[_type == "blogPost" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

// Get featured posts (latest 3)
export const featuredPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  "categories": categories[]->{ 
    title,
    slug,
    color
  }
}`

// Get related posts (same category, excluding current post)
export const relatedPostsQuery = groq`*[_type == "blogPost" && _id != $postId && count((categories[]->slug.current)[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`
