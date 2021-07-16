import React from 'react'
// import BasicInfo from './BasicInfo'
import EventInfo from './EventInfo'
// import MultiStep from 'react-multistep'


// const steps = [
//   { component: <BasicInfo /> },
//   { component: <Location /> },
//   { component: <Date /> }
// ]

// const prevStyle = {'border-width': '2px', 'border-radius': ''}
// const nextStyle = {'border-width': '2px'}

const EventCreate = ({ onAdd }) => {
  
  return (
    <div className = 'container-form'>
       <EventInfo onAdd = {onAdd}/>
    </div>
  )
}


export default EventCreate

