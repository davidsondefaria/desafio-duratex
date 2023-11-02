import CardList from "@/components/CardList";
import { redirect } from "next/navigation";

export default function Home() {
  console.log("There is no home! Redirecionando para /blog...");
  redirect("/blog");
  return <main></main>;
}
