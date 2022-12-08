import React from "react";
export interface ToastProps {
    title: String;
    desc: String;
}
export function Toast({ title, desc }: ToastProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}