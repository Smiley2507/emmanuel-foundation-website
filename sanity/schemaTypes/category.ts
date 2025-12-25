import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Blue', value: 'bg-blue-50 text-blue-500' },
                    { title: 'Green', value: 'bg-green-50 text-green-500' },
                    { title: 'Amber', value: 'bg-amber-50 text-amber-500' },
                    { title: 'Red', value: 'bg-red-50 text-red-500' },
                    { title: 'Purple', value: 'bg-purple-50 text-purple-500' },
                ],
            },
        }),
    ],
})
