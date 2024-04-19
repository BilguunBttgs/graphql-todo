"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "http://localhost:3001/api/graphql",
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
