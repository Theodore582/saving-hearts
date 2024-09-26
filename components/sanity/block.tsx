import { PortableText, PortableTextProps } from '@portabletext/react';
import {  SanityBlockImage, SanityLink } from '../sanity';






export default function SanityBlock({ value }: PortableTextProps) {
    return (
        <PortableText
            value={value}
            components={{
                types: {
                    image: SanityBlockImage
                },
                marks: {
                    link: SanityLink
                },
                list: {
                    // Ex. 1: customizing common list types
                    bullet: ({ children }) => <ul className="ml-4">{children}</ul>,
                    number: ({ children }) => <ol className="ml-4">{children}</ol>,

                    // Ex. 2: rendering custom lists
                    checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
                },
                listItem: {
                    // Ex. 1: customizing common list types
                    bullet: ({ children }) => <li style={{ listStyleType: 'disc' }}>{children}</li>,

                    // Ex. 2: rendering custom list items
                    checkmarks: ({ children }) => <li>✅ {children}</li>,
                },
            }}
        />
    );
}