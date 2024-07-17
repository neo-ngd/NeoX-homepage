import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Neo X",
  description: "New horizons. It’s Neo X.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/frk5nux.css"></link>
      </head>
      <body >{children}</body>


      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CNBTNJJ02G"></Script>
      <Script id="google-analytics">
        {
          `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CNBTNJJ02G');
        `
        }
      </Script>
    </html>
  );
}
