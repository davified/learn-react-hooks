import React, { useState } from 'react'

const FormExample = () => {
  const [name, setName] = useState('bob')
  const [surname, setSurname] = useState('dylan')
  const [email, setEmail] = useState('bob@dylan.com')

  return (
    <div>
      <h2>Example #2: form</h2>
      <div>name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
      <div>surname: <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} /></div>
      <div>email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <button onClick={() => submitForm(name, surname, email)}>submit</button>
    </div>
  )
}

const submitForm = (name, surname, email) => {
  alert(`executing some side effect. name: ${name}, surname: ${surname}, email: ${email}`)
}

export default FormExample;