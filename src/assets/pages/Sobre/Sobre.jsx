import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer";
import imgelas from "./SobreImages/elashidden.png";

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl w-full flex xl:px-24 justify-center text-[#860a35] pb-5 mt-9">
    {children}
  </h2>
);

const TextSection = ({ title, children }) => (
  <div className="nos-text my-10">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);

const MembersList = () => (
  <div className="text-center text-white font-light font-['Inter'] tracking-wider">
    {[
      "Amanda Santos", "Amanda Gaby", "Ane Liz", "Bia Sena",
      "Gabrielly Oliveira", "Giovana Alves", "Isinha",
      "Marquinhus Street Son", "Rubs", "Vivian Santana"
    ].map((name, index) => (
      <React.Fragment key={index}>
        {name}<br/>
      </React.Fragment>
    ))}
  </div>
);const AchievementCard = ({ title, description }) => (
  <div className="achievement-card bg-[#860a35b3] px-5 py-4 rounded-md border-solid border border-white/50">
    <h3 className="text-center">{title}</h3>
    <p className="text-black text-center">{description}</p>
  </div>
);

const achievements = [
  {
    title: "Integrante Amanda Santos atingiu o 3º lugar na 26º edição do festival Enredança 2024 - Cultura Jundiaí",
    description: "Categoria: Solo Juvenil II - Danças Urbanas"
  },
  {
    title: "Núcleo contemplado pelo edital da Lei Paulo Gustavo ofertado pela Prefeitura Municipal de Caieiras. No qual tiveram a oportunidade de desenvolver o espetáculo autoral 'O Corpo Fala'.",
    description: "(2024)"
  },
  {
    title: "Integrantes Ane Liz e Rubs passaram na audição para realizar o curso de Dança e Performance da São Paulo Escola de Dança",
    description: "(2024)"
  },
  {
    title: "Núcleo contemplado pelo projeto Quintas Culturais ofertado pela Prefeitura Municipal de Caieiras. Desenvolvendo seu primeiro espetáculo autoral, nomeado 'Nós'.",
    description: "(2023)"
  },
  {
    title: "Dançarinas na abertura do espetáculo Manifestação e Licença Poética",
    description: "Local: Teatro Municipal Maestro Sérgio Valbusa(2023)"
  },
  {
    title: "Contempladas diversas vezes ao edital de incentivo a cultura Mês do Hip Hop.",
    description: "Locais: Casa de Cultura do Butantã (2023), Casa de Cultura Leste e Centro Cultural Olido (2024)"
  },
  {
    title: "Dançarinas/Artistas e Produtoras da 'Mostra de Arte Urbana - Nosso poder está no coletivo'",
    description: "Local: Teatro Municipal Maestro Sérgio Valbusa(2023)"
  },
  {
    title: "Integrante Ane Liz indicada à categoria de melhor dançarina da noite do 1º Juquery em Dança",
    description: "Local: Teatro Municipal Maestro Sérgio Valbusa"
  }
];

function Sobre() {
  return (
    <div id="main-shows-container" className="flex w-full flex-col justify-center items-center">
      <NavBar />

      <div id="shows-main-body" className="w-full px-11 flex justify-center">
        <div id="sobre" className="w-full flex relative justify-center">
          <div id="initial-content-sobre" className="w-full flex flex-col items-center justify-center">
            <img 
              className="elashidden-img z-[1] w-full max-w-full xl:max-w-[80%] 2xl:max-w-[60%]" 
              src={imgelas} 
              alt="elashidden" 
            />
            <div className="w-full flex justify-center  xl:px-24 flex-wrap h-full z-10">
              <div className="nos ">NÓS</div>
              <div className="nos-text">
                <p className="xl:px-32">
                  Idealizado por Beatriz Sena, o Núcleo Elas Em Foco, surgiu de forma independente 
                  a partir do interesse em comum de estudantes de Danças Urbanas do município de Caieiras,
                  como forma de ampliar os aprendizados e experiências no mundo artístico da dança.
                </p>
              </div>
              
              <TextSection title="NOSSA JORNADA">
                <p className="xl:px-32 pb-3">
                  Surgindo em meados de 2023, o Núcleo deu seus primeiros passos realizando apresentações em eventos da própria cidade e foi se oficializando através da busca de diferentes oportunidades no mundo da dança. 
                </p>
                <p className="xl:px-32">
                  Desde então, o grupo tem se dedicado ao desenvolvimento artístico e profissional das integrantes, através de workshops, estudos e vivências da cultura Hip Hop e das danças urbanas, ingresso em diferentes cursos relacionados à dança, apresentações abertas, criação de espetáculos incentivadas por leis e ações de apoio à cultura e apresentações em mostras competitivas.
                </p>
              </TextSection>
              
              <TextSection title="PROPÓSITO">
                <p className="xl:px-32 pb-3">
                  O propósito inicial é atender ao interesse das integrantes  de se profissionalizar enquanto dançarinas, explorando seus potenciais artísticos e os diversos caminhos de atuação que a dança e a arte podem oferecer. 
                </p>
                <p className="xl:px-32">
                  De maneira vertical à esta intenção, também queremos espalhar nossa dança, incentivando outros indivíduos, grupos e principalmente mulheres a caminharem no universo da dança, ocupando espaços, especialmente nas danças urbanas.
                </p>
              </TextSection>
              
              <TextSection title="INTEGRANTES">
                <MembersList />
              </TextSection>
              
              <TextSection title="CONQUISTAS">
                <div className="achievements-list">
                  {achievements.map((achievement, index) => (
                    <AchievementCard 
                      key={index}
                      title={achievement.title}
                      description={achievement.description}
                    />
                  ))}
                </div>
              </TextSection>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Sobre;