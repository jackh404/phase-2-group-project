import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modalcard = ({props, project}) => {
  const { name, description, skillsRequired,image } = project;
  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="projectCard">
        <h2>{name}</h2>
        <img className= "cardImg" src="https://imgs.search.brave.com/HK18d27GqHDPABVlQ3-7Xm0qRZ6Y2BU-_9tOZ5pWBr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgy/NzAzMTI2L3Bob3Rv/L3Rvb2xzLWluLXRo/ZS1mb3JnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UFp3/aVA4aFBhcnI5ZnVx/c1V0djdmT2YxNkVE/eVgwT2x2eGNpSU9m/NC1qbz0" alt="" />

        <div id="cardTest">
          <h3>
            Contributors: {creatorList ? creatorList.join(", ") : "Loading..."}
          </h3>
          <p>Description: {description}</p>
          <h3>Skills needed: </h3>
          <h5> {skillsRequired ? skillsList.join(", ") : "Loading..."}</h5>
          <br></br>
        </div>
          <button
            onClick={e => {
              likeClick(e);
            }}
            className={liked ? "clicked" : ""}
            id="projectLikes"
          >
            ❤️
          </button>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Modalcard
