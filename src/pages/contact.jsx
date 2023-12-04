export default function Contact() {
    return(
        <>
        <div>
            <form className="mt-5">
                <div className="form-group col-md-6 text-center mx-auto">
                    <label htmlFor="exampleFormControlInput1">Name:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"></input>
                </div>
                <div className="form-group col-md-6  text-center mx-auto">
                    <label htmlFor="exampleFormControlInput1">Email address:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="form-group col-md-6 text-center mx-auto">
                    <label htmlFor="exampleFormControlTextarea1">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>    
        </>
    )
}   





{/* <div>
            <h1>contact Page</h1>
        </div>
        <div>
            <form>
                <h3>Name:</h3>
                <input></input>
                
            </form>
            <form>
                <h3>Email Adress:</h3>
                <input></input>
            </form>
            <form>
                <h3>Message:</h3>
                <input></input>
            </form>
        </div> */}
        