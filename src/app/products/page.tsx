import { useChatbotContext } from '@/context/ChatBoxContent'
import Link from 'next/link'
import React from 'react'
import { createContext } from 'vm'





const Page = () => {

    const { value } = createContext(useChatbotContext)
    console.log("useChatbotContext data")

    return (
        <>
            <div>
                <Link href="/products/1">products is 1</Link>
                <Link href="/products/2">products is 2</Link>
                <Link href="/products/3" replace >products is 3</Link>
                {/* <Link href="/products/4" resource='' >products is 4</Link> */}
                {/* <Link href="/products/5" results={}>products is 5</Link> */}
            </div>
            <div>
                {/* <Link href="/about" as="/about-us" passHref prefetch replace scroll={{ x: 0, y: 0 }}>
                    <a>About Us</a>
                </Link> */}
                <br />
                {/* <Link href="/posts/[id]" as="/posts/1" passHref prefetch replace scroll={true}>
                    <a>Post 1</a>
                </Link> */}
            </div>
        </>
    )
}

export default Page