import User from "./User";


const UserSection = () => {
  return (
    <div className="grid grid-cols-4">
    <User
    profile="src/assets/usama1.png"
     userName="Usama Omodara"
     course="Full Stack Engineer"
     gmail="usamagrowthsolutions@gmail.com"
    />

    <User
    profile="src/assets/productimage.png"
     userName="Ana Justin"
     course="Content Writer"
     gmail="growthsolutions@gmail.com"
    />
    <User
    profile="src/assets/usama1.png"
     userName="Mike O."
     course="Backend"
     gmail="mike@gmail.com"
    />
    <User
     userName="Khodijah"
     course="Graphic Design"
     gmail="khodijah@gmail.com"
    />
    </div>
  )
}

export default UserSection;