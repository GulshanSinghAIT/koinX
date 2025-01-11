import React from 'react';

const teamMembers = [
    {
        name: "John Smith",
        designation: "Designation here",
        description:
            "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
        image: "/john.png",
    },
    {
        name: "Elina Williams",
        designation: "Designation here",
        description:
            "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
        image: "/john.png",
    },
    {
        name: "John Smith",
        designation: "Designation here",
        description:
            "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
        image: "/john.png",
    },
];

const Team = () => {
    return (
        <div className="bg-white text-black  rounded-lg m-4 py-12 p-6">
            <div className=" mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Team</h2>
                <p className="text-gray-600 mb-10">
                    Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                </p>
                <div className="space-y-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-[#E8F4FD] rounded-lg flex flex-col md:flex-row items-center md:items-start gap-5 shadow-md p-4 "
                        >
                            <div className='w-[30%] text-center'>

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24  mx-auto rounded-md object-cover"
                                />
                                <h3 className="text-lg whitespace-nowrap font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{member.designation}</p>
                            </div>

                            <div className='mx-auto my-auto'>
                                <p className="text-gray-600 ">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;