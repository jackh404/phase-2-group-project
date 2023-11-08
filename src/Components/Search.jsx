

function Search({inputHandler,input}){
     return(


        <div id= "searchBarDiv">
            <h3>project search</h3>
            <input value={input} onChange={(e)=>{inputHandler(e)}} type = "text" placeholder = "Search Projects..."></input>
            
        </div>
     )
}

export default Search;