import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { FriendsData } from "@/data/FriendsData";
import Image from "next/image";

export default function Friends() {
  return (
    <>
      <Header />
      <main className="pt-16 px-5">
        <h1 className="font-bold text-[28px] leading-[28px] h-fit md:text-[54px] md:leading-[54px]">
          Our Friends
        </h1>
        <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 xl:grid-cols-3">
          {FriendsData.map((friend) => (
            <Card
              key={friend.title}
              className="flex flex-row items-center gap-6 p-6 rounded-2xl bg-white"
            >
              <div className="flex-shrink-0">
                <Image
                  src={friend.image}
                  alt="friend image"
                  width={100}
                  height={100}
                  className="w-[80px] h-[80px] rounded-full object-contain"
                />
              </div>

              <CardContent className="p-0 flex-1">
                <div className="flex justify-self-end bg-secondary text-primary font-medium text-sm p-2 rounded-full">
                  {friend.workTime}
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3.5">
                  {friend.title}
                </h4>

                <div className="space-y-2 font-medium text-sm leading-4.5">
                  <p>
                    <span className="text-gray-400 ">Email: </span>
                    <span className="text-gray-900">{friend.email}</span>
                  </p>
                  <p>
                    <span className="text-gray-400 ">Address: </span>
                    <span className="text-gray-900">{friend.address}</span>
                  </p>
                  <p>
                    <span className="text-gray-400 ">Phone: </span>
                    <span className="text-gray-900">{friend.phone}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
