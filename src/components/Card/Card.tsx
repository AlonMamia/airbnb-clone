import './Card.css'

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center shadow-md absolute top-12 pt-3 pb-3 gap-3 justify-self-end min-w-10">
      {children}
    </div>
  );
};

export default Card;
