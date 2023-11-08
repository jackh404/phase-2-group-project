
function Project({project}){
  
  const x = document.getElementById("myAudio"); 
  // const y = document.getElementById("projectLikes")
  
  function playAudio() { 
    // y.style = "animation: jump" 
    x.play(); 
  } 

  //const audio = new Audio("./audio.mp3");
    const {name, id, description, creators} = project
    const [a,b,c] = creators
    
    console.log(project)
    console.log(a,b,c)
    // console.log(`project name: ${name}`)
    return (
        <>
          <div id = "projectCard">
            <h2>project: {id}</h2>
            <h4>{name}</h4>
            <img src="https://imgs.search.brave.com/HK18d27GqHDPABVlQ3-7Xm0qRZ6Y2BU-_9tOZ5pWBr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgy/NzAzMTI2L3Bob3Rv/L3Rvb2xzLWluLXRo/ZS1mb3JnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UFp3/aVA4aFBhcnI5ZnVx/c1V0djdmT2YxNkVE/eVgwT2x2eGNpSU9m/NC1qbz0" alt="" />
            <h3>contributors: {a}, {b}, {c}</h3>
            <p>description: {description}</p>
            
            <br></br>
            <button onClick = {()=>{playAudio()}} id = "projectLikes">❤️ </button>

            <audio id="myAudio">
              <source src = "src/audio/metalSound.mp3" type="audio/mpeg"/>
            </audio>
          </div>
        </>
      )
    }


export default Project