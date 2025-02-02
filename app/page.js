import Header from '../components/Header';
import ReviewsComponent  from '../components/ReviewsComponent';
import NotionAdvantage from '@/components/NotionAdvantages';
import Footer from '@/components/Footer'
import FAQ from '@/components/CommomQuestions';

export default function Home() {
  return (
  <main>
      <Header/>
      <section className="flex items-center justify-around h-screen">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            Bem-vindo ao Controle Financeiro
          </h1>
          <p className="text-lg text">
            Gerencie suas finanças com facilidade e eficiência
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Comece agora!
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="/first-image-main.jpg"
            alt="Imagem Ilustrativa"
            className="max-w-[700px] h-auto rounded-2xl"
          />
        </div>
      </section>
      <NotionAdvantage/>
      <ReviewsComponent/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
