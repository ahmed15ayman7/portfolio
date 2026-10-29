import {
  aiaetar,
  booksplatform,
  iafce,
  ifacegb,
  nadiaElsayed,
  Project,
  sporton,
} from "./projects";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/ah-logo.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently, I'm working on developing and building the SPORTON platform.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-40",
    titleClassName: "justify-center md:justify-start lg:justify-center w-96",
    img: "/sporton.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects: Project[] = [
  sporton,
  iafce,
  ifacegb,
  booksplatform,
  nadiaElsayed,
  aiaetar,
  {
    id: 6,
    title: "Almanafth",
    des: "Al Manafth is your trusted platform for professional home services. Connect with verified service providers for plumbing, electrical, cleaning, and more.",
    img: "/am.png",
    iconLists: ["/next.svg", "/njs.svg", "/mo.svg", "/ts.svg", "/mui.svg"],
    link: "http://manfaz.vercel.app/",
    slug: "almanafth",
    fullDescription: "Al Manafth is your trusted platform for professional home services. Connect with verified service providers for plumbing, electrical, cleaning, and more.",
    sections: [],
    tools: {
      stacks: [{
        title: "frontend stack",
        tools: [
          { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
          { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
          { name: "TypeScript", icon: "/icons/ts.svg", description: "Types & Safety" },
          { name: "TailwindCSS", icon: "/icons/tail.svg", description: "Utility-first styling" },
          { name: "Framer Motion", icon: "/icons/fm.svg", description: "Animations" },
          { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
          { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
        ],
      }],
    },
  },
  {
    id: 2,
    title: "SPORTON old website - Connects athletes",
    des: "Sporton is a multiconnector platform ( website + app ) , that perform the role of the bridge that connect athletes from a side to the brokers - clubs - institutes - brands , from another side. On Sporton , your profile is your athletic CV and by one button the broker can see all of your carrer , in addition of that we powered the platform with AI",
    img: "/sp.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mo.svg", "/c.svg"],
    link: "https://sporton-test.vercel.app",
    slug: "sporton-old",
    fullDescription: "Sporton is a multiconnector platform ( website + app ) , that perform the role of the bridge that connect athletes from a side to the brokers - clubs - institutes - brands , from another side. On Sporton , your profile is your athletic CV and by one button the broker can see all of your carrer , in addition of that we powered the platform with AI",
    sections: [],
    tools: {
      stacks: [{
        title: "frontend stack",
        tools: [
          { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
          { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
          { name: "TypeScript", icon: "/icons/ts.svg", description: "Types & Safety" },
          { name: "TailwindCSS", icon: "/icons/tail.svg", description: "Utility-first styling" },
          { name: "Framer Motion", icon: "/icons/fm.svg", description: "Animations" },
          { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
          { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
        ],
      }],
    },
  },
  {
    id: 3,
    title: "5mila - Hair Transplant",
    des: "Hair Transplant Procedures in Turkey. The hairline will be designed and agreed upon before the hair transplant day. Markings will be placed on the hair area to ensure even distribution of the grafts.",
    img: "/5m.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.png", "/mui.svg"],
    link: "https://5amila.vercel.app",
    slug: "5mila",
    fullDescription: "Hair Transplant Procedures in Turkey. The hairline will be designed and agreed upon before the hair transplant day. Markings will be placed on the hair area to ensure even distribution of the grafts.",
    sections: [],
    tools: {
      stacks:[
        {
          title: "frontend stack",
          tools: [
            { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
            { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
            { name: "TypeScript", icon: "/icons/ts.svg", description: "Types & Safety" },
            { name: "TailwindCSS", icon: "/icons/tail.svg", description: "Utility-first styling" },
            { name: "Framer Motion", icon: "/icons/fm.svg", description: "Animations" },
            { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
            { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
          ]
        }
      ]
    }
  },
  // {
  //   id: 4,
  //   title: "المساعد في متابعة العملية التعليمية",
  //   des: "المساعد في متابعة العملية التعليمية يساعد المدارس والمعلمين على إدارة العملية التعليمية بكفاءة، ومتابعة أداء الطلاب والمعلمين، وتحقيق أقصى استفادة من التقنيات الحديثة في التعليم.",
  //   img: "/ta.png",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mo.svg", "/rq.svg"],
  //   link: "https://teacher-agent.vercel.app/?show=true",
  //   slug: "teacher-agent",
  //   fullDescription: "المساعد في متابعة العملية التعليمية يساعد المدارس والمعلمين على إدارة العملية التعليمية بكفاءة، ومتابعة أداء الطلاب والمعلمين، وتحقيق أقصى استفادة من التقنيات الحديثة في التعليم.",
  //   sections: [],
  //   tools: {
  //     stacks: [{
  //       title: "frontend stack",
  //       tools: [
  //         { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
  //         { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
  //         { name: "TypeScript", icon: "/icons/ts.svg", description: "Types & Safety" },
  //         { name: "TailwindCSS", icon: "/icons/tail.svg", description: "Utility-first styling" },
  //         { name: "Framer Motion", icon: "/icons/fm.svg", description: "Animations" },
  //         { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
  //         { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
  //       ],
  //     }],
  //   },
  // },
  
  {
    id: 5,
    title: "Bezrah",
    des: " Eco-Friendly Roofing & Planting Solutions Discover sustainable, eco-friendly roofing solutions and innovative planting techniques with Bezrah. Elevate your spaces with green, energy-efficient designs.",
    img: "/bezrah.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.png", "/mui.svg"],
    link: "https://www.bezrah.org/",
    slug: "bezrah",
    fullDescription: "Eco-Friendly Roofing & Planting Solutions Discover sustainable, eco-friendly roofing solutions and innovative planting techniques with Bezrah. Elevate your spaces with green, energy-efficient designs.",
    sections: [],
    tools: {
      stacks: [{
        title: "frontend stack",
        tools: [
          { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
          { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
          { name: "TypeScript", icon: "/icons/ts.svg", description: "Types & Safety" },
          { name: "TailwindCSS", icon: "/icons/tail.svg", description: "Utility-first styling" },
          { name: "Framer Motion", icon: "/icons/fm.svg", description: "Animations" },
          { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
          { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
        ],
      }],
    },
  },
  // {
  //   id: 1,
  //   title: "Access Point - E-commerce",
  //   des: "Displaying and selling products, The user logs in. There is also a control panel for the admin. There are also comments on the products on the product information page and the filter system for the products",
  //   img: "/aP.png",
  //   // img: "/p1.svg",
  //   iconLists: ["/re.svg", "/bo.png", "/js.png", "/fm.png", "/fi.png"],
  //   link: "https://ahmed15ayman7.github.io/access-point",
  //   slug: "access-point",
  //   fullDescription: "Displaying and selling products, The user logs in. There is also a control panel for the admin. There are also comments on the products on the product information page and the filter system for the products",
  //   sections: [],
  //   tools: {
  //     stacks: [{
  //       title: "frontend stack",
  //       tools: [
  //         { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
  //         { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
  //         { name: "TypeScript", icon: "/icons/ts.svg", description: "Types & Safety" },
  //         { name: "TailwindCSS", icon: "/icons/tail.svg", description: "Utility-first styling" },
  //         { name: "Framer Motion", icon: "/icons/fm.svg", description: "Animations" },
  //         { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
  //         { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
  //       ],
  //     }],
  //   },
  // },
];
export const activity = [
  {
    id: 1,
    title: "Tecnical Front-End in GDSC",
    title2: "GDSC",
    des: "Google Developer Student Clubs  Benha University, 1 frest global in my season",
    img: "/ac1.jpeg",
    // img: "/p1.svg",
    iconLists: ["/html.png", "/css.png", "/js.png", "/bo.png"],
    link: "https://www.linkedin.com/posts/ahmed15ayman7_1stabrglobal-gdsc-frontend-activity-7249420048518234113-XOiK?utm_source=share&utm_medium=member_desktop",
  },
  // {
  //   id: 2,
  //   title: "Orgnizer in CODEAVOUR",
  //   title2: "CODEAVOUR",
  //   des: "It is a competition for children in the field of artificial intelligence.",
  //   img: "/ca2.png",
  //   iconLists: ["/org.png", "/wt.png"],
  //   link: "#activity",
  //   not: true,
  // },
  {
    id: 2,
    title: "International Academy For Continuing Education",
    title2: "IAFCE",
    des: "Recognition from IAFCE for a successful 8-month partnership, contributing to the development of their LMS system and supporting multi-branch academic operations.",
    img: "/ia-act.JPG",
    iconLists: ["/org.png", "/wt.png"],
    link: "https://www.linkedin.com/posts/ahmed15ayman7_nextjs-nestjs-lms-ugcPost-7423843739309260800-d4QP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2602MB3h5-BE6QSILtzmpfObG8LYBBAeE",
    not: true,
  },
  {
    id: 3,
    title: "Chef Nadia Elsayed Platform — Phase 1",
    title2: "NADIA ELSAYED",
    des: "Led the engineering team delivering Phase 1 of Chef Nadia El-Sayed's cooking platform — Flutter app, .NET 10 API, admin console and an Egyptian-Arabic AI assistant — presented live to the client.",
    img: "/nadia-act.webp",
    iconLists: ["/org.png", "/wt.png"],
    link: "/projects/nadia-elsayed",
    not: true,
  },
];

export const testimonials = [
  {
    quote: `Now it's time to introduce you to our team 🌟
The first and most wonderful person in it is the programmer Ahmed Ayman ❤️
A glimpse of him: Ayman is a Banha accounting graduate. He started his career in programming in the first years of college and was one of the first people to believe in the idea and love it. His work and effort in the project cannot be described as precise and perfect 🎖`,
    name: "SPORTON",
    title: "Director of SPORTON",
    img: "/sporton2.png",
  },
  {
    quote: `We would like to express our sincere gratitude and appreciation for the exceptional efforts you put into creating the website for our company. Your vision and creativity in design and development were key to the success of this project.
The success of the new website would not have been possible without your dedication and hard work, and we would like to emphasize that the site reflects a high level of professionalism and facilitates our clients' interaction with our services.
We are proud of the results we have achieved together and look forward to more accomplishments in the future.
Thank you once again for your outstanding efforts.`,
    name: "halulalemkan",
    title: "Director of halulalemkan",
    img: "/halulalemkan.jpg",
  },
  {
    quote: `بصراحة أنا مكنتش متخيلة إن اللي في دماغي يطلع بالشكل ده.
أحمد سمعني كويس، وفهم إن الوصفة مش مجرد فيديو — دي طريقة بتتنقل من إيد لإيد.
كل تفصيلة طلبتها لقيتها اتعملت، وكل مرة بيوريني حاجة جديدة بفرح بيها زي أول كيكة نجحت معايا.
شغل نضيف وصبر وذوق، وربنا يوفقك يا أحمد.`,
    name: "الشيف نادية السيد",
    title: "Chef & Owner, Capital Crest Properties | Cairo",
    img: "/people/nadia-elsayed.webp",
    dir: "rtl" as const,
  },
  {
    quote: `بسم الله الرحمن الرحيم، والحمد لله الذي يسّر لنا من الكفاءات من يُعتمد عليه.
المهندس أحمد أيمن من الشباب الذين جمعوا بين الإتقان في العمل والأمانة في الأداء، وهما أصلٌ لا يستقيم عملٌ مؤسسي بدونهما.
عمل معنا على منظومة iFACE Global Board، فأظهر فهماً عميقاً لطبيعة العمل المؤسسي الدولي، والتزاماً بالمواعيد، وحرصاً على الجودة في كل تفصيلة.
نسأل الله له التوفيق والسداد، وأن يبارك في علمه وعمله.`,
    name: "د. محمد جابر",
    title: "Founder, iFACE Global Board",
    img: "/people/mohamed-gaber.webp",
    dir: "rtl" as const,
  },
  {
    quote: `أنا مكنتش أعرف أحمد قبل مشروع منصة الكتب، ده كان أول تعامل بينا.
ومن الأسابيع الأولى عرفت إني قدام حد بيشتغل بضمير: بيسأل كويس قبل ما ينفّذ، وبيسلّم في ميعاده، وبيهتم بالتفصيلة الصغيرة اللي محدش هياخد باله منها.
المنصة طلعت أجمل من اللي كان في بالي، وده شغل مش كل يوم تلاقيه.
بارك الله فيك يا ابني، وربنا يعلّي قدرك.`,
    name: "أ. عاطف مظهر",
    title: "Senior Journalist, Founder of Mawhopon",
    img: "/people/atef-mazhar.webp",
    dir: "rtl" as const,
  },
  {
    quote: `أنا رشّحت أحمد لمشروع الشيف نادية وأنا مطمّن تماماً، والنتيجة أكدت إن الترشيح كان في محله.
من ناحية الشغل: التزام بالمواعيد، تواصل واضح، وقدرة على إدارة فريق وتسليم منتج متكامل مش مجرد كود.
ومن ناحية شخصية: راجل كلمته كلمة، وده اللي بيخلي الواحد يحط اسمه ضمان عليه قدام عميل.
فخور بيك يا صديقي، ومستني الجاي.`,
    name: "م. زكريا الشال",
    title: "President, Real Agency",
    img: "/people/zakaria-elshal.webp",
    dir: "rtl" as const,
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  // {
  //   id: 3,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// Shown on the home page, in this order. Everything else lives on /projects.
export const featuredProjectSlugs = [
  "nadia-elsayed",
  "ifacegb",
  "booksplatform",
  "sporton",
  "aiaetar",
  "iafce",
];

export const featuredProjects: Project[] = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export const people = [
  {
    id: 1,
    name: "Dr. Mohamed Gaber",
    role: "Founder, iFACE Global Board",
    desc: "Founder of the iFACE international board for accreditation and training across the United States and the Middle East. I worked with him on building iFACE Global Board's platform, from the public site to the sovereign enterprise OS behind it.",
    img: "/people/mohamed-gaber.webp",
    link: "/projects/ifacegb",
  },
  {
    id: 2,
    name: "Atef Mazhar",
    role: "Senior Journalist, Founder of Mawhopon",
    desc: "A senior journalist and multiple award winner, including Best Website in the Middle East in 2009 for his platform Mawhopon. We met over Books Platform, and he became a mentor whose guidance reached far beyond the work itself.",
    img: "/people/atef-mazhar.webp",
    link: "/projects/booksplatform",
  },
  {
    id: 3,
    name: "Eng. Zakaria Elshal",
    role: "President, Real Agency",
    desc: "Head of Real Agency for real estate marketing, and the reason the Chef Nadia El-Sayed project reached me in the first place. I owe him a great deal for that trust and introduction.",
    img: "/people/zakaria-elshal.webp",
    link: "/projects/nadia-elsayed",
  },
  {
    id: 4,
    name: "Chef Nadia Elsayed",
    role: "Chef & Owner, Capital Crest Properties | Cairo",
    desc: "Chef and owner of Capital Crest Properties in Cairo, and the owner of the Chef Nadia website and mobile app currently in development. A pleasure to build her platform around her own kitchen and voice.",
    img: "/people/nadia-elsayed.webp",
    link: "/projects/nadia-elsayed",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    link: "/#projects",
    desc: "I developed SPORTON using Next.js, enhancing its interactivity. I have integrated various features like real-time updates and dynamic content delivery, making the user experience smooth and engaging.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer",
    link: "/#projects",
    desc: "I developed the backend for SPORTON , halulalemkan and other projects using the Next.js API ,Node js , Nest.js  and improving interactivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    link: "/#testimonials",
    title: "Freelance Web Dev Project",
    desc: "Led the development of a client's website, from initial concept to deployment on various hosting sites.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Technical Front-End Dev",
    link: "/#activity",
    desc: "I trained more than 350 students and supervised them in many projects at GDSC Benha and this season was the first in the world.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ahmed15ayman7",
  },
  {
    id: 2,
    img: "/upw.svg",
    link: "https://www.upwork.com/freelancers/~0116e9b87e2866fcf9?mp_source=share",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmed15ayman7",
  },
];

