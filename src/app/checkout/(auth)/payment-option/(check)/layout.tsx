"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    { name: "credit-debitcard", href: "credit-debitcard" },
    { name: "netbanking", href: "/netbanking" },
    { name: "upi-address", href: "/upi-address" }
];

export default function checkoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname(); // Use usePathname inside a functional component
    return (
        <>
            <div className="flex gap-[20px]" >
                {navlinks.map((item, index) => {
                    const isactive = pathname.startsWith(item.href);
                    return (
                        <Link className={isactive ? "text-[50px] text-blue-800 border-b-[2px] border-red-700 p-5" : "text-green-700"} href={item.href} key={item.name} >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
            {children}
        </>
    );
}


// export default function paymentLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <>
//             <div className="flex gap-[100px]">
//                 {children}
//                 <h1>layout page payments options </h1>
//             </div>
//         </>
//     );
// }
