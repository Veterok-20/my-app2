import { Patient, MapArrayToJSX } from "../types"

type PatientsListProps = {
    inputPatients: Patient[]
}
export default function PatientsList ({inputPatients}: PatientsListProps) {
    const mapCallback: MapArrayToJSX<Patient> = (patient, index) => {
        return <li key={index}>
            {patient.LastName}
            {patient.Name}
            {patient.Patronymic}
            {patient.Diagnosis}
        </li>
    }
    return (
        <ul>
            {inputPatients.map(mapCallback)}
        </ul>
    )
} 