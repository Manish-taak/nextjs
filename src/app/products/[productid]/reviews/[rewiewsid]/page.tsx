import { notFound } from 'next/navigation'
import React from 'react'

const Page = ({ params }: {
    params: {
        productid: string
        rewiewsid: string
    }
}) => {

    if (parseInt(params.rewiewsid) > 1000) {
        notFound()
    }

    return (
        <div>reviews page dynamic nested  routing
            <h1> Products id {
                params.productid
            }
                Reviews id{
                    params.rewiewsid
                }
            </h1>
        </div>
    )
}

export default Page
