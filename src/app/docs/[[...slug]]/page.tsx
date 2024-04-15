import React from 'react'

const Docs = ({ params }: {
    params: {
        slug: string[]
    }
}) => {
    if (params.slug?.length === 2) {
        return (
            <>
                <h1>leanght 2 wala
                    <span className='text-[20px] bg-red-700' >{params.slug[0]}</span>
                    <span className='text-[20px] bg-blue-700' >{params.slug[1]}</span>
                </h1>
            </>
        )
    } else if (params.slug?.length === 1) {
        return (<>
            <h1>leanght 1 wala</h1>
        </>)
    }
    return (
        <div>Docs home page</div>
    )
}

export default Docs