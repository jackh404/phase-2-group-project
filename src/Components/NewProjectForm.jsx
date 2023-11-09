

function NewProjectForm({skills}){

    // function skillsList(){
    //         skills.map(skill=> {
    //             return <option>{skills.index}</option>
    //         })
    // }

    return(

    <>
    <div>
        <form>
            <label>
                ProjectName:  
                <input placeholder=" Project Name here..."></input>
            </label>
            <br></br>
            <label>
                Contributers:
                <input placeholder="People working on it..."></input>
            </label>
            <br></br>
            <label>
                Description:
                <input placeholder="Description of project..."></input>
            </label>
            <br></br>
            <label>
                Project image:
                <input placeholder="image Url..."></input>
            </label>
            <br></br>
            <label>
                Skills-Required
                <select>
                    <option>{skills[0]}</option>
                    <option>{skills[1]}</option>
                    <option>{skills[2]}</option>
                    <option>{skills[3]}</option>
                    <option>{skills[4]}</option>
                    <option>{skills[5]}</option>
                    <option>{skills[6]}</option>
                    <option>{skills[7]}</option>
                    <option>{skills[8]}</option>
                    <option>{skills[9]}</option>
                    <option>{skills[10]}</option>
                    <option>{skills[11]}</option>
                    <option>{skills[12]}</option>
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