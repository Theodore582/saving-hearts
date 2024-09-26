import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a title to the document you are editing for easy reference. It will not be used on the actual website",
        }),
        // TODO: SLIDER SHIT
        // defineField({
        //     name: 'homeSliderImages',
        //     title: "Home Slider Images",
        //     type: 'array',
        //     description: "This field is for the images that will show on the carousel on the home page",
        //     of: [
        //         {
        //             type: "image",
        //         }
        //     ]
        // }),
        defineField({
            name: 'whatWeDoTitle',
            title: 'What We Do Title',
            type: 'string',
            description: "Heading for what we do section",
        }),
        defineField({
            name: 'whatWeDoPoints',
            title: "What We Do Points",
            type: 'array',
            description: "This field is for the points that will show under the what we do",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "wwdTitle",
                            type: "string",
                            title: "WWD Item Title"
                        },
                        {
                            name: "wwdIcon",
                            type: "image",
                            title: "WWD Item Icon"
                        },
                        {
                            name: "wwdDescription",
                            type: "string",
                            title: "WWD Item Description"
                        },
                    ]
                }
            ]
        }),
        defineField({
            name: 'about',
            title: 'About Section',
            type: 'object',
            description: "This field is for the information that will show at the who are we section of the home page",
            fields: [
                {
                    name: "aboutSubtitle",
                    type: "string",
                    title: "About Subtitle"
                },
                {
                    name: "aboutTitle",
                    type: "string",
                    title: "About Title"
                },
                {
                    name: "aboutDescription",
                    type: "string",
                    title: "About Description"
                },
                {
                    name: "aboutImage",
                    type: "image",
                    title: "About Image"
                },
               
            ]
        }),
        defineField({
            name: 'stats',
            title: "Statistics",
            type: 'array',
            description: "This field is for the points that will show under the what we do",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "statLabel",
                            type: "string",
                            title: "Stats Label"
                        },
                        {
                            name: "count",
                            type: "string",
                            title: "Stats Count"
                        },
                    ]
                }
            ]
        }),
        defineField({
            name: 'volunteer',
            title: 'Volunteer Section',
            type: 'object',
            description: "This field is for the information that will show at the who are we section of the home page",
            fields: [
                {
                    name: "title",
                    type: "string",
                    title: "Volunteer Title"
                },
                {
                    name: "description",
                    type: "string",
                    title: "Volunteer Description"
                },
            ]
        }),
       
    ],
});