import { Metadata } from "next";

export const metadata: Metadata = {
  title: "База фермеров России — 27 000+ КФХ с контактами",
  description:
    "Найдите КФХ и сельхозпредприятия по региону, культуре и объёму производства. 27 000+ крестьянских фермерских хозяйств с контактами и площадями.",
  alternates: {
    canonical: "/farmers",
  },
  openGraph: {
    title: "База фермеров России — 27 000+ КФХ с контактами",
    description:
      "Крупнейшая открытая база КФХ России. Поиск фермеров по региону, культуре и площади.",
    url: "/farmers",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Откуда берутся данные о фермерах?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Из открытых данных ЕГРЮЛ/ЕГРИП (ФНС), Росстата и отраслевых справочников. Для каждого КФХ: название, ФИО главы, контакты, регион, посевные площади.",
      },
    },
    {
      "@type": "Question",
      name: "Как связаться с фермером напрямую?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нажмите на карточку хозяйства — откроются контакты: телефон и email главы КФХ.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли фильтровать фермеров по культуре и площади?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, доступна фильтрация по зерновым культурам и минимальной площади посева в гектарах.",
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
