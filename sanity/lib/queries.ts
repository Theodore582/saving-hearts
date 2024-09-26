// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const HOMEPAGE_QUERY = groq`*[_type == "homePage"] | order(_createdAt asc)[0]`;

export const ABOUTPAGE_QUERY = groq`*[_type == "aboutPage"] | order(_createdAt asc)[0]`;
export const MUSICPAGE_QUERY = groq`*[_type == "musicPage"] | order(_createdAt asc)[0]`;



const pageQueryKeys = {
    "home": "homePage",
    "about": "aboutPage",
    "project": "projectPage",
    "news": "news",
    "event": "event",
    "cause": "cause",
    "footer": "footer",
    "app": "APP",
};

type PageQueryKeysType = keyof typeof pageQueryKeys;

export type SortOrder = "asc" | "desc";
type QueryIndex = number | "none";

function isNumber(input: any) {
    return !isNaN(input);
}


function getIdx(idx?: QueryIndex) {
    if (!idx) {
        return "[0]";
    }
    if (idx === "none") {
        return "";
    }
    if (!isNumber(idx)) {
        return "";
    }
    return `[${idx.toString()}]`;
}

export function generatePageQuery(page: PageQueryKeysType, sortField?: string, sortOrder?: SortOrder, index: QueryIndex = 0) {
    const field = !!sortField ? sortField : "_createdAt";
    const order = !!sortOrder ? sortOrder : "asc";
    const idx = getIdx(index);


    return groq`*[_type == "${pageQueryKeys[page]}"] | order(${field} ${order})${idx}`;
}

export function generateNewsQuery(slug: string) {
    return groq`*[_type == 'news' && slug.current == '${slug}'][0]`;
}