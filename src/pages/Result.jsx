import React, { useState, useEffect } from 'react'


const Result = () => {

  const getFullName = sessionStorage.getItem("sessionFname")
  const getAddress = sessionStorage.getItem("sessionAddress")
  const getPincode = sessionStorage.getItem("sessionPincode")
  const getPhone = sessionStorage.getItem("sessionPhone")
  const getEmail = sessionStorage.getItem("sessionEmail")
  const getGender = sessionStorage.getItem("sessionGender")
  const getDob = sessionStorage.getItem("sessionDob")
  const getOption1 = sessionStorage.getItem("sessionOpt1")
  const getOption2 = sessionStorage.getItem("sessionOpt2")
  const getOption3 = sessionStorage.getItem("sessionOpt3")
  const getOption4 = sessionStorage.getItem("sessionOpt4")

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Get the current date
    const date = new Date();
    // Format the date as desired, here we use 'toLocaleDateString'
    const formattedDate = date.toLocaleDateString();

    // Set the formatted date in state
    setCurrentDate(formattedDate);
  }, []);


  return (

    <div>
      <div className='bg-secondary pt-5 w-auto'>
        <h1 className='text-center fw-bolder'>Submitted Form</h1>
        <p className='fs-5 fw-bold text-end'>Date:  <span>{currentDate}</span></p>
        <div className=' text-light pt-5'>
          <table className='table shadow container-fluid'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Date Of Birth</th>
                <th>Selected Courses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{getFullName}</td>
                <td>{getAddress} {getPincode}</td>
                <td>{getPhone}</td>
                <td>{getEmail}</td>
                <td>{getGender}</td>
                <td>{getDob}</td>
                <td><li><span className='fw-bold'>Option1:</span> {getOption1}</li>
                  <li><span className='fw-bold'>Option2:</span>{getOption2}</li>
                  <li><span className='fw-bold'>Option3:</span> {getOption3}</li>
                  <li><span className='fw-bold'>Option4:</span> {getOption4}</li>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Result