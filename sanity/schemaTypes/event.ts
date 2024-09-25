import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Title of Event",
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: "description",
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: "The location of the event",
        }),
        defineField({
            name: 'date',
            title: 'Date and Time',
            type: 'datetime',
            description: "The date and time of the event",
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