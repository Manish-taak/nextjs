import React from 'react'

const Page = ({ params }: {
    params: {
        productid: string
    }
}) => {
    return (
        <div>products details page dynamic router in next js  {params.productid} </div>
    )
}

export default Page


