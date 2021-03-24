import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Patient } from './types';
import NewPatient from './components/NewPatient';
import PatientsList from './components/PatientsList';

const initPatients: Array<Patient> = []

function App() {
    const [inputPatients, setinputPatients] = useState<Patient[]>(initPatients)
    const addPatient = (patient: Patient) => setinputPatients([...inputPatients, patient])
    return (
      <div>
        <NewPatient addPatient={addPatient} />
        <PatientsList inputPatients={inputPatients} />
      </div>
    );
  }
  
  export default App;
  

