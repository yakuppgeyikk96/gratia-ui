"use client";

import Button from "@/components/common/Button";
import IconPerson from "@/components/icons/IconPerson";
import { useRouter } from "next/navigation";

export default function MainHeaderButton() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Button variant="ghost" icon={<IconPerson />} onClick={handleLogin}>
      Login
    </Button>
  );
}
