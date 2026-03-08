import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Реестр GACC КНР — аккредитация экспортёров зерна в Китай",
  description:
    "Проверьте регистрацию российских предприятий в реестре GACC для экспорта зерна в Китай. Поиск по названию компании и коду аккредитации.",
  alternates: {
    canonical: "/gacc",
  },
  openGraph: {
    title: "Реестр GACC КНР — аккредитация экспортёров зерна в Китай",
    description:
      "Проверка аккредитации российских компаний для экспорта зерна в Китай через реестр GACC.",
    url: "/gacc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как зарегистрироваться в реестре GACC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Через Россельхознадзор: подача заявки, инспекция предприятия, направление документов в GACC. Процесс занимает от 3 до 12 месяцев.",
      },
    },
    {
      "@type": "Question",
      name: "Какие виды зерна разрешены к экспорту в Китай?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Пшеница, ячмень, кукуруза, рис, соя, рапс, подсолнечник, овёс, гречиха и просо — по межправительственному протоколу между РФ и КНР.",
      },
    },
    {
      "@type": "Question",
      name: "Что нужно для фитосанитарного сертификата?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Карантинный контроль партии, лабораторные исследования, подтверждение отсутствия карантинных объектов и фумигация по стандартам IPPC.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
