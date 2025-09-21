"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import IconChevronDown from "../../icons/IconChevronDown";
import styles from "./Dropdown.module.scss";

export interface DropdownOption {
  value: string;
  label: string;
  icon?: string | ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}

export default function Dropdown({
  options,
  value,
  placeholder = "Select an option",
  onValueChange,
  disabled = false,
  triggerClassName = "",
  contentClassName = "",
}: DropdownProps) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={`${styles.trigger} ${triggerClassName}`}
        disabled={disabled}
      >
        {selectedOption ? (
          <>
            {selectedOption.icon && (
              <span className={styles.icon}>
                {typeof selectedOption.icon === "string" ? (
                  <span className={styles.iconText}>{selectedOption.icon}</span>
                ) : (
                  selectedOption.icon
                )}
              </span>
            )}
            <span className={styles.label}>{selectedOption.label}</span>
          </>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        <IconChevronDown />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`${styles.content} ${contentClassName}`}
          sideOffset={5}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.value}
              className={styles.item}
              onSelect={() => onValueChange?.(option.value)}
            >
              {option.icon && (
                <span className={styles.icon}>
                  {typeof option.icon === "string" ? (
                    <span className={styles.iconText}>{option.icon}</span>
                  ) : (
                    option.icon
                  )}
                </span>
              )}
              <span className={styles.label}>{option.label}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
