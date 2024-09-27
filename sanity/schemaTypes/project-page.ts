import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'projectsPage',
    title: 'Projects Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "The name of the page",
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        }),

      


    ],
});