import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewProjectForm(){
    //bring in context data
    const [user,setUser,creators,projects,skills] = useOutletContext()

    //form states
    const [skillSearch, setSkillSearch] = useState('')
    const [creatorSearch, setCreatorSearch] = useState('')
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        skills: [],
        image: "",
        creators: [user? user.id : null],
    })

    //get actual DOM element because state is slow af and onChange doesn't always work
    const skillSelect = document.getElementById('skillSelect')

    /* * * * * * * * * *
     * Event Handlers  *
     * * * * * * * * * */
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
        if(creators.find((cont) => cont.id === creatorSearch)){
            if(!formData.creators.find((cont) => cont === creatorSearch)){
                setFormData({...formData, creators: [...formData.creators, creatorSearch]})
                setCreatorSearch('')
            }
        }
        else{
            alert("Creator not found!")
        }
    }

    function handleNewSkill(e){
        e.preventDefault()
        if(!formData.skills.includes(skillSelect.value)){
            setFormData({...formData, skills: [...formData.skills, skillSelect.value]})
        }
    }

    function handleDelete(e){
        const key = e.target.parentNode.className
        const value = e.target.parentNode.id
        console.log(key, value)
        setFormData({...formData, [key]:formData[key].filter(str=> str!== value)})
    }

    /* * * * * * * * * *
     * form feedback   *
     * * * * * * * * * */
    let displayCreators = "Please sign in..."
    if(formData.creators[0]){
        const projCreators = creators.filter(cont => formData.creators.includes(cont.id))
        displayCreators = projCreators.map(creator => <div key ={creator.id} className="creators" ><h5 className="creators" id={creator.id}><span className="delete" onClick={handleDelete}>X</span>&emsp;{creator.name}</h5></div>)
    }
    
    const filteredSkills = skills.filter(skill => skill.includes(skillSearch.toLowerCase()))
    const skillOptions = filteredSkills.map(skill => <option key={skill} value={skill}>{skill}</option>)
    const displaySkills = formData.skills.map(skill => <div key={skill} id={skill} className="skills"><span className="delete" onClick={handleDelete}>X</span>&emsp;{skill}</div>)

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
                id="skillSelect">
                {skillOptions}
                </select><button onClick={handleNewSkill}>add</button>
            </label>
            {displaySkills}
            <br></br>
            <button type="submit">submit</button>

            
        </form>
    </div>

    </>
        
        
    )
}

export default NewProjectForm;