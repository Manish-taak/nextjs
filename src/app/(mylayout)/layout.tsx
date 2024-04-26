export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <h1>header</h1>
            {children}
            <h1>footer</h1>
        </>
    );
}
