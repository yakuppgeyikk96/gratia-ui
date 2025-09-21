"use client";

import Dropdown, { DropdownOption } from "../common/Dropdown/Dropdown";

const languages: DropdownOption[] = [
  { value: "en", label: "English", icon: "🇺🇸" },
  { value: "tr", label: "Türkçe", icon: "🇹🇷" },
  { value: "de", label: "Deutsch", icon: "🇩🇪" },
  { value: "fr", label: "Français", icon: "🇫🇷" },
];

interface LanguageDropdownProps {
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

export default function LanguageDropdown({
  currentLanguage = "en",
  onLanguageChange,
}: LanguageDropdownProps) {
  const handleLanguageChange = (language: string) => {
    onLanguageChange?.(language);
  };

  return (
    <Dropdown
      options={languages}
      value={currentLanguage}
      onValueChange={handleLanguageChange}
    />
  );
}
