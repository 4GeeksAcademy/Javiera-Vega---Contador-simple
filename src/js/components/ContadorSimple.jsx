import React, { useEffect, useState } from "react"

export const ContadorSimple = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [counter])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex counter">
                            <div className="icons"><i className="fa-regular fa-clock"></i></div>
                            <div>{Math.floor((counter / 100000) % 10)}</div>
                            <div>{Math.floor((counter / 10000) % 10)}</div>
                            <div>{Math.floor((counter / 1000) % 10)}</div>
                            <div>{Math.floor((counter / 100) % 10)}</div>
                            <div>{Math.floor((counter / 10) % 10)}</div>
                            <div>{(counter / 1) % 10}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}