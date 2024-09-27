import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a title to the document you are editing for easy reference. It will not be used on the actual website",
        }),
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            description: "This field is for the information that will show at the hero section of the about page",
            fields: [
                {
                    name: "bgImage",
                    type: "image",
                    title: "Background Image"
                },
                {
                    name: "subtitle",
                    type: "string",
                    title: "Hero Subtitle"
                },
                {
                    name: "title",
                    type: "string",
                    title: "Hero Title"
                },

            ]
        }),
        defineField({
            name: 'background',
            title: 'Background Section',
            type: 'object',
            description: "This field is for the information that will show at the background section of the about page",
            fields: [
                {
                    name: "image",
                    type: "image",
                    title: "Image"
                },
                {
                    name: "description",
                    type: "longContent",
                    title: "Background Description",
                },
                {
                    name: "title",
                    type: "string",
                    title: "Background Title"
                },

            ]
        }),
        defineField({
            name: 'background2',
            title: 'Background 2 Section',
            type: 'object',
            description: "This field is for the information that will show at the second background section of the about page",
            fields: [
                {
                    name: "image",
                    type: "image",
                    title: "Image"
                },
                {
                    name: "description",
                    type: "longContent",
                    title: "Background Description"
                },
                {
                    name: "title",
                    type: "string",
                    title: "Background Title"
                },

            ]
        }),
        defineField({
            name: 'achievement',
            title: 'Achievements',
            type: 'longContent',
            description: "Write about the achievements",
        }),
        defineField({
            name: 'objective',
            title: 'Objectives',
            type: 'longContent',
            description: "Write about the objectives",
        }),
      

    ],
});