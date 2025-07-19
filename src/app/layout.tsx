import type { Metadata } from "next";
import "./globals.css";

// import "/public/components/bootstrap-wysiwyg-master/external/google-code-prettify/prettify.css";
// import "/public/components/bootstrap-wysiwyg-master/index.css";
// import "/public/css/editor.css";

// Amplify.configure(outputs);


export const metadata: Metadata = {
  title: "Presentix",
  description: "Recreating the Presentix website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Lato font import */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic"
        />
        {/* Bootstrap CSS from public directory for Glyphicons */}
        <link
          href="/components/bootstrap-3.2.0-dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Original estilos.css re-added */}
        <link href="/css/estilos.css" rel="stylesheet" />
        {/* jQuery UI CSS for slider and draggable components */}
        <link
          href="/components/jquery-ui-1.11.2.custom/jquery-ui.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <Authenticator.Provider> */}
          {children}
        {/* </Authenticator.Provider> */}
        {/* Load jQuery using a standard script tag for global availability */}
        <script src="/js/jquery-1.11.1.min.js"></script>
      </body>
    </html>
  );
}
