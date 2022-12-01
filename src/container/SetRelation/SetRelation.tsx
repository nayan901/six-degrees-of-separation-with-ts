import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FieldSelect from "../../component/FieldSelect";

const SetRelation = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  let relation = JSON.parse(localStorage.getItem('session')as string) 

  const setRelation = () => {
    let a = []
    a = JSON.parse(localStorage.getItem('relation')as string) || [];
    var person = { p1: field1, p2: field2};
    //a.push(field1)
    //a.push(field2)
    a.push(person)
    localStorage.setItem('relation', JSON.stringify(a));
    setField1('')
    setField2('')
  }

  return (
    <div>
    <h1 className="head">Set Relationship</h1>
    <Form className="form-content">
      <Row className="relation-fields">
        <Col sm={6}>
          <FieldSelect
            options={relation}
            placeholder={"Person 1"}
            handleChange={(e: any) => setField1(e.target.value)}
            value={field1}
          />
        </Col>
        <Col sm={6}>
          <FieldSelect
            options={relation}
            placeholder={"Person 2"}
            handleChange={(e:any) => setField2(e.target.value)}
            value={field2}
          />
        </Col>
      </Row>
      <Button
        className={"form-btn"}
        onClick={() => setRelation()}
      >
        Set Relation
      </Button>
    </Form>
    </div>
  );
};

export default SetRelation;
