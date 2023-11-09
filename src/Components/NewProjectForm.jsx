import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewProjectForm({skills}){
    const [skillSearch, setSkillSearch] = useState('')
    const [user] = useOutletContext()
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        skills: [],
        image: "",
        creators: [user]
    })
    const [name,setName] = useState("")
    
    function onSubmit(e){
        e.preventDefault()
        
    }
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleNewCont(e){
        e.preventDefault()
        formData
        
    }
    
    const filteredSkills = skills.filter(skill => skill.includes(skillSearch.toLowerCase()))
    const skillOptions = filteredSkills.map(skill => <option key={skill} value={skill}>{skill}</option>)
    return(
    <>
    <div>
        <form onSubmit={onSubmit}>
            <label>
                ProjectName:  
                <input 
                id="name" 
                name="name" 
                placeholder=" Project Name here..." 
                onChange={handleChange} 
                value={formData.name}
                required></input>
            </label>
            <br></br>
            <label>
                Contributers:
                <input
                name = "Contributers"
                placeholder="People working on it..." 
                onChange={handleChange} 
                value={formData.name}></input>
                <button onClick={handleNewCont}>add</button>
            </label>
            <br></br>
            <label>
                Description:
                <input 
                placeholder="Description of project..." 
                name="description"
                onChange={handleChange} 
                value={formData.description}></input>
            </label>
            <br></br>
            <label>
                Project image:
                <input  
                name="image"
                placeholder="image Url..."
                onChange={handleChange} 
                value={formData.name} ></input>
            </label>
            <br></br>
            <label>
                Skills-Required
                <input name="skillSearch" onChange={e => setSkillSearch(e.target.value)} value={skillSearch} />
                <select>
                {skillOptions}
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