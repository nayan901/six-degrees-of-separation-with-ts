import { Form } from "react-bootstrap";
import './FormFields.css';

interface fieldType{
  options: [], 
  placeholder: string, 
  value: string, 
  handleChange: any
}

function FieldSelect({ options, placeholder, value, handleChange }: fieldType) {
return (
    <Form.Group>
      <Form.Select value={value} onChange={handleChange} className="select-custom">
        <option value="">{placeholder}</option>
        {options && options.map((option, i) => {
          return <option value={option} key={i}>{option}</option>;
        })}
      </Form.Select>
    </Form.Group>
  );
}

export default FieldSelect;
