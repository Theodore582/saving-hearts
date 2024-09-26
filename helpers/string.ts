import _ from "lodash";
import { BsEnvelopeAt, BsInstagram, BsTelephone, BsTwitter, BsWhatsapp, BsYoutube, BsFacebook } from 'react-icons/bs';


export function getSafeString(str?: string | null, error?: boolean, loading?: boolean): string {
    if (error || loading) return "";
    return str || "N/A";
}

// Map of social platforms to icons
const socialsMap = {
    twitter: BsTwitter,
    instagram: BsInstagram,
    whatsapp: BsWhatsapp,
    youtube: BsYoutube,
    phone: BsTelephone,
    email: BsEnvelopeAt,
    facebook: BsFacebook,
};

export function parseSocial(soc: string) {
    const __social = getSafeString(soc);
    if (__social === "N/A") return "";

    // Trim, convert to lowercase, and ensure it is a single word
    const sanitizedSocial = _.toLower(_.trim(__social));
    const singleWordSocial = _.join(_.split(sanitizedSocial, " "), ""); // Ensure no spaces between words

    return singleWordSocial;
}

// Function to get social icon from string input
export function getSocialIconFromString(soc: string) {
    const parsedSocial = parseSocial(soc); 
    if (!parsedSocial) return null; 

    return socialsMap[parsedSocial as keyof typeof socialsMap] || null; 
}

