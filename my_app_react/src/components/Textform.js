import React, { useState } from 'react'
// import useState from 'react'
export default function Textform(props) {
  const [text, settext] = useState()
  const writechange = (event) => {
    settext(event.target.value)
  }
  const tooglechange = () => {
    let newText = text.toUpperCase()
    props.showAlerts('uppercase moved,', 'success')

    settext(newText)
  }
  return (
    <div
      className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}
    >
      <div className={`form-group bg-Dark/* ${props.mode} `}>
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          // color="black"
          value={text}
          onChange={writechange}
          className="form-control text-primary "
          style={{ backgroundColor: 'GrayText' }}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button
          onClick={tooglechange}
          type="button"
          className="btn btn-primary my-3 "
        >
          {props.mode}
        </button>
      </div>
    </div>
  )
}
