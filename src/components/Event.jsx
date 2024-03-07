import { useCallback, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { supprime } from "../services/eventServices";
import { useNavigate } from "react-router-dom";

function Event(props) {
  const [event, setEvent] = useState(props.event);
  const src =
    event.nbTickets === 0 ? " images/sold_out.png" : `images/${event.img}`;
  const msg = event.like ? "Dislike" : "Like";
  const navigate = useNavigate();
  const handleLike = useCallback(() => {
    setEvent({ ...event, like: !event.like });
  }, [event.like]);

  //supprimer

  const OnSupprime = (id) => {
    try {
      supprime(id).then(() => alert("suppression avec success"));
    } catch (error) {
      console.log(error.message);
    }
  };

  //Modifier

  const toupdate = (id) => {
    window.location.replace(`events/update/${id}`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={src} height={250} />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>Price : {event.price}</Card.Text>
        <Card.Text>Number of tickets : {event.nbTickets}</Card.Text>
        <Card.Text>Number of participants : {event.nbParticipants}</Card.Text>
        <Button variant="primary" onClick={handleLike}>
          {msg}
        </Button>
        <Button
          variant="primary"
          onClick={() => props.Buy(event)}
          disabled={event.nbTickets == 0 ? true : false}
        >
          Book an event
        </Button>
        <Button className="btn btn-info" onClick={() => toupdate(event.id)}>
          Update
        </Button>
        <Button className="btn btn-danger" onClick={() => OnSupprime(event.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;
