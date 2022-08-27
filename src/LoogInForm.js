import React, { useState } from "react";

function LoogInForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    Login(details);
  };
  // const onNameChangeHandler=(e)=>{
  //     setDetails(e.target.value);

  // }
  // const onEmailChangeHandler=(e)=>{
  //     setDetails(e.target.value);

  // }
  // const onPasswordChangeHandler=(e)=>{
  //     setDetails(e.target.value);

  // }

  return (
    <div>
        
        <form onSubmit={onSubmit}>
        <center>
        <div className="form-inner">
           <h2>LogIn</h2>
           {error !== "null" ? <div className="Error">{error}</div> : ""}
           <div className="form-group">
             <b><label>Username:</label></b>
             <input
               type="text"
               name="name"
               id="name"
               onChange={(e) => setDetails({ ...details, name: e.target.value })}
               value={details.name}
             />
           </div>
           <div className="form-group">
             <b><label>Email:</label></b>
             <input
               type="email"
               name="email"
               id="email"
               onChange={(e) =>
                 setDetails({ ...details, email: e.target.value })
               }
               value={details.email}
             />
           </div>
           <div className="form-group">
             <b><label>Password:</label></b>
             <input
               type="password"
               name="password"
               id="password"
               onChange={(e) =>
                 setDetails({ ...details, password: e.target.value })
               }
               value={details.password}
             />
           </div>
           <input type="submit" value="Login" className="login" />
         </div>
         </center>
       </form>
        
      
      
    </div>
  );
}

export default LoogInForm;
