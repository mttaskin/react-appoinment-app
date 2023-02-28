import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {doctorData} from "../helper/data"
import { appointmentData } from "../helper/data"

const Home = () => {
const [doctors, setDoctors] = useState(doctorData)
const [appointments, setAppointments] = useState(appointmentData)
console.log(appointmentData)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">MTT HOSPITAL</h1>
      <Doctors 
      doctors={doctors} 
      setDoctors={setDoctors} 
      appointments={appointments}   
      setAppointments={setAppointments} />
      <AppointmentList 
      appointments={appointments}
      setAppointments={setAppointments}/>
    </main>
  )
}

export default Home
