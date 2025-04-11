import Card from "@/components/ui/Card";
import { ServiceModel } from "@/types/ServiceModel";

type ServiceCardProps = {
  service: ServiceModel;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="relative p-6 border-0">
      <Card.Header className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-accent-bold border-0">
        {service.icon}
      </Card.Header>
      <Card.Body className="mt-5">
        <h1 className="text-xl font-semibold text-center">{service.name}</h1>
        <p className="text-sm">{service.description}</p>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
