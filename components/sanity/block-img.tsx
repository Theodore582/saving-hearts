import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from './image';

type ImageComponentProps = {
    value?: any;
    isInline?: boolean;
};

const ImageComponent = ({ value, isInline }: ImageComponentProps) => {
    const { width, height } = getImageDimensions(value);
    return (
        // eslint-disable-next-line
        <img
            src={urlFor(value)?.url()}
            alt={value.alt || ' '}
            loading="lazy"
            style={{
                display: isInline ? 'inline-block' : 'block',
                aspectRatio: width / height,
            }}
            className='w-full'
        />
    );
};

export default ImageComponent;