import './scss/scss--style'
import iconArrow from'./images/icon-arrow.svg'
import logo from'./images/logo.svg'
import errorIcon from './images/icon-error.svg'
import { useState } from 'react'

function App() {


  const [isActive, setIsActive] = useState(false)
  const [email, setEmail] = useState('')

  const handleChange = (e) =>{
    setEmail(e.target.value)
  }

  const submitEmail = (e) => {
    e.preventDefault()

    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if(email.match(mailFormat)){
      console.log('valid email adress')
      setIsActive(false)
      return true
    }
    else{
      console.log('invalid email adress')
      setIsActive(true)
      return false
    }
    
  }

  return (
    <div className="container grid">
    <div className="logo ">
      <img src={logo} alt=""/>
    </div>

      <div className="hero "></div>

      <div className="description-form">
        <h1><span>We're</span> coming soon</h1>
        
        <p>Hello fellow shoppers! We're currently building our new fashion store.Add your email below to stay up-to-date with announcements and our launch deals.</p>
      
      
        <div className={isActive ? "email-form-error" : "email-form"}>
          <input className="email-form-input" id="email" type="email" placeholder="Email Address" value={email} onChange={handleChange}/>
          {isActive ? (<div className='error-icon'><img src={errorIcon} alt="error-icon"/></div>): null}
          <button onClick={submitEmail} className="email-form-button">
            <img src={iconArrow} alt="icon-arrow"/>
          </button>
        </div>
          {isActive ? (<div className="error-message">Please provide a valid email</div>) :null}
      </div>
  </div>
  );
}

export default App;
