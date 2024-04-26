import Delivary from "./coponent/delivary";
import Orederd from "./coponent/orederd";
import Payment from "./coponent/payment";
import Signup from "./coponent/signup";

export default function checksecoundLayout({
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex gap-[100px] " >
                <div className="flex flex-col my-[50px]" >
                    <Orederd />
                    <Signup />
                    <Delivary />
                    <Payment />
                </div>
                <h1>order summary</h1>
            </div>
        </>
    );
}
