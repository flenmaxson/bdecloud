import Script from "next/script";
import SetupPage from "./SetupPage";
import MainLayout from "@/components/MainLaout";
import Hero from "@/components/Hero";
import QuickEasySection from "@/components/QuickEasySection";
import UltimatePCCare from "@/components/UltimatePCCare";
import WorkWithDevices from "@/components/WorkWithDevices";
import DriverPack from "@/components/DriverPack";
import PricingPackages from "@/components/PricingSection";
import FAQList from "@/components/FaqList";
import Talk from "@/components/Talk";
import CustomersReview from "@/components/CostumersReview";

// export const metadata = {
//   title: "HP - Professional Printer Download Driver & Setup Solutions",
//   description:
//     "Expert printer services including installation, troubleshooting, maintenance, and 24/7 technical assistance for all printer brands.",
//   icons: {
//   icon: "/hplogo.png",
// },

// };

export default function Page() {
  return (
    <>
      {/* ✅ Load Tawk.to script properly */}
      {/* <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68e4b9cd615cd1194e6d045f/1j6unbirp';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      /> */}

      {/* <SetupPage /> */}
      <MainLayout>
      {/* Hero */}
      <Hero/>
    

      {/* Quick & Easy */}
      <QuickEasySection />

      {/* Ultimate PC Care */}
      <UltimatePCCare/>

      {/* Works with devices */}
      <WorkWithDevices/>


      {/* Suitable for any computer */}
      <DriverPack/>
      <PricingPackages/>

      {/* Contact */}
      <CustomersReview/>
      <FAQList/>
      <Talk/>
    </MainLayout>
    </>
  );
}
