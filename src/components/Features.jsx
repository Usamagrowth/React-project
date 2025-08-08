import Cards from "./utils/Cards";
const Features = () => {
  return (
    <section className="grid grid-cols-4 gap-5">
   <Cards 
     bgimage="https://images.unsplash.com/photo-1598554889165-8139a49f2883?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     discountInfo="30% On Winter Clothings"
    body="lorem ipsum dolor sit amet consectetur adipisicing elit."
   />
   <Cards
    bgimage={"https://images.unsplash.com/photo-1667890786022-98704b9b8fcb?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
    discountInfo="50% On Winter Clothings"
    body=" Perspiciatis nobis repellendus nemo."
   />
   <Cards 
   bgimage="https://images.unsplash.com/photo-1667839419946-f6c6c2bdf332?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   discountInfo="50% On Winter Clothings"
    body="lorem ipsum dolor sit amet consectetur adipisicing elit."
   />
   <Cards 
     bgimage="https://images.unsplash.com/photo-1598554889165-8139a49f2883?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     discountInfo="30% On Winter Clothings"
    body="lorem ipsum dolor sit amet consectetur adipisicing elit."
   />
    </section>
  )
}

export default Features ;