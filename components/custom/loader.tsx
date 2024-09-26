import { cn } from '@/lib/utils';
import { ThreeDots } from 'react-loader-spinner';

type Props = {
    isScreenHeight?: boolean
}

export default function CustomLoader({isScreenHeight }: Props) {
    return (
        <div className={cn(
            "w-full h-full flex items-center  justify-center gap-4 flex-col",
            isScreenHeight && "min-h-screen"
        )}>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#F43D4F"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
           

        </div>
    );
}