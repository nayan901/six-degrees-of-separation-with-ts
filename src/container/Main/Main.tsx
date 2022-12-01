import { Row, Col } from "react-bootstrap";
import AddPeople from "../AddPeople/AddPeople";
import Relation from "../Relation/Relation";
import SetRelation from "../SetRelation/SetRelation";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <Row>
        <Col md={6}>
          <div className="add-people">
            <AddPeople />
          </div>
        </Col>
        <Col md={6}>
          <div className="set-relation">
            <SetRelation />
          </div>
        </Col>
      </Row>
      <Row>
        <div className="how-related">
        <Relation />
        </div>
      </Row>
    </div>
  );
};

export default Main;
