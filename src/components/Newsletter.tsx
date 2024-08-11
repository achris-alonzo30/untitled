"use client";

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const Newsletter = () => {
    return (
        <form className="flex items-center">
            <Input 
                required
                type="email"
                name="email"
                className="max-w-lg flex-1 rounded-none rounded-l-lg h-9"
                placeholder="Enter your email"
            /> 
            <Button
                size="sm"
                type="submit"
                className="rounded-none rounded-r-lg"
            >
                Submit
            </Button>   
        </form>
    )
}