'use client'

import { useState } from "react"

export default function Counter() {
    const [x, setX] = useState(0);
    const up = () => {
        setX(x + 1);
    }
    const down = () => {
        if (x > 0) {
            setX(x - 1);
        }
    }
    return (
        <>
            <div>Counter Page</div>
            <div>x = {x}</div>
            <div className="flex gap-2">
                <button className="btn"
                    onClick={up}>Up</button>
                <button className="btn"
                    onClick={down}>Down</button>
            </div>
        </>
    )
}