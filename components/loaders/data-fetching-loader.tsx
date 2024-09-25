"use client";
import { useState, useEffect } from 'react';
import 'ldrs/helix';
import type { } from 'ldrs';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import CustomEmpty from '../core/custom-empty';

type Props = {
    data: any;
    children: React.ReactNode;
    dataType?: string;
};

export default function DataFetchingLoader({ data, children, dataType }: Props) {
    const [isClient, setIsClient] = useState(false);
    const [message, setMessage] = useState("");
    const [showButton, setShowButton] = useState(false);

    const router = useRouter();
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setMessage("This is taking a bit longer than expected");
        }, 7000); // 10 seconds

        const timeout2 = setTimeout(() => {
            setMessage("Something went wrong!");
            setShowButton(true);
        }, 15000); // 15 seconds

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    if (data) return children;

    if (!isClient) {
        return (
            <div className="min-h-[70vh]"></div>
        );
    }

    if (!!!data) {
        return (
            <section className='w-full min-h-[90vh] flex items-center justify-center'>
                <CustomEmpty message={dataType} />
            </section>
        );
    }

    return (
        <div className="w-screen min-h-[90vh] overflow-hidden flex flex-col gap-4 items-center justify-center">
            {
                !showButton ? (
                    <div aria-live="polite" aria-busy={true}>
                        <l-helix size="120"></l-helix>
                    </div>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[120px] h-[120px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>

                )
            }
            <p className='text-4xl   '>
                {message}
            </p>

            {
                showButton && (
                    <Button onClick={() => router.refresh()} >
                        Refresh Page
                    </Button>
                )
            }
        </div>
    );
}