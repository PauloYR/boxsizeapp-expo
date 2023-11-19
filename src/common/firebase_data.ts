export interface TruckData {
    name?: string
    heigth?: string
    width?: string
    depth?: string
    type?: string
    id?: string
    boxs?: any
}

export interface BoxData {
    name?: string
    heigth?: string
    width?: string
    depth?: string
    id?: string
}

export interface BoxQtyInTruckData {
    qty?: number
    id?: string
    key?: string
    name?: string
}