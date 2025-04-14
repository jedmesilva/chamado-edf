import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface LetterCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  read?: boolean;
}

const LetterCard = ({ id, title, description, date, read = false }: LetterCardProps) => {
  const dateObj = new Date(date);
  const formattedDate = formatDistanceToNow(dateObj, { 
    addSuffix: true,
    locale: ptBR 
  });

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
          <Badge variant="outline" className="w-fit">
            Carta #{id}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {formattedDate}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Content can go here if needed */}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <Badge variant={read ? "secondary" : "default"}>
          {read ? "Lido" : "Não lido"}
        </Badge>
        <Button asChild>
          <Link href={`/letter/${id}`}>Ler carta</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LetterCard;
