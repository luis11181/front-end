
"use client";

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

import { Button } from "@/components/ui/button";

export default function HeaderLandingPage() {
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <Link href="/">MyProduct</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="py-2 px-4 rounded-md">
            <Button variant="outline">
              {t('login')}
            </Button>
          </Link>
          <Link href="/register" className="py-2 px-4 rounded-md">
            <Button variant="outline">
              {t('register')}
            </Button>
          </Link>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    
    </header>
  );
}
