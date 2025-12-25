import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

// Helper to get optimized image URL
export function getImageUrl(source: SanityImageSource, width?: number) {
    let url = urlFor(source).auto('format').fit('max')

    if (width) {
        url = url.width(width)
    }

    return url.url()
}
