import Card from "@/components/ui/Card";

type TechBubblesProps = {
  icon: any;
  title: string;
};

const TechBubbles = ({ icon, title }: TechBubblesProps) => {
  return (
    <>
      <Card
        className="rounded-full size-28 flex items-center justify-center border-0"
        title={title}
      >
        <Card.Body>{icon}</Card.Body>
      </Card>
    </>
  );
};

export default TechBubbles;
