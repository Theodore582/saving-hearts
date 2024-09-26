import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'APP',
    title: 'APP SETUP',
    type: 'document',
    fields: [
        defineField({
            name: 'appName',
            title: 'App Name',
            type: 'string',
            description: "The name of the website",
        }),
        defineField({
            name: 'socials',
            title: "Socials",
            type: 'array',
            description: "Enter the name and link of the social",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            type: "string",
                            title: "Social Name"
                        },
                        {
                            name: "link",
                            type: "string",
                            title: "Social Link"
                        },
                    ]
                }
            ]
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            description: "Email to be displayed on the website and to be used as point of contact",
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            description: "Phone to be displayed on the website and to be used as point of contact",
        }),

        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: "Location of foundation",
        }),

    ],
});