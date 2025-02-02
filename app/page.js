import Header from '../components/Header';
import ReviewsComponent from '../components/ReviewsComponent';
import NotionAdvantage from '@/components/NotionAdvantages';
import Footer from '@/components/Footer';
import FAQ from '@/components/CommomQuestions';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-around min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-md text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bem-vindo ao Controle Financeiro
          </h1>
          <p className="text-lg mb-6">
            Gerencie suas finanças com facilidade e eficiência
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Comece agora!
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/first-image.jpg"
            alt="Imagem Ilustrativa"
            className="max-w-full md:max-w-[700px] h-auto rounded-2xl"
          />
        </div>
      </section>

      <NotionAdvantage />
      <ReviewsComponent />
      <FAQ />
      <Footer />
    </main>
  );
}