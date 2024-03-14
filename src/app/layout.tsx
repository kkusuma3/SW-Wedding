import { Italianno, Philosopher } from "next/font/google";
import "./globals.css";
import styles from './styles.module.css';
import Header from "./components/Header";
import { IconLogoSW } from "./shared/staticImportsSrc";

const DEFAULT_SITE_DESCRIPTION = "Welcome to the Wedding Website for Sebastian & Widyana! Created by Kevin & Stefamikha <3"

const italianno = Italianno({
    subsets: ['latin'],
    variable: '--font-italianno',
    weight: "400"
});

const philosopher = Philosopher({
    subsets: ['latin'],
    variable: '--font-philosopher',
    weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png" />
            <link rel="shortcut icon" href="/icons/favicon/favicon.ico" />
            <meta
                name="description"
                content={DEFAULT_SITE_DESCRIPTION}
            />
            <meta
                property="og:description"
                content={DEFAULT_SITE_DESCRIPTION}
            />
            <meta
                property="og:url"
                content="https://instiantlywired.vercel.app/"
            />
            <meta
                property="og:image"
                content={IconLogoSW}
            />
            <meta
                property="og:author"
                content="Kevin Kusuma"
            />
            <meta property="og:title" content={"The Wedding of Sebastian & Widyana"} key="title"/>
        </head>
        <body className={styles.bgLayout + ` ${philosopher.variable} ${italianno.variable} font-sans`}>
            <Header />
            {children}
        </body>
    </html>
  );
}
