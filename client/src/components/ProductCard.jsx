import React from "react";
import ImgPrueba from "../assets/tassa1.jpg"
import { Button, Card} from "react-bootstrap/"

export default function ProductCard() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ImgPrueba} />
            <Button 
            style={{ backgroundColor: "#153A3A", width: "100%"}}>
                    Vull
            </Button>
        <Card.Body>
          <Card.Title>Tassa EJEMPLO</Card.Title>
          <Card.Text>
            1000€
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
