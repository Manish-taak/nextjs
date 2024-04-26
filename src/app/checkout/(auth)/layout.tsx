
export default function checkkjnkjLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex gap-[100px] " >
                {children}
                <h1>order summary</h1>
            </div>
        </>
    );
}
