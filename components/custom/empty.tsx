
type Props = {
    message?: string;
};

export default function CustomEmpty({ message }: Props) {
    return (
        <div className="w-full h-full flex items-center  justify-center gap-4 flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80px] h-[80px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </svg>

            <h1 className="font-medium  tracking-tighter text-2xl">
                Uh oh!
            </h1>
            <p className=" max-w-lg text-center text-sm text-neutral-500">
                We did not find any {message || "information"}. Make sure the information you are trying to access exists or check again later.
            </p>

        </div>
    );
}