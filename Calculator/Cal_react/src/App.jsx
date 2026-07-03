import React from 'react'


const set = (a) => {
  const input = document.getElementById('display')
  input.value += a
}

const clear = () => {

  const input = document.getElementById('display')
  input.value = ''
}

const calculate = () => {
  const input = document.getElementById('display')
  try {
    input.value = eval(input.value)
  }
  catch (error) {
    input.value = 'Error'
  }
}



function Calculator() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Calculator</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter expression"
            id="display"
          />
          <div className="grid grid-cols-4 gap-2">
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('7')}>7</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('8')}>8</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('9')}>9</button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => set('/')}>/</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('4')}>4</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('5')}>5</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('6')}>6</button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => set('*')}>*</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('1')}>1</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('2')}>2</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('3')}>3</button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => set('-')}>-</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('0')}>0</button>
            <button className="bg-gray-200 p-2 rounded" onClick={() => set('.')}>.</button>
            <button className="bg-green-500 text-white p-2 rounded col-span-2" onClick={calculate}>
              =
            </button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => set('+')}>+</button>
            <button className="bg-red-500 text-white p-2 col-span-3  rounded" onClick={clear}>C</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator