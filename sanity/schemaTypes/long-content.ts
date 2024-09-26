import { defineType, defineArrayMember } from 'sanity';

export default defineType({
    title: 'Long Content',
    name: 'longContent',
    type: 'array',
    of: [
        defineArrayMember({
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                // { title: 'H1', value: 'h1' },
                // { title: 'H2', value: 'h2' },
                // { title: 'H3', value: 'h3' },
                // { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }],
            // Marks let you mark up inline text in the Portable Text Editor
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],

            },
        }),
    ],
});
