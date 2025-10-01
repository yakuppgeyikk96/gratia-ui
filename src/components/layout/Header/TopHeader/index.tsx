import Container from "@/components/common/Container";
import {
  CurrencyDropdown,
  LanguageDropdown,
} from "@/components/common/Dropdown";
import Flex from "@/components/common/Flex";
import IconInstagram from "@/components/icons/IconInstagram";
import IconWhatsapp from "@/components/icons/IconWhatsapp";
import IconX from "@/components/icons/IconX";
import TopHeaderLinks from "@/components/layout/Header/TopHeaderLinks";
import { COLORS } from "@/constants/colors";
import styles from "./TopHeader.module.scss";

export default function TopHeader() {
  const socialMediaIconsColor = COLORS.ICON_PRIMARY;

  return (
    <Container className={styles.topHeader}>
      <div className={styles.topHeaderInner}>
        <div className={styles.topHeaderLinks}>
          <Flex gap={12}>
            <IconInstagram color={socialMediaIconsColor} />
            <IconX color={socialMediaIconsColor} />
            <IconWhatsapp color={socialMediaIconsColor} />
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
