
type Props = {
    message?: string;
};

export default function CustomError({ message }: Props) {
    return (
        <div className="w-full h-full flex items-center text-red-600 justify-center gap-4 flex-col">


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80px] h-[80px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>


            <h1 className="font-medium  tracking-tighter text-2xl">
                Oops! Something is wrong
            </h1>
            <p className=" max-w-lg text-center text-sm text-neutral-500">
                {message || "It seems there was an error with the request. Try refreshing the page"}
            </p>

        </div>
    );
}