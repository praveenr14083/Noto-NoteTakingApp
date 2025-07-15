import Dashboard from "@/features/dashboard/Dashboard";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
