import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return ( 
        <div 
        className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `, className // this allows us to reuse the Box component and pass in additional className stylings if we choose to do so
        )}
        >
            {children}
        </div>
    );

}

export default Box;