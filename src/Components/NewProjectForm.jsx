import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewProjectForm({skills}){
    const [name,setName] = useState("")
    // const [people,setPeople]=useState("")
    // const [description,setDescription] =useState("")
    // const [imgSource,setImgSource] = useState("")
    function onSubmit(e){
        e.preventDefault()
        
    }
    function handleName(e){
        setName(e.target.value)
        // console.log(name)
    }
    // function handleDescription(e){
    //     setDescription(e.target.value)
    // }
    // function handlePeople(e){
    //     setPeople(e.target.value)

    // }

    return(
    <>
    <div>
        <form onSubmit={onSubmit}>
            <label>
                ProjectName:  
                <input placeholder=" Project Name here..." onChange={handleName} ></input>
            </label>
            <br></br>
            <label>
                Contributers:
                <input placeholder="People working on it..." ></input>
            </label>
            <br></br>
            <label>
                Description:
                <input placeholder="Description of project..." ></input>
            </label>
            <br></br>
            <label>
                Project image:
                <input  placeholder="image Url..." ></input>
            </label>
            <br></br>
            <label>
                Skills-Required
                <select>
                {skills.map((skill)=> {return <option key = {skill} value={skill}>{skill}</option>})}
                </select>
            </label>
            <br></br>
            <button type="submit">submit</button>

            
        </form>
    </div>

    </>
        
        
    )
}

export default NewProjectForm;