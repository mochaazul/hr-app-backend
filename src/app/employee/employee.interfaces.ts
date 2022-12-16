export interface EmployeeUpdateRequestBody{
  noInduk?: string
  name?: string
  birth_date?: Date
  phone_number?: string
  employement_date?: Date
}

export interface EmployeeCreateRequestBody{
  noInduk: string
  name: string
  birth_date: Date
  phone_number: string
  employement_date: Date
}

export interface EmployeeAddLeaveRequestBody{
  employee_id: string
  leave_type_id: string
  start_date: Date
  duration: number
}
