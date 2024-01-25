import { IButtonProps } from './interfaces';

export const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
    return (
        <button
            className="bg-main-blue rounded-lg border-4 border-main-black p-3"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
