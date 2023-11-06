
function Project({project}){
    
    const {name, id, description, creators} = project
    console.log(`project name: ${name}`)
    return (
        <>
          <div>
            <h1>project card</h1>
            <h2>{name}</h2>
            <h2>{creators}</h2>
            <p>{description}</p>
          </div>
        </>
      )
    }


export default Project