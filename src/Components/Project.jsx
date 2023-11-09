import { useState } from "react"
import sound from "/audio/metalSound.mp3"
import JSConfetti from 'js-confetti'


function Project({project,skills}){
  //const audio = new Audio("./audio.mp3");
  const {name, description, creators,skillsRequired} = project
  const [liked,setLiked]=useState(false)

  // skillsRequired.map((index)=>{return skills[index]})
  
  
  //loony wizard
  const jsConfetti = new JSConfetti()
  function fireConfetti() {
    jsConfetti.addConfetti({
    confettiRadius: 0,
    confettiColors: [
    '#000', 'hotpink', 'gold'
    ],
    confettiNumber:2,
    emojis: ['⚒️'],
    emojiSize: 100,

    })
    
    
    }
  function likeClick(e) { 
    setLiked(!liked)
    new Audio(sound).play()
    fireConfetti()
    
    
  }

    //console.log(skillsRequired)
    //console.log(skills)
    // console.log(project)
    // console.log(a,b,c)
    // console.log(`project name: ${name}`)
  
    return (
        <>
          <div className = "projectCard">
            <h2>{name}</h2>
            <img src="https://imgs.search.brave.com/HK18d27GqHDPABVlQ3-7Xm0qRZ6Y2BU-_9tOZ5pWBr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgy/NzAzMTI2L3Bob3Rv/L3Rvb2xzLWluLXRo/ZS1mb3JnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UFp3/aVA4aFBhcnI5ZnVx/c1V0djdmT2YxNkVE/eVgwT2x2eGNpSU9m/NC1qbz0" alt="" />
            <h3>contributors: {creators?creators.join(', '):"Loading..."}</h3>
            <p>description: {description}</p>
            <h3>skills-needed: </h3>
            <h5> {skillsRequired?skillsRequired.map((index)=>{return skills[index]}).join(', '):"Loading..."}</h5>
            
            <br></br>
            <button onClick = {(e)=>{likeClick(e)}} className={liked? "clicked":""}  id = "projectLikes">❤️</button>

          </div>
        </>
      )
    }


export default Project