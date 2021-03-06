import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
//import {UserContext} from '../../App'
import M from 'materialize-css'

const Signup  = ()=>{
    //const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")

    const [phoneNumber,setPhoneNumber] = useState("")
    const [country,setCountry] = useState("")
    const [state,setstate] = useState("")
    const [city,setCity] = useState("")
    const [college,setCollege] = useState("")
    const [skill,setSkill] = useState("")

    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            return (M.toast({html: "Invalid Email",classes:"#c62828 red darken-3"}))
        }
        fetch("/Signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password,
                phoneNumber,
                country,
                state,
                city,
                college,
                skill
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log("name   ", city)
           if(data.error){
              M.toast({html: data.error, classes:"#c62828 red darken-3"})
           }
           else{
            //    localStorage.setItem("jwt",data.token)
            //    localStorage.setItem("user",JSON.stringify(data.user))
            //    dispatch({type:"USER",payload:data.user})
               M.toast({html:"Signined Sucessfully", classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            
            <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />

            <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            />

        <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
            />

        <input
            type="text"
            placeholder="state"
            value={state}
            onChange={(e)=>setstate(e.target.value)}
            />

        <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
        />

        <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e)=>setCollege(e.target.value)}
        />

        <input
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e)=>setSkill(e.target.value)}
        />

            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                Signup
            </button>
            {/* <h5>
                <Link to="/Signup">Dont have an account ?</Link>
            </h5> */}
            {/* <h6>
                <Link to="/reset">Forgot password ?</Link>
            </h6> */}
    
        </div>
      </div>
   )
}


export default Signup;