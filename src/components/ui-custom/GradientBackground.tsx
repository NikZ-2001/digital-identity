export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full" />
      <div className="gradient-blob absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full" />
    </div>
  );
}