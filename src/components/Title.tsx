type TitleProps = {
    title: string;
}
export const Title = ({ title }: TitleProps) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-12 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 w-25 h-1 bg-violet-500"></span>
            </h2>
        </div>
    );
}