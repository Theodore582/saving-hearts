"use client"
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import { HomePageValues } from "@/types";
import { useState, useEffect } from 'react';
/**
 * Custom hook to fetch the home page data from Sanity
 * @returns { data, loading, error } - The homepage data, loading status, and any error encountered
 */
export const useHomePageData = () => {
    const [data, setData] = useState<SanityDocument<HomePageValues> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    console.log("DATA: " , data)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before making the request

            try {
                const result = await client.fetch<SanityDocument<HomePageValues>>(generatePageQuery("home"));
                console.log("DATA: ", result)

                setData(result);
            } catch (err) {
                setError("Failed to fetch homepage data.");
                console.error("Error fetching homepage data: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data on component mount

    return { data, loading, error };
};