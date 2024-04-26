
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    { name: "register", href: "register" },
    { name: "login", href: "/login" },
    { name: "forget password", href: "/forgot-password" }
];

export default function MyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname(); // Use usePathname inside a functional component

    return (
        <>
            <div className="flex flex-col" >
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
            <h1>with-auth-layout</h1>
        </>
    );
}
