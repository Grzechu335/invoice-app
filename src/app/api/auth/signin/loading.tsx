'use client'
import React from 'react'
import { Oval } from 'react-loader-spinner'

const loading = () => {
    return (
        <div className="fixed inset-0 grid place-content-center">
            <Oval
                height={80}
                width={80}
                color="#9277ff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#7c5dfa"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
}

export default loading
