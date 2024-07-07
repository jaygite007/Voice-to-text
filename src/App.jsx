import '@babel/polyfill'
import { useState } from 'react'
import './App.css'
import SpeechRecognition ,{useSpeechRecognition} from 'react-speech-recognition'   

function App() {

  const StartListenning = () => SpeechRecognition.startListening({ continuous: true })

  const {transcript,browserSupportsSpeechRecognition } = useSpeechRecognition({})

    if(!browserSupportsSpeechRecognition){
      return null;
    }


  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter </h2>
        <br />
      

        <div className="main-contain">
          <div>
            {transcript}
          </div>


        <div className="btn-style">
          <button className='button'>Copy</button>
          <button  onClick={StartListenning} className='button'>Start Listening </button>
          <button onClick={() => SpeechRecognition.stopListening()}  className='button'>Stop Listening </button>
        </div>
        
        </div>

      </div>
    </>
  )
}

export default App
