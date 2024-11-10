import React from 'react';

interface PropsType {
  title: string;
  desc: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px] p-4" data-aos="zoom-in-up">
      {/* Remove Image */}
      {/* <div>
        <Image className="w-[300px] sm:w-[350px] h-auto" src={img} width={350} height={350} alt={title} />
      </div> */}
      
      <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
