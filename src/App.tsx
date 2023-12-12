import Education from "@components/Education/Education";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Info from "@components/Info/Info";
import Languages from "@components/Languages/Languages";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";
import { initializeSetup } from "main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initializeSetup();
  }, []);

  return (
    <div className="bg-gray-300 overflow-x-hidden">
      <Header />
      <main className="my-10 sm:mx-4 md:mx-8 lg:mx-12">
        <div className="flex flex-wrap -mt-8">
          <div className="w-full lg:w-2/3 sm:px-4 text-lg mt-8">
            <Skills />
            <Projects />
          </div>

          <div className="w-full lg:w-1/3 sm:px-4 mt-8">
            {/* <Info /> */}
            <Education />
            <Languages />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
