
import React,{useState} from 'react';
import Typed from 'react-typed';
import LoogInForm from './LoogInForm';

function App() {
  const adminUser={
    email:"adyapanda02@gmail.com",
    password:"admin123"
  }
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login=(details)=>{
    console.log(details);

    if(details.email===adminUser.email && details.password===adminUser.password){
      console.log("logged in");
      setUser({
        name:details.name,
        email:details.email,
        
      })
    }else{
      console.log("details do not match");
      setError("details do not match");
    }
  }
  const LogOut=()=>{
    setUser({name:"",email:""});
  }
  return (
    <div className="App">
      {(user.email !=="")?(
        <div className="welcome">
           <div><h2 className="hii">Welcome</h2></div> 

          <div className="animated-typing">
            <Typed
            strings={[
              "Hii,I am a web developer",
              "I love to create and design web",
              "It is a beautiful work",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop/>
          </div>

        

          {/* <span>{user.name}</span> */}
          <button className="logout" onClick={LogOut}>LogOut</button>
        </div>
      ):(

        <LoogInForm Login={Login} error={error}/>
      )}
     </div>
  );
}

export default App;
