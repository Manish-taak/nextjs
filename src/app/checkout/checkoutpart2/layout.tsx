import Order from "./component/order";

export default function checksecoundLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex gap-[100px] " >
                <Order />
                {children}
                <h1>order summary</h1>
            </div>
        </>
    );
}
