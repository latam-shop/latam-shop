import LoginTemplate from "@/components/templates/login/login";
import { NavBarTemplate } from "@/components/templates/navBar";
import { Logo } from "@/components/atoms/logo";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col min-h-screen w-full lg:max-w-5xl xl:max-w-[1440px] bg-zinc-50 font-sans shadow-xl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <NavBarTemplate logo={<Logo />} />
      </header>

      {/* Body */}
      <main className="flex flex-col w-full p-4 sm:p-8">
        <LoginTemplate />
        <LoginTemplate />
        <LoginTemplate />
        <LoginTemplate />
        <LoginTemplate />
        <LoginTemplate />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} LATAMSHOP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
