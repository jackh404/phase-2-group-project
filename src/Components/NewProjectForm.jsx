import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewProjectForm(){
    const [user,setUser,creators,projects,skills] = useOutletContext()
    const [skillSearch, setSkillSearch] = useState('')
    const [creatorSearch, setCreatorSearch] = useState('')
    const [skillSelected, setSkillSelected] = useState('full stack development')
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        skills: [],
        image: "",
        creators: [user? user.id : null],
    })
    
    
    
    function onSubmit(e){
        e.preventDefault()
        fetch("https://ccserver-obi1.onrender.com/projects", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
});
              
        
    }
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleNewCont(e){
        e.preventDefault()
        const newCont = creators.find(cont => cont.id === creatorSearch)
        if(newCont){
            if(!formData.creators.includes(newCont)){
                setFormData({...formData, creators: [...formData.creators, newCont]})
                setCreatorSearch('')
            }
        }
        else{
            alert("Creator not found!")
        }
    }
    function handleNewSkill(e){
        e.preventDefault()
        if(!formData.skills.includes(skillSelected)){
            setFormData({...formData, skills: [...formData.skills, skillSelected]})
        }
    }

    let displayCreators = "Please sign in..."
    if(formData.creators[0]){
        displayCreators = formData.creators.map((creator,index) => <div key ={index} ><h5>{creator.name}</h5></div>)
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
                name = "creatorSearch"
                placeholder="Enter a username..." 
                onChange={e => setCreatorSearch(e.target.value)} 
                value={creatorSearch}></input>
                <button onClick={handleNewCont}>add</button>
            </label>
            <br/>
                <div>
                    {displayCreators}
                </div>
            <br/>
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
                value={formData.image} ></input>
            </label>
            <br></br>
            <label>
                Skills-Required
                <input 
                name="skillSearch" 
                onChange={e => setSkillSearch(e.target.value)} 
                value={skillSearch} />
                <select
                name="skillSelect"
                value={skillSelected}
                onChange={e=>setSkillSelected(e.target.value)}>
                {skillOptions}
                </select><button onClick={handleNewSkill}>add</button>
            </label>
            <br></br>
            <button type="submit">submit</button>

            
        </form>
    </div>

    </>
        
        
    )
}

export default NewProjectForm;