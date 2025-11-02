import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="w-70 h-full rounded-4xl overflow-hidden object-fill shrink-0 relative">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent tag={props.tag} intro={props.intro} id={props.id} />
    </div>
  );
};

export default RightCard;
