import Container from "@/components/common/Container";
import { CategoryDropdown } from "@/components/common/Dropdown";
import HeaderCategoryLinks from "../HeaderCategoryLinks";
import styles from "./BottomHeader.module.scss";

export default function BottomHeader() {
  return (
    <Container className={styles.bottomHeader}>
      <CategoryDropdown triggerClassName={styles.categoryDropdown} />
      <HeaderCategoryLinks />
    </Container>
  );
}
