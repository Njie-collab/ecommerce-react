import React,{useRef, useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Home = () => {
    const context=useContext(MyContext)
    const {form,setForm,error,setError,login,setLogin}=context
    const navi=useNavigate()
    const inputRef=useRef()
    const Email=process.env.REACT_APP_EMAIL
    const Address=process.env.REACT_APP_ADDRESS

    const handleSubmit=(e)=>{
        e.preventDefault()
        setForm({address:"",email:""})
        setError("")
        Email===form.email && Address ===form.address ?
        setLogin({success:true}) : setError({error:"check your errror"})
    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})

    }
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
      <div>
        <h3>Please Login</h3>
        <form action="">
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={inputRef}
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="address">Enter Your Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
          />
          <button onClick={ handleSubmit}>Submit</button>
        </form>
        {login.success ? (
          navi("../products", { replace: true })
        ) : (
          <p className="error">{error.error}</p>
        )}
      </div>
    );
}

export default Home
