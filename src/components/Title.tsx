type TitleProps = {
  title: string;
};
export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        {title}
        <div className="kuAYXS"></div>
      </h2>
    </div>
  );
};
