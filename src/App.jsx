import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, details});

    setTask(copyTask);
    console.log(copyTask)

    setTitle('');
    setdetails('');
  }

  const deleteNote = (idx) => {
      const copyTask = [...task];
      copyTask.splice(idx,1) 
      setTask(copyTask)
    }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex flex-col items-start lg:w-1/2 p-10 gap-4' >
          
          <h1 className='text-4xl font-bold'>Your notes</h1>

          <input 
            type="text" placeholder="Enter Notes Heading"
            className='px-5 py-2 w-full border-2 font-medium outline-none rounded'
            value={title}
            onChange = {(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea 
            type="text" placeholder="Write Details" 
            className='px-5 py-2 h-30 w-full flex items-start flex-row border-2 font-medium outline-none rounded'
            value={details}
            onChange = {(e) => {
              setdetails(e.target.value);
            }}
          />

          <button className='bg-white text-black active:bg-gray-200 px-5 py-2 w-full outline-none rounded'>Add Note</button>
    
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10' >
        <h1 className='text-4xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-[90%] mt-6 overflow-auto'>
          {task.map((el, idx) => {

            return <div key={idx} className='flex justify-between flex-col items-start relative h-60 w-47 rounded-xl bg-cover
            text-black pt-10.5 pb-4 px-5 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='text-lg leading-tight font-bold ' >{el.title}</h3>
                <p className='mt-2 text-sm leading-tight font-medium text-gray-700 ' >{el.details}</p>
              </div>
              <button onClick={deleteNote} className='bg-red-500 text-white cursor-pointer active:bg-red font-bold text-xs rounded-xl px-4 py-1 ml-18 ' >Delete</button>
            </div>
          })}
        </div>
      </div>
    
    </div>
  )
}

export default App