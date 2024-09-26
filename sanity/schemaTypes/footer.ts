import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Title of News",
        }),

        defineField({
            name: 'aboutTitle',
            title: 'About Title',
            type: 'string',
            description: "description",
        }),
        defineField({
            name: 'aboutDescription',
            title: 'About Description',
            type: 'string',
            description: "description",
        }),

        defineField({
            name: 'getInTouchDescription',
            title: 'Get In Touch Description',
            type: 'string',
            description: "longer description",
        }),

    ],
});