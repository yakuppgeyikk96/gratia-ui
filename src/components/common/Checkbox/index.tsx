"use client";

import { forwardRef, ReactNode, useState } from "react";
import IconTick from "../../icons/IconTick";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string | ReactNode;
  error?: boolean;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      defaultChecked = false,
      onChange,
      disabled = false,
      size = "md",
      label,
      error = false,
      className = "",
      id,
      name,
      value,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      setChecked(newChecked);
      onChange?.(newChecked);
    };

    const checkboxId =
      id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`${styles.checkboxContainer} ${className}`}>
        <div className={styles.checkboxWrapper}>
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className={`${styles.checkbox} ${styles[`checkbox-${size}`]} ${
              error ? styles.error : ""
            } ${disabled ? styles.disabled : ""}`}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={`${styles.label} ${styles[`label-${size}`]} ${
              disabled ? styles.disabled : ""
            }`}
          >
            <span className={styles.checkboxVisual}>
              {checked && (
                <IconTick
                  size={size === "sm" ? 12 : size === "md" ? 16 : 20}
                  color="currentColor"
                />
              )}
            </span>
            {label && (
              <span className={styles.labelText}>
                {typeof label === "string" ? label : label}
              </span>
            )}
          </label>
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
