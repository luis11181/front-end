"use client";

import '../i18n';

import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { AuthProvider } from '@/context/AuthContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AuthProvider>
    </I18nextProvider>
  );
}
