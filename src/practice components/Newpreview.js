import React, {useState} from 'react'
import Classcomponents from './Classcomponents'
import Functional from './Functional'
import "./Styles.css"


const Newpreview = () => {
  
    const [name1, setname] = useState(false)
    const [name2, setname2] = useState(false)
  return(
      <><div className='class'>
      <h1>Styling Using Functional and Class Components</h1>
      <button className='but1' onClick={() => setname(true)}><b>Use to See Functional Component</b></button>
      <button className='but2' onClick={() => setname2(true)}><b>Use to See Component Component</b></button>
    </div>
    {name1 && <Functional/>}
     {name2 && <Classcomponents/>}
  
  
  
  </>)
}

export default Newpreview;