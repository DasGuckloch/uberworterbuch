import { IButtonProps } from './interfaces';

export const Button: React.FC<IButtonProps> = ({
    disabled = false,
    onClick,
    children,
}) => {
    return (
        <button
            disabled={disabled}
            className="flex justify-center bg-main-blue rounded-lg border-4 border-main-black p-3"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
