import { Form } from "react-bootstrap";
import './FormFields.css';

interface FieldType {
  type: string,
  placeholder: string,
  className: string,
  name: string,
  handleChange: any,
  value: string[]
}

function FieldInput({type, placeholder, className, name, handleChange, value}: FieldType) {

  return (
    <Form.Group className="d-flex align-items-center input-field">
      <Form.Control className={className ? className : ''} type={type} placeholder={placeholder} name={name} onChange={handleChange} value={value} />
    </Form.Group>
  );
}

export default FieldInput;
