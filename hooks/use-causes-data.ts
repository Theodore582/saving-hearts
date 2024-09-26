"use client";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import { Cause, HomePageValues } from "@/types";
import { useState, useEffect } from 'react';
/**
 * Custom hook to fetch the causes data from Sanity
 * @returns { data, loading, error } - The causes data, loading status, and any error encountered
 */
export const useCausesData = () => {
    const [data, setData] = useState<SanityDocument<Cause>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    console.log("DATA: ", data);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before making the request

            try {
                const result = await client.fetch<SanityDocument<Cause >[]>(generatePageQuery("cause", "_createdAt", "asc", "none"));
                console.log("DATA: ", result);

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

    return { causes: data, loading, error };
};