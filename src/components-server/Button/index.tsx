import { IButtonProps } from './interfaces';

export const Button: React.FC<IButtonProps> = ({
    disabled = false,
    onClick,
    children,
}) => {
    return (
        <button
            disabled={disabled}
            className="flex justify-center font-thunder-extra-bold text-5xl bg-main-white border-4 border-main-white rounded-lg p-10"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
