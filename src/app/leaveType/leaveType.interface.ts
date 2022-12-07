
export interface LeaveTypeCreatePayload {
  name: string
  code: string
  days: number
}

export interface LeaveTypeUpdatePayload {
  name?: string
  code?: string
  days?: number
}
