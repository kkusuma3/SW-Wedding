import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    isFullWidth?: boolean;
    additionalClasses?: string;
};
  
  const Container = ({ children, isFullWidth = false, additionalClasses = "" }: Props) => (
    <div className={isFullWidth ? `mx-auto w-full ${additionalClasses}` : `mx-auto w-10/12 py-5 md:py-14 ${additionalClasses}`}>
        {children}
    </div>
  );
  
  export default Container;