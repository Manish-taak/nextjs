import React from 'react'
import NotFoundpro from './not-found'
import { Metadata } from 'next'
type Props = {
    params: {
        productid: string
    }
}
export const metadata = ({ params }: Props): Metadata => {
    const productId = params ? parseInt(params.productid) : NaN; // Parse productid to integer or NaN if undefined

    return {
        title: isNaN(productId) ? "Invalid Product" : `Product ${productId}`
    };
};
const Page = ({ params }: Props) => {
    if (!params || !params.productid || parseInt(params?.productid) > 12) {
        return <NotFoundpro />; // Render NotFoundpro component if params are invalid or productid > 12
    }
    return (
        <div>Product details page for {params?.productid}</div>
    )
}

export default Page