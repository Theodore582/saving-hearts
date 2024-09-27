import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "The name of the project",
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: "A short description of the project",
        }),

        defineField({
            name: 'images',
            title: "Photo Gallery",
            type: 'array',
            description: "Images from the project",
            of: [
                {
                    type: "image",
                }
            ]
        }),


    ],
});