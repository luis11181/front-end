import ProductInfo from "@/components/Landing/ProductInfo";
import HeaderLandingPage from "@/components/Landing/HeaderLandingPage";
import TempLogin from "@/components/Landing/TempLogin";

export default function Home() {
  
  return (
    <>
    <HeaderLandingPage />
    
    <div className="flex-grow container mx-auto px-4 py-8">
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-2">
      <div className="text-center">
        <p className="text-lg mb-8">Please login to access personalized features.</p>
        <TempLogin />
      </div>
      <ProductInfo />
    </div>
    </div>
    </>
  );
}

