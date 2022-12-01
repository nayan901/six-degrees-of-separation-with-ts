import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FieldInput from "../../component/FieldInput";

const AddPeople = () => {
    const [fields, setFields] = useState([]);

    const handleSubmit = () => {
      let a = []
      a = JSON.parse(localStorage.getItem('session')as string) || [];
      a.push(fields);
      localStorage.setItem('session', JSON.stringify(a));
      setFields([])
    }
    return(
      <>
        <h1 className="head">Add People</h1>
        <Form className="form-content">
          <Row className="mt-3">
            <Col className="d-flex add-people-field">
              <FieldInput
                className={"custom-input"}
                placeholder={"Your Name"}
                type={"text"}
                name={"name"}
                handleChange={(e: any) => setFields(e.target.value)}
                value={fields}
              />
            </Col>
          </Row>
            <Button className={"form-btn"}
            onClick={() => handleSubmit()} type="submit"
            >Add</Button>
        </Form>
      </>
    )
}

export default AddPeople;