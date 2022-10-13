import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Portfolio website of Adam Siraj" />
      </Head>
      <body className="font-hyperionBold bg-gray-200 dark:bg-slate-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
