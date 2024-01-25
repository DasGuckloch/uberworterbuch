export interface IButtonProps {
    readonly disabled?: boolean;
    readonly onClick: () => void;
    readonly children: React.ReactNode;
}
