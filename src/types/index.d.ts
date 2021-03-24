export type Patient = {
    LastName: string
    Name: string
    Patronymic: string
    Diagnosis: string    
    comment?: string
}

export type MapArrayToJSX<T> = {
    (el: T, index?: number): JSX.Element
} 