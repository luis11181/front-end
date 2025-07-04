
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

import { Button } from "@/components/ui/button";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <Link href="/">MyProduct</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="py-2 px-4 rounded-md">
            <Button variant="gray">
              {t('login')}
            </Button>
          </Link>
          <Link href="/register" className="py-2 px-4 rounded-md">
            <Button variant="gray">
              {t('register')}
            </Button>
          </Link>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/login" className="py-2 px-4 rounded-md">
            <Button variant="gray">
              {t('login')}
            </Button>
          </Link>
          <Link href="/register" className="py-2 px-4 rounded-md">
            <Button variant="gray">
              {t('register')}
            </Button>
          </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-around">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
