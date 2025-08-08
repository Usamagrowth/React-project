import Button from "./Button";

const Cards = ({discountInfo, body, bgimage}) => {
  return (
    <div className="relative flex items-end justify-center bg-cover bg-center w-[400px] h-[400px]"
    style={{backgroundImage: `url(${bgimage})` }}>
        
    <div className="absolute inset-0 bg-black opacity-25"></div>
    <div className="w-[80%] mb-4 space-y-3 z-10">
    <h1 className="text-white text-2xl font-bold">{discountInfo}</h1>
    <p className="text-white text-2xl">{body}</p>
    <Button />
    </div>
    </div>
  )
}

export default Cards;