'use client'
import { useState } from "react"


export default function Form(){
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [nameError,setNameError]= useState(false)
    const [lastNameError,setLastNameError]= useState(false)
    const [emailError,setEmailError]= useState(false)
    const [passwordError,setPasswordError]= useState(false)

    const changeNameHandler = (e : any) => {
        setName(e.target.value)
    }
    const changeLastNameHandler = (e : any) => {
        setLastName(e.target.value)
    }
    const changeEmailHandler = (e : any) => {
        setEmail(e.target.value)
    }
    const changePasswordHandler = (e : any) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e : any) =>{
        e.preventDefault();

        (name == "") ? setNameError(true) :  setNameError(false);

        (lastName == '') ? setLastNameError(true) : setLastNameError(false);

        (email == '') ? setEmailError(true) : setEmailError(false);

        (password == '') ? setPasswordError(true) : setPasswordError(false)

    }

    return (
        <form action="#" className='flex flex-col space-y-5'>
            <div className="text-right">
                <input onChange={changeNameHandler} type="text"  placeholder='Name' className={`w-full border border-gray-300 rounded py-4 px-8 ${nameError ? "error border-red border-2" : ""} `}/>
                {nameError && <span className="text-xs text-red">First Name cannot be empty</span>}
            </div>
            <div className="text-right">
                <input onChange={changeLastNameHandler} type="text"  placeholder='Last Name' className={`w-full border border-gray-300 rounded py-4 px-8 ${lastNameError ? "error border-red border-2" : ""} `}/>
                {lastNameError && <span className="text-xs text-red">Last Name cannot be empty</span>}
            </div>
            <div className="text-right">
                <input onChange={changeEmailHandler} type="email"  placeholder='Email Address' className={`w-full border border-gray-300 rounded py-4 px-8 ${emailError ? "error border-red border-2" : ""} `}/>
                {emailError && <span className="text-xs text-red">Looks like this is not an email</span>}
            </div>
            <div className="text-right">
                <input onChange={changePasswordHandler} type="password"  placeholder='Password' className={`w-full border border-gray-300 rounded py-4 px-8 ${passwordError ? "error border-red border-2" : ""} `}/>
                {passwordError && <span className="text-xs text-red">Password cannot be empty</span>}
            </div>
            <button onClick={submitHandler} className='bg-green text-white tracking-wide py-4 rounded-md font-medium border-b-2 border-b-lime-700 hover:opacity-70'>CLAIM YOUR FREE TRIAL</button>
            <p className='md:text-[12px] text-[13px]  text-center text-gray-300'>By clicking the button, you are agreeing to our <span className='text-red'>Terms and Services</span></p>
        </form>
    )
}