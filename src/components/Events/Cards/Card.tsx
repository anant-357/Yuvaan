import { EventData } from "../../../assets/events/data";
import sword from "/events/images_cards/sword.png";
import divider from "/common/decorator-hr.png";

function Forms(props) {
  const mystyle = {
    color: "#a09b8c",
    textDecoration: "underline",
  };
  return (
    <>
      <div className="event-grid-item event-logo" />
      <div className="event-grid-item event-data">
        <p className="event-desc-header"> {props.title} </p>
        <span>
          {props.data.map((item, index) => (
            <a
              key={index}
              style={mystyle}
              className="event-date"
              target="_blank"
              href={item}
            >
              {" "}
              Form {index + 1}{" "}
            </a>
          ))}
        </span>
      </div>
    </>
  );
}

function Card(props) {
  const data: EventData = props.data;
  return (
    <div
      className="event-card"
      style={{
        backgroundImage: "url(events/" + data.bg + ")",
      }}
    >
      <div className="event-titleBox">
        <div className="event-title"> {data.title} </div>
        <img className="event-sword" src={sword} alt="sword" />
      </div>
      <div className="event-grid event-description">
        <div className="event-grid-item event-logo" />
        <div className="event-grid-item event-data">
          <p className="event-desc-header"> Date </p>
          <p className="event-date">{data.date}</p>
        </div>
        <div className="event-grid-item event-logo" />
        <div className="event-grid-item event-data">
          <p className="event-desc-header"> Time </p>
          <p className="event-date">{data.time}</p>
        </div>
        <div className="event-grid-item event-logo" />
        <div className="event-grid-item event-data">
          <p className="event-desc-header"> Venue </p>
          <p className="event-date">{data.venue}</p>
        </div>
        {data.forms.length > 0 ? (
          <Forms data={data.forms} title={"Forms"} />
        ) : (
          <></>
        )}
        {data.iiitg.length > 0 ? (
          <Forms data={data.iiitg} title={"IIITG Forms"} />
        ) : (
          <></>
        )}
        <div className="event-grid-item event-data event-full">
          <p className="event-info">{data.info}</p>
        </div>
      </div>
      <a href={data.link} target="_blank" className="event-register-button">
        Register
      </a>
      <img src={divider} className="event-divider" alt="scroll_down" />
    </div>
  );
}

export default Card;
