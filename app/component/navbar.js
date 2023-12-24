"use client"
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("./")}>Bosh sahifa</button>
      <button onClick={() => router.push("./about")}>About page</button>
      <button onClick={() => router.push("./catalog")}>Catalog page</button>
      <button onClick={() => router.push("./posts")}>Posts</button>
    </div>
  );
};

export default Navbar;
