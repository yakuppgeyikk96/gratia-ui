import Container from "../common/Container";
import Flex from "../common/Flex";
import CurrencyDropdown from "../CurrencyDropdown";
import IconInstagram from "../icons/IconInstagram";
import IconWhatsapp from "../icons/IconWhatsapp";
import IconX from "../icons/IconX";
import LanguageDropdown from "../LanguageDropdown";
import TopHeaderLinks from "../TopHeaderLinks";
import styles from "./TopHeader.module.scss";

export default function TopHeader() {
  return (
    <Container>
      <div className={styles.topHeaderInner}>
        <div className={styles.topHeaderLinks}>
          <Flex gap={12}>
            <IconInstagram />
            <IconX />
            <IconWhatsapp />
          </Flex>
          <TopHeaderLinks />
        </div>
        <Flex gap={4}>
          <CurrencyDropdown />
          <LanguageDropdown />
        </Flex>
      </div>
    </Container>
  );
}
