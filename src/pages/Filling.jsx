import React, { useState } from 'react'
import myStyle from "./mainStyle.module.css"
import { TextField, FormControlLabel, RadioGroup, Radio, FormControl, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Filling = () => {
  const navigate = useNavigate()

  // state 
  const [fullName, setFullName] = useState(0)
  const [address, setAddress] = useState(0)
  const [pincode, setPincode] = useState(0)
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState(0)
  const [gender, setGender] = useState(0)
  const [dob, setDob] = useState(0)
  const [opt1, setOpt1] = useState(null)
  const [opt2, setOpt2] = useState(null)
  const [opt3, setOpt3] = useState(null)
  const [opt4, setOpt4] = useState(null)



  // const[motherName,setMotherName]=useState(0)



  const [isFullNameInvalid, setIsFullNameInvalid] = useState(false)
  const [isAddressInvalid, setIsAddressInvalid] = useState(false)
  const [isPincodeInvalid, setIsPincodeInvalid] = useState(false)
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)


  // validation
  const userInputValidation = (inputTag) => {
    const { name, value } = inputTag
    console.log(name, value);


    if (name == "fullName") {
      setFullName(value)
      !!value.match(/^[A-Za-zÀ-ÿ'.-]+(?: [A-Za-zÀ-ÿ'.-]+)*$/) ? setIsFullNameInvalid(false) : setIsFullNameInvalid(true)

    } else if (name == "address") {
      setAddress(value)
      !!value.match(/^[^!@#$%^&*+}{><?/";}\]\[$]+$/) ? setIsAddressInvalid(false) : setIsAddressInvalid(true)

    } else if (name == "pincode") {
      setPincode(value)
      !!value.match(/^\d{6}$/) ? setIsPincodeInvalid(false) : setIsPincodeInvalid(true)

    } else if (name == "phone") {
      setPhone(value)
      !!value.match(/^[6789]\d{9}$/) ? setIsPhoneInvalid(false) : setIsPhoneInvalid(true)

    } else if (name == "email") {
      setEmail(value)
      !!value.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
      // gender
    } else if (name == "female") {
      setGender(value)

    } else if (name == "male") {
      setGender(value)
      // dob
    } else if (name == "DOB") {
      setDob(value)

      // course select
    } else if (name == "option1") {
      setOpt1(value)
    } else if (name == "option2") {
      setOpt2(value)
    } else if (name == "option3") {
      setOpt3(value)
    } else if (name == "option4") {
      setOpt4(value)
    }
  }

  // submit button 
  const handleSubmit = () => {
    if (fullName && address && pincode && phone && email && dob && gender && opt1 ) {
      console.log(fullName, address, pincode, phone, email, dob, gender, opt1, opt2, opt3, opt4);
      sessionStorage.setItem("sessionFname", fullName)
      sessionStorage.setItem("sessionAddress", address)
      sessionStorage.setItem("sessionPincode", pincode)
      sessionStorage.setItem("sessionPhone", phone)
      sessionStorage.setItem("sessionEmail", email)
      sessionStorage.setItem("sessionGender", gender)
      sessionStorage.setItem("sessionDob", dob)
      sessionStorage.setItem("sessionOpt1", opt1)
      sessionStorage.setItem("sessionOpt2", opt2)
      sessionStorage.setItem("sessionOpt3", opt3)
      sessionStorage.setItem("sessionOpt4", opt4)
      alert("Submitted Form Successfully!!!")
      navigate("/result")
    } else {
      alert("please fill")
    }
  }

  const handleCancel = () => {
    setFullName(0)
    setAddress(0)
    setPincode(0)
    setPhone(0)
    setEmail(0)
    setGender(0)
    setDob(0)
    setOpt1(0)
    setOpt2(0)
    setOpt3(0)
    setOpt4(0)
    setIsFullNameInvalid(false)
    setIsAddressInvalid(false)
    setIsPincodeInvalid(false)
    setIsPhoneInvalid(false)
    setIsEmailInvalid(false)
  }



  return (
    <div style={{ width: "100%" }} className=''>
      {/* heading */}
      <div className='pt-5 pb-5 bg-secondary'>
        <h1 className='text-center fs-1 fw-bolder text-light '>REGESTRATION FORM</h1>
      </div>
      <hr className='container' />
      {/* personal information  */}
      <div className='container mt-2'>
        {/* PI Details  */}
        <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center w-100'>
          <div className='mt-2 w-100'>
            <TextField value={fullName || ""} name='fullName' onChange={e => userInputValidation(e.target)} className='w-100' id="outlined-fname" label="Full Name" variant="standard" />
            {
              isFullNameInvalid && <p className='fw-bold text-danger '>*Inavlid Name!!</p>
            }

            <TextField value={address || ""} name='address' onChange={e => userInputValidation(e.target)} className='w-100 mt-3' id="standard-multiline-address" label="Address" multiline rows={4} variant="standard" />
            {
              isAddressInvalid && <p className='fw-bold text-danger '>*Inavlid Address!!</p>
            }

            <TextField value={pincode || ""} name='pincode' onChange={e => userInputValidation(e.target)} className='w-100 mt-3' id="outlined-pincode" label="PinCode" variant="standard" />
            {
              isPincodeInvalid && <p className='fw-bold text-danger '>*Inavlid Pincode!!</p>
            }

            <TextField value={phone || ""} name='phone' onChange={e => userInputValidation(e.target)} className='w-100 mt-3' id="outlined-phone" label="Phone" variant="standard" />
            {
              isPhoneInvalid && <p className='fw-bold text-danger '>*Inavlid PhoneNumber!!</p>
            }

            <TextField value={email || ""} name='email' onChange={e => userInputValidation(e.target)} className='w-100 mt-3' id="outlined-email" label="Email" variant="standard" />
            {
              isEmailInvalid && <p className='fw-bold text-danger '>*Inavlid Email!!</p>
            }
          </div>

          <div className='container w-100 d-none d-md-block'>
            <div className={myStyle.verticalLine}></div>
          </div>

          {/* gender */}
          <div className='mt-5 w-100'>
            <h5 className='text-dark fw-bold fs-5'>GENDER :</h5>
            <FormControl className='ms-4'>
              <RadioGroup value={gender || ""} row aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                <FormControlLabel onChange={e => userInputValidation(e.target)} name='female' value="Female" control={<Radio />} label="Female" />
                <FormControlLabel onChange={e => userInputValidation(e.target)} name='male' value="Male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
            <br />
            {/* DOB  */}
            <h5 className='text-dark fw-bold fs-5 mt-5'>DATE OF BIRTH : </h5>
            <input value={dob || ""} onChange={e => userInputValidation(e.target)} min="1990-01-01" max="2009-12-31" required name='DOB' className='ms-4 border border-dark rounded p-2 mt-2' type="date" />
          </div>
        </div>
      </div>

      {/* select course  */}
      <div className='container mt-2 pt-5 pb-5'>
        <h1 className='text-dark fs-3 fw-bold '>SELECT COURSE</h1>
        <div className='w-100 my-5 container d-flex justify-content-evenly flex-wrap'>

          <div>
            <select value={opt1 || ""} onChange={e => userInputValidation(e.target)} name="option1" id="">
              <option selected disabled hidden value="">Option-1</option>
              <option value="BioMaths">BioMaths</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
          </div>

          <div>
            <select value={opt2 || ""} onChange={e => userInputValidation(e.target)} name="option2" id="">
              <option selected disabled hidden value="">Option-2</option>
              <option value="BioMaths">BioMaths</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
          </div>

          <div>
            <select value={opt3 || ""} onChange={e => userInputValidation(e.target)} name="option3" id="">
              <option selected disabled hidden value="">Option-3</option>
              <option value="BioMaths">BioMaths</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
          </div>

          <div>
            <select value={opt4 || ""} onChange={e => userInputValidation(e.target)} name="option4" id="">
              <option selected disabled hidden value="">Option-4</option>
              <option value="BioMaths">BioMaths</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
          </div>

        </div>
      </div>
      <hr className='container text-warning' />

      {/* SUBMITS */}
      <div className='mt-4 d-flex justify-content-center container mb-5'>
        <Button disabled={isFullNameInvalid || isAddressInvalid || isPincodeInvalid || isPhoneInvalid || isEmailInvalid} onClick={handleSubmit} className='bg-secondary me-3 fw-bold' variant="contained">SUBMIT</Button>
        <Button onClick={handleCancel} className='bg-dark fw-bold' variant="contained">CANCEL</Button>
      </div>
    </div>
  )
}

export default Filling