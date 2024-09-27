
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { ClassValue } from "clsx";
import { ImageUrlBuilder } from "sanity";
import { cn } from "@/lib/utils";

const { projectId, dataset } = client.config();

export const urlFor = (source?: SanityImageSource): ImageUrlBuilder | null => {
    if (!source) return null;
    return projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
}

type Props = {
    image?: SanityImageSource;
    className?: ClassValue;
    alt?: string;
    fit?: "contain" | "cover";
    usesImg?: boolean;
};

export default function SanityImage({ image, alt, className, fit = "cover", usesImg }: Props) {
    const convertedImage = (image) ? urlFor(image)?.url() : null;

    return (
        <div className={cn(
            "flex flex-col gap-2 items-center justify-center overflow-hidden",
            !usesImg && className,
            !convertedImage && " w-full h-full bg-black/60 text-white"
        )}>
            {
                convertedImage ? (
                    <>
                        {
                            usesImg ?
                                // eslint-disable-next-line
                                <img
                                    className={cn(
                                        className as string,
                                        (fit === "contain" ? "object-contain" : "object-cover")
                                    )}
                                    src={convertedImage}
                                    alt={alt ?? ""}
                                /> :
                                <Image
                                    src={convertedImage} alt={alt ?? ""}
                                    fill
                                    className={cn(
                                        fit === "contain" ? "object-contain" : "object-cover"
                                    )} />
                        }
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p className="text-xs">
                            This image could not be rendered
                        </p>
                    </>
                )
            }
        </div>
    );




}