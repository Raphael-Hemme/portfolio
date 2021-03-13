import React from "react";
import Card from 'react-bootstrap/Card';



const myStack = [
  {
    "id": "stack-card-1",
    "area": "Front End Development",
    "core": ["JavaScript", "React", "HTML", "CSS"],
    "tools": ["Git & GitHub", "NPM", "(React-)Bootstap", "Material UI", "Netlify" ]
  },
  {
    "id": "stack-card-2",
    "area": "Back End Development",
    "core": ["Node", "Express", "SQL", "NoSQL"],
    "tools": ["Git & GitHub", "NPM", "PostgreSQL", "MongoDB", "Mongoose", "Heroku"]
  },
  {
    "id": "stack-card-3",
    "area": "Project Management",
    "core": ["Agile", "Scrum"],
    "tools": ["Trello", "Jira", "Discord"]
  }]

const TechStack = () => {
  return (
    <section className="main-tech-stack p-3">
      <h2>Tech Stack</h2>
      {myStack.map(el => {return (
        <Card key={el.id} className="tech-stack-card">
          <Card.Body>
            <Card.Title>{el.area}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Core Technolgies & Techniques
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );})}
    </section>
  );
};

export default TechStack;
