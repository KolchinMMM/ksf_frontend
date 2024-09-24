interface props {
    width: string;
    height: string;
    viewBox: string;
    fill?: string;
    image: string;
}

export default function Image({ width, height, viewBox, fill, image }: props) {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill ? fill : 'currentColor'}>
            <path d={image} />
        </svg>
    )
}