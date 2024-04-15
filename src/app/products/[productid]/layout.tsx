
export default function mylayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <h1>products id folder</h1>
        </>

    );
}
