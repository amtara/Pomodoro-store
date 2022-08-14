import Promotion from "./Promotion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const faqsTexts = [
  {
    id: 1,
    question: "Prix",
    answer:
      "Les prix de ce catalogue sont indiqués en francs suisses. Les articles bénéficiant d’une garantie sont soumis aux conditions de l’offre valable lors de l’achat. La garantie prend effet à la date de livraison de l’article, justifiée par le document d’accompagnement (facture) que nous vous demandons de conserver soigneusement. Ne sont pas couverts : les dommages dus à une usure normale.",
  },
  {
    id: 2,
    question: "Modalités de paiement",
    answer: `Nous acceptons comme méthode de paiement: Paypal,  Mastercard, Visa`,
  },
  {
    id: 3,
    question: "Retour ou échange de marchandises",
    answer: `Les articles doivent être renvoyés intacts et complets dans leur emballage d’origine (avec les étiquettes comportant leurs références), accompagnés du bordereau de livraison, dans un délai de 7 jours après réception de votre colis. Les frais de port liés au retour sont à votre charge. Dans le cas d’une commande échange, les frais de port de votre nouvelle commande vous sont offerts.`,
  },
  {
    id: 4,
    question: "Garantie légales",
    answer: `Vérifiez l’état des marchandises livrées sans attendre pour exclure des vices de matière et de fabrication manifestes, ainsi que des dommages dus au transport. Conformément à la loi, vous êtes obligé de nous signaler tout défaut ou anomalie affectant les marchandises livrées pour nous permettre d’y remédier.`,
  },
  {
    id: 5,
    question: "Protection des données",
    answer: `Toutes les données à caractère personnel seront considérées comme confidentielles. Les informations nécessaires à la gestion de la commande feront l’objet d’un traitement informatique et peuvent être communiquées à des entreprises associées dans le cadre de la gestion de la commande.`,
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <Promotion />
      <Navbar />

      <div className="max-w-20xl py-16 px-4 sm:py-24 sm:px-6 lg:px-32">
        <div className="max-w-2xl ">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Termes & Conditions
          </h2>
        </div>
        <div className="mt-16">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqsTexts.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-2xl text-gray-900">
                  {faq.question}
                </dt>

                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  );
}
