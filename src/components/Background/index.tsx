import { HTMLAttributes, ReactNode } from "react"

interface IBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    variant?: string;
}

const Background = ({ children, variant = "", ...rest }: IBackgroundProps) => {
    return (
        <div className="bg-9FCCEB w-screen h-screen flex items-center justify-center p-3">            
                <div className="bg-BEE5FF h-full w-full absolute z-0 overflow-y-hidden overflow-x-hidden">
                    <div className="absolute w-full z-20 h-full">{children}</div>
                    <div className="bg-9FCCEB h-72 skew-y-17 translate-y-10"></div>
                    <div className="bg-7DB7E1 h-72 skew-y-17 translate-y-2"></div>
                    <div className="bg-498BBB h-72 skew-y-17 "></div>
                    <div className="bg-186A9F h-72 skew-y-17 translate-x-0"></div>         
            </div>
        </div>
    )
}

export default Background
