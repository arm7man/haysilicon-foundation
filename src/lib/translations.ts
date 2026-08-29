export type Locale = "en" | "hy";

export interface Content {
  nav: {
    about: string;
    whatWeDo: string;
    focusAreas: string;
    whoWeServe: string;
    collaboration: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    label: string;
    heading: string;
    body1: string;
    body2: string;
  };
  whatWeDo: {
    label: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  focusAreas: {
    label: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  whoWeServe: {
    label: string;
    heading: string;
    groups: string[];
  };
  collaboration: {
    label: string;
    heading: string;
    body: string;
    types: string[];
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    emailLabel: string;
    addressLabel: string;
    addressValue: string;
    legalNameLabel: string;
    legalNameValue: string;
  };
  footer: {
    rights: (year: number) => string;
    location: string;
  };
}

const en: Content = {
  nav: {
    about: "About",
    whatWeDo: "What We Do",
    focusAreas: "Focus Areas",
    whoWeServe: "Who We Serve",
    collaboration: "Collaboration",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Education · Science · Technology · Innovation",
    title: "HaySilicon Foundation",
    subtitle: "ՀայՍիլիկոն Հիմնադրամ",
    description:
      "A non-membership, non-commercial foundation advancing education, science, engineering and technology in Armenia — building the people, knowledge and infrastructure behind the country's next generation of engineers and researchers.",
    ctaPrimary: "Learn about our mission",
    ctaSecondary: "Get in touch",
  },
  about: {
    label: "Our Mission",
    heading:
      "HaySilicon Foundation exists to strengthen education, science, technology and innovation across Armenia.",
    body1:
      "Established through the voluntary contributions of its founders, HaySilicon is a non-membership, non-commercial foundation operating under the laws of the Republic of Armenia. It pursues public-benefit goals in education, science and technology, and is guided by principles of lawfulness, self-governance, transparency, accountability and the responsible management of conflicts of interest.",
    body2:
      "The Foundation works to build a scientific and educational community, create open learning content and infrastructure, and support research and innovation initiatives that connect students, researchers, engineers and institutions across Armenia — with a particular focus on the fields that underpin modern technology: semiconductors, digital design and embedded systems.",
  },
  whatWeDo: {
    label: "What We Do",
    heading: "Programs that turn our mission into practice",
    items: [
      {
        title: "Community & Events",
        body: "Conferences, competitions and professional gatherings that bring students, researchers, companies and specialists together, with a recurring calendar of activities throughout the year.",
      },
      {
        title: "Open Knowledge & Content",
        body: "An open digital repository of study materials, workshop assignments, articles and research papers — curated, organized and kept up to date for students, faculty and researchers alike.",
      },
      {
        title: "Infrastructure & Workshops",
        body: "Shared workshops at universities and educational institutions, equipped with tools and software environments, giving students hands-on access to real engineering and research work.",
      },
      {
        title: "Research & Innovation",
        body: "Support for research groups pursuing grants, publications, experimental projects and prototypes, including guidance on funding, intellectual property and international collaboration.",
      },
      {
        title: "Educational & Professional Support",
        body: "Scholarships, grants, summer schools, camps, trainings and mentorship aligned with the Foundation's charter goals, along with support for student and engineering projects.",
      },
      {
        title: "Regional Development",
        body: "Establishing and supporting educational and working spaces in cities and towns across Armenia, used as local hubs for learning, research and technological experimentation.",
      },
    ],
  },
  focusAreas: {
    label: "Focus Areas",
    heading: "Where we concentrate our engineering focus",
    items: [
      { title: "FPGA", body: "Reconfigurable hardware design and prototyping." },
      { title: "ASIC", body: "Custom integrated circuit design and development." },
      { title: "Digital Design", body: "RTL design, verification and digital logic." },
      { title: "Embedded Systems", body: "Firmware and hardware-software co-design." },
      { title: "EDA", body: "Electronic design automation tools and flows." },
      { title: "Microelectronics", body: "Chip-level engineering and fabrication concepts." },
      { title: "Semiconductors", body: "The materials and processes behind modern electronics." },
    ],
  },
  whoWeServe: {
    label: "Who We Serve",
    heading: "Our beneficiaries span the full academic and technical community",
    groups: [
      "Students, pupils and youth",
      "Lecturers and educators",
      "Scientists and researchers",
      "Engineers and technology specialists",
      "Research and study groups",
      "Educational and research institutions",
      "Communities engaged in educational, scientific and technological programs across Armenia",
    ],
  },
  collaboration: {
    label: "Collaboration",
    heading: "Open to partnership across sectors",
    body: "HaySilicon Foundation's charter allows it to collaborate with a wide range of institutions in Armenia and abroad in pursuit of its educational and technological mission. We welcome conversations with organizations working in:",
    types: [
      "State and local self-government bodies",
      "Universities and educational institutions",
      "Research and scientific institutions",
      "Technology companies",
      "Professional associations",
      "Other foundations and non-profit organizations",
      "International and foreign organizations",
      "Diaspora structures",
    ],
  },
  contact: {
    label: "Contact",
    heading: "Get in touch",
    body: "For questions about our programs, collaboration opportunities, or general inquiries, reach out through the details below.",
    emailLabel: "Email",
    addressLabel: "Address",
    addressValue: "10 Vazgen Sargsyan St, Yerevan, Armenia",
    legalNameLabel: "Legal Name",
    legalNameValue: '"HaySilicon" Foundation / «ՀայՍիլիկոն» Հիմնադրամ',
  },
  footer: {
    rights: (year) =>
      `© ${year} HaySilicon Foundation · «ՀայՍիլիկոն» Հիմնադրամ. All rights reserved.`,
    location: "Yerevan, Armenia",
  },
};

const hy: Content = {
  nav: {
    about: "Մեր մասին",
    whatWeDo: "Գործունեություն",
    focusAreas: "Կիզակետային ոլորտներ",
    whoWeServe: "Ում ենք ծառայում",
    collaboration: "Համագործակցություն",
    contact: "Կապ",
  },
  hero: {
    eyebrow: "Կրթություն · Գիտություն · Տեխնոլոգիա · Նորարարություն",
    title: "ՀայՍիլիկոն Հիմնադրամ",
    subtitle: "HaySilicon Foundation",
    description:
      "Անդամություն չունեցող ոչ առևտրային հիմնադրամ, որը խթանում է կրթության, գիտության, ճարտարագիտության և տեխնոլոգիաների զարգացումը Հայաստանում՝ կերտելով երկրի հաջորդ սերնդի ինժեներների ու հետազոտողների համար անհրաժեշտ մարդկային ռեսուրսը, գիտելիքն ու ենթակառուցվածքը։",
    ctaPrimary: "Ծանոթացեք մեր առաքելությանը",
    ctaSecondary: "Կապվեք մեզ հետ",
  },
  about: {
    label: "Մեր առաքելությունը",
    heading:
      "ՀայՍիլիկոն Հիմնադրամը ստեղծված է Հայաստանում կրթության, գիտության, տեխնոլոգիաների և նորարարության ամրապնդման համար։",
    body1:
      "Հիմնադիրների կամավոր գույքային վճարների հիման վրա ստեղծված՝ ՀայՍիլիկոնը անդամություն չունեցող ոչ առևտրային հիմնադրամ է, որը գործում է Հայաստանի Հանրապետության օրենսդրության համաձայն։ Այն հետապնդում է կրթական, գիտական և տեխնոլոգիական հանրօգուտ նպատակներ և առաջնորդվում է օրինականության, ինքնակառավարման, թափանցիկության, հաշվետվողականության և շահերի բախման պատշաճ կառավարման սկզբունքներով։",
    body2:
      "Հիմնադրամը նպաստում է գիտակրթական համայնքի ձևավորմանը, բաց ուսումնական բովանդակության ու ենթակառուցվածքի ստեղծմանը, ինչպես նաև աջակցում է հետազոտական և նորարարական նախաձեռնություններին՝ կապելով ուսանողներին, հետազոտողներին, ինժեներներին ու հաստատություններին ողջ Հայաստանում՝ հատուկ ուշադրություն դարձնելով ժամանակակից տեխնոլոգիաների հիմքում ընկած ոլորտներին՝ կիսահաղորդիչներ, թվային նախագծում և ներկառուցված համակարգեր։",
  },
  whatWeDo: {
    label: "Գործունեություն",
    heading: "Ծրագրեր, որոնք մեր առաքելությունն իրագործում են գործնականում",
    items: [
      {
        title: "Համայնք և միջոցառումներ",
        body: "Համաժողովներ, մրցույթներ և մասնագիտական հանդիպումներ, որոնք համախմբում են ուսանողներին, հետազոտողներին, ընկերություններին ու մասնագետներին՝ տարեկան կրկնվող միջոցառումների օրացույցով։",
      },
      {
        title: "Բաց գիտելիք և բովանդակություն",
        body: "Ուսումնական նյութերի, աշխատանոցային առաջադրանքների, հոդվածների և գիտական աշխատանքների բաց թվային պահոց՝ կանոնավոր թարմացվող և հասանելի ուսանողների, դասախոսների ու հետազոտողների համար։",
      },
      {
        title: "Ենթակառուցվածք և աշխատանոցներ",
        body: "Համալսարաններում և կրթական հաստատություններում ստեղծված համատեղ աշխատանոցներ՝ գործիքներով ու ծրագրային միջավայրերով, որոնք ուսանողներին հնարավորություն են տալիս ձեռք բերել գործնական ինժեներական ու հետազոտական փորձ։",
      },
      {
        title: "Հետազոտություն և նորարարություն",
        body: "Աջակցություն հետազոտական խմբերին՝ դրամաշնորհների, հրապարակումների, փորձարարական նախագծերի ու նախատիպերի շուրջ, ներառյալ խորհրդատվություն ֆինանսավորման, մտավոր սեփականության և միջազգային համագործակցության հարցերում։",
      },
      {
        title: "Կրթական և մասնագիտական աջակցություն",
        body: "Կրթաթոշակներ, դրամաշնորհներ, ամառային դպրոցներ, ճամբարներ, վերապատրաստումներ և մենթորական աջակցություն՝ համապատասխան Հիմնադրամի կանոնադրական նպատակներին, ինչպես նաև աջակցություն ուսանողական ու ինժեներական նախագծերին։",
      },
      {
        title: "Տարածաշրջանային զարգացում",
        body: "Հայաստանի քաղաքներում և գյուղերում կրթական ու աշխատանքային տարածքների ստեղծում և աջակցում, որոնք ծառայում են որպես ուսուցման, հետազոտության և տեխնոլոգիական փորձերի տեղական կենտրոններ։",
      },
    ],
  },
  focusAreas: {
    label: "Կիզակետային ոլորտներ",
    heading: "Մեր ինժեներական ուշադրության կենտրոնում",
    items: [
      { title: "FPGA", body: "Վերակազմավորելի սարքաշարի նախագծում և նախատիպավորում։" },
      { title: "ASIC", body: "Հատուկ նշանակության ինտեգրալ սխեմաների նախագծում և մշակում։" },
      { title: "Digital Design", body: "RTL նախագծում, վերիֆիկացիա և թվային տրամաբանություն։" },
      { title: "Embedded Systems", body: "Ֆիրմվեյրի և սարքաշար-ծրագրային համատեղ նախագծում։" },
      { title: "EDA", body: "Էլեկտրոնային նախագծման ավտոմատացման գործիքներ և հոսքեր։" },
      { title: "Microelectronics", body: "Չիպի մակարդակի ինժեներություն և արտադրության հիմունքներ։" },
      { title: "Semiconductors", body: "Ժամանակակից էլեկտրոնիկայի հիմքում ընկած նյութերն ու գործընթացները։" },
    ],
  },
  whoWeServe: {
    label: "Ում ենք ծառայում",
    heading: "Մեր շահառուները ընդգրկում են ողջ ակադեմիական և տեխնիկական համայնքը",
    groups: [
      "Ուսանողներ, աշակերտներ և երիտասարդներ",
      "Դասախոսներ և մանկավարժներ",
      "Գիտնականներ և հետազոտողներ",
      "Ինժեներներ և տեխնոլոգիական ոլորտի մասնագետներ",
      "Հետազոտական և ուսումնական խմբեր",
      "Կրթական և գիտահետազոտական հաստատություններ",
      "Հայաստանի համայնքներ, որոնք ներգրավված են կրթական, գիտական և տեխնոլոգիական ծրագրերում",
    ],
  },
  collaboration: {
    label: "Համագործակցություն",
    heading: "Բաց ենք համագործակցության համար բոլոր ոլորտներում",
    body: "ՀայՍիլիկոն Հիմնադրամի կանոնադրությունը թույլ է տալիս համագործակցել Հայաստանում և արտերկրում գործող տարբեր հաստատությունների հետ՝ իր կրթական և տեխնոլոգիական առաքելության իրականացման նպատակով։ Բաց ենք համագործակցության առաջարկների համար հետևյալ ոլորտներից.",
    types: [
      "Պետական և տեղական ինքնակառավարման մարմիններ",
      "Համալսարաններ և կրթական հաստատություններ",
      "Հետազոտական և գիտական հաստատություններ",
      "Տեխնոլոգիական ընկերություններ",
      "Մասնագիտական միավորումներ",
      "Այլ հիմնադրամներ և հասարակական կազմակերպություններ",
      "Միջազգային և օտարերկրյա կազմակերպություններ",
      "Սփյուռքի կառույցներ",
    ],
  },
  contact: {
    label: "Կապ",
    heading: "Կապվեք մեզ հետ",
    body: "Ծրագրերի, համագործակցության հնարավորությունների կամ ընդհանուր հարցերի դեպքում կապվեք մեզ հետ ստորև նշված տվյալներով։",
    emailLabel: "Էլ. փոստ",
    addressLabel: "Հասցե",
    addressValue: "Հայաստան, ք. Երևան, Վազգեն Սարգսյան 10",
    legalNameLabel: "Իրավաբանական անվանում",
    legalNameValue: '«ՀայՍիլիկոն» Հիմնադրամ / "HaySilicon" Foundation',
  },
  footer: {
    rights: (year) =>
      `© ${year} ՀայՍիլիկոն Հիմնադրամ · HaySilicon Foundation: Բոլոր իրավունքները պաշտպանված են։`,
    location: "Երևան, Հայաստան",
  },
};

export const translations: Record<Locale, Content> = { en, hy };
