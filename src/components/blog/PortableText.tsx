import { PortableText as PortableTextComponent, PortableTextComponents } from '@portabletext/react'
import { getImageUrl } from '@/lib/sanity/image'
import Image from 'next/image'

const components: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="h1 text-[var(--color-primary)] mt-16 mb-8">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="h2 text-[var(--color-primary)] mt-16 mb-8">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="h3 text-[var(--color-primary)] mt-12 mb-6">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="h4 text-[var(--color-primary)] mt-10 mb-5">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="body-large text-[var(--color-text-secondary)] mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <div className="bg-[var(--color-primary-light)] border-l-4 border-[var(--color-primary)] p-8 rounded-r-[var(--radius-ui)] my-12">
                <p className="pull-quote text-2xl text-[var(--color-primary)]">
                    {children}
                </p>
            </div>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="space-y-4 my-8 ml-6">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="space-y-4 my-8 ml-6 list-decimal">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="flex items-start space-x-4 text-xl text-foreground/80">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-lg mt-2 flex-shrink-0" />
                <span>{children}</span>
            </li>
        ),
        number: ({ children }) => (
            <li className="text-xl text-foreground/80 ml-4">
                {children}
            </li>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-primary">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-primary">
                {children}
            </code>
        ),
        link: ({ children, value }) => (
            <a
                href={value?.href}
                className="text-secondary hover:text-primary transition-colors underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset) return null

            return (
                <div className="my-12 rounded-[var(--radius-ui)] overflow-hidden shadow-lg border border-gray-100">
                    <img
                        src={getImageUrl(value, 1200)}
                        alt={value.alt || 'Blog post image'}
                        className="w-full h-auto"
                    />
                    {value.alt && (
                        <p className="text-center text-sm text-foreground/60 mt-4 italic">
                            {value.alt}
                        </p>
                    )}
                </div>
            )
        },
    },
}

export function PortableText({ value }: { value: any }) {
    return <PortableTextComponent value={value} components={components} />
}
