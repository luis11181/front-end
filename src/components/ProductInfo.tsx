"use client";

import { useTranslation } from 'react-i18next';

export default function ProductInfo() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        {t('about_us')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg text-center leading-relaxed">
        {t('product_info')}
      </p>
    </section>
  );
}
