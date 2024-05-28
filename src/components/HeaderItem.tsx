type HeaderItemProps = {
  name: string;
  Icon: React.ComponentType;
};

const HeaderItem = ({ name, Icon }: HeaderItemProps) => {
  return (
    <div className="flex items-center gap-3  md:text-[15px] font-semibold hover:underline underline-offset-8 mb-3">
      <span className="text-xl">
        <Icon />
      </span>
      <h2>{name}</h2>
    </div>
  );
};

export default HeaderItem;
