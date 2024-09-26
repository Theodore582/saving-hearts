type LinkComponentProps = {
    value?: any;
    children?: React.ReactNode;
};



const SanityLink = ({ value, children }: LinkComponentProps) => {
    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
    return (
        <a className="text-blue-500 underline" href={value?.href} target={target}>
            {children}
        </a>
    );
};

export default SanityLink;