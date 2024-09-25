import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'cause',
    title: 'Cause',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Title of Cause",
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: "description",
        }),

        defineField({
            name: 'content',
            title: 'Content',
            type: 'longContent',
            description: "longer description",
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: "Image / Banner",
        }),


    ],
});