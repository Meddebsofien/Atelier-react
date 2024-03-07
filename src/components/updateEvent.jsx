import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { add, get, update } from "../services/eventServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateEvent() {
  const navigate = useNavigate();
  const [Event, SetEvent] = useState({});
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    nbTickets: 0,
    img: "",
    nbParticipants: 0,
    like: false,
  });
  const id = useParams().id;
  useEffect(() => {
    console.log(id);
    const fetchevent = async () => {
      try {
        const result = await get(id);
        console.log(result.data);
        SetEvent(result.data);
      } catch (error) {}
    };
    fetchevent();
  }, [id]);
  useEffect(() => {
    setForm({
      name: Event.name || "",
      description: Event.description || "",
      price: Event.price || 0,
      nbTickets: Event.nbTickets || 0,
      img: Event.img || "",
      nbParticipants: Event.nbParticipants || 0,
      like: false,
    });
  }, [Event]);

  {
    /* const f = useFormik({
    initialValues: {
      name: Event.name || "",
      description: Event.description || "",
      price: Event.price || 0,
      nbTickets: Event.nbTickets || 0,
      img: Event.img || "",
      nbParticipants: Event.nbParticipants || 0,
      like: false,
    },
    onSubmit: async (values) => {
      console.log(values);
      await update(id, values);
      navigate("/events");
    },
  });*/
  }
  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await update(`${id}`, form).then(
        alert("modificetion avec succes")
      );
      console.log(response.data);
      window.location.replace("/events");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'offre :", error);
    }
  };

  return (
    <>
      <Form onSubmit={Event.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="description"
            value={form.description}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={form.price}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={form.nbTickets}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="img"
            value={form.img}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onUpdate}>
          Modifier
        </Button>
      </Form>
    </>
  );
}
export default UpdateEvent;
