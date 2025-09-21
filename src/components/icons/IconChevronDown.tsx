import IconComponent from "@/types/IconComponent";

export default function IconChevronDown({
  color = "#4A5568",
  size = 10,
}: IconComponent) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.825 0.5L5 4.2085L1.175 0.5L0 1.6417L5 6.5L10 1.6417L8.825 0.5Z"
        fill={color}
      />
    </svg>
  );
}
