import { Playfair_Display, Lato  } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configura la fuente para titulares
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'], // Los pesos que usarás
  variable: '--font-playfair', // Esto crea una variable CSS
});

// Configura la fuente para el cuerpo
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata = {
  title: 'Pedro Salazar | Abogado Corporativo',
  description: 'Asesoramiento legal estratégico para empresas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        <Header />
          <main className="min-h-screen">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
