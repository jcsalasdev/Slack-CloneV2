import { useState } from "react";



export default function Signup() {
    



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  
 



  
  

  

    const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }



  function handlePwChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirm(e) {
    setConfirmPass(e.target.value);
  }

    

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password && !confirmpass) {
      return;
        }

        try {
      const data = {
        email,
        password,
        password_confirmation: confirmpass
      
        
        
        
      };

      const endPoint = "http://206.189.91.54//api/v1/auth/";
      const options = {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      };

      setError(null);
      setLoading(true);
      const response = await fetch(endPoint, options);
      const jsonData = await response.json();

      if (response.status === 200) {
        alert("sign up success!");

          
        setLoading(false);


      } 

      
   
      else {
        throw {
         
          custom: jsonData?.errors?.full_messages[0] || "failed to signup"
             };
                }
        } catch (err) {

         
      console.log(err);
      setError(err?.custom || "something went wrong");
      setLoading(false);


    }
   
  }




  return (

    <div>
        

        <div className="ui form center">
            
        <form className="   "  onSubmit={handleSubmit} style={{marginTop: "200px"}}>
      <h2>SIGNUP</h2> <br/> 

      <p className="signup__status">{isLoading ? "..loading" : ""}</p>
      <p className="signup__error">{error || ""}</p>
      
      <div className="">
                <label>Email</label><br/>
               
                <input
                type="email"
                onChange={handleEmailChange}
                value={email}
                placeholder="email"
                style={{width: "370px"}} required/>
                </div> <br/>
                
                <label>Password</label> <br/>
                <input className="signup__input"    
        
                type="password"
                onChange={handlePwChange}
                value={password}
                placeholder="password"
                style={{width: "370px"}} required/>
                <br/> <br/>  

                <label> Confirm Password</label> <br/>
                <input className="signup__input"    
        
                type="password"
                onChange={handleConfirm}
                value={confirmpass}
                placeholder="password"
                style={{width: "370px"}} required/>
                <br/> <br/>  


              
                <br/> <br/>  
            <button className="ui big button purple" type="submit" >
         
            SUBMIT
                </button>
                </form>
        </div>
    
    </div>
  );
}