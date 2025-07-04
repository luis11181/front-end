import ProductInfo from "@/components/ProductInfo";
import HeaderLandingPage from "@/components/HeaderLandingPage";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {

  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }
  
  return (
    <>
    <HeaderLandingPage />
    
    <div className="flex-grow container mx-auto px-4 py-8">
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-2">
      <div className="text-center">
        <p className="text-lg mb-8">Please login to access personalized features.</p>
      <Button onClick={login}>{t('login')}</Button>

      </div>
      <ProductInfo />
    </div>
    </div>
    </>
  );
}

