import { useState } from "react"

const NewToDoForm=(props)=>{

  const [userInput,setUserInput]=useState({
    title:""
  })
  const [formValid,setFormValid]=useState(false);

  const userInputChangeHandler=(e)=>{
    let {name,value}=e.target;
    if(value.trim()){
      setUserInput(prevInput=>{
        return{
          ...prevInput,
          [name]:value.replace(/^\s+/gm,'')
        }
      })
      setFormValid(true)
    }
  }

  const formSubmitHandler=(e)=>{
    e.preventDefault()
    props.onAdd(userInput.title)
    setUserInput({
      title:""
    })
    console.table(userInput)  
  }

  return(
    <div className="container mt-5 mb-5">
      <form onSubmit={formSubmitHandler}>
        <div className="row m-2">
          <div className="col">
            <div className="input-group">
              <input className="form-control" type='text' placeholder="Enter you todo here" name="title" id="newToDoTitle" value={userInput.title} onChange={userInputChangeHandler}/>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col">
            <button type="submit" className="btn btn-primary" disabled={!formValid}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewToDoForm