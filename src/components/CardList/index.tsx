import React from "react";
import Card from "../Card";
import { ICard } from "@/types";

const cards: ICard[] = [
  {
    title:
      "Loft Deca combina design e funcionalidade na CASACOR Espírito Santo",
    image: "card1.jpg",
    description:
      "No Loft Deca, Cyane Zoboli apresenta um visual inspirador, pensado para ampliar a liberdade e atrair olhares. Mobiliários e obras de arte, aliados a uma estética apurada e funcional presente em metais, louças, acessórios e banheira Deca, exploram a sinergia de escolhas que ressaltam leveza e personalidade.  No espaço destinado a receber e ao preparo […]",
    date: "01/11/2023",
  },
  {
    title:
      "Poetas do Futuro por Deca traz um refúgio para viver o presente e idealizar o futuro na CASACOR Santa Catarina",
    image: "card2.jpg",
    description:
      "A Deca, patrocinadora master da CASACOR, convida a viver e pensar os espaços a partir de referenciais da arquitetura modernista incorporados as necessidades contemporâneas na CASACOR Santa Catarina. Em Poetas do Futuro por Deca e outros 16 projetos assinados por profissionais, a marca celebra 30 anos de parceria com a mostra, trazendo inovações e referências […]",
    date: "09/10/2023",
  },
  {
    title:
      "Decoração Para Cozinha — Inspirações E Dicas Para Transformar Seu Espaço",
    image: "card3.jpg",
    description:
      "Pensar na decoração para cozinha é uma maneira de valorizar esse ambiente, considerado por muitos como o coração da casa. Leia o post e inspire-se!",
    date: "15/09/2023",
  },
  {
    title: "Cubas Slim — Diversidade De Tamanho, Formato, Aplicação E Cor",
    image: "card4.jpg",
    description:
      "Conheça a diversidade de tamanho, formato, aplicação e cor das cubas Slim Deca e confira inspirações para os ambientes da sua casa.",
    date: "20/10/2023",
  },
  {
    title:
      "Pavilhão Deca traz a água como referencial arquitetônico na CASACOR Rio",
    image: "card5.jpg",
    description:
      "A Deca, patrocinadora master da CASACOR, interpreta a evolução das relações das pessoas com seus espaços por meio da água na CASACOR Rio. No Pavilhão Deca, de João Panaggio, e em outros 23 projetos assinados por profissionais, a marca celebra 30 anos de parceria com a mostra trazendo inovações e referências do portfólio pautado no […]",
    date: "01/10/2023",
  },
  {
    title:
      "Decoração Para Banheiro — Como Tornar O Ambiente Funcional E Aconchegante",
    image: "card6.jpg",
    description:
      "A decoração para banheiro não precisa ser baseada apenas em uma cor: é possível apostar em diferentes combinações. Leia este post e confira.",
    date: "08/09/2023",
  },
  {
    title:
      "Soul SPA Deca traz a suavidade renovadora como elemento de conexão com a alma na CASACOR Pernambuco",
    image: "card7.jpg",
    description:
      "Deca, patrocinadora master da CASACOR, convida ao relaxamento e bem-estar na CASACOR Pernambuco. Em Soul SPA Deca e outros 11 projetos assinados por profissionais, a marca celebra 30 anos de parceria com a mostra, trazendo inovações e referências do portfólio pautado no design para ver e viver. O projeto da Arqmulti (Bruna Lobo, Danielle Paes […]",
    date: "17/10/2023",
  },
  {
    title:
      "Vaso Sanitário Com Caixa Acoplada — Conheça Os Modelos Deca E Inspire-Se",
    image: "card8.jpg",
    description:
      "O vaso sanitário com caixa acoplada oferece muitas vantagens para banheiros e lavabos. Confira quais são elas e conheça três modelos Deca.",
    date: "18/09/2023",
  },
  {
    title: "Ducha Higiênica - Por Que Instalar Esse Item Na Sua Casa?",
    image: "card9.jpg",
    description:
      "Confira, neste post, a importância de instalar uma ducha higiênica na sua casa, um item que proporciona mais higiene e conforto no uso do banheiro ou lavabo.",
    date: "01/09/2023",
  },
  {
    title:
      "Metais Pretos Para Banheiro — Conheça 4 Inspirações Para A Sua Casa",
    image: "card10.jpg",
    description:
      "Leia este post para saber mais sobre como utilizar os metais pretos para banheiro e lavabo. Confira também quatro inspirações que vão dar mais estilo e sofisticação à sua casa.",
    date: "29/08/2023",
  },
];

const CardList = () => {
  return (
    <div className="list">
      {cards.map((card, idx) => (
        <div className="item" key={`card-${idx}`}>
          <Card {...card} link={`#blog-${idx}`} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
