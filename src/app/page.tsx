import Badge from "@/components/common/Badge";

export default function Home() {
  return (
    <>
      <Badge count={10} size="sm" color="primary" showZero />
      <Badge count={10} size="md" color="secondary" showZero />
      <Badge count={10} size="lg" color="primary" showZero />
    </>
  );
}
