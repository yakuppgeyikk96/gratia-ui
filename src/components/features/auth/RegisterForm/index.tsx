import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import IconAt from "@/components/icons/IconAt";
import IconPassword from "@/components/icons/IconPassword";
import IconVisibility from "@/components/icons/IconVisibility";
import { COLORS } from "@/constants/colors";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.brand}>GRATIA</h1>
        <h2 className={styles.title}>Create an account</h2>

        <div className={styles.formContent}>
          <div className={styles.formField}>
            <Input
              variant="outlined"
              size="lg"
              placeholder="Enter your firstname"
            />
          </div>

          <div className={styles.formField}>
            <Input
              variant="outlined"
              size="lg"
              placeholder="Enter your lastname"
            />
          </div>

          <div className={styles.formFieldFull}>
            <Input
              variant="outlined"
              size="lg"
              startIcon={<IconAt color={COLORS.ICON_MUTED} size={16} />}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.formFieldFull}>
            <Input
              variant="outlined"
              size="lg"
              startIcon={<IconPassword color={COLORS.ICON_MUTED} size={16} />}
              endIcon={<IconVisibility color={COLORS.ICON_MUTED} size={16} />}
              placeholder="Enter your password"
            />
          </div>

          <div className={styles.formFieldFull}>
            <Checkbox
              size="sm"
              label={
                <span>
                  I agree to{" "}
                  <a href="#" style={{ color: "#1d4ed8" }}>
                    Terms & Privacy Policy
                  </a>
                </span>
              }
            />
          </div>

          <div className={styles.formFieldFull}>
            <Button variant="primary" className={styles.submitButton}>
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
