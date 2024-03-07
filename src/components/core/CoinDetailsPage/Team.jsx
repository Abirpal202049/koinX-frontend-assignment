import Image from "next/image";
import React from "react";

const teamDetails = [
  {
    memberName: "John Smith",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore excepturi porro est voluptatibus blanditiis neque alias, dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad facere nobis rem repudiandae. inventore excepturi porro est voluptatibus blanditiis neque alias, dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad facere nobis rem repudiandae.",
    image: "/user1.png",
  },
  {
    memberName: "Elina Williams",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore excepturi porro est voluptatibus blanditiis neque alias, dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad facere nobis rem repudiandae. inventore excepturi porro est voluptatibus blanditiis neque alias, dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad facere nobis rem repudiandae.",
    image: "/user2.png",
  },
  {
    memberName: "John Smith",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore excepturi porro est voluptatibus blanditiis neque alias, dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad facere nobis rem repudiandae. inventore excepturi porro est voluptatibus blanditiis neque alias, dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad facere nobis rem repudiandae.",
    image: "/user3.png",
  },
];

export default function Team() {
  return (
    <div className="bg-white rounded-lg overflow-auto p-4">
      <h1 className="text-xl font-medium">Team</h1>
      <p className="text-sm my-2 pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        inventore excepturi porro est voluptatibus blanditiis neque alias,
        dolorum quaerat quo molestias incidunt. Praesentium, aperiam. Ut ad
        facere nobis rem repudiandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Suscipit quo quisquam minus reiciendis repellat illum
        doloremque officia omnis ab doloribus?
      </p>

      <div className="flex flex-col gap-4 my-4">
        {teamDetails?.map((member, index) => {
          return (
            <div className="flex flex-col md:flex-row gap-4 bg-blue-200 rounded-md p-4 items-center">
              <div className="flex flex-col items-center">
                <Image
                  src={member.image}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <h1 className="font-medium">{member.memberName}</h1>
                <h2 className="text-xs text-slate-600">Designation here</h2>
              </div>

              <div className="flex-1">
                <p className="text-sm">{member.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
