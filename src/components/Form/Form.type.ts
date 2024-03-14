export interface OpenWindowStyle {
    openWindow: boolean
}

export interface FormProps {
    exit: () => void
    openWindow: boolean
}

export interface FormikErrorType {
    name?: string
    phone?: string
}
