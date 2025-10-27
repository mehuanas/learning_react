const Card = (props) => {
  let prop = props.dets;
  
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src={prop.brandLogo} alt="Logo" />
            <button>Save</button>
          </div>

          <div className="center">
            <h3>
              {prop.companyName} <span>{prop.datePosted}</span>
            </h3>
            <h2>{prop.post}</h2>
            <div className="tag">
              <h4>{prop.tag1}</h4>
              <h4>{prop.tag2}</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>${prop.pay}/hr</h3>
            <p>{prop.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
