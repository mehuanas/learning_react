import RightCard from "./RightCard";

const RightContent = ({ users }) => {
  return (
    <div className="right-content h-full w-2/3 p-4 flex flex-nowrap gap-5 overflow-auto">
      {users.map((e, idx) => {
        return (
          <RightCard
            img={e.img}
            tag={e.tag}
            intro={e.intro}
            key={idx}
            id={idx}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
