"use client";

import Dropdown, { DropdownOption } from "../common/Dropdown/Dropdown";

const currencies: DropdownOption[] = [
  { value: "USD", label: "USD", icon: "$" },
  { value: "EUR", label: "EUR", icon: "€" },
  { value: "TRY", label: "TRY", icon: "₺" },
];

interface CurrencyDropdownProps {
  currentCurrency?: string;
  onCurrencyChange?: (currency: string) => void;
}

export default function CurrencyDropdown({
  currentCurrency = "USD",
  onCurrencyChange,
}: CurrencyDropdownProps) {
  const handleCurrencyChange = (currency: string) => {
    onCurrencyChange?.(currency);
  };

  return (
    <Dropdown
      options={currencies}
      value={currentCurrency}
      onValueChange={handleCurrencyChange}
    />
  );
}
