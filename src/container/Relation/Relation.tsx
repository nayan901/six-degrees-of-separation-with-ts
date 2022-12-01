import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FieldSelect from "../../component/FieldSelect";
import Result from "../Result/Result";

const Relation = () => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [isRelationFound, setIsRelationFound] = useState<any>([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let frnds = JSON.parse(localStorage.getItem("session")as string);
  let findRelation = JSON.parse(localStorage.getItem("relation")as string);


  const bothFriends : any[] =[];

  const searchRelation = () => {
    const foundForUser1 = findRelation.filter((r:any) => r.p1 === field1);

    let bothFriendsTemp : any[] =[];

    findRealtionMutual(foundForUser1,field2);

function findRealtionMutual(array1 : any,name :any){
  array1.forEach((item1:any,index:any) => {    
    
    bothFriendsTemp.push(item1.p1);
    if(item1.p2 === name){
      bothFriendsTemp.push(item1.p2);
      bothFriends.push({
        Id : index + 1,
        Values  : bothFriendsTemp
      });
      bothFriendsTemp = [];
      return true;
    }else{
      let frndOfFrnds = findRelation.filter((r:any) => r.p1 === item1.p2);
      if(frndOfFrnds){
        findRealtionMutual(frndOfFrnds,name);
      }
    }
  });
}

  setIsRelationFound(bothFriends)
  setIsButtonClicked(true)
  }

  return (
    <div>
      <h1 className="head">How are these two related?</h1>
      <Form className="form-content">
        <Row className="relation-fields">
          <Col sm={6}>
            <FieldSelect
              options={frnds}
              placeholder={"Person 1"}
              handleChange={(e: any) => setField1(e.target.value)}
              value={field1}
            />
          </Col>
          <Col sm={6}>
            <FieldSelect
              options={frnds}
              placeholder={"Person 2"}
              handleChange={(e: any) => setField2(e.target.value)}
              value={field2}
            />
          </Col>
        </Row>
        <Button className={"form-btn"}
        onClick={() => searchRelation()}
        >
          Search Relation
        </Button>
      </Form>
      {isButtonClicked &&  <Result relationFound={isRelationFound}/>}
    </div>
  );
};

export default Relation;
