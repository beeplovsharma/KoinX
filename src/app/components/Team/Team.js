import Image from "next/image";
import React from "react";

function Team() {
    const persons = [
        {
            name:"John Jacobs",
            pic:"/john.png"
        },
        {
            name:"Elina Walton",
            pic:"/elina.png"
        },
        {
            name:"James Bond",
            pic:"/james.png"
        }
    ]
  return (
    <>
      <div className="w-full bg-white rounded-xl px-7 py-5 flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          temporibus delectus vitae enim corporis doloremque alias eveniet
          libero tempore voluptates.
        </p>
        {persons.map((person,id) =>(    
            <div key={id} className="persons w-full flex md:flex-col gap-4 py-4 px-6 rounded-xl bg-[#e8f4fd]">
            <div className="person flex flex-col gap-[2px] items-center">
                <Image width={400} height={400} src={person.pic} className="md:w-[150px] w-[400px]" alt="" />
                <h1 className="font-semibold">{person.name}</h1>
                <p className="text-[12px] opacity-60">Designation Here</p>
            </div>
            <div className="info flex items-center">
                <h1 className="text-sm opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus earum laudantium sint ducimus perferendis inventore,
                tempore, dolores at nam deleniti odit, eaque blanditiis est quas
                eligendi impedit labore vitae debitis alias magnam vel cupiditate
                aspernatur explicabo? Ullam, mollitia commodi!
                </h1>
            </div>
            </div>
            ))}
      </div>
    </>
  );
}

export default Team;
