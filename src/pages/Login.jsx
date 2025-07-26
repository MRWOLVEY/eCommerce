import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = React.useState('Sign Up')
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" action="">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="text-3xl prata-regular">{currentState}</p>
          <hr className="w-8 border-none bg-gray-800 h-[1.5px]" />
        </div>
        {currentState === 'Sign Up' && <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" />}
        <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" />
        <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          {currentState == 'Login' && (
            <p className="cursor-pointer">
              Forget your password? <img className="w-3 inline" src="/src/assets/megaMind.png" />
            </p>
          )}
          {currentState === 'Sign Up' ? (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
              Already have an account?
            </p>
          ) : (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
              Create an account
            </p>
          )}
        </div>
        <button className="bg-black hover:opacity-85 text-white text-xs px-8 py-3 active:bg-gray-700 rounded-sm shadow-lg shadow-gray-500">
          {currentState == 'Login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default Login
