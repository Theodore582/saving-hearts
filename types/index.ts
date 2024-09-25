import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Children = {
    children: React.ReactNode;
};


export type WhatWeDoPoint = {
    wwdTitle: string
    wwdIcon: SanityImageSource
    wwdDescription: string
}

export type HomeStats = {
    statLabel: string;
    count: string;
}

export type HomeAboutSection = {
    aboutSubtitle: string
    aboutTitle: string
    aboutDescription: string
    aboutImage: SanityImageSource

}

export type HomeVolunteer = {
    title: string
    description: string
}

export type HomePageValues = {
    whatWeDoTitle: string
    whatWeDoPoints: WhatWeDoPoint[]
    about: HomeAboutSection
    stats: HomeStats[];
    volunteer: HomeVolunteer
};

export type Cause = {
    title: string
    image: SanityImageSource
    description: string
    content: any
};

export type Event = {
    title: string
    description: string
    content: any
    location: string
    date: Date
    image: SanityImageSource;
};

export type News = {
    title: string;
    description: string;
    content: any;
    image: SanityImageSource;
};

export type AboutHero = {
    title: string
    subtitle: string
    bgImage: SanityImageSource
}

export type AboutBackground = {
    title: string;
    description: any;
    image: SanityImageSource;
}

export type AboutPageValues = {
    hero: AboutHero;
    background: AboutBackground;
    background2: AboutBackground;
    achievement: any
    objective: any
};



export type FooterValues = {
    aboutTitle: string
    aboutDescription: string
    getInTouchDescription: string
};

export type SocialLink = {
    name: string
    link: string
}


export type AppValues = {
    appName: string
    socials: SocialLink[]
    email: string
    phone: string
    location: string
}