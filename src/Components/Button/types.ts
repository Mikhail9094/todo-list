export interface PropsButton {
    addClass: string;
    onClick(e?: React.MouseEvent<HTMLElement>):void;
    disabled: boolean; 
}