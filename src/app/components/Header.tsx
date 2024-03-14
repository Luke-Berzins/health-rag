export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <p>&#128218; &nbsp; </p>
      <h1>
       KT Platform
      </h1>
    </header>
  );
}
