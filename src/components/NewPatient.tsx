import React, { useState } from "react"
import { Patient } from "../types"

type NewPatientProps = {
    addPatient: (patient: Patient) => void
}

export default function NewPatient({addPatient}: NewPatientProps) {
    const [inputLastName, setInputLastName] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputPatronymic, setInputPatronymic] = useState('')
    const [inputDiagnosis, setInputDiagnosis] = useState('')
    const [inputValue, setInputValue] = useState('')

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (!((inputLastName === '') && (inputName === '')
        && (inputPatronymic === '') && (inputDiagnosis === '')))
        return;
        addPatient({
            LastName: inputLastName,
            Name: inputName,
            Patronymic: inputPatronymic,
            Diagnosis: inputDiagnosis,           
        })
        setInputLastName('')
        setInputName('')
        setInputPatronymic('')
        setInputDiagnosis('')
    }
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input value={inputValue} onChange={inputHandler} type="text" />
            <input value={inputValue} onChange={inputHandler} type="text" />
            <input value={inputValue} onChange={inputHandler} type="text" />
            <input value={inputValue} onChange={inputHandler} type="text" />
            <button type="submit">Add patient</button>
        </form>
    )
}