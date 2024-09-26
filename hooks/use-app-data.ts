"use client";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import { AppValues } from "@/types";
import { useState, useEffect } from 'react';
/**
 * Custom hook to fetch the app page data from Sanity
 * @returns { data, loading, error } - The apppage data, loading status, and any error encountered
 */
export const useAppPageData = () => {
    const [data, setData] = useState<SanityDocument<AppValues> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    console.log("DATA: ", data);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before making the request

            try {
                const result = await client.fetch<SanityDocument<AppValues>>(generatePageQuery("app"));
                console.log("DATA: ", result);

                setData(result);
            } catch (err) {
                setError("Failed to fetch apppage data.");
                console.error("Error fetching apppage data: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data on component mount

    return { data, loading, error };
};