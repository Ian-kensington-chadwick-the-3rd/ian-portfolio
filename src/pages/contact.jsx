
import { isEmail } from "../utils/helper"
import { useState } from 'react'




export default function Contact() {

    const [formInformation, setformInformation ] = useState({
        name: "",
        email: "",
        message: ""
    })

function handlesubmit(event){
   event.preventDefault();
   console.log("helllo")
   if(formInformation.name && formInformation.email && formInformation.message){
    alert("message has been sent ")
   }else{
    alert("you have empty fields.")
   }
}
function handleChange(event){
console.log(event.target.value)
console.log(event.target.name)
if(event.target.name === "email"){
    if(!isEmail(event.target.value)){
        alert("please put a real e-mail")
        
    }
} 

setformInformation({...formInformation , [event.target.name]: event.target.value})

}
console.log(formInformation)

    return (
        <>
            <div>
                <form className="mt-5"onSubmit={handlesubmit}>
                    <div className="form-group col-md-6 text-center mx-auto margintop">
                        <label htmlFor="exampleFormControlInput1">Name:</label>
                        <input defaultValue={formInformation.name} name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" onBlur={handleChange} />
                    </div>
                    <div className="form-group col-md-6  text-center mx-auto">
                        <label htmlFor="exampleFormControlInput1">Email address:</label>
                        <input name='email' defaultValue={formInformation.email} onBlur={handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> 
                    </div>
                    <div className="form-group col-md-6 text-center mx-auto">
                        <label htmlFor="exampleFormControlTextarea1">Message:</label>
                        <textarea name="message" defaultValue={formInformation.message} onBlur={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button className="margintop" id="btn" >Submit</button>
                </div>
                </form>
            </div>
            <div className="col-6 mx-auto centercontactform margintop marginbottom borderRadius">
                    <h3 className="col-6 mx-auto">contact me</h3>
                <ul>
                    <li>
                        Iansills04@gmail.com
                    </li>
                    <li>
                        <a href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.4001907.233677599.1701736095-1820877489.1701736095'>indeed</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ian.sills.988">facebook</a>
                    </li>
                </ul>
            </div>
        </>
    )
}





