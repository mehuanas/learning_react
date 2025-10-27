const Card = (props) => {
    console.log(props);
    
  return (
    <div className="card">
        <div className="img"></div>
        <h1>{props.name}, {props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card