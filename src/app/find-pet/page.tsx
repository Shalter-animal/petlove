import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PetsData } from "@/data/PetsData";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className="pt-16 px-5">
        <h1 className="font-bold text-[28px] leading-[28px] h-fit md:text-[54px] md:leading-[54px]">
          Find your favorite pet
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 xl:grid-cols-3">
          {PetsData.map((pet) => (
            <Card key={pet.id}>
              <Image
                src={pet.img}
                alt="pet img"
                width={287}
                height={178}
                className="w-[287px] h-[178px] object-cover rounded-2xl"
              />

              <CardHeader className="p-0 flex flex-row items-center justify-between">
                <h4 className="font-bold leading-[20px] h-fit">{pet.type}</h4>
                <div className="flex items-center gap-1">
                  <Star fill="#FFC531" strokeWidth={0} />
                  <p>{pet.stars}</p>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-row">
                  <div>
                    <p>Name</p>
                    <p>{pet.name}</p>
                  </div>
                  <div>
                    <p>Birthday</p>
                    <p>{pet.birthday}</p>
                  </div>
                  <div>
                    <p>Sex</p>
                    <p>{pet.sex}</p>
                  </div>
                  <div>
                    <p>Species</p>
                    <p>{pet.species}</p>
                  </div>
                  <div>
                    <p>Category</p>
                    <p>{pet.category}</p>
                  </div>
                </div>
                <p className="text-sm leading-[18px] text-muted-foreground">
                  {pet.description}
                </p>
                <p>${pet.price}</p>
              </CardContent>
              <CardFooter className="p-0 flex flex-row items-center justify-between gap-4">
                <Button className="w-[230px] h-[46px]">Learn More</Button>
                <Button variant={"secondary"} className="w-[46px] h-[46px]">
                  <Heart />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
