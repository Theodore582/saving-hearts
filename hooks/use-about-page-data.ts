"use client";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import { AboutPageValues } from "@/types";
import { useState, useEffect } from 'react';
/**
 * Custom hook to fetch the about page data from Sanity
 * @returns { data, loading, error } - The aboutpage data, loading status, and any error encountered
 */
export const useAboutPageData = () => {
    const [data, setData] = useState<SanityDocument<AboutPageValues> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    console.log("DATA: ", data);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before making the request

            try {
                const result = await client.fetch<SanityDocument<AboutPageValues>>(generatePageQuery("about"));
                console.log("DATA: ", result);

                setData(result);
            } catch (err) {
                setError("Failed to fetch aboutpage data.");
                console.error("Error fetching aboutpage data: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data on component mount

    return { data, loading, error };
};