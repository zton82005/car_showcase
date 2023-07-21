import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface searchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}

export interface customFilterProps {
    title: string
}

export interface CarProps {
    city_mpg: 23
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}