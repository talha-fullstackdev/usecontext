import React from 'react'

const Formik = () => {
    const names = "talha"
  return (
    <div>
        <input  type="text"  placeholder='enter name'/> <br />  <br />
        <input type="email"  placeholder='enter email'/> <br /> <br />
        <input type="text"  placeholder='enter password'/> <br /> <br />
        <input type="text"  placeholder='confirm password'/> <br />  <br />
        <button>register</button>
    </div>
  )
}

export default Formik