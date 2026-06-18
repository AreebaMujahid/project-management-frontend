export default function BrandSection({ logo, appName }) {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="logo" className="h-8 w-8" />

      <h1 className="font-semibold text-lg">{appName}</h1>
    </div>
  );
}
