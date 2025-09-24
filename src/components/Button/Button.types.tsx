export interface ButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}
export interface ButtonViewProps extends ButtonContainerProps {
}