import { twMerge } from "tailwind-merge";

type CardProps = React.HtmlHTMLAttributes<HTMLDivElement>;

type CardImageProps = React.HtmlHTMLAttributes<HTMLImageElement> & {
  image?: string;
};

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        "p-5 w-fit bg-white dark:bg-black border rounded-lg shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = ({ children, className }: CardProps) => {
  return (
    <div className={twMerge("font-bold text-xl", className)}>{children}</div>
  );
};

Card.Image = ({ image, className }: CardImageProps) => {
  return <img src={image} alt="" className={twMerge("size-52", className)} />;
};

Card.Body = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "text-gray-700 dark:text-gray-300 space-y-3",
        className
      )}
    >
      {children}
    </div>
  );
};

Card.Footer = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge("text-sm text-gray-500 dark:text-gray-400", className)}
    >
      {children}
    </div>
  );
};

export default Card;
