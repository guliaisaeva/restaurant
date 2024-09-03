import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function DeleteButton({ id }: { id: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }
  const handleDelete =()=>{
    
  }
  return (
    <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4">
      <Image src="/images/delete.png" alt={""} width={20} height={20} onClick={handleDelete}/>
    </button>
  );
}

export default DeleteButton;
