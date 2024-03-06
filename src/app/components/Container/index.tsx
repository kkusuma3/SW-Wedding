import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    isFullWidth?: boolean;
    additionalClasses?: string;
};
  
  const Container = ({ children, isFullWidth = true, additionalClasses = "" }: Props) => (
    <div className={isFullWidth ? `mx-auto w-10/12 py-10 md:py-20 ${additionalClasses}` : `${additionalClasses}`}>
        {children}
    </div>
  );
  
  export default Container;