// import React from "react";
import BoxComponent from "../components/common/box";

// interface FeedBackComponentProps extends React.HTMLAttributes<unknown> { }
interface FeedBackComponentProps {
  children: string;
  className?: string;
  other?: object;
}

export default function FeedbackComponent(props: FeedBackComponentProps) {
  const { children, 
          className, 
          // ...other 
        } = props;
  // console.log('className', className)
  // console.log('children in feedback', children)
  return <BoxComponent className={className}>{children}</BoxComponent>;
}
