import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlatformLayout from '../../components/platforms/PlatformLayout';

export const metadata = {
  title: 'ACADEMY | Capacitação em Exportação e Comércio Internacional',
  description: 'Cursos e treinamentos práticos em importação, exportação e negócios internacionais. Aprenda com especialistas a operar no mercado global com segurança e eficiência.',
  keywords: [
    'Curso de Exportação',
    'Treinamento em Comércio Exterior',
    'Capacitação para Importadores',
    'MBA Comércio Internacional',
    'Formação em Logística Internacional',
    'Curso de Negociação com Fornecedores Estrangeiros',
    'Treinamento em Compliance Internacional',
    'Desenvolvimento de Competências para Exportação',
    'Especialização em Operações Aduaneiras',
    'Workshops de Comércio Exterior'
  ],
  openGraph: {
    title: 'ACADEMY | Capacitação em Comércio Internacional | OLV Internacional',
    description: 'Desenvolva as competências necessárias para expandir seu negócio globalmente com cursos práticos ministrados por especialistas de mercado.',
    url: 'https://olv-site.vercel.app/academy',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACADEMY | Capacitação em Comércio Exterior',
    description: 'Aprenda a operar no mercado internacional com cursos práticos e aplicados ao seu negócio.'
  }
};

export default function AcademyPage() {
  return (
    <PlatformLayout
      platformName="ACADEMY"
      platformLogo="/images/academy.jpeg"
      platformDescription="Capacitação e Desenvolvimento em Comércio Internacional"
      platformColor="#0a2463"
    >
      <section className="mb-12">
        <h2 className="section-title">Sobre a ACADEMY</h2>
        <p className="mb-4">
          A ACADEMY é a plataforma educacional da OLV Internacional, dedicada à formação e capacitação de profissionais e empresas que atuam ou desejam atuar no comércio internacional.
        </p>
        <p className="mb-4">
          Nossa missão é desenvolver competências técnicas e estratégicas essenciais para o sucesso em operações globais, combinando conhecimento prático, metodologias inovadoras e experiências de aprendizado transformadoras.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/academy.svg" alt="Education Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Formação Especializada</h3>
            </div>
            <p>Programas de capacitação focados nas competências essenciais para operações de comércio exterior.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/training.svg" alt="Learning Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Aprendizagem Prática</h3>
            </div>
            <p>Metodologia que combina conhecimentos teóricos com aplicação prática em casos reais de negócios internacionais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart.svg" alt="Development Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Desenvolvimento Contínuo</h3>
            </div>
            <p>Acompanhamento e suporte permanente para a evolução constante das competências globais da sua equipe.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Programas ACADEMY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/qualification.svg" alt="Executive Education Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Formação Executiva</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>MBA em Gestão do Comércio Internacional</li>
              <li>Especialização em Estratégia Global</li>
              <li>Programa para Líderes de Expansão Internacional</li>
              <li>Certificação em Global Trade Management</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/tools.svg" alt="Technical Training Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Treinamentos Técnicos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Operações de Importação e Exportação</li>
              <li>Compliance em Comércio Internacional</li>
              <li>Logística e Supply Chain Global</li>
              <li>Tributação no Comércio Exterior</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/collaboration.svg" alt="Skills Development Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Desenvolvimento de Competências</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Negociação Internacional</li>
              <li>Comunicação Intercultural</li>
              <li>Inteligência Competitiva Global</li>
              <li>Liderança em Equipes Multiculturais</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/specialist.svg" alt="Custom Programs Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Programas Customizados</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>In-company Training</li>
              <li>Workshops para desafios específicos</li>
              <li>Mentoria para equipes de comércio exterior</li>
              <li>Aceleração de competências internacionais</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Benefícios ACADEMY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/specialist.svg" alt="Expertise Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Expertise Prática</h3>
            </div>
            <p>Aprendizado com especialistas que atuam diariamente no mercado internacional, combinando teoria e aplicação real.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/check.svg" alt="Methodology Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Metodologia Eficaz</h3>
            </div>
            <p>Abordagem de aprendizado que promove resultados imediatos e aplicáveis às operações de comércio exterior da sua empresa.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/newspaper.svg" alt="Content Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Conteúdo Atualizado</h3>
            </div>
            <p>Programas constantemente atualizados com as últimas tendências, regulamentações e melhores práticas do comércio internacional.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/connecta.svg" alt="Networking Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Networking Qualificado</h3>
            </div>
            <p>Oportunidades de conexão com outros profissionais e empresas que atuam no comércio internacional.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/compliance.svg" alt="Certification Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Certificações Reconhecidas</h3>
            </div>
            <p>Certificados valorizados pelo mercado que comprovam a qualificação dos profissionais em comércio exterior.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chat.svg" alt="Support Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Suporte Contínuo</h3>
            </div>
            <p>Acesso a materiais, recursos e consultoria para aplicação dos conhecimentos adquiridos.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <p className="italic mb-4">"O programa de capacitação da ACADEMY transformou nossa equipe de comércio exterior. O conhecimento prático e as ferramentas fornecidas nos permitiram expandir nossas operações para novos mercados com muito mais segurança e eficiência."</p>
            <p className="font-semibold">Roberto Almeida</p>
            <p className="text-sm text-gray-600">Diretor de Operações Internacionais, Indústria de Alimentos</p>
          </div>
          <div className="platform-card">
            <p className="italic mb-4">"A especialização em negociação internacional da ACADEMY foi fundamental para melhorar nossos resultados em contratos globais. A metodologia focada em casos práticos fez toda a diferença para aplicação imediata dos conhecimentos."</p>
            <p className="font-semibold">Carolina Santos</p>
            <p className="text-sm text-gray-600">Gerente de Exportação, Empresa de Manufatura</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Quais são os diferenciais dos programas da ACADEMY em relação a outros cursos de comércio exterior?
            </div>
            <div className="p-4">
              Os programas da ACADEMY se destacam por três diferenciais principais: Primeiro, nossa abordagem prática, onde todos os conhecimentos são apresentados com aplicações reais e estudos de caso baseados em operações concretas. Segundo, nosso corpo docente é composto exclusivamente por profissionais que atuam ativamente no mercado internacional, trazendo experiências recentes e relevantes. Terceiro, oferecemos um ecossistema completo de aprendizado, com acesso a ferramentas, templates, networking qualificado e suporte pós-programa para implementação dos conhecimentos. Além disso, nossos programas são customizáveis para atender os desafios específicos de cada organização, diferentemente de cursos padronizados disponíveis no mercado.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Como a ACADEMY pode ajudar minha empresa a desenvolver competências para expansão internacional?
            </div>
            <div className="p-4">
              A ACADEMY oferece uma abordagem estruturada para desenvolver as competências necessárias para expansão internacional, começando com um diagnóstico detalhado das capacidades atuais da sua empresa e dos gaps existentes para atuar com sucesso nos mercados-alvo. Com base nesse diagnóstico, desenhamos um programa de desenvolvimento personalizado que pode incluir treinamentos técnicos específicos (como operações aduaneiras, tributação internacional, logística global), desenvolvimento de competências estratégicas (inteligência de mercado, estruturação de canais internacionais) e habilidades interculturais essenciais. Implementamos este programa através de múltiplas metodologias, como workshops, mentorias individuais, projetos aplicados e imersões, garantindo que o conhecimento seja absorvido e aplicado. Complementamos com ferramentas práticas, templates e frameworks que aceleram a implementação, além de suporte contínuo durante o processo de expansão internacional.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Quais modalidades de treinamento são oferecidas pela ACADEMY?
            </div>
            <div className="p-4">
              A ACADEMY oferece múltiplas modalidades de treinamento adaptáveis às necessidades de cada cliente. Nossos programas podem ser realizados presencialmente, com imersões e workshops intensivos na sua empresa ou em nossos centros de treinamento. Oferecemos também formatos híbridos, combinando encontros presenciais com módulos online assíncronos para otimizar o tempo dos participantes. Para empresas com equipes distribuídas geograficamente, disponibilizamos programas totalmente online com sessões ao vivo interativas e conteúdos on-demand de alta qualidade. Além disso, temos formatos de aprendizagem contínua com microlearning, onde os participantes recebem pequenas doses de conhecimento aplicável ao longo do tempo. Para desafios específicos, oferecemos também a modalidade de aprendizagem baseada em projetos, onde o treinamento acontece durante a resolução de um desafio real da sua operação internacional.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Como mensurar o retorno sobre investimento dos programas de capacitação da ACADEMY?
            </div>
            <div className="p-4">
              Na ACADEMY, desenvolvemos uma metodologia robusta para mensurar o ROI dos nossos programas de capacitação. O processo começa na fase de design do programa, onde estabelecemos junto ao cliente indicadores claros de sucesso alinhados aos objetivos de negócio. Durante o programa, implementamos avaliações contínuas de aprendizado e aplicação prática. Após a conclusão, realizamos um acompanhamento estruturado para medir indicadores quantitativos (como redução de custos operacionais, aumento de receita internacional, diminuição de erros em documentação) e qualitativos (como melhoria na tomada de decisão, qualidade das negociações internacionais, capacidade de análise de mercados). Nossos clientes tipicamente reportam ROI mensurável em três áreas principais: otimização de processos (redução média de 15-30% em custos operacionais), expansão de mercados (aumento de 20-40% em vendas internacionais após 12 meses) e mitigação de riscos (redução de 40-60% em problemas regulatórios e aduaneiros).
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Pronto para desenvolver competências globais na sua equipe?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a ACADEMY pode potencializar o sucesso da sua empresa no comércio internacional.</p>
          <Link href="/contato" className="inline-block bg-blue-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-900 transition duration-300 flex items-center justify-center">
            <img src="/icons/specialist.svg" alt="Specialist Icon" className="w-5 h-5 mr-2" />
            Fale com um Especialista
          </Link>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "ACADEMY - OLV Internacional",
            "description": "Plataforma educacional especializada em capacitação para comércio internacional e operações globais.",
            "url": "https://www.olvinternacional.com.br/academy",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "offers": {
              "@type": "Offer",
              "category": "Educação em Comércio Internacional",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL"
            }
          })
        }}
      />
    </PlatformLayout>
  );
} 