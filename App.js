import { useState } from "react"

//username comp

function UserName() {
  return (
    <>
    <label ><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />
    </>
  )
}

//button comp

function Button({onClick}) {
  return (
    
    <button type="submit" onClick={onClick}>Login</button>
  )
}

//password comp

function PassWord({onChange}) {
  return (
    <>
    <label ><b>Password</b></label>
    <input onChange={onChange}type="password" placeholder="Enter Password" name="psw" required />
    
    </>
  )
}

//logout comp
function LogOut({onClick}) {
  return (
    <button onClick={onClick}>Log out?</button>
  )
}


 
export default function LogIn() {
  //useState to retrieve pass
  const [pass, setPass] = useState("");

  //useState to manage trigger second render
  const [Submit, setSubmit] = useState(false);
  //useState to manage logout button after second re render
  const [loggedIn, isLoggedIn] = useState(false);

//function sets use state values to false which triggers render and shows log in page again after log out button is clicked
  function LoggedOut() {
    
    setSubmit(false);
    isLoggedIn(false);
  }
  
  //function verifies that password is "123 or else it does not allow log in
  function Sub() {
    if (pass == 123) {

      setSubmit(true);
      isLoggedIn(true);
    } else {
      setSubmit(false);
      isLoggedIn(false);

    }
      
    
  
  }
//variable that holds intial markup
let First =  
<div >
<UserName />
<PassWord onChange={(e) =>
  setPass(e.target.value)} />
<Button  onClick={Sub} />
</div>;




//variable that holds second mark up, whcih is the login in page after succesfull log in
let Second = <p>You are logged in!</p>;

  return (
    <>
    {Submit ? Second : First }
    {loggedIn && <LogOut onClick={LoggedOut} /> }

    </>

   
  )
  

}