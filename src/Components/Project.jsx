import { useState } from "react";
import sound from "/audio/metalSound.mp3";
import JSConfetti from "js-confetti";
import { useOutletContext } from "react-router-dom";
import NewProjectForm from "./NewProjectForm";

function Project({ project }) {
  //const audio = new Audio("./audio.mp3");
  const { name, description, skillsRequired, image } = project;
  const { user, creators, skills } = useOutletContext();
  const [liked, setLiked] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = () => {
    setShowForm(true);
  };
  const patchEdit = project => {};
  // skillsRequired.map((index)=>{return skills[index]})

  //loony wizard
  const jsConfetti = new JSConfetti();
  function fireConfetti() {
    jsConfetti.addConfetti({
      confettiRadius: 0,
      confettiColors: ["#000", "hotpink", "gold"],
      confettiNumber: 2,
      emojis: ["⚒️"],
      emojiSize: 100,
    });
  }
  let music = new Audio(sound);
  function likeClick(e) {
    setLiked(!liked);

    music.volume = 0.1;
    music.play();
    fireConfetti();
  }
  let skillsList;
  if (skillsRequired) {
    skillsList = skillsRequired.map(skill => {
      return skills[skill];
    });
  }
  let creatorList;
  if (project.creators) {
    creatorList = project.creators.map(creator => {
      return creators.find(creatorObj => creatorObj.id === creator).name;
    });
  }
  return (
    <>
      <div className="projectCard">
        <h2>{name}</h2>
        <img className="cardImg" src={`${image}`} alt="" />

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
        {user && project.creators.includes(user.id) ? (
          <button onClick={handleEdit}>Edit</button>
        ) : (
          ""
        )}
        {showForm ? (
          <NewProjectForm
            setShowForm={setShowForm}
            project={project}
            handleSubmit={patchEdit}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Project;
