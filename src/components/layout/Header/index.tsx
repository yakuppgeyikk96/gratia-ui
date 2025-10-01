import Divider from "@/components/common/Divider";
import BottomHeader from "./BottomHeader";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <>
      <TopHeader />
      <Divider />
      <MainHeader />
      <BottomHeader />
      <Divider />
    </>
  );
}
