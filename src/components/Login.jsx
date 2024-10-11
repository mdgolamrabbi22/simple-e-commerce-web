import React from 'react'

export default function Login() {
  return (
    <div className="mt-12">
    <input
    onChange={(e)=>handleChangeInput(e)}
      type="text"
      placeholder="Type here"
      className="input input-bordered input-secondary w-full max-w-xs" />
  </div>
  )
}
