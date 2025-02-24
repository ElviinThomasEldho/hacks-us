import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Feature() {
  return (
    <div id="about" className="w-full py-20 lg:py-40 font-redhat px-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end  gap-10">
          <div className="w-full max-w-full px-6">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6">
                      <span className="text-sm">
                        Platform Screenshot {index + 1}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Hackathon</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-chakra text-left">
                About<br/> HACKS'US
              </h2>
              <p className="text-lg  max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-foreground  text-left">
                HackS’US Edition IV is a 36-hour innovation-driven hackathon
                uniting top young minds to create real-world tech solutions.
                Hosted by RSET IEDC and IIC RSET, it serves as a startup
                promoter, networking hub, and problem-solving catalyst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
