export interface Tool {
  name: string;
  icon?: string;
  description?: string;
}
export interface Stack {
  title: string;      // مثال: Frontend Stack
  notes?: string;     // ملاحظات تقنية
  tools: Tool[];
}
export interface ProjectTools {
  stacks: Stack[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  img: string,
  ogImage?: string,
  iconLists: string[],
  link: string,
  des: string;
  fullDescription: string;
  githubUrl?: string;
  sections: ProjectSection[];
  tools: ProjectTools;
}
export interface ProjectSection {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;

  // صور عامة للقسم (Landing القسم)
  images?: SectionImage[];

  // فيديو عام للقسم
  youtubeVideo?: YoutubeVideo;

  pages: SectionPage[];
}
export interface SectionPage {
  id: number;
  title: string;
  slug: string;
  description: string;
  ogImage?: string;
  images: PageImage[];

  youtubeVideo?: YoutubeVideo;

  features?: string[]; // نقاط سريعة
}
export interface SectionImage {
  id: number;
  src: string;
  alt: string;
}

export interface PageImage {
  id: number;
  src: string;
  alt: string;
}
export interface YoutubeVideo {
  title: string;
  youtubeId: string;
}
export const iafce: Project = {
  id: 8,
  title: "IAFCE Academy System",
  slug: "iafce",
  img: "/projects/iafce/cover.png",
  ogImage: "/projects/iafce/og.jpg",
  iconLists: [
    "/next.svg",
    "/tail.svg",
    "/ts.svg",
    "/fm.png",
    "/NestJS.svg",
    "/prisma.svg",
    "/Postgresql.svg",
  ],
  link: "https://iafce.net",
  des: "سيستم أكاديمية متكامل مبني بـ Monorepo ومقسّم إلى 12 تطبيق لتغطية جميع أدوار الأكاديمية (طالب/محاضر/إدارة/محاسبة/مبيعات… إلخ).",
  fullDescription:
    "IAFCE هو نظام إدارة أكاديمية شامل يعمل بأسلوب Monorepo ويحتوي على 12 تطبيق (Landing, Auth, Student, Instructor, Admin… إلخ) بالإضافة إلى Backend يخدم جميع التطبيقات. يوفّر إدارة الكورسات والاشتراكات والامتحانات والبث المباشر والحضور والشهادات والمجتمعات والمقالات والفعاليات والمدفوعات والرواتب والخزينة والأقساط مع صلاحيات متعددة بحسب الدور والفرع.",

  tools: {
    stacks: [
      {
        title: "Frontend Stack",
        notes:
          "واجهات متعددة حسب الدور (Landing/Student/Instructor/Admin...) مع تصميم متجاوب وتجربة استخدام غنية.",
        tools: [
          { name: "Next.js", description: "Framework لتطبيقات الويب (SSR/SSG)" },
          { name: "React.js", description: "UI Library لبناء الواجهات" },
          { name: "TypeScript", description: "Typing وتحسين جودة الكود" },
          { name: "Tailwind CSS", description: "Utility-first CSS" },
          { name: "Framer Motion", description: "Animations وتجارب تفاعلية" },
          { name: "React Icons", description: "أيقونات جاهزة للواجهات" },
          { name: "React Query", description: "Data fetching/caching وإدارة حالة السيرفر" },
        ],
      },
      {
        title: "Backend Stack",
        notes:
          "Backend مركزي يخدم جميع التطبيقات مع توثيق API وقاعدة بيانات منظمة (أكثر من 60 Module/Table).",
        tools: [
          { name: "NestJS", description: "Backend framework بنمط Modules/DI" },
          { name: "TypeScript", description: "Typing على مستوى السيرفر" },
          { name: "Prisma ORM", description: "ORM لإدارة الـ DB و migrations" },
          { name: "PostgreSQL", description: "قاعدة بيانات علائقية" },
          { name: "Swagger", description: "توثيق API" },
        ],
      },
    ],
  },

  sections: [
    {
      id: 1,
      title: "Landing App",
      slug: "landing-app",
      summary:
        "واجهة تعريفية كاملة بالأكاديمية: كورسات، محاضرين، محتوى، تواصل، سياسات، تحقق من الشهادات.",
      description:
        "تطبيق الـ Landing يعرض كل ما يخص الأكاديمية للزوار: صفحات تعريف، عرض الكورسات والمحاضرين، المقالات والفعاليات، صفحات السياسات والشروط، التواصل، والتحقق من الشهادات.",
      images: [],
      youtubeVideo: {
        title: "Landing App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "c0BniUe3kbk",
      },
      pages: [
        {
          id: 1,
          title: "Overview",
          slug: "overview",
          description:
            "الصفحات الأساسية: تعريف الأكاديمية، طرق التواصل، عرض الكورسات والمحاضرين، السياسات والشروط، الفعاليات والمقالات، والتحقق من الشهادات.",
          images: [],
          features: [
            "Courses Listing",
            "Instructors Listing",
            "Blogs & Events",
            "Privacy Policy / Terms",
            "Certificate Verification",
            "Contact & Messages",
          ],
        },
      ],
    },

    {
      id: 2,
      title: "Auth App",
      slug: "auth-app",
      summary: "تسجيل/دخول للطالب والمحاضر + تغيير كلمة المرور.",
      description:
        "تطبيق المصادقة الخاص بالطلاب والمحاضرين فقط ويشمل التسجيل وتسجيل الدخول وإدارة كلمة المرور.",
      images: [],
      pages: [
        {
          id: 1,
          title: "Registration & Login",
          slug: "registration-login",
          description: "تسجيل طالب/محاضر وتسجيل الدخول والتحقق من البيانات.",
          images: [],
          features: ["Student Signup", "Instructor Signup", "Login"],
        },
        {
          id: 2,
          title: "Password Management",
          slug: "password-management",
          description: "تغيير/استعادة كلمة المرور.",
          images: [],
          features: ["Change Password", "Reset/Forget Password"],
        },
      ],
    },

    {
      id: 3,
      title: "Student App",
      slug: "student-app",
      summary:
        "لوحة الطالب: كورساتي، التقدم، بث مباشر، مجموعات، امتحانات، نتائج، مجتمع، شهادات.",
      description:
        "يوفر تحكم كامل للطالب داخل الأكاديمية: متابعة الكورسات المشترك بها، قياس التقدم (حضور/امتحانات)، البث المباشر، المجموعات، الامتحانات والنتائج، مجتمع النقاشات، والشهادات.",
      images: [],
      youtubeVideo: {
        title: "Student App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "5V6xEDftDLc",
      },
      pages: [
        {
          id: 1,
          title: "My Courses & Progress",
          slug: "my-courses-progress",
          description:
            "عرض الكورسات المشترك بها الطالب + التقدم العام والتقدم داخل كل كورس بناءً على الحضور والامتحانات.",
          images: [],
          features: ["Enrolled Courses", "Overall Progress", "Per-course Progress"],
        },
        {
          id: 2,
          title: "Live Streaming",
          slug: "live-streaming",
          description: "حضور البث المباشر للدروس من داخل التطبيق.",
          images: [],
          features: ["Join Live Lesson", "Attendance via Live"],
        },
        {
          id: 3,
          title: "Groups",
          slug: "groups",
          description:
            "المجموعات الخاصة بالكورسات المشترك بها الطالب والتفاعل داخلها.",
          images: [],
          features: ["Course Groups", "Group Feed/Interaction"],
        },
        {
          id: 4,
          title: "Exams",
          slug: "exams",
          description: "عرض الامتحانات المفتوحة حالياً وأداؤها.",
          images: [],
          features: ["Open Exams", "Take Exam"],
        },
        {
          id: 5,
          title: "Exam Results",
          slug: "exam-results",
          description:
            "عرض نتائج الامتحانات مع توضيح الأسئلة الخاطئة للطالب.",
          images: [],
          features: ["Results", "Wrong Answers Review"],
        },
        {
          id: 6,
          title: "Community",
          slug: "community",
          description: "مساحة نقاشات بين الطلاب والمحاضرين.",
          images: [],
          features: ["Discussions", "Q&A"],
        },
        {
          id: 7,
          title: "Certificates",
          slug: "certificates",
          description: "عرض الشهادات التي حصل عليها الطالب.",
          images: [],
          features: ["My Certificates", "Certificate Details"],
        },
        {
          id: 8,
          title: "Profile",
          slug: "profile",
          description: "ملف الطالب الشخصي وإمكانية تحديث البيانات.",
          images: [],
          features: ["View Profile", "Edit Profile"],
        },
      ],
    },

    {
      id: 4,
      title: "Instructor App",
      slug: "instructor-app",
      summary:
        "لوحة المحاضر: إدارة كورسات/مجموعات، تقدم الطلاب، بث مباشر، امتحانات ونتائج، حضور، اجتماعات، ملف شخصي ورواتب.",
      description:
        "تطبيق المحاضر لإدارة الكورسات والمجموعات ومتابعة تقدم الطلاب، وإدارة الامتحانات والنتائج والحضور، بالإضافة للاجتماعات والملف الشخصي وعقد العمل والبنود والرواتب والمكاسب.",
      images: [],
      youtubeVideo: {
        title: "Instructor App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "0stcEgWTsHU",
      },
      pages: [
        {
          id: 1,
          title: "Courses & Groups",
          slug: "courses-groups",
          description: "إدارة كورسات المحاضر ومجموعاته ومتابعة طلابه.",
          images: [],
          features: ["Manage Courses", "Manage Groups", "Track Students"],
        },
        {
          id: 2,
          title: "Live Streaming",
          slug: "live-streaming",
          description:
            "حضور/متابعة المحاضرة الأونلاين (يتم إنشاؤها من السكرتارية) والحضور عبر الموقع.",
          images: [],
          features: ["Join Live Session", "Track Attendance"],
        },
        {
          id: 3,
          title: "Exams & Results",
          slug: "exams-results",
          description: "إنشاء امتحانات لكل درس أو امتحان شامل + عرض نتائج الطلاب.",
          images: [],
          features: ["Create Exams", "Lesson Exams", "Final Exams", "Results"],
        },
        {
          id: 4,
          title: "Attendance",
          slug: "attendance",
          description: "متابعة حضور الطلاب للدروس والمحاضرات الأونلاين.",
          images: [],
          features: ["Attendance Tracking", "Online Attendance"],
        },
        {
          id: 5,
          title: "Meetings",
          slug: "meetings",
          description: "اجتماعات لمناقشة أسئلة الطلبة.",
          images: [],
          features: ["Meetings", "Student Questions"],
        },
        {
          id: 6,
          title: "Instructor Profile & Contract",
          slug: "profile-contract",
          description:
            "ملف المحاضر: بيانات شخصية + بيانات عقد العمل والبنود + الرواتب والمكاسب.",
          images: [],
          features: ["Personal Info", "Contract Info", "Earnings/Salary"],
        },
      ],
    },

    {
      id: 5,
      title: "Auth-Admin App",
      slug: "auth-admin-app",
      summary: "تسجيل دخول مخصص لتطبيقات الإدارة فقط.",
      description:
        "بوابة مصادقة منفصلة خاصة بتطبيقات الإدارة (Admin/Secretariat/Public/Accountant/Sales/Super).",
      images: [],

      pages: [
        {
          id: 1,
          title: "Admin Login",
          slug: "admin-login",
          description: "تسجيل دخول آمن لمستخدمي تطبيقات الإدارة.",
          images: [],
          features: ["Role-based Login", "Admin Session"],
        },
      ],
    },

    {
      id: 6,
      title: "Admin App",
      slug: "admin-app",
      summary: "إدارة جزئية للسيستم على مستوى الفرع (مدير الفرع).",
      description:
        "لوحة إدارة خاصة بمدير كل فرع لمتابعة الموظفين والكورسات والمحاضرين وإدارة العمليات الأساسية.",
      images: [],
      youtubeVideo: {
        title: "Admin App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "eaTW6uiC2uw",
      },
      pages: [
        {
          id: 1,
          title: "Branch Management Dashboard",
          slug: "branch-dashboard",
          description: "متابعة الموظفين والكورسات والمحاضرين على مستوى الفرع.",
          images: [],
          features: ["Employees", "Courses", "Instructors"],
        },
      ],
    },

    {
      id: 7,
      title: "Secretariat App",
      slug: "secretariat-app",
      summary:
        "سكرتارية الفرع: إشعارات، تقويم يومي، مدفوعات، أقساط، اجتماعات، طلاب، كورسات/محتوى، اشتراكات، محاضرين، شهادات.",
      description:
        "تطبيق شامل للسكرتارية داخل كل فرع لإدارة التشغيل اليومي: نشاط/إشعارات، تقويم الامتحانات والمحاضرات، المدفوعات والأقساط، إدارة الطلاب والكورسات والمحتوى والدروس والامتحانات، الاشتراكات، المحاضرين، واعتماد الشهادات.",
      images: [],
      youtubeVideo: {
        title: "Secretariat App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "7_9v2ZVnUG0",
      },
      pages: [
        {
          id: 1,
          title: "Dashboard & Notifications",
          slug: "dashboard-notifications",
          description:
            "النشاط الأخير (إشعارات الشهادات/الاشتراكات/طلبات الرواتب) + إحصائيات الكورسات والاشتراكات.",
          images: [],
          features: ["Latest Activity", "Certificates Alerts", "Subscriptions Alerts", "Stats"],
        },
        {
          id: 2,
          title: "Daily Calendar",
          slug: "daily-calendar",
          description: "تقويم الامتحانات والمحاضرات الأونلاين والملاحظات اليومية.",
          images: [],
          features: ["Exams Calendar", "Online Lessons Calendar", "Daily Notes"],
        },
        {
          id: 3,
          title: "Payments & Treasury Operations",
          slug: "payments",
          description: "مدفوعات (اشتراكات/مصروفات/إيرادات/فواتير/رواتب).",
          images: [],
          features: ["Subscriptions Payments", "Expenses", "Revenues", "Invoices", "Salaries"],
        },
        {
          id: 4,
          title: "Installments",
          slug: "installments",
          description: "إدارة أقساط اشتراكات الطلاب ومواعيد الدفع.",
          images: [],
          features: ["Installment Plans", "Due Dates", "Follow-up"],
        },
        {
          id: 5,
          title: "Students",
          slug: "students",
          description: "عرض طلاب الفرع + تسجيل طلاب جدد + تعديل البيانات.",
          images: [],
          features: ["List Students", "Create Student", "Edit Student"],
        },
        {
          id: 6,
          title: "Courses & Content",
          slug: "courses-content",
          description:
            "تفاصيل الكورسات + إضافة/تعديل + تعديل المحتوى + إنشاء الدروس والامتحانات.",
          images: [],
          features: ["Create/Edit Course", "Lessons", "Exams"],
        },
        {
          id: 7,
          title: "Subscriptions",
          slug: "subscriptions",
          description: "اشتراكات الطلاب في الكورسات وإدارتها.",
          images: [],
          features: ["Create Subscription", "Manage Subscriptions"],
        },
        {
          id: 8,
          title: "Instructors",
          slug: "instructors",
          description: "بيانات المحاضرين + تسجيل محاضرين جدد.",
          images: [],
          features: ["List Instructors", "Create Instructor", "Edit Instructor"],
        },
        {
          id: 9,
          title: "Certificates Approval",
          slug: "certificates-approval",
          description: "إدارة شهادات الطلاب والموافقة على إصدار الشهادة.",
          images: [],
          features: ["Approve Certificate", "Certificate Requests"],
        },
        {
          id: 10,
          title: "Meetings",
          slug: "meetings",
          description: "إنشاء اجتماعات للموظفين والمحاضرين.",
          images: [],
          features: ["Create Meeting", "Manage Meetings"],
        },
      ],
    },

    {
      id: 8,
      title: "Public (PR) App",
      slug: "public-app",
      summary:
        "إدارة العلاقات العامة للفرع: رسائل الزوار، مقالات، فعاليات، مجتمعات، وبيانات تواصل الطلاب والمحاضرين.",
      description:
        "تطبيق العلاقات العامة الخاص بكل فرع لإدارة الرسائل الواردة من الزوار، المقالات والفعاليات المعروضة على الـ Landing، وإنشاء/إدارة المجتمعات، مع عرض بيانات التواصل للطلاب والمحاضرين.",
      images: [],
      youtubeVideo: {
        title: "Public App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "puRbt1Eyikc",
      },
      pages: [
        {
          id: 1,
          title: "Dashboard",
          slug: "dashboard",
          description:
            "إحصائيات المقالات والفعاليات والرسائل المستلمة والمجتمعات.",
          images: [],
          features: ["Articles Stats", "Events Stats", "Visitor Messages Stats", "Communities Stats"],
        },
        {
          id: 2,
          title: "Students Contacts",
          slug: "students-contacts",
          description: "عرض معلومات التواصل لكل طالب للتواصل معه.",
          images: [],
          features: ["Student Contact Info", "Search/Filter"],
        },
        {
          id: 3,
          title: "Instructors Contacts",
          slug: "instructors-contacts",
          description: "عرض معلومات التواصل لكل محاضر للتواصل معه.",
          images: [],
          features: ["Instructor Contact Info", "Search/Filter"],
        },
        {
          id: 4,
          title: "Visitor Messages",
          slug: "visitor-messages",
          description: "إدارة تواصل الزوار وتخزين الرسائل الواردة.",
          images: [],
          features: ["Inbox", "Message Follow-up", "Notes"],
        },
        {
          id: 5,
          title: "Articles",
          slug: "articles",
          description: "إدارة مقالات الفرع/الأكاديمية المعروضة للزوار.",
          images: [],
          features: ["Create Article", "Edit/Publish", "Categories/Tags (حسب التنفيذ)"],
        },
        {
          id: 6,
          title: "Events",
          slug: "events",
          description: "إدارة فعاليات (Events) السنة.",
          images: [],
          features: ["Create Event", "Schedule", "Publish"],
        },
        {
          id: 7,
          title: "Communities",
          slug: "communities",
          description: "إنشاء وإدارة المجتمعات لربط الطلاب بالمحاضرين.",
          images: [],
          features: ["Create Community", "Members Management"],
        },
      ],
    },

    {
      id: 9,
      title: "Accountant App",
      slug: "accountant-app",
      summary:
        "تطبيق المحاسبين: رصيد الخزينة، معاملات مالية، رواتب، مدفوعات، أقساط، دخل الكورسات، اشتراكات ومحاضرين.",
      description:
        "يوفّر لوحات وتقارير مالية لكل فرع: خزينة، إيرادات، مصروفات، رواتب، أقساط، وتحليل دخل الكورسات والاشتراكات.",
      images: [],
      youtubeVideo: {
        title: "Accountant App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "yMZ6fU7HYfc",
      },
      pages: [
        {
          id: 1,
          title: "Finance Dashboard",
          slug: "finance-dashboard",
          description:
            "رصيد الخزينة لكل فرع + إجمالي الإيرادات + عدد الفروع + إحصائيات الإيرادات الشهرية وترتيب المحاضرين من حيث الدخل.",
          images: [],
          features: [
            "Branch Treasury Balance",
            "Monthly Revenue Stats",
            "Branch Revenues",
            "Top Instructors by Income",
          ],
        },
        {
          id: 2,
          title: "Treasury",
          slug: "treasury",
          description:
            "تفاصيل المعاملات المالية لكل فرع (مدفوعات/أقساط/المتاح).",
          images: [],
          features: ["Transactions", "Available Balance", "Branch Filtering"],
        },
        {
          id: 3,
          title: "Salaries",
          slug: "salaries",
          description: "إضافة رواتب المحاضرين ومتابعة الاستلام/الصرف.",
          images: [],
          features: ["Create Salary", "Track Payouts"],
        },
        {
          id: 4,
          title: "Payments",
          slug: "payments",
          description:
            "إدارة المدفوعات لكل فرع (اشتراكات/إيرادات/مصروفات/فواتير/رواتب).",
          images: [],
          features: ["Revenues", "Expenses", "Invoices", "Subscriptions", "Salaries"],
        },
        {
          id: 5,
          title: "Installments",
          slug: "installments",
          description: "متابعة أقساط الاشتراكات ومعاد الدفع.",
          images: [],
          features: ["Due Dates", "Payment Tracking"],
        },
        {
          id: 6,
          title: "Courses Income",
          slug: "courses-income",
          description: "تفاصيل دخل كل كورس.",
          images: [],
          features: ["Course Revenue", "Filtering/Reports"],
        },
        {
          id: 7,
          title: "Subscriptions Details",
          slug: "subscriptions-details",
          description: "تفاصيل إضافية عن اشتراكات الطلاب.",
          images: [],
          features: ["Subscription Breakdown", "Student/Branch Context"],
        },
        {
          id: 8,
          title: "Instructors Finance",
          slug: "instructors-finance",
          description: "عرض رواتب المحاضرين وبياناتهم المالية.",
          images: [],
          features: ["Instructor Salaries", "History"],
        },
      ],
    },

    {
      id: 10,
      title: "Sales App",
      slug: "sales-app",
      summary:
        "تطبيق التلي سيلز: عملاء، متابعة اهتمام، تقارير يومية/شهرية، تنافسية الموظفين، وتصدير Excel.",
      description:
        "مخصص لفريق المبيعات لإدارة العملاء (Leads)، متابعة التفاوض، قياس مستوى الاهتمام، تقارير الأداء، وعرض أفضل الكورسات والموظفين.",
      images: [],
      youtubeVideo: {
        title: "Sales App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "lp7LNtWBIP4",
      },
      pages: [
        {
          id: 1,
          title: "Sales Dashboard",
          slug: "sales-dashboard",
          description:
            "إجمالي العملاء، المتفق عليهم، تحت المتابعة، متوسط الاهتمام، أعلى الكورسات اهتمامًا، ولوحة تنافسية بين موظفين المبيعات.",
          images: [],
          features: [
            "Total Leads",
            "Won Deals vs Follow-ups",
            "Interest Average",
            "Top Interested Courses",
            "Sales Leaderboard",
          ],
        },
        {
          id: 2,
          title: "Customers (Leads)",
          slug: "customers",
          description:
            "قائمة العملاء + إضافة عميل + تصدير Excel + عرض تفاصيل العميل وسجل المتابعات + إضافة متابعة.",
          images: [],
          features: [
            "Create Lead",
            "Lead Details",
            "Follow-ups Timeline",
            "Export to Excel",
          ],
        },
        {
          id: 3,
          title: "Reports",
          slug: "reports",
          description:
            "تقارير: الأداء اليومي، الاتفاقات الشهرية، تقرير العملاء، تقرير الكورسات وعدد العملاء المهتمين.",
          images: [],
          features: ["Daily Performance", "Monthly Deals", "Customers Report", "Courses Interest Report"],
        },
      ],
    },

    {
      id: 11,
      title: "Super App",
      slug: "super-app",
      summary:
        "صلاحيات كاملة لرئيس الأكاديمية لإدارة كل شيء: فروع، موظفين، نشاط، خزينة، رواتب، سحب، مدفوعات، أقساط، طلاب، اشتراكات، محاضرين، كورسات، بث، شهادات، اجتماعات، فعاليات، مقالات، مجتمعات، رسائل، إشعارات، ملف شخصي.",
      description:
        "التطبيق الأعلى صلاحية (Super Admin/President) للتحكم في النظام بالكامل على مستوى كل الفروع مع إحصائيات شاملة وإدارة كاملة لجميع الوحدات.",
      images: [],
      youtubeVideo: {
        title: "Super App | الأكاديمية الدولية للتعليم المستمر (IAFCE)",
        youtubeId: "Pj086pCr1GY",
      },
      pages: [
        {
          id: 1,
          title: "Global Dashboard",
          slug: "global-dashboard",
          description:
            "إحصائيات الأكاديمية: الرصيد الإجمالي، المتاح لكل فرع، الإيرادات/المصروفات الشهرية، الطلاب، الكورسات، المحاضرين، الاشتراكات النشطة + نشاط/إشعارات.",
          images: [],
          features: [
            "Overall Balance",
            "Branch Available Balance",
            "Monthly Revenue/Expenses",
            "Students/Courses/Instructors/Subscriptions Stats",
            "System Notifications Feed",
          ],
        },
        {
          id: 2,
          title: "Branches",
          slug: "branches",
          description:
            "عرض وإدارة الفروع بالكامل (طلاب/اشتراكات/مدفوعات/شهادات/أقساط/فعاليات/محاضرين) + إضافة/تعديل فرع.",
          images: [],
          features: ["Create Branch", "Edit Branch", "Branch Insights"],
        },
        {
          id: 3,
          title: "Admins & Roles",
          slug: "admins-roles",
          description:
            "إنشاء/تعديل حسابات الموظفين والإداريين والتحكم في الأدوار والصلاحيات.",
          images: [],
          features: ["Create Admin", "Edit Admin", "Role Management"],
        },
        {
          id: 4,
          title: "Admins Activity",
          slug: "admins-activity",
          description:
            "إحصائيات وتفاصيل نشاط كل قسم وكل حساب لمتابعة الأداء.",
          images: [],
          features: ["Audit/Activity Logs", "Department Stats"],
        },
        {
          id: 5,
          title: "Finance (Treasury/Payments/Installments)",
          slug: "finance",
          description:
            "الخزينة، الرواتب، طلبات السحب، المدفوعات، الأقساط على مستوى جميع الفروع.",
          images: [],
          features: ["Treasury", "Salaries", "Withdraw Requests", "Payments", "Installments"],
        },
        {
          id: 6,
          title: "Academy Operations",
          slug: "academy-operations",
          description:
            "طلاب، اشتراكات، محاضرين ورواتبهم، كورسات ومحتوى ودروس وامتحانات، بث مباشر ومتابعة الحضور، شهادات، اجتماعات.",
          images: [],
          features: [
            "Students",
            "Subscriptions",
            "Instructors & Payroll",
            "Courses & Content",
            "Live Streaming Attendance",
            "Certificates",
            "Meetings",
          ],
        },
        {
          id: 7,
          title: "Content & Community",
          slug: "content-community",
          description:
            "فعاليات، مقالات، مجتمعات، إدارة تواصل الزوار، إشعارات النظام.",
          images: [],
          features: ["Events", "Articles", "Communities", "Visitor Messages", "System Notifications"],
        },
        {
          id: 8,
          title: "Profile",
          slug: "profile",
          description:
            "الملف الشخصي (موجود في كل التطبيقات): عرض البيانات وإمكانية التعديل.",
          images: [],
          features: ["View Profile", "Edit Profile"],
        },
      ],
    },

    {
      id: 12,
      title: "Backend (NestJS API)",
      slug: "backend",
      summary:
        "الواجهة الخلفية التي تخدم جميع تطبيقات النظام، بأكثر من 60 Module/Table.",
      description:
        "Backend مركزي مبني بـ NestJS + Prisma + PostgreSQL ويوفر APIs لكل خصائص النظام (Auth, Courses, Subscriptions, Exams, Live, Attendance, Payments, Salaries, Certificates, Articles, Events, Communities... إلخ) مع توثيق Swagger.",
      images: [{ id: 1, src: "/projects/sporton/backend/disktop/1.png", alt: "Backend overview" }],
      pages: [
        {
          id: 1,
          title: "Architecture & Modules",
          slug: "architecture-modules",
          description:
            "تنظيم النظام على شكل Modules (أكثر من 60) وجداول لتخزين وإدارة بيانات الأكاديمية.",
          images: [],
          features: ["Modular NestJS", "Prisma Schema", "60 Modules"],
        },
      ],
    },
  ],
};
export const sporton: Project = {
  id: 7,
  title: "Sporton",
  slug: "sporton",
  img: "/projects/sporton/cover.png",
  ogImage: "/projects/sporton/og.jpg",
  iconLists: [
    "/next.svg",
    "/re.svg",
    "/ts.svg",
    "/tail.svg",
    "/fm.svg",
    "/NestJS.svg",
    "/Postgresql.svg",
  ],
  link: "https://sporton.club",
  des: "منصة تواصل اجتماعي للرياضيين شبيهة بـ LinkedIn، مبنية كـ Monorepo وتضم عدة تطبيقات تخدم المستخدمين والإدارة والتحليلات والتسويق.",
  fullDescription:
    "Sporton هي منصة احترافية موجهة للرياضيين وكل الأطراف المرتبطة بالرياضة (لاعب/وكيل/مدرب/محلل أداء/نادي/شركة... إلخ). تم بناء النظام كـ Monorepo يحتوي على 8 تطبيقات: Landing، Auth، Home (المنصة الأساسية)، Auth-Admin، Monitor (تحليلات المنصة)، Marketing (إدارة الحملات والإعلانات)، Admin (قريباً)، بالإضافة إلى Backend يخدم جميع التطبيقات. المنصة تدعم إنشاء المحتوى والتفاعل والمحادثات والإشعارات والفرص والمتجر وإدارة الحساب والاشتراكات والدفع.",
  githubUrl: undefined,

  tools: {
    stacks: [
      {
        title: "Frontend Stack",
        notes: "Next.js + React مع TypeScript وواجهة سريعة قابلة للتوسع داخل Monorepo.",
        tools: [
          { name: "Next.js", icon: "/next.svg", description: "App Router / SSR / SEO" },
          { name: "React.js", icon: "/re.svg", description: "UI Components" },
          { name: "TypeScript", icon: "/ts.svg", description: "Types & Safety" },
          { name: "TailwindCSS", icon: "/tail.svg", description: "Utility-first styling" },
          { name: "Framer Motion", icon: "/fm.svg", description: "Animations" },
          { name: "React Icons", icon: "/react-icons.svg", description: "Icon library" },
          { name: "React Query", icon: "/react-query.svg", description: "Server state & caching" },
        ],
      },
      {
        title: "Backend Stack",
        notes: "API موحد يخدم جميع التطبيقات داخل الـ Monorepo.",
        tools: [
          { name: "NestJS", icon: "/NestJS.svg", description: "Backend framework" },
          { name: "TypeScript", icon: "/ts.svg", description: "Types & Safety" },
          { name: "Prisma ORM", icon: "/prisma.svg", description: "DB ORM & migrations" },
          { name: "PostgreSQL", icon: "/Postgresql.svg", description: "Relational database" },
          { name: "Swagger", icon: "/swagger.svg", description: "API documentation" },
        ],
      },
      {
        title: "Architecture",
        notes: "Monorepo يحتوي 8 تطبيقات + Backend بعدد كبير من الموديولات.",
        tools: [
          { name: "Monorepo", description: "Multiple apps in one repository (Landing/Auth/Home/Admin/etc.)" },
          { name: "Modular Backend", description: "أكثر من 140 Module/Table لتنظيم النظام" },
        ],
      },
    ],
  },

  sections: [
    {
      id: 1,
      title: "Landing App",
      slug: "landing-app",
      summary: "الواجهة العامة للمنصة (صفحة واحدة) لشرح Sporton وسياساتها والتواصل.",
      description:
        "تطبيق الـ Landing مسؤول عن تقديم المنصة بشكل عام: Hero يشرح الفكرة، من نحن، الرؤية والرسالة، المميزات، السياسات، الفرق بين الحسابات، وطرق التواصل.",
youtubeVideo:{
title:"Sporton – Landing Page | The Professional Network for Athletes",
youtubeId:"eUHDNPLkuao",
},
      images: [
        { id: 1, src: "/projects/sporton/landing/home/disktop/1.png", alt: "Landing page English" },
        { id: 2, src: "/projects/sporton/landing/home/disktop/2.png", alt: "Landing page English" },
        { id: 3, src: "/projects/sporton/landing/home/disktop/3.png", alt: "Landing page English" },
        { id: 5, src: "/projects/sporton/landing/home/disktop/5.png", alt: "Landing page English" },
        { id: 6, src: "/projects/sporton/landing/home/disktop/6.png", alt: "Landing page English" },
        { id: 8, src: "/projects/sporton/landing/home/disktop/8.png", alt: "Landing page English" },
        { id: 9, src: "/projects/sporton/landing/home/disktop/9.png", alt: "Landing page English" },
      ],
      
      pages: [
        {
          id: 1,
          title: "Landing (One Page)",
          slug: "landing",
          description:
            "صفحة واحدة تضم: Hero + من نحن + رؤيتنا ورسالتنا + مميزاتنا + سياسة الاسترجاع + سياسة الخصوصية + الفرق بين حسابات البرو والعادي + تواصل معنا.",
          ogImage: "/projects/sporton/landing/home/og.jpg",
          images: [
          { id: 1, src: "/projects/sporton/landing/home/disktop/1.png", alt: "Landing page English" },
            { id: 2, src: "/projects/sporton/landing/home/disktop/2.png", alt: "Landing page English" },
            { id: 3, src: "/projects/sporton/landing/home/disktop/3.png", alt: "Landing page English" },
            { id: 4, src: "/projects/sporton/landing/home/disktop/4.png", alt: "Landing page English" },
            { id: 5, src: "/projects/sporton/landing/home/disktop/5.png", alt: "Landing page English" },
            { id: 6, src: "/projects/sporton/landing/home/disktop/6.png", alt: "Landing page English" },
            { id: 7, src: "/projects/sporton/landing/home/disktop/7.png", alt: "Landing page English" },
            { id: 8, src: "/projects/sporton/landing/home/disktop/8.png", alt: "Landing page English" },
            { id: 9, src: "/projects/sporton/landing/home/disktop/9.png", alt: "Landing page English" },
            { id: 10, src: "/projects/sporton/landing/home/mobile/1.png", alt: "Landing page English" },
            { id: 11, src: "/projects/sporton/landing/home/mobile/2.png", alt: "Landing page English" },
            { id: 12, src: "/projects/sporton/landing/home/mobile/3.png", alt: "Landing page English" },
            { id: 13, src: "/projects/sporton/landing/home/mobile/4.png", alt: "Landing page English" },
            { id: 14, src: "/projects/sporton/landing/home/mobile/5.png", alt: "Landing page English" },
            { id: 15, src: "/projects/sporton/landing/home/mobile/6.png", alt: "Landing page English" },
            { id: 16, src: "/projects/sporton/landing/home/mobile/7.png", alt: "Landing page English" },
            { id: 17, src: "/projects/sporton/landing/home/mobile/8.png", alt: "Landing page English" },
            { id: 18, src: "/projects/sporton/landing/home/mobile/9.png", alt: "Landing page English" },
            { id: 19, src: "/projects/sporton/landing/home/mobile/10.png", alt: "Landing page English" },
            { id: 20, src: "/projects/sporton/landing/home/mobile/11.png", alt: "Landing page English" },
            { id: 21, src: "/projects/sporton/landing/home/mobile/12.png", alt: "Landing page English" },
            { id: 22, src: "/projects/sporton/landing/home/mobile/13.png", alt: "Landing page English" },
            { id: 23, src: "/projects/sporton/landing/home/mobile/14.png", alt: "Landing page English" },
          ],
          features: [
            "Hero يشرح المنصة",
            "About / Vision / Mission",
            "Features",
            "Refund Policy & Privacy Policy",
            "Pro vs Normal Accounts",
            "Contact Us",
          ],
        },
      ],
    },

    {
      id: 2,
      title: "Auth App",
      slug: "auth-app",
      summary: "تطبيق التسجيل/الدخول والتحقق والدفع واختيار الدور وتجميع بيانات الحساب.",
      description:
        "مسار كامل لتسجيل المستخدم: تسجيل دخول/إنشاء حساب، تفعيل البريد، التحقق من الهاتف، استعادة كلمة المرور، اختيار الدور، إدخال البيانات حسب الدور، اختيار الرياضة، عرض الخطط والدفع، ثم حالات نجاح/فشل الدفع.",
      images: [
        { id: 1, src: "/projects/sporton/auth/signin/disktop/1.png", alt: "Sign in page English" },
        { id: 2, src: "/projects/sporton/auth/signup/disktop/1.png", alt: "Sign up page English" },
        { id: 3, src: "/projects/sporton/auth/activate/disktop/1.png", alt: "Activate email OTP page English" },
        { id: 4, src: "/projects/sporton/auth/forgot-password/disktop/1.png", alt: "Forgot password page English" },
        { id: 5, src: "/projects/sporton/auth/reset-password/disktop/1.png", alt: "Reset password page English" },
        { id: 6, src: "/projects/sporton/auth/choose-role/disktop/1.png", alt: "Choose role page English" },
        { id: 7, src: "/projects/sporton/auth/player-info/disktop/1.png", alt: "Player info page English" },
        { id: 8, src: "/projects/sporton/auth/person-info/disktop/1.png", alt: "Person info page English" },
        { id: 9, src: "/projects/sporton/auth/club-info/disktop/1.png", alt: "Club/company info page English" },
        { id: 10, src: "/projects/sporton/auth/wait-for-approval/disktop/1.png", alt: "Wait for approval page English" },
        { id: 11, src: "/projects/sporton/auth/sport-selection/disktop/1.png", alt: "Sports selection page English" },
        { id: 12, src: "/projects/sporton/auth/priceing/disktop/1.png", alt: "Pricing page English" },
        { id: 12, src: "/projects/sporton/auth/plans/disktop/1.png", alt: "Plans page English" },
        { id: 13, src: "/projects/sporton/auth/payment-success/disktop/1.png", alt: "Payment success page English" },
        { id: 14, src: "/projects/sporton/auth/payment-failure/disktop/1.png", alt: "Payment failure page English" },
      ],
      pages: [
        {
          id: 1,
          title: "Sign In",
          slug: "signin",
          description: "تسجيل الدخول عبر Google / Facebook / Guest / Email + Password.",
          ogImage: "/projects/sporton/auth/signin/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/signin/disktop/1.png", alt: "Sign in page English" },
            { id: 2, src: "/projects/sporton/auth/signin/disktop/2.png", alt: "Sign in page Arabic" },
            { id: 3, src: "/projects/sporton/auth/signin/mobile/1.png", alt: "Sign in page English" },
            { id: 4, src: "/projects/sporton/auth/signin/mobile/2.png", alt: "Sign in page Arabic" },
          ],
          features: ["Google login", "Facebook login", "Guest access", "Email & Password"],
        },
        {
          id: 2,
          title: "Sign Up",
          slug: "signup",
          description: "إنشاء حساب جديد بالبيانات الأساسية.",
          ogImage: "/projects/sporton/auth/signup/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/signup/disktop/1.png", alt: "Sign up page English" },
            { id: 2, src: "/projects/sporton/auth/signup/disktop/2.png", alt: "Sign up page Arabic" },
            { id: 3, src: "/projects/sporton/auth/signup/mobile/1.png", alt: "Sign up page English" },
            { id: 4, src: "/projects/sporton/auth/signup/mobile/2.png", alt: "Sign up page Arabic" },],
        },
        {
          id: 3,
          title: "Activate Email (OTP)",
          slug: "activate",
          description: "التحقق من البريد عبر OTP يتم إرساله من Sporton إلى بريد المستخدم.",
          ogImage: "/projects/sporton/auth/activate/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/activate/disktop/1.png", alt: "Activate email OTP page English" },
            { id: 2, src: "/projects/sporton/auth/activate/disktop/2.png", alt: "Activate email OTP page Arabic" },
            { id: 3, src: "/projects/sporton/auth/activate/mobile/1.png", alt: "Activate email OTP page English" },
            { id: 4, src: "/projects/sporton/auth/activate/mobile/2.png", alt: "Activate email OTP page Arabic" },],
          features: ["OTP verification"],
        },
        // {
        //   id: 4,
        //   title: "Verify Phone",
        //   slug: "verify-phone",
        //   description: "التحقق من رقم الهاتف.",
        //   images: [{ id: 1, src: "/projects/sporton/auth/verify-phone.png", alt: "Verify phone page" }],
        // },
        {
          id: 5,
          title: "Forgot Password",
          slug: "forgot-password",
          description: "إدخال البريد لإرسال لينك تغيير كلمة المرور.",
          ogImage: "/projects/sporton/auth/forgot-password/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/forgot-password/disktop/1.png", alt: "Forgot password page English" },
            { id: 2, src: "/projects/sporton/auth/forgot-password/disktop/2.png", alt: "Forgot password page Arabic" },
            { id: 3, src: "/projects/sporton/auth/forgot-password/mobile/1.png", alt: "Forgot password page English" },
            { id: 4, src: "/projects/sporton/auth/forgot-password/mobile/2.png", alt: "Forgot password page Arabic" },],
        },
        {
          id: 6,
          title: "Reset Password",
          slug: "reset-password",
          description: "إعادة إنشاء كلمة المرور بعد فتح رابط الاستعادة.",
          ogImage: "/projects/sporton/auth/reset-password/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/reset-password/disktop/1.png", alt: "Reset password page English" },
            { id: 2, src: "/projects/sporton/auth/reset-password/disktop/2.png", alt: "Reset password page Arabic" },
            { id: 3, src: "/projects/sporton/auth/reset-password/mobile/1.png", alt: "Reset password page English" },
            { id: 4, src: "/projects/sporton/auth/reset-password/mobile/2.png", alt: "Reset password page Arabic" },],
        },
        {
          id: 7,
          title: "Choose Role",
          slug: "choose-role",
          description:
            "اختيار الدور: لاعب أو وكيل أو مدرب أو محلل أداء أو نادي أو شركة.",
          ogImage: "/projects/sporton/auth/choose-role/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/choose-role/disktop/1.png", alt: "Choose role page English" },
            { id: 2, src: "/projects/sporton/auth/choose-role/disktop/2.png", alt: "Choose role page Arabic" },
            { id: 3, src: "/projects/sporton/auth/choose-role/mobile/1.png", alt: "Choose role page English" },
            { id: 4, src: "/projects/sporton/auth/choose-role/mobile/2.png", alt: "Choose role page Arabic" },
            { id: 5, src: "/projects/sporton/auth/choose-role/mobile/3.png", alt: "Choose role page English" },
            { id: 6, src: "/projects/sporton/auth/choose-role/mobile/4.png", alt: "Choose role page Arabic" },],
          features: ["Player", "Agent", "Coach", "Performance Analyst", "Club", "Company"],
        },
        {
          id: 8,
          title: "Player Info",
          slug: "player-info",
          description: "إدخال بيانات اللاعب بالتفصيل وإضافة صورة البطاقة.",
          ogImage: "/projects/sporton/auth/player-info/og.jpg",
        images: [{ id: 1, src: "/projects/sporton/auth/player-info/disktop/1.png", alt: "Player info page English" },
            { id: 2, src: "/projects/sporton/auth/player-info/disktop/2.png", alt: "Player info page Arabic" },
            { id: 3, src: "/projects/sporton/auth/player-info/disktop/3.png", alt: "Player info page English" },
            { id: 4, src: "/projects/sporton/auth/player-info/mobile/1.png", alt: "Player info page English" },
            { id: 5, src: "/projects/sporton/auth/player-info/mobile/2.png", alt: "Player info page Arabic" },
            { id: 6, src: "/projects/sporton/auth/player-info/mobile/3.png", alt: "Player info page English" },
            { id: 7, src: "/projects/sporton/auth/player-info/mobile/4.png", alt: "Player info page Arabic" },],
        },
        {
          id: 9,
          title: "Person Info",
          slug: "person-info",
          description: "إدخال بيانات الوكيل/المدرب/محلل الأداء حسب الدور المختار.",
          ogImage: "/projects/sporton/auth/person-info/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/person-info/disktop/1.png", alt: "Person info page English" },
            { id: 2, src: "/projects/sporton/auth/person-info/disktop/2.png", alt: "Person info page Arabic" },
            { id: 3, src: "/projects/sporton/auth/person-info/disktop/3.png", alt: "Person info page English" },
            { id: 4, src: "/projects/sporton/auth/person-info/disktop/4.png", alt: "Person info page Arabic" },
            { id: 5, src: "/projects/sporton/auth/person-info/disktop/5.png", alt: "Person info page English" },
            { id: 6, src: "/projects/sporton/auth/person-info/disktop/6.png", alt: "Person info page Arabic" },
            { id: 7, src: "/projects/sporton/auth/person-info/mobile/1.png", alt: "Person info page English" },
            { id: 8, src: "/projects/sporton/auth/person-info/mobile/2.png", alt: "Person info page Arabic" },
            { id: 9, src: "/projects/sporton/auth/person-info/mobile/3.png", alt: "Person info page English" },
            { id: 10, src: "/projects/sporton/auth/person-info/mobile/4.png", alt: "Person info page Arabic" },
            { id: 11, src: "/projects/sporton/auth/person-info/mobile/5.png", alt: "Person info page English" },
            { id: 12, src: "/projects/sporton/auth/person-info/mobile/6.png", alt: "Person info page Arabic" },
            { id: 13, src: "/projects/sporton/auth/person-info/mobile/7.png", alt: "Person info page English" },
            { id: 14, src: "/projects/sporton/auth/person-info/mobile/8.png", alt: "Person info page Arabic" },
          ],
        },
        {
          id: 10,
          title: "Club/Company Info",
          slug: "club-info",
          description: "إدخال بيانات النادي أو الشركة حسب الدور.",
          ogImage: "/projects/sporton/auth/club-info/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/club-info/disktop/1.png", alt: "Club/company info page English" },
            { id: 2, src: "/projects/sporton/auth/club-info/disktop/2.png", alt: "Club/company info page Arabic" },
            { id: 3, src: "/projects/sporton/auth/club-info/disktop/3.png", alt: "Club/company info page English" },
            { id: 4, src: "/projects/sporton/auth/club-info/disktop/4.png", alt: "Club/company info page Arabic" },
            { id: 5, src: "/projects/sporton/auth/club-info/disktop/5.png", alt: "Club/company info page English" },
            { id: 6, src: "/projects/sporton/auth/club-info/disktop/6.png", alt: "Club/company info page Arabic" },
            { id: 7, src: "/projects/sporton/auth/club-info/disktop/7.png", alt: "Club/company info page English" },
            { id: 9, src: "/projects/sporton/auth/club-info/mobile/1.png", alt: "Club/company info page English" },
            { id: 10, src: "/projects/sporton/auth/club-info/mobile/2.png", alt: "Club/company info page Arabic" },
            { id: 11, src: "/projects/sporton/auth/club-info/mobile/3.png", alt: "Club/company info page English" },
            { id: 12, src: "/projects/sporton/auth/club-info/mobile/4.png", alt: "Club/company info page Arabic" },
            { id: 13, src: "/projects/sporton/auth/club-info/mobile/5.png", alt: "Club/company info page English" },
            { id: 14, src: "/projects/sporton/auth/club-info/mobile/6.png", alt: "Club/company info page Arabic" },
          ],
        },
        {
          id: 11,
          title: "Wait For Approval",
          slug: "wait-for-approval",
          description: "بعد تسجيل النادي/الشركة تظهر صفحة انتظار التحقق واعتماد البيانات.",
          ogImage: "/projects/sporton/auth/wait-for-approval/og.jpg",
          images: [
            { id: 1, src: "/projects/sporton/auth/wait-for-approval/disktop/1.png", alt: "Wait for approval page English" },
            { id: 2, src: "/projects/sporton/auth/wait-for-approval/disktop/2.png", alt: "Wait for approval page Arabic" },
            { id: 3, src: "/projects/sporton/auth/wait-for-approval/mobile/1.png", alt: "Wait for approval page English" },
            { id: 4, src: "/projects/sporton/auth/wait-for-approval/mobile/2.png", alt: "Wait for approval page Arabic" },],
        },
        {
          id: 12,
          title: "Sport Selection",
          slug: "sport-selection",
          description: "بعد إدخال بيانات اللاعب/المدرب/الوكيل يتم اختيار الرياضة الخاصة به.",
          ogImage: "/projects/sporton/auth/sport-selection/og.jpg",
          images: [
            { id: 1, src: "/projects/sporton/auth/sport-selection/disktop/1.png", alt: "Sport selection page English" },
            { id: 2, src: "/projects/sporton/auth/sport-selection/disktop/2.png", alt: "Sport selection page Arabic" },
            { id: 3, src: "/projects/sporton/auth/sport-selection/mobile/1.png", alt: "Sport selection page English" },
            { id: 4, src: "/projects/sporton/auth/sport-selection/mobile/2.png", alt: "Sport selection page Arabic" },
            { id: 5, src: "/projects/sporton/auth/sport-selection/mobile/3.png", alt: "Sport selection page English" },
          ],

        },
        {
          id: 13,
          title: "Pricing",
          slug: "pricing",
          description: "عرض الخطط المتاحة للاشتراك.",
          ogImage: "/projects/sporton/auth/pricing/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/pricing/disktop/1.png", alt: "Pricing page English" },
            { id: 2, src: "/projects/sporton/auth/pricing/disktop/2.png", alt: "Pricing page Arabic" },
            { id: 3, src: "/projects/sporton/auth/pricing/mobile/1.png", alt: "Pricing page English" },
            { id: 4, src: "/projects/sporton/auth/pricing/mobile/2.png", alt: "Pricing page Arabic" },
            { id: 5, src: "/projects/sporton/auth/pricing/mobile/3.png", alt: "Pricing page English" },
            { id: 6, src: "/projects/sporton/auth/pricing/mobile/4.png", alt: "Pricing page Arabic" },
          ],
        },
        {
          id: 14,
          title: "Plans",
          slug: "plans",
          description: "عرض تفاصيل كل خطة وروابط الدفع عبر Paymob.",
          ogImage: "/projects/sporton/auth/plans/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth/plans/disktop/1.png", alt: "Plans page English" },
            { id: 2, src: "/projects/sporton/auth/plans/disktop/2.png", alt: "Plans page Arabic" },
            { id: 3, src: "/projects/sporton/auth/plans/mobile/1.png", alt: "Plans page English" },
            { id: 4, src: "/projects/sporton/auth/plans/mobile/2.png", alt: "Plans page Arabic" },],
          features: ["Plan details", "Paymob payment links"],
        },
        {
          id: 15,
          title: "Payment Success",
          slug: "payment-success",
          description: "تظهر عند اكتمال الدفع بنجاح.",
          ogImage: "/projects/sporton/auth/payment-success/og.jpg",
          images: [
            { id: 1, src: "/projects/sporton/auth/payment-success/disktop/1.png", alt: "Payment success page English" },
            { id: 2, src: "/projects/sporton/auth/payment-success/mobile/1.png", alt: "Payment success page English" },],
        },
        {
          id: 16,
          title: "Payment Failure",
          slug: "payment-failure",
          description: "تظهر عند عدم اكتمال الدفع أو فشل الدفع.",
          ogImage: "/projects/sporton/auth/payment-failure/og.jpg",
          images: [
            { id: 1, src: "/projects/sporton/auth/payment-failure/disktop/1.png", alt: "Payment failure page English" },
            { id: 2, src: "/projects/sporton/auth/payment-failure/mobile/1.png", alt: "Payment failure page English" },],
        },
      ],
    },

    {
      id: 3,
      title: "Home App (Main Platform)",
      slug: "home-app",
      summary: "تطبيق المنصة الأساسي: منشورات، تفاعل، شبكة، محادثات، إشعارات، فرص، متجر، إعدادات، بروفايل، أدوات تحليل.",
      description:
        "التطبيق الرئيسي للمنصة ويحتوي على Layout عام (Navbar + Left/Right sidebars + Bottom bar للموبايل) ويدعم نشر المحتوى والتفاعل والمحادثات والإشعارات والفرص والمتجر وإدارة الحساب والملف الشخصي.",

      images: [
        { id: 1, src: "/projects/sporton/home/on/disktop/1.png", alt: "Home feed page English" },
            { id: 2, src: "/projects/sporton/home/on/disktop/2.png", alt: "Home feed page Arabic" },
            { id: 3, src: "/projects/sporton/home/on/disktop/3.png", alt: "Home feed page English" },
            { id: 4, src: "/projects/sporton/home/network/disktop/1.png", alt: "Network page English" },
            { id: 5, src: "/projects/sporton/home/network/disktop/2.png", alt: "Network page Arabic" },
            { id: 6, src: "/projects/sporton/home/network/disktop/3.png", alt: "Network page English" },
            { id: 7, src: "/projects/sporton/home/chat/disktop/1.png", alt: "Chats page English" },
            { id: 8, src: "/projects/sporton/home/chat/disktop/2.png", alt: "Chats page Arabic" },
            { id: 9, src: "/projects/sporton/home/chat/disktop/3.png", alt: "Chats page English" },
            { id: 10, src: "/projects/sporton/home/chat/disktop/4.png", alt: "Chats page Arabic" },
            { id: 11, src: "/projects/sporton/home/notifications/disktop/1.png", alt: "Notifications page English" },
            { id: 12, src: "/projects/sporton/home/notifications/disktop/2.png", alt: "Notifications page Arabic" },
            { id: 13, src: "/projects/sporton/home/notifications/disktop/3.png", alt: "Notifications page English" },
            { id: 14, src: "/projects/sporton/home/notifications/disktop/4.png", alt: "Notifications page Arabic" },
            { id: 15, src: "/projects/sporton/home/foras/disktop/1.png", alt: "foras page" },
            { id: 16, src: "/projects/sporton/home/foras/disktop/2.png", alt: "foras page" },
            { id: 19, src: "/projects/sporton/home/store/disktop/1.png", alt: "Store page" },
            { id: 20, src: "/projects/sporton/home/store/disktop/2.png", alt: "Store page" },
            { id: 23, src: "/projects/sporton/home/my-products/disktop/1.png", alt: "My products page" },
            { id: 24, src: "/projects/sporton/home/my-products/disktop/2.png", alt: "My products page" },
            { id: 25, src: "/projects/sporton/home/my-products/disktop/3.png", alt: "My products page" },
            { id: 26, src: "/projects/sporton/home/settings/disktop/1.png", alt: "Settings page" },
            { id: 27, src: "/projects/sporton/home/settings/disktop/2.png", alt: "Settings page" },
            { id: 28, src: "/projects/sporton/home/settings/disktop/3.png", alt: "Settings page" },
            { id: 29, src: "/projects/sporton/home/settings/disktop/4.png", alt: "Settings page" },
            { id: 30, src: "/projects/sporton/home/settings/disktop/5.png", alt: "Settings page" },
            { id: 31, src: "/projects/sporton/home/settings/disktop/6.png", alt: "Settings page" },
            { id: 32, src: "/projects/sporton/home/settings/disktop/7.png", alt: "Settings page" },
            { id: 33, src: "/projects/sporton/home/settings/disktop/8.png", alt: "Settings page" },
            { id: 33, src: "/projects/sporton/home/profile/disktop/1.png", alt: "Profile page" },
            { id: 34, src: "/projects/sporton/home/profile/disktop/2.png", alt: "Profile page" },
            { id: 35, src: "/projects/sporton/home/profile/disktop/3.png", alt: "Profile page" },
            { id: 36, src: "/projects/sporton/home/profile/disktop/4.png", alt: "Profile page" },
            { id: 37, src: "/projects/sporton/home/profile/disktop/5.png", alt: "Profile page" },
            { id: 38, src: "/projects/sporton/home/profile/disktop/6.png", alt: "Profile page" },
            { id: 39, src: "/projects/sporton/home/profile/disktop/7.png", alt: "Profile page" },
            { id: 40, src: "/projects/sporton/home/profile/disktop/8.png", alt: "Profile page" },

      ],

      pages: [
        {
          id: 1,
          title: "Main Layout",
          slug: "layout",
          ogImage: "/projects/sporton/home/on/og.jpg",
          description:
            "Layout عام من 4 أقسام: Navbar + Left Sidebar + Right Sidebar + Bottom Sidebar للموبايل.",
          images: [ { id: 1, src: "/projects/sporton/home/on/disktop/1.png", alt: "Home feed page English" },
            { id: 2, src: "/projects/sporton/home/on/disktop/2.png", alt: "Home feed page Arabic" },
            { id: 4, src: "/projects/sporton/home/network/disktop/1.png", alt: "Network page English" },
          ],
          features: [
            "Navbar: Logo + Search + Navigation",
            "Left Sidebar: User card + profile views + friend suggestions carousel + ads (بعض الصفحات)",
            "Right Sidebar: Clubs follow + ads (بعض الصفحات)",
            "Bottom Sidebar: Mobile navigation",
          ],
        },
        {
          id: 2,
          title: "Home Feed",
          slug: "home-feed",
          ogImage: "/projects/sporton/home/on/og.jpg",
          description:
            "الصفحة الرئيسية: إنشاء منشور (نص/صورة/فيديو/ملف شخصي/فرص) ثم عرض المنشورات مع التفاعل والتعليقات والمشاركة وإعادة النشر.",
          images: [
            { id: 1, src: "/projects/sporton/home/on/disktop/1.png", alt: "Home feed page English" },
            { id: 2, src: "/projects/sporton/home/on/disktop/2.png", alt: "Home feed page Arabic" },
            { id: 3, src: "/projects/sporton/home/on/disktop/3.png", alt: "Home feed page English" },
            { id: 4, src: "/projects/sporton/home/on/disktop/4.png", alt: "Home feed page Arabic" },
            { id: 5, src: "/projects/sporton/home/on/disktop/5.png", alt: "Home feed page English" },
            { id: 6, src: "/projects/sporton/home/on/disktop/6.png", alt: "Home feed page Arabic" },
            { id: 7, src: "/projects/sporton/home/on/disktop/7.png", alt: "Home feed page English" },
            { id: 8, src: "/projects/sporton/home/on/disktop/8.png", alt: "Home feed page Arabic" },
            { id: 9, src: "/projects/sporton/home/on/disktop/9.png", alt: "Home feed page English" },
            { id: 10, src: "/projects/sporton/home/on/disktop/10.png", alt: "Home feed page Arabic" },
            { id: 11, src: "/projects/sporton/home/on/mobile/1.png", alt: "Home feed page English" },
            { id: 12, src: "/projects/sporton/home/on/mobile/2.png", alt: "Home feed page Arabic" },
            { id: 13, src: "/projects/sporton/home/on/mobile/3.png", alt: "Home feed page English" },
            { id: 14, src: "/projects/sporton/home/on/mobile/4.png", alt: "Home feed page Arabic" },
            { id: 15, src: "/projects/sporton/home/on/mobile/5.png", alt: "Home feed page English" },
            { id: 16, src: "/projects/sporton/home/on/mobile/6.png", alt: "Home feed page Arabic" },
            { id: 17, src: "/projects/sporton/home/on/mobile/7.png", alt: "Home feed page English" },
            { id: 18, src: "/projects/sporton/home/on/mobile/8.png", alt: "Home feed page Arabic" },
            { id: 19, src: "/projects/sporton/home/on/mobile/9.png", alt: "Home feed page English" },
            { id: 20, src: "/projects/sporton/home/on/mobile/10.png", alt: "Home feed page Arabic" },
          ],
          features: ["Create post", "Reactions", "Comments", "Share", "Repost"],
        },
        {
          id: 3,
          title: "Network",
          slug: "network",
          ogImage: "/projects/sporton/home/network/og.jpg",
          description:
            "عرض اقتراحات الصداقة للاعبين والمتابعة للمدربين والوكلاء.",
          images: [{ id: 1, src: "/projects/sporton/home/network/disktop/1.png", alt: "Network page English" },
            { id: 2, src: "/projects/sporton/home/network/disktop/2.png", alt: "Network page Arabic" },
            { id: 3, src: "/projects/sporton/home/network/disktop/3.png", alt: "Network page English" },
            { id: 4, src: "/projects/sporton/home/network/mobile/1.png", alt: "Network page English" },
            { id: 5, src: "/projects/sporton/home/network/mobile/2.png", alt: "Network page Arabic" },
          ],
          features: ["Friend suggestions", "Follow/unfollow"],
        },
        {
          id: 4,
          title: "Chats",
          slug: "chats",
          ogImage: "/projects/sporton/home/chat/og.jpg",
          description: "المحادثات: اللاعب يقدر يدردش مع الأصدقاء والمتابعين.",
          images: [{ id: 1, src: "/projects/sporton/home/chat/disktop/1.png", alt: "Chats page English" },
            { id: 2, src: "/projects/sporton/home/chat/disktop/2.png", alt: "Chats page Arabic" },
            { id: 3, src: "/projects/sporton/home/chat/disktop/3.png", alt: "Chats page English" },
            { id: 4, src: "/projects/sporton/home/chat/disktop/4.png", alt: "Chats page Arabic" },
            { id: 5, src: "/projects/sporton/home/chat/disktop/5.png", alt: "Chats page English" },
            { id: 6, src: "/projects/sporton/home/chat/disktop/6.png", alt: "Chats page Arabic" },
            { id: 7, src: "/projects/sporton/home/chat/mobile/1.png", alt: "Chats page English" },
            { id: 8, src: "/projects/sporton/home/chat/mobile/2.png", alt: "Chats page Arabic" },
            { id: 9, src: "/projects/sporton/home/chat/mobile/3.png", alt: "Chats page English" },
            { id: 10, src: "/projects/sporton/home/chat/mobile/4.png", alt: "Chats page Arabic" },
            { id: 11, src: "/projects/sporton/home/chat/mobile/5.png", alt: "Chats page English" },
          ],
        },
        {
          id: 5,
          title: "Notifications",
          slug: "notifications",
          ogImage: "/projects/sporton/home/notifications/og.jpg",
          description: "عرض كل الإشعارات الفورية داخل المنصة.",
          images: [{ id: 1, src: "/projects/sporton/home/notifications/disktop/1.png", alt: "Notifications page English" },
            { id: 2, src: "/projects/sporton/home/notifications/disktop/2.png", alt: "Notifications page Arabic" },
            { id: 3, src: "/projects/sporton/home/notifications/disktop/3.png", alt: "Notifications page English" },
            { id: 4, src: "/projects/sporton/home/notifications/mobile/1.png", alt: "Notifications page English" },
            { id: 5, src: "/projects/sporton/home/notifications/mobile/2.png", alt: "Notifications page Arabic" },
          ],
        },
        {
          id: 6,
          title: "foras",
          slug: "foras",
          ogImage: "/projects/sporton/home/foras/og.jpg",
          description:
            "عرض الفرص المطروحة من النادي أو الوكيل أو المدرب أو الشركة.",
          images: [{ id: 1, src: "/projects/sporton/home/foras/disktop/1.png", alt: "foras page" },
            { id: 2, src: "/projects/sporton/home/foras/disktop/2.png", alt: "foras page" },
            { id: 3, src: "/projects/sporton/home/foras/mobile/1.png", alt: "foras page" },
            { id: 4, src: "/projects/sporton/home/foras/mobile/2.png", alt: "foras page" },
          ],
        },
        {
          id: 7,
          title: "Store",
          slug: "store",
          ogImage: "/projects/sporton/home/store/og.jpg",
          description: "المتجر: بيع وشراء منتجات مستعملة أو جديدة.",
          images: [{ id: 1, src: "/projects/sporton/home/store/disktop/1.png", alt: "Store page" },
            { id: 2, src: "/projects/sporton/home/store/disktop/2.png", alt: "Store page" },
            { id: 3, src: "/projects/sporton/home/store/mobile/1.png", alt: "Store page" },
            { id: 4, src: "/projects/sporton/home/store/mobile/2.png", alt: "Store page" },
          ],
        },
        {
          id: 8,
          title: "My Products",
          slug: "my-products",
          ogImage: "/projects/sporton/home/my-products/og.jpg",
          description: "مراجعة منتجاتي وإنشاء منتج جديد.",
          images: [{ id: 1, src: "/projects/sporton/home/my-products/disktop/1.png", alt: "My products page" },
            { id: 2, src: "/projects/sporton/home/my-products/disktop/2.png", alt: "My products page" },
            { id: 3, src: "/projects/sporton/home/my-products/disktop/3.png", alt: "My products page" },
            { id: 4, src: "/projects/sporton/home/my-products/disktop/4.png", alt: "My products page" },
            { id: 5, src: "/projects/sporton/home/my-products/mobile/1.png", alt: "My products page" },
            { id: 6, src: "/projects/sporton/home/my-products/mobile/2.png", alt: "My products page" },
            { id: 7, src: "/projects/sporton/home/my-products/mobile/3.png", alt: "My products page" },
            { id: 8, src: "/projects/sporton/home/my-products/mobile/4.png", alt: "My products page" },
            { id: 9, src: "/projects/sporton/home/my-products/mobile/5.png", alt: "My products page" },
            { id: 10, src: "/projects/sporton/home/my-products/mobile/6.png", alt: "My products page" },
          ],
          features: ["Products list", "Create new product"],
        },
        {
          id: 9,
          title: "Settings",
          slug: "settings",
          ogImage: "/projects/sporton/home/settings/og.jpg",
          description:
            "تعديل الحساب + عرض المعاملات + مستوى اللاعب + الدعم والمساعدة + المنشورات المحفوظة + تسجيل الخروج + حذف الحساب.",
          images: [{ id: 1, src: "/projects/sporton/home/settings/disktop/1.png", alt: "Settings page" },
            { id: 2, src: "/projects/sporton/home/settings/disktop/2.png", alt: "Settings page" },
            { id: 3, src: "/projects/sporton/home/settings/disktop/3.png", alt: "Settings page" },
            { id: 4, src: "/projects/sporton/home/settings/disktop/4.png", alt: "Settings page" },
            { id: 5, src: "/projects/sporton/home/settings/disktop/5.png", alt: "Settings page" },
            { id: 6, src: "/projects/sporton/home/settings/disktop/6.png", alt: "Settings page" },
            { id: 7, src: "/projects/sporton/home/settings/disktop/7.png", alt: "Settings page" },
            { id: 8, src: "/projects/sporton/home/settings/mobile/1.png", alt: "Settings page" },
            { id: 9, src: "/projects/sporton/home/settings/mobile/2.png", alt: "Settings page" },
            { id: 10, src: "/projects/sporton/home/settings/mobile/3.png", alt: "Settings page" },
            { id: 11, src: "/projects/sporton/home/settings/mobile/4.png", alt: "Settings page" },
            { id: 12, src: "/projects/sporton/home/settings/mobile/5.png", alt: "Settings page" },
            { id: 13, src: "/projects/sporton/home/settings/mobile/6.png", alt: "Settings page" },
            { id: 14, src: "/projects/sporton/home/settings/mobile/7.png", alt: "Settings page" },
            { id: 15, src: "/projects/sporton/home/settings/mobile/8.png", alt: "Settings page" },
          ],
          features: [
            "Account settings",
            "Transactions",
            "Player level",
            "Support & Help",
            "Saved posts",
            "Logout",
            "Delete account",
          ],
        },
        {
          id: 10,
          title: "Profile",
          slug: "profile",
          ogImage: "/projects/sporton/home/profile/og.jpg",
          description:
            "الملف الشخصي: Cover + Image + بيانات المستخدم + تبويبات (الرياضي/المنشورات/الفريق/أدوات التحليل).",
          images: [{ id: 1, src: "/projects/sporton/home/profile/disktop/1.png", alt: "Profile page" },
            { id: 2, src: "/projects/sporton/home/profile/disktop/2.png", alt: "Profile page" },
            { id: 3, src: "/projects/sporton/home/profile/disktop/3.png", alt: "Profile page" },
            { id: 4, src: "/projects/sporton/home/profile/disktop/4.png", alt: "Profile page" },
            { id: 5, src: "/projects/sporton/home/profile/disktop/5.png", alt: "Profile page" },
            { id: 6, src: "/projects/sporton/home/profile/disktop/6.png", alt: "Profile page" },
            { id: 7, src: "/projects/sporton/home/profile/disktop/7.png", alt: "Profile page" },
            { id: 8, src: "/projects/sporton/home/profile/disktop/8.png", alt: "Profile page" },
            { id: 9, src: "/projects/sporton/home/profile/disktop/9.png", alt: "Profile page" },
            { id: 10, src: "/projects/sporton/home/profile/disktop/10.png", alt: "Profile page" },
            { id: 11, src: "/projects/sporton/home/profile/disktop/11.png", alt: "Profile page" },
            { id: 12, src: "/projects/sporton/home/profile/disktop/12.png", alt: "Profile page" },
            { id: 13, src: "/projects/sporton/home/profile/mobile/1.png", alt: "Profile page" },
            { id: 14, src: "/projects/sporton/home/profile/mobile/2.png", alt: "Profile page" },
            { id: 15, src: "/projects/sporton/home/profile/mobile/3.png", alt: "Profile page" },
            { id: 16, src: "/projects/sporton/home/profile/mobile/4.png", alt: "Profile page" },
            { id: 17, src: "/projects/sporton/home/profile/mobile/5.png", alt: "Profile page" },
            { id: 18, src: "/projects/sporton/home/profile/mobile/6.png", alt: "Profile page" },
            { id: 19, src: "/projects/sporton/home/profile/mobile/7.png", alt: "Profile page" },
            { id: 20, src: "/projects/sporton/home/profile/mobile/8.png", alt: "Profile page" },
            { id: 21, src: "/projects/sporton/home/profile/mobile/9.png", alt: "Profile page" },
            { id: 22, src: "/projects/sporton/home/profile/mobile/10.png", alt: "Profile page" },
            { id: 23, src: "/projects/sporton/home/profile/mobile/11.png", alt: "Profile page" },
            { id: 24, src: "/projects/sporton/home/profile/mobile/12.png", alt: "Profile page" },
            { id: 25, src: "/projects/sporton/home/profile/mobile/13.png", alt: "Profile page" },
          ],
          features: [
            "Sports profile tab: info حسب الدور + إنجازات + خبرات + أبرز المنشورات",
            "Posts tab: جميع المنشورات",
            "Team tab: الأصدقاء والمتابعين",
            "AI analytics tools tab",
          ],
        },
      ],
    },

    {
      id: 4,
      title: "Auth-Admin App",
      slug: "auth-admin-app",
      summary: "تطبيق تسجيل دخول الأدمن.",
      description: "واجهة منفصلة للأدمن لتسجيل الدخول والوصول لتطبيقات الإدارة/التحليلات.",
      pages: [
        {
          id: 1,
          title: "Admin Sign In",
          slug: "admin-signin",
          description: "تسجيل دخول المسؤول (Admin).",
          ogImage: "/projects/sporton/auth-admin/signin/og.jpg",
          images: [{ id: 1, src: "/projects/sporton/auth-admin/signin/disktop/1.png", alt: "Admin sign in page" },
            { id: 2, src: "/projects/sporton/auth-admin/signin/disktop/2.png", alt: "Admin sign in page" },
            { id: 3, src: "/projects/sporton/auth-admin/signin/mobile/1.png", alt: "Admin sign in page" },
            { id: 4, src: "/projects/sporton/auth-admin/signin/mobile/2.png", alt: "Admin sign in page" },
          ],
        },
      ],
    },

    {
      id: 5,
      title: "Monitor App (Analytics)",
      slug: "monitor-app",
      summary: "لوحات وتحليلات شاملة للمستخدمين، الاشتراكات، المحتوى، والإيرادات.",
      description:
        "تطبيق لمتابعة بيانات المنصة وتحليلها: لوحة تحكم رئيسية وإحصائيات حسابات ومحتوى وإعدادات.",
      pages: [
        {
          id: 1,
          title: "Dashboard",
          slug: "monitor-dashboard",
          description:
            "لوحة التحكم الرئيسية: Stats (إجمالي الحسابات، النشطة، الجديدة يومياً، المنشورات، الإيرادات الشهرية، الاشتراكات النشطة، الحسابات الاحترافية) + Charts (إيرادات شهرية/توزيع حسابات) + توزيع حسب الفئة.",
          images: [{ id: 1, src: "/projects/sporton/monitor/dashboard/disktop/1.png", alt: "Monitor dashboard" },
            { id: 2, src: "/projects/sporton/monitor/dashboard/disktop/2.png", alt: "Monitor dashboard" },
            { id: 3, src: "/projects/sporton/monitor/dashboard/mobile/1.png", alt: "Monitor dashboard" },
            { id: 4, src: "/projects/sporton/monitor/dashboard/mobile/2.png", alt: "Monitor dashboard" },
          ],
          features: [
            "Total accounts / Active accounts / New daily accounts",
            "Total posts / New daily posts",
            "Monthly revenue",
            "Active subscriptions",
            "Pro accounts",
            "Charts: monthly revenue & account distribution",
            "Distribution by role/category",
          ],
        },
        {
          id: 2,
          title: "Accounts Statistics",
          slug: "accounts-statistics",
          description:
            "توزيع الحسابات والاشتراكات وتوزيع الجنس + Stats حسب الفئة + Charts لتوزيع الحسابات/الاشتراكات/الجنس/الإيرادات الشهرية.",
          images: [
            { id: 1, src: "/projects/sporton/monitor/accounts-stats/disktop/1.png", alt: "Accounts statistics page" },
            { id: 2, src: "/projects/sporton/monitor/accounts-stats/disktop/2.png", alt: "Accounts statistics page" },
            { id: 3, src: "/projects/sporton/monitor/accounts-stats/mobile/1.png", alt: "Accounts statistics page" },
            { id: 4, src: "/projects/sporton/monitor/accounts-stats/mobile/2.png", alt: "Accounts statistics page" },
          ],
        },
        {
          id: 3,
          title: "Content Statistics",
          slug: "content-statistics",
          description:
            "إحصائيات الميديا والمنشورات الأكثر تفاعلاً وتوزيع الرياضات + Top lists.",
          images: [
            { id: 1, src: "/projects/sporton/monitor/content-stats/disktop/1.png", alt: "Content statistics page" },
            { id: 2, src: "/projects/sporton/monitor/content-stats/disktop/2.png", alt: "Content statistics page" },
            { id: 3, src: "/projects/sporton/monitor/content-stats/mobile/1.png", alt: "Content statistics page" },
            { id: 4, src: "/projects/sporton/monitor/content-stats/mobile/2.png", alt: "Content statistics page" },
          ],
          features: [
            "Total videos / images / media",
            "Charts: media distribution & sports distribution",
            "Top 10 engagement points",
            "Top 20 most engaged posts",
          ],
        },
        {
          id: 4,
          title: "Settings",
          slug: "monitor-settings",
          description:
            "إعدادات: Profile Settings، Notification Settings، Security Settings، Language & Region.",
          images: [{ id: 1, src: "/projects/sporton/monitor/settings/disktop/1.png", alt: "Monitor settings page" },
            { id: 2, src: "/projects/sporton/monitor/settings/disktop/2.png", alt: "Monitor settings page" },
            { id: 3, src: "/projects/sporton/monitor/settings/mobile/1.png", alt: "Monitor settings page" },
            { id: 4, src: "/projects/sporton/monitor/settings/mobile/2.png", alt: "Monitor settings page" },
          ],
        },
      ],
    },

    {
      id: 6,
      title: "Marketing App",
      slug: "marketing-app",
      summary: "إدارة الإعلانات والحملات التسويقية داخل المنصة.",
      description:
        "تطبيق تسويقي لإدارة الحملات والإعلانات: لوحة تحكم مركزية + صفحة حملات بإمكانيات بحث/تصفية/فرز وإنشاء وتعديل وتشغيل/إيقاف وتحليلات.",
      pages: [
        {
          id: 1,
          title: "Marketing Dashboard",
          slug: "marketing-dashboard",
          description:
            "واجهة مركزية توفر نظرة شاملة على أداء المنصة عبر مؤشرات وإحصائيات ورسوم بيانية (إيرادات/توزيع حسابات/نشاط...).",
          images: [
            { id: 1, src: "/projects/sporton/marketing/dashboard/disktop/1.png", alt: "Marketing dashboard" },
            { id: 2, src: "/projects/sporton/marketing/dashboard/disktop/2.png", alt: "Marketing dashboard" },
            { id: 3, src: "/projects/sporton/marketing/dashboard/mobile/1.png", alt: "Marketing dashboard" },
            { id: 4, src: "/projects/sporton/marketing/dashboard/mobile/2.png", alt: "Marketing dashboard" },
          ],
          features: [
            "Global KPIs",
            "Interactive charts",
            "Role/category distributions",
          ],
        },
        {
          id: 2,
          title: "Campaigns",
          slug: "campaigns",
          description:
            "إدارة الحملات: عرض Grid/List، بحث، تصفية حسب الحالة، فرز (تاريخ/اسم/ميزانية/أداء)، إنشاء/تعديل/نسخ/حذف، تشغيل/إيقاف، صفحة تحليلات لكل حملة، وملخص إجمالي.",
          images: [{ id: 1, src: "/projects/sporton/marketing/campaigns/disktop/1.png", alt: "Campaigns page" },
            { id: 2, src: "/projects/sporton/marketing/campaigns/disktop/2.png", alt: "Campaigns page" },
            { id: 3, src: "/projects/sporton/marketing/campaigns/mobile/1.png", alt: "Campaigns page" },
            { id: 4, src: "/projects/sporton/marketing/campaigns/mobile/2.png", alt: "Campaigns page" },
          ],
          features: [
            "Grid/List view",
            "Search & filters",
            "Sort by date/name/budget/performance",
            "Create/Edit/Duplicate/Delete",
            "Start/Pause campaign",
            "Per-campaign analytics",
            "Totals summary (count/active/budget/spent)",
          ],
        },
      ],
    },

    {
      id: 7,
      title: "Admin App",
      slug: "admin-app",
      summary: "قريباً (Coming soon).",
      description: "تطبيق الإدارة العام قيد التطوير وسيتم إضافة صفحاته وموديولاته لاحقاً.",
      pages: [
        {
          id: 1,
          title: "Coming Soon",
          slug: "coming-soon",
          description: "صفحة توضيحية بأن تطبيق Admin سيتم إطلاقه قريباً.",
          images: [{ id: 1, src: "/projects/sporton/admin/coming-soon/disktop/1.png", alt: "Admin coming soon" },
            { id: 2, src: "/projects/sporton/admin/coming-soon/disktop/2.png", alt: "Admin coming soon" },
            { id: 3, src: "/projects/sporton/admin/coming-soon/mobile/1.png", alt: "Admin coming soon" },
            { id: 4, src: "/projects/sporton/admin/coming-soon/mobile/2.png", alt: "Admin coming soon" },
          ],
          features: ["Placeholder", "Roadmap-ready"],
        },
      ],
    },

    {
      id: 8,
      title: "Backend",
      slug: "backend",
      summary: "الخلفية التي تخدم جميع التطبيقات وتغطي كل وظائف المنصة.",
      description:
        "Backend مبني بـ NestJS ويدعم كل مميزات المنصة، ومكوّن من أكثر من 140 موديول/جدول لتنظيم البيانات (حسابات، اشتراكات، منشورات، تفاعل، محادثات، إشعارات، فرص، متجر، حملات... إلخ).",
      pages: [
        {
          id: 1,
          title: "API & Modules",
          slug: "api-modules",
          description:
            "نظرة عامة على بنية الـ API، التوثيق عبر Swagger، وتقسيم الموديولات وقاعدة البيانات.",
          images: [{ id: 1, src: "/projects/sporton/backend/disktop/1.png", alt: "Backend overview" }],
          features: ["NestJS modules", "Prisma models", "PostgreSQL schema", "Swagger docs"],
        },
      ],
    },
  ],
};

// ---- generated projects (ifacegb / booksplatform / aiaetar / nadia-elsayed) ----
export const ifacegb: Project = {
  id: 9,
  title: "iFACE Global Board",
  slug: "ifacegb",
  img: "/projects/ifacegb/cover.png",
  ogImage: "/projects/ifacegb/og.jpg",
  iconLists: [
    "/next.svg",
    "/re.svg",
    "/ts.svg",
    "/tail.svg",
    "/fm.svg",
    "/prisma.svg",
    "/Postgresql.svg",
  ],
  link: "https://ifacegb.net",
  des: "نظام تشغيل مؤسسي سيادي (Enterprise OS) لمجلس اعتماد وتدريب دولي يعمل في أكثر من 22 دولة، يغطي 5 قطاعات استراتيجية بواجهة ثنائية اللغة ولوحات تحكم لكل دور.",
  fullDescription:
    "iFACE Global Board منصة واحدة تشغّل مجلساً دولياً للاعتماد والتدريب والاستشارات: موقع عام ثنائي اللغة (عربي/إنجليزي) يعرّف بالقطاعات الخمسة والمنح والأخبار والفعاليات والشركاء ومجالس الاعتماد والتحكيم وخريطة الوكلاء، بالإضافة إلى تحقّق عام من الشهادات، ونظام تقديم للمراكز والوكلاء والمدربين، و Demo Sandbox يفتح لوحات تحكم حقيقية ببيانات تجريبية بدون تسجيل. خلف الواجهة لوحات تحكم كاملة لكل دور (مركز تدريب، وكالة/فرنشايز، مدرب، طالب) مع LMS وامتحانات وشهادات ومحافظ مالية وتذاكر ونظام CRM.",

  tools: {
    stacks: [
      {
        title: "Frontend Stack",
        notes:
          "Next.js 16 بـ App Router وتصميم ثنائي اللغة (RTL/LTR) مبني من الأساس لا مضاف لاحقاً.",
        tools: [
          { name: "Next.js 16", description: "App Router / SSR / SEO" },
          { name: "React 19", description: "UI Components" },
          { name: "TypeScript", description: "Typing وتحسين جودة الكود" },
          { name: "Tailwind CSS", description: "Utility-first styling" },
          { name: "shadcn / Base UI", description: "مكوّنات واجهة قابلة للتخصيص" },
          { name: "Framer Motion", description: "Animations وتجارب تفاعلية" },
          { name: "next-intl", description: "تعريب كامل عربي/إنجليزي مع RTL" },
          { name: "React Query", description: "Data fetching/caching" },
          { name: "Recharts", description: "رسوم بيانية للوحات التحكم" },
          { name: "react-globe.gl / Leaflet", description: "خريطة الوكلاء والتغطية الدولية" },
        ],
      },
      {
        title: "Backend Stack",
        notes:
          "API Routes داخل Next.js مع طبقة بيانات موحّدة وخلفية مهام ووقت حقيقي.",
        tools: [
          { name: "Next.js API Routes", description: "طبقة الـ API" },
          { name: "Prisma ORM", description: "ORM لإدارة الـ DB و migrations" },
          { name: "PostgreSQL", description: "قاعدة بيانات علائقية" },
          { name: "Redis + BullMQ", description: "طوابير مهام وجدولة" },
          { name: "Socket.IO", description: "تحديثات لحظية وإشعارات" },
          { name: "NextAuth", description: "مصادقة متعددة الأدوار" },
          { name: "Stripe", description: "مدفوعات واشتراكات" },
          { name: "Resend", description: "بريد المعاملات" },
          { name: "Cloudinary", description: "تخزين وتحسين الوسائط" },
        ],
      },
      {
        title: "Trust & Security",
        notes:
          "طبقة الثقة اللي المنتج كله قايم عليها: تحقق عام من الشهادات ومراقبة امتحانات.",
        tools: [
          { name: "Blockchain (ethers + IPFS)", description: "توثيق الشهادات وإثبات عدم التلاعب" },
          { name: "Passkeys / WebAuthn", description: "تسجيل دخول بدون كلمة مرور" },
          { name: "OTP (otpauth)", description: "مصادقة ثنائية" },
          { name: "AI Proctoring", description: "مراقبة الامتحانات بـ face-api و MediaPipe" },
          { name: "QR Verification", description: "تحقق فوري من الشهادات" },
        ],
      },
    ],
  },

  sections: [
    {
      id: 1,
      title: "Landing App",
      slug: "landing-app",
      summary:
        "الواجهة العامة ثنائية اللغة اللي بتقدّم المجلس وقطاعاته وأرقامه.",
      description:
        "الصفحة الرئيسية بنسختيها العربية والإنجليزية، مع Hero يشرح فكرة الـ Sovereign Excellence System، عدّادات حيّة (موظفين/مدربين/مراكز/شهادات/وكلاء/دول)، مبادئ الثقة، الدخول للـ Demo، المنح المميزة، دليل القطاعات، وآخر الأخبار. بالإضافة لصفحة How it works اللي بتشرح رحلة الاستخدام خطوة بخطوة.",
      pages: [
        {
          id: 1,
          title: "Home (EN)",
          slug: "home",
          description:
            "الصفحة الرئيسية بالإنجليزية: Hero، إحصائيات حيّة، مبادئ الثقة، Demo، المنح المميزة، القطاعات، آخر الأخبار.",
          images: [
            { id: 1, src: "/projects/ifacegb/landing-app/home/disktop/1.png", alt: "Home (EN) — Desktop" },
            { id: 2, src: "/projects/ifacegb/landing-app/home/mobile/1.png", alt: "Home (EN) — Mobile" },
          ],
          features: [
            "Hero + live counters",
            "Assurance principles",
            "Interactive demo entry",
            "Featured grants",
            "Sectors directory",
            "Latest news",
          ],
        },
        {
          id: 2,
          title: "Home (AR)",
          slug: "home-ar",
          description:
            "نفس الصفحة بالعربي مع تخطيط RTL كامل — مش ترجمة نصوص بس، التخطيط نفسه معكوس.",
          images: [
            { id: 1, src: "/projects/ifacegb/landing-app/home-ar/disktop/1.png", alt: "Home (AR) — Desktop" },
            { id: 2, src: "/projects/ifacegb/landing-app/home-ar/mobile/1.png", alt: "Home (AR) — Mobile" },
          ],
          features: [
            "Full RTL layout",
            "Arabic-first typography",
            "Same feature set as EN",
          ],
        },
        {
          id: 3,
          title: "How It Works",
          slug: "how-it-works",
          description:
            "شرح رحلة كل طرف داخل المنظومة: التسجيل، الاعتماد، التدريب، إصدار الشهادة، والتحقق منها.",
          images: [
            { id: 1, src: "/projects/ifacegb/landing-app/how-it-works/disktop/1.png", alt: "How It Works — Desktop" },
            { id: 2, src: "/projects/ifacegb/landing-app/how-it-works/mobile/1.png", alt: "How It Works — Mobile" },
          ],
          features: [
            "Step-by-step journey",
            "Per-role flow",
            "Accreditation lifecycle",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Public Pages",
      slug: "public-pages",
      summary:
        "المحتوى المؤسسي: القطاعات، الأخبار، الفعاليات، المنح، الشركاء، المجالس، وخريطة الوكلاء.",
      description:
        "مجموعة الصفحات العامة اللي بتشكّل الوجه المؤسسي للمجلس: دليل القطاعات الخمسة وصفحة تفصيلية لكل قطاع بخدماته، مركز الأخبار والفعاليات، بوابة المنح، الشركاء، مجلسي الاعتماد والتحكيم، خريطة تفاعلية للوكلاء حول العالم، الوظائف، التواصل، والسياسات.",
      pages: [
        {
          id: 1,
          title: "About",
          slug: "about",
          description:
            "تعريف المجلس: الرؤية، الرسالة، الهيكل، والتغطية الدولية.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/about/disktop/1.png", alt: "About — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/about/mobile/1.png", alt: "About — Mobile" },
          ],
          features: [
            "Vision & mission",
            "Governance structure",
            "International coverage",
          ],
        },
        {
          id: 2,
          title: "Sectors Directory",
          slug: "sectors",
          description:
            "دليل القطاعات الخمسة: الاعتماد والجودة، التقني، التدريب والتطوير المهني، الاستشارات، التسويق والفرنشايز، والعلاقات الدولية.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/sectors/disktop/1.png", alt: "Sectors Directory — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/sectors/mobile/1.png", alt: "Sectors Directory — Mobile" },
          ],
          features: [
            "5 strategic sectors",
            "Per-sector services",
            "Contact per sector",
          ],
        },
        {
          id: 3,
          title: "Sector Details",
          slug: "sector-detail",
          description:
            "صفحة القطاع الواحد بخدماته وفريقه وطريقة التواصل معه مباشرة.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/sector-detail/disktop/1.png", alt: "Sector Details — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/sector-detail/mobile/1.png", alt: "Sector Details — Mobile" },
          ],
          features: [
            "Service catalogue",
            "Sector team",
            "Direct contact",
          ],
        },
        {
          id: 4,
          title: "News Center",
          slug: "news",
          description:
            "مركز الأخبار والإعلانات والإنجازات من الشبكة الدولية.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/news/disktop/1.png", alt: "News Center — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/news/mobile/1.png", alt: "News Center — Mobile" },
          ],
          features: [
            "News listing",
            "Announcements",
            "Bilingual content",
          ],
        },
        {
          id: 5,
          title: "Events",
          slug: "events",
          description:
            "الفعاليات والمؤتمرات والورش القادمة والسابقة.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/events/disktop/1.png", alt: "Events — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/events/mobile/1.png", alt: "Events — Mobile" },
          ],
          features: [
            "Upcoming events",
            "Past conferences",
            "Event details",
          ],
        },
        {
          id: 6,
          title: "Grants Portal",
          slug: "grants",
          description:
            "بوابة المنح: فرص تمويل وتدريب معلنة من الوكالات المعتمدة داخل الشبكة.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/grants/disktop/1.png", alt: "Grants Portal — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/grants/mobile/1.png", alt: "Grants Portal — Mobile" },
          ],
          features: [
            "Grants listing",
            "Issuing agency",
            "Application flow",
          ],
        },
        {
          id: 7,
          title: "Grant Details",
          slug: "grant-detail",
          description:
            "تفاصيل المنحة الواحدة: المحتوى، المدة، الشروط، وطريقة التقديم.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/grant-detail/disktop/1.png", alt: "Grant Details — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/grant-detail/mobile/1.png", alt: "Grant Details — Mobile" },
          ],
          features: [
            "Full grant brief",
            "Eligibility",
            "Apply CTA",
          ],
        },
        {
          id: 8,
          title: "Partners",
          slug: "partners",
          description:
            "الشركاء والجهات المعتمدة المتعاونة مع المجلس دولياً.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/partners/disktop/1.png", alt: "Partners — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/partners/mobile/1.png", alt: "Partners — Mobile" },
          ],
          features: [
            "Partner directory",
            "Partnership types",
          ],
        },
        {
          id: 9,
          title: "Accreditation Council",
          slug: "accreditation-council",
          description:
            "مجلس الاعتماد: الأعضاء، الاختصاصات، ومعايير الاعتماد.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/accreditation-council/disktop/1.png", alt: "Accreditation Council — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/accreditation-council/mobile/1.png", alt: "Accreditation Council — Mobile" },
          ],
          features: [
            "Council members",
            "Accreditation standards",
          ],
        },
        {
          id: 10,
          title: "Arbitration Council",
          slug: "arbitration-council",
          description:
            "مجلس التحكيم: تسوية النزاعات داخل الشبكة وفق إطار معلن.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/arbitration-council/disktop/1.png", alt: "Arbitration Council — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/arbitration-council/mobile/1.png", alt: "Arbitration Council — Mobile" },
          ],
          features: [
            "Council members",
            "Arbitration framework",
          ],
        },
        {
          id: 11,
          title: "Agents Map",
          slug: "agents-map",
          description:
            "خريطة تفاعلية بالوكلاء والمراكز المعتمدة حول العالم.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/agents-map/disktop/1.png", alt: "Agents Map — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/agents-map/mobile/1.png", alt: "Agents Map — Mobile" },
          ],
          features: [
            "Interactive world map",
            "Agent lookup",
            "Coverage by country",
          ],
        },
        {
          id: 12,
          title: "Careers",
          slug: "careers",
          description:
            "الوظائف المتاحة داخل المجلس وقطاعاته.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/careers/disktop/1.png", alt: "Careers — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/careers/mobile/1.png", alt: "Careers — Mobile" },
          ],
          features: [
            "Open roles",
            "Apply flow",
          ],
        },
        {
          id: 13,
          title: "Contact",
          slug: "contact",
          description:
            "التواصل العام والتواصل المباشر مع كل قطاع على حدة.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/contact/disktop/1.png", alt: "Contact — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/contact/mobile/1.png", alt: "Contact — Mobile" },
          ],
          features: [
            "General contact",
            "Per-sector routing",
          ],
        },
        {
          id: 14,
          title: "Policies",
          slug: "policies",
          description:
            "سياسة الخصوصية والشروط والأحكام.",
          images: [
            { id: 1, src: "/projects/ifacegb/public-pages/policies/disktop/1.png", alt: "Policies — Desktop" },
            { id: 2, src: "/projects/ifacegb/public-pages/policies/mobile/1.png", alt: "Policies — Mobile" },
          ],
          features: [
            "Privacy policy",
            "Terms of use",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Verification",
      slug: "verify-app",
      summary:
        "تحقّق عام من الشهادات بدون تسجيل دخول.",
      description:
        "صفحة التحقق بتسمح لأي صاحب عمل أو جهة إنها تتأكد من شهادة صادرة من المجلس فوراً عن طريق رقم الشهادة أو QR، من غير سلاسل تواصل يدوية بطيئة. دي النقطة اللي بتدّي المنظومة مصداقيتها الخارجية.",
      pages: [
        {
          id: 1,
          title: "Certificate Verification",
          slug: "verify",
          description:
            "إدخال رقم الشهادة أو مسح الـ QR للتحقق الفوري من صحتها وبياناتها.",
          images: [
            { id: 1, src: "/projects/ifacegb/verify-app/verify/disktop/1.png", alt: "Certificate Verification — Desktop" },
            { id: 2, src: "/projects/ifacegb/verify-app/verify/mobile/1.png", alt: "Certificate Verification — Mobile" },
          ],
          features: [
            "Certificate lookup",
            "QR verification",
            "Public, no login",
            "Blockchain-backed record",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Auth & Applications",
      slug: "auth-app",
      summary:
        "تسجيل الدخول وطلبات الانضمام للمراكز والوكلاء والمدربين.",
      description:
        "تطبيق المصادقة ونماذج التقديم. كل نوع شريك (مركز تدريب / وكيل / مدرب) له نموذج تقديم مخصص ببياناته ومستنداته، وبيدخل في مسار اعتماد داخل المنظومة.",
      pages: [
        {
          id: 1,
          title: "Login",
          slug: "login",
          description:
            "تسجيل الدخول متعدد الأدوار مع دعم Passkeys والمصادقة الثنائية.",
          images: [
            { id: 1, src: "/projects/ifacegb/auth-app/login/disktop/1.png", alt: "Login — Desktop" },
            { id: 2, src: "/projects/ifacegb/auth-app/login/mobile/1.png", alt: "Login — Mobile" },
          ],
          features: [
            "Multi-role login",
            "Passkeys / WebAuthn",
            "2FA (OTP)",
          ],
        },
        {
          id: 2,
          title: "Apply as Center",
          slug: "apply-center",
          description:
            "نموذج تقديم مركز تدريب للحصول على الاعتماد.",
          images: [
            { id: 1, src: "/projects/ifacegb/auth-app/apply-center/disktop/1.png", alt: "Apply as Center — Desktop" },
            { id: 2, src: "/projects/ifacegb/auth-app/apply-center/mobile/1.png", alt: "Apply as Center — Mobile" },
          ],
          features: [
            "Center profile",
            "Document upload",
            "Accreditation request",
          ],
        },
        {
          id: 3,
          title: "Apply as Agent",
          slug: "apply-agent",
          description:
            "نموذج تقديم وكيل/فرنشايز للعمل باسم المجلس في دولة أو إقليم.",
          images: [
            { id: 1, src: "/projects/ifacegb/auth-app/apply-agent/disktop/1.png", alt: "Apply as Agent — Desktop" },
            { id: 2, src: "/projects/ifacegb/auth-app/apply-agent/mobile/1.png", alt: "Apply as Agent — Mobile" },
          ],
          features: [
            "Agency profile",
            "Territory selection",
            "Franchise request",
          ],
        },
        {
          id: 4,
          title: "Apply as Trainer",
          slug: "apply-trainer",
          description:
            "نموذج تقديم مدرب معتمد مع الخبرات والشهادات.",
          images: [
            { id: 1, src: "/projects/ifacegb/auth-app/apply-trainer/disktop/1.png", alt: "Apply as Trainer — Desktop" },
            { id: 2, src: "/projects/ifacegb/auth-app/apply-trainer/mobile/1.png", alt: "Apply as Trainer — Mobile" },
          ],
          features: [
            "Trainer CV",
            "Specializations",
            "Credential upload",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Demo Sandbox (Live Dashboards)",
      slug: "demo-app",
      summary:
        "لوحات تحكم حقيقية ببيانات تجريبية — من غير تسجيل، sandbox لمدة 24 ساعة.",
      description:
        "ميزة مميزة في المنتج: أي زائر يقدر يجرّب المنظومة من جوّه. يختار شخصية (مركز تدريب / وكالة / مدرب / طالب) فتتعمله بيئة تجريبية معزولة ببيانات جاهزة وجولة إرشادية، وتتمسح أوتوماتيك بعد 24 ساعة. الصور دي كلها من الـ sandbox مش من بيانات عملاء حقيقية.",
      pages: [
        {
          id: 1,
          title: "Demo Persona Picker",
          slug: "demo-picker",
          description:
            "اختيار الشخصية اللي هتجرّب بيها المنظومة: مركز، وكالة، مدرب، أو طالب.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/demo-picker/disktop/1.png", alt: "Demo Persona Picker — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/demo-picker/mobile/1.png", alt: "Demo Persona Picker — Mobile" },
          ],
          features: [
            "4 personas",
            "No signup",
            "Guided tour",
            "24h sandbox",
          ],
        },
        {
          id: 2,
          title: "Center — Dashboard",
          slug: "center-dashboard",
          description:
            "لوحة مركز التدريب: نظرة عامة على المهام والـ CRM وشبكة المركز.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/center-dashboard/disktop/1.png", alt: "Center — Dashboard — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/center-dashboard/mobile/1.png", alt: "Center — Dashboard — Mobile" },
          ],
          features: [
            "CRM overview",
            "Tasks",
            "Center network",
          ],
        },
        {
          id: 3,
          title: "Center — Trainers",
          slug: "center-trainers",
          description:
            "إدارة المدربين المرتبطين بالمركز وتكليفاتهم.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/center-trainers/disktop/1.png", alt: "Center — Trainers — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/center-trainers/mobile/1.png", alt: "Center — Trainers — Mobile" },
          ],
          features: [
            "Trainer roster",
            "Assignments",
          ],
        },
        {
          id: 4,
          title: "Center — Certificates",
          slug: "center-certificates",
          description:
            "الشهادات الصادرة عن طريق المركز وحالتها.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/center-certificates/disktop/1.png", alt: "Center — Certificates — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/center-certificates/mobile/1.png", alt: "Center — Certificates — Mobile" },
          ],
          features: [
            "Issued certificates",
            "Status tracking",
          ],
        },
        {
          id: 5,
          title: "Center — Wallet",
          slug: "center-wallet",
          description:
            "المحفظة المالية للمركز: الرصيد والحركات والمستحقات.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/center-wallet/disktop/1.png", alt: "Center — Wallet — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/center-wallet/mobile/1.png", alt: "Center — Wallet — Mobile" },
          ],
          features: [
            "Balance",
            "Transactions",
            "Payouts",
          ],
        },
        {
          id: 6,
          title: "Center — Accreditation",
          slug: "center-accreditation",
          description:
            "ملف اعتماد المركز ومراحله ومستنداته.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/center-accreditation/disktop/1.png", alt: "Center — Accreditation — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/center-accreditation/mobile/1.png", alt: "Center — Accreditation — Mobile" },
          ],
          features: [
            "Accreditation file",
            "Checkpoints",
            "Documents",
          ],
        },
        {
          id: 7,
          title: "Agency — Dashboard",
          slug: "agency-dashboard",
          description:
            "لوحة الوكالة/الفرنشايز: عمليات الإقليم والمنح والـ CRM.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/agency-dashboard/disktop/1.png", alt: "Agency — Dashboard — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/agency-dashboard/mobile/1.png", alt: "Agency — Dashboard — Mobile" },
          ],
          features: [
            "Franchise operations",
            "Grants",
            "CRM",
          ],
        },
        {
          id: 8,
          title: "Agency — Centers",
          slug: "agency-centers",
          description:
            "المراكز التابعة للوكالة وحالة كل مركز.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/agency-centers/disktop/1.png", alt: "Agency — Centers — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/agency-centers/mobile/1.png", alt: "Agency — Centers — Mobile" },
          ],
          features: [
            "Center network",
            "Per-center status",
          ],
        },
        {
          id: 9,
          title: "Agency — Trainers",
          slug: "agency-trainers",
          description:
            "المدربون داخل نطاق الوكالة.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/agency-trainers/disktop/1.png", alt: "Agency — Trainers — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/agency-trainers/mobile/1.png", alt: "Agency — Trainers — Mobile" },
          ],
          features: [
            "Trainer directory",
            "Coverage",
          ],
        },
        {
          id: 10,
          title: "Agency — License",
          slug: "agency-license",
          description:
            "رخصة الوكالة وشروطها ومدتها وتجديدها.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/agency-license/disktop/1.png", alt: "Agency — License — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/agency-license/mobile/1.png", alt: "Agency — License — Mobile" },
          ],
          features: [
            "License terms",
            "Validity",
            "Renewal",
          ],
        },
        {
          id: 11,
          title: "Agency — Tickets",
          slug: "agency-tickets",
          description:
            "نظام التذاكر والدعم الداخلي بين الوكالة والمجلس.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/agency-tickets/disktop/1.png", alt: "Agency — Tickets — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/agency-tickets/mobile/1.png", alt: "Agency — Tickets — Mobile" },
          ],
          features: [
            "Support tickets",
            "Internal threads",
          ],
        },
        {
          id: 12,
          title: "Trainer — Dashboard",
          slug: "trainer-dashboard",
          description:
            "لوحة المدرب: الكورسات والامتحانات والشهادات والمحفظة.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/trainer-dashboard/disktop/1.png", alt: "Trainer — Dashboard — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/trainer-dashboard/mobile/1.png", alt: "Trainer — Dashboard — Mobile" },
          ],
          features: [
            "LMS overview",
            "Exams",
            "Certificates",
            "Wallet",
          ],
        },
        {
          id: 13,
          title: "Trainer — Courses",
          slug: "trainer-courses",
          description:
            "الكورسات اللي بيدرّسها المدرب ومحتواها.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/trainer-courses/disktop/1.png", alt: "Trainer — Courses — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/trainer-courses/mobile/1.png", alt: "Trainer — Courses — Mobile" },
          ],
          features: [
            "Course list",
            "Content management",
          ],
        },
        {
          id: 14,
          title: "Trainer — LMS",
          slug: "trainer-lms",
          description:
            "نظام إدارة التعلّم من جهة المدرب: الدروس والمواد والتقييم.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/trainer-lms/disktop/1.png", alt: "Trainer — LMS — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/trainer-lms/mobile/1.png", alt: "Trainer — LMS — Mobile" },
          ],
          features: [
            "Lessons",
            "Materials",
            "Grading",
          ],
        },
        {
          id: 15,
          title: "Trainer — Certificates",
          slug: "trainer-certificates",
          description:
            "الشهادات اللي صدرت للمتدربين تحت إشراف المدرب.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/trainer-certificates/disktop/1.png", alt: "Trainer — Certificates — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/trainer-certificates/mobile/1.png", alt: "Trainer — Certificates — Mobile" },
          ],
          features: [
            "Issued certificates",
            "Verification links",
          ],
        },
        {
          id: 16,
          title: "Trainer — Wallet",
          slug: "trainer-wallet",
          description:
            "محفظة المدرب: الأرباح والمكافآت وحركات السحب.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/trainer-wallet/disktop/1.png", alt: "Trainer — Wallet — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/trainer-wallet/mobile/1.png", alt: "Trainer — Wallet — Mobile" },
          ],
          features: [
            "Earnings",
            "Rewards",
            "Withdrawals",
          ],
        },
        {
          id: 17,
          title: "Trainer — Attendance",
          slug: "trainer-attendance",
          description:
            "تسجيل ومتابعة حضور المتدربين.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/trainer-attendance/disktop/1.png", alt: "Trainer — Attendance — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/trainer-attendance/mobile/1.png", alt: "Trainer — Attendance — Mobile" },
          ],
          features: [
            "Attendance sheets",
            "Session tracking",
          ],
        },
        {
          id: 18,
          title: "Student — Dashboard",
          slug: "student-dashboard",
          description:
            "لوحة الطالب: الكورسات والامتحانات والشهادات ورحلته التعليمية.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/student-dashboard/disktop/1.png", alt: "Student — Dashboard — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/student-dashboard/mobile/1.png", alt: "Student — Dashboard — Mobile" },
          ],
          features: [
            "My courses",
            "Exams",
            "Certificates",
          ],
        },
        {
          id: 19,
          title: "Student — Courses",
          slug: "student-courses",
          description:
            "الكورسات المشترك بها الطالب وتقدّمه فيها.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/student-courses/disktop/1.png", alt: "Student — Courses — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/student-courses/mobile/1.png", alt: "Student — Courses — Mobile" },
          ],
          features: [
            "Enrolled courses",
            "Progress",
          ],
        },
        {
          id: 20,
          title: "Student — LMS",
          slug: "student-lms",
          description:
            "محتوى الدروس والمواد من جهة الطالب.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/student-lms/disktop/1.png", alt: "Student — LMS — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/student-lms/mobile/1.png", alt: "Student — LMS — Mobile" },
          ],
          features: [
            "Lessons",
            "Materials",
            "Submissions",
          ],
        },
        {
          id: 21,
          title: "Student — Certificates",
          slug: "student-certificates",
          description:
            "شهادات الطالب وروابط التحقق العامة بتاعتها.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/student-certificates/disktop/1.png", alt: "Student — Certificates — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/student-certificates/mobile/1.png", alt: "Student — Certificates — Mobile" },
          ],
          features: [
            "My certificates",
            "Public verify link",
            "Download",
          ],
        },
        {
          id: 22,
          title: "Student — Journey",
          slug: "student-journey",
          description:
            "رحلة الطالب داخل المنظومة من التسجيل لحد الشهادة.",
          images: [
            { id: 1, src: "/projects/ifacegb/demo-app/student-journey/disktop/1.png", alt: "Student — Journey — Desktop" },
            { id: 2, src: "/projects/ifacegb/demo-app/student-journey/mobile/1.png", alt: "Student — Journey — Mobile" },
          ],
          features: [
            "Learning path",
            "Milestones",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Backend & Platform",
      slug: "backend",
      summary:
        "الطبقة اللي بتشغّل المنظومة كلها: بيانات، طوابير، وقت حقيقي، مدفوعات، وتوثيق شهادات.",
      description:
        "الخلفية مبنية داخل Next.js 16 كـ API Routes فوق Prisma و PostgreSQL، مع Redis و BullMQ للمهام المجدولة (جرد، تقارير، تنظيف بيئات الـ demo)، و Socket.IO للتحديثات اللحظية، و Stripe للمدفوعات، وطبقة توثيق الشهادات على البلوك تشين مع تخزين على IPFS.",
      pages: [
        {
          id: 1,
          title: "API & Modules",
          slug: "api-modules",
          description:
            "نظرة عامة على بنية الـ API وتقسيم الموديولات وقاعدة البيانات والخدمات المساندة.",
          images: [],
          features: [
            "Next.js API routes",
            "Prisma models",
            "PostgreSQL schema",
            "Redis + BullMQ jobs",
            "Socket.IO realtime",
            "Stripe payments",
            "Blockchain certificate anchoring",
            "Automated demo purge",
          ],
        },
      ],
    },
  ],
};

export const booksplatform: Project = {
  id: 10,
  title: "Books Platform",
  slug: "booksplatform",
  img: "/projects/booksplatform/cover.png",
  ogImage: "/projects/booksplatform/og.jpg",
  iconLists: [
    "/next.svg",
    "/re.svg",
    "/ts.svg",
    "/tail.svg",
    "/fm.svg",
    "/prisma.svg",
    "/Postgresql.svg",
  ],
  link: "https://booksplatform.net",
  des: "منصة الكتب العالمية — نافذة القارئ العربي على كل كتاب جديد بيصدر في العالم: اكتشاف وقراءة ونشر، بموقع ويب ثنائي اللغة وتطبيق موبايل Flutter على نفس الـ API.",
  fullDescription:
    "منصة الكتب العالمية مشروع ثقافي بيحاول يقفل فجوة حقيقية: القارئ العربي مش بيعرف بالكتب الجديدة اللي بتصدر في العالم إلا متأخر أو مش بيعرف خالص. المنصة بتجمع الكتب الصادرة حديثاً وبتصنّفها (مترجم / غير مترجم / مرشّح للترجمة) عبر أقسام موضوعية (أفكار وسياسات، فلسفات وثقافات، تقنيات وعلوم، دراسات اجتماعية)، وبتضيف فوقها محتوى تحريري (حصاد، أفكار، العالم يقرأ) ومحتوى مرئي (بوكس توك، حكاية رواية)، وبوابة للناشرين وللنشر. المنتج مبني كـ Next.js 16 ويب ثنائي اللغة (عربي أساسي/إنجليزي) + تطبيق Flutter لـ iOS و Android، الاتنين على نفس قاعدة البيانات والـ REST API.",

  tools: {
    stacks: [
      {
        title: "Frontend Stack (Web)",
        notes:
          "Next.js 16 App Router مع تعريب كامل و RTL أساسي مش مضاف.",
        tools: [
          { name: "Next.js 16", description: "App Router / SSR / standalone output" },
          { name: "React 19", description: "UI Components" },
          { name: "TypeScript", description: "Typing وتحسين جودة الكود" },
          { name: "Tailwind CSS 4", description: "Utility-first styling" },
          { name: "Radix UI / shadcn", description: "مكوّنات واجهة accessible" },
          { name: "Framer Motion", description: "Animations" },
          { name: "next-intl", description: "عربي/إنجليزي مع RTL كامل" },
          { name: "React Query", description: "Server state & caching" },
          { name: "Zustand", description: "Client state" },
          { name: "Three.js / R3F", description: "عناصر ثلاثية الأبعاد في الواجهة" },
          { name: "Fuse.js", description: "بحث فوري داخل الكتب" },
          { name: "Tiptap", description: "محرر نصوص غني للمقالات" },
        ],
      },
      {
        title: "Backend Stack",
        notes:
          "API داخل Next.js فوق Prisma 7 و PostgreSQL 16 مع تخزين وبريد وإشعارات.",
        tools: [
          { name: "Next.js API Routes", description: "طبقة الـ API" },
          { name: "Prisma 7", description: "ORM و migrations" },
          { name: "PostgreSQL 16", description: "قاعدة بيانات علائقية" },
          { name: "JWT (jose) + Passkeys", description: "مصادقة بدون كلمة مرور" },
          { name: "Cloudflare R2", description: "تخزين الملفات والأغلفة" },
          { name: "Upstash Redis", description: "Rate limiting وكاش" },
          { name: "Nodemailer / Resend", description: "بريد المعاملات" },
          { name: "Web Push (VAPID)", description: "إشعارات المتصفح" },
          { name: "Firebase FCM", description: "إشعارات الموبايل" },
        ],
      },
      {
        title: "Mobile & Architecture",
        notes:
          "تطبيق Flutter كامل لـ iOS و Android بيشارك نفس الـ API وقاعدة البيانات.",
        tools: [
          { name: "Flutter", description: "تطبيق iOS + Android من قاعدة كود واحدة" },
          { name: "Shared REST API", description: "نفس الـ API للويب والموبايل" },
          { name: "Shared PostgreSQL", description: "مصدر بيانات واحد" },
          { name: "next-sitemap", description: "Sitemap و SEO لكل لغة" },
        ],
      },
    ],
  },

  sections: [
    {
      id: 1,
      title: "Landing App",
      slug: "landing-app",
      summary:
        "الصفحة الرئيسية بنسختيها العربية والإنجليزية.",
      description:
        "الواجهة الأولى للمنصة: رسالة المشروع، أحدث الإصدارات، والأقسام الموضوعية (أفكار وسياسات، فلسفات وثقافات، تقنيات وعلوم، دراسات اجتماعية) معروضة كـ carousels. العربي هو اللغة الأساسية والـ RTL مبني من الأساس.",
      pages: [
        {
          id: 1,
          title: "Home (AR)",
          slug: "home-ar",
          description:
            "الصفحة الرئيسية بالعربي: رسالة المنصة، صدر حديثاً، والأقسام الموضوعية.",
          images: [
            { id: 1, src: "/projects/booksplatform/landing-app/home-ar/disktop/1.png", alt: "Home (AR) — Desktop" },
            { id: 2, src: "/projects/booksplatform/landing-app/home-ar/mobile/1.png", alt: "Home (AR) — Mobile" },
          ],
          features: [
            "Mission statement",
            "Recently published",
            "Topic carousels",
            "Full RTL",
          ],
        },
        {
          id: 2,
          title: "Home (EN)",
          slug: "home-en",
          description:
            "نفس الصفحة بالإنجليزية بتخطيط LTR.",
          images: [
            { id: 1, src: "/projects/booksplatform/landing-app/home-en/disktop/1.png", alt: "Home (EN) — Desktop" },
            { id: 2, src: "/projects/booksplatform/landing-app/home-en/mobile/1.png", alt: "Home (EN) — Mobile" },
          ],
          features: [
            "LTR layout",
            "Same content model",
            "Locale-aware routing",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Books App",
      slug: "books-app",
      summary:
        "قلب المنصة: تصفّح الكتب وتصنيفها حسب حالة الترجمة والموضوع.",
      description:
        "فهرس الكتب الكامل مع فلترة حسب الموضوع وحالة الترجمة. الكتب مقسّمة لثلاث حالات بتعكس رسالة المشروع: مترجم، غير مترجم، ومرشّح للترجمة — والأخيرة دي اللي بتخلي المنصة أداة ترشيح مش مجرد فهرس.",
      pages: [
        {
          id: 1,
          title: "All Books",
          slug: "books",
          description:
            "فهرس الكتب الكامل مع الفلترة حسب الموضوع وحالة الترجمة والبحث الفوري.",
          images: [
            { id: 1, src: "/projects/booksplatform/books-app/books/disktop/1.png", alt: "All Books — Desktop" },
            { id: 2, src: "/projects/booksplatform/books-app/books/mobile/1.png", alt: "All Books — Mobile" },
          ],
          features: [
            "Full catalogue",
            "Topic filters",
            "Translation status",
            "Instant search (Fuse.js)",
          ],
        },
        {
          id: 2,
          title: "Nominated for Translation",
          slug: "nominated-for-translation",
          description:
            "الكتب المرشّحة للترجمة للعربية — القائمة اللي بتحوّل المنصة من فهرس لأداة ترشيح.",
          images: [
            { id: 1, src: "/projects/booksplatform/books-app/nominated-for-translation/disktop/1.png", alt: "Nominated for Translation — Desktop" },
            { id: 2, src: "/projects/booksplatform/books-app/nominated-for-translation/mobile/1.png", alt: "Nominated for Translation — Mobile" },
          ],
          features: [
            "Curated nominations",
            "Why-this-book context",
          ],
        },
        {
          id: 3,
          title: "Translated Books",
          slug: "translated",
          description:
            "الكتب اللي اتترجمت فعلاً للعربية ومتاحة للقارئ.",
          images: [
            { id: 1, src: "/projects/booksplatform/books-app/translated/disktop/1.png", alt: "Translated Books — Desktop" },
            { id: 2, src: "/projects/booksplatform/books-app/translated/mobile/1.png", alt: "Translated Books — Mobile" },
          ],
          features: [
            "Translated catalogue",
            "Edition details",
          ],
        },
        {
          id: 4,
          title: "Book Details",
          slug: "book-detail",
          description:
            "صفحة الكتاب: الغلاف، المؤلف، الناشر، الموضوع، حالة الترجمة، والعرض التعريفي.",
          images: [
            { id: 1, src: "/projects/booksplatform/books-app/book-detail/disktop/1.png", alt: "Book Details — Desktop" },
            { id: 2, src: "/projects/booksplatform/books-app/book-detail/mobile/1.png", alt: "Book Details — Mobile" },
          ],
          features: [
            "Cover & metadata",
            "Author & publisher",
            "Translation status",
            "Related books",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Articles App",
      slug: "articles-app",
      summary:
        "المحتوى التحريري: حصاد، أفكار، والعالم يقرأ.",
      description:
        "ثلاث سلاسل تحريرية بتدّي المنصة صوتها الخاص بدل ما تكون فهرس جاف: «حصاد» للمراجعات الدورية، «أفكار» للمقالات الفكرية، و«العالم يقرأ» لمتابعة اللي بيتقري عالمياً.",
      pages: [
        {
          id: 1,
          title: "Harvest (حصاد)",
          slug: "harvest",
          description:
            "سلسلة الحصاد: مراجعات ومختارات دورية من الصادر حديثاً.",
          images: [
            { id: 1, src: "/projects/booksplatform/articles-app/harvest/disktop/1.png", alt: "Harvest (حصاد) — Desktop" },
            { id: 2, src: "/projects/booksplatform/articles-app/harvest/mobile/1.png", alt: "Harvest (حصاد) — Mobile" },
          ],
          features: [
            "Editorial series",
            "Periodic roundups",
            "Rich content (Tiptap)",
          ],
        },
        {
          id: 2,
          title: "Ideas (أفكار)",
          slug: "ideas",
          description:
            "المقالات الفكرية والتحليلية المرتبطة بالكتب والأفكار.",
          images: [
            { id: 1, src: "/projects/booksplatform/articles-app/ideas/disktop/1.png", alt: "Ideas (أفكار) — Desktop" },
            { id: 2, src: "/projects/booksplatform/articles-app/ideas/mobile/1.png", alt: "Ideas (أفكار) — Mobile" },
          ],
          features: [
            "Long-form essays",
            "Reading time",
            "Author bylines",
          ],
        },
        {
          id: 3,
          title: "World Reads (العالم يقرأ)",
          slug: "world-reads",
          description:
            "متابعة اللي بيتقري في العالم وليه، وربطه بالقارئ العربي.",
          images: [
            { id: 1, src: "/projects/booksplatform/articles-app/world-reads/disktop/1.png", alt: "World Reads (العالم يقرأ) — Desktop" },
            { id: 2, src: "/projects/booksplatform/articles-app/world-reads/mobile/1.png", alt: "World Reads (العالم يقرأ) — Mobile" },
          ],
          features: [
            "Global reading trends",
            "Curated picks",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Media App",
      slug: "media-app",
      summary:
        "المحتوى المرئي: بوكس توك وحكاية رواية.",
      description:
        "قسم الوسائط بيستضيف المحتوى المرئي والصوتي للمنصة — حلقات نقاش حول الكتب، وسلسلة بتحكي قصة رواية معيّنة — مع مشغّل مدمج داخل الصفحة.",
      pages: [
        {
          id: 1,
          title: "Media Hub",
          slug: "media",
          description:
            "الصفحة الرئيسية للوسائط وكل السلاسل المتاحة.",
          images: [
            { id: 1, src: "/projects/booksplatform/media-app/media/disktop/1.png", alt: "Media Hub — Desktop" },
            { id: 2, src: "/projects/booksplatform/media-app/media/mobile/1.png", alt: "Media Hub — Mobile" },
          ],
          features: [
            "Series listing",
            "Embedded player",
          ],
        },
        {
          id: 2,
          title: "Books Talk (بوكس توك)",
          slug: "books-talk",
          description:
            "حلقات نقاش وحوارات حول الكتب والإصدارات.",
          images: [
            { id: 1, src: "/projects/booksplatform/media-app/books-talk/disktop/1.png", alt: "Books Talk (بوكس توك) — Desktop" },
            { id: 2, src: "/projects/booksplatform/media-app/books-talk/mobile/1.png", alt: "Books Talk (بوكس توك) — Mobile" },
          ],
          features: [
            "Episode listing",
            "Video player",
            "Episode notes",
          ],
        },
        {
          id: 3,
          title: "Novel Story (حكاية رواية)",
          slug: "novel-story",
          description:
            "سلسلة بتحكي قصة رواية وخلفيتها وسياقها.",
          images: [
            { id: 1, src: "/projects/booksplatform/media-app/novel-story/disktop/1.png", alt: "Novel Story (حكاية رواية) — Desktop" },
            { id: 2, src: "/projects/booksplatform/media-app/novel-story/mobile/1.png", alt: "Novel Story (حكاية رواية) — Mobile" },
          ],
          features: [
            "Narrative series",
            "Per-episode pages",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Publishers App",
      slug: "publishers-app",
      summary:
        "بوابة الناشرين وطلبات النشر على المنصة.",
      description:
        "الطرف التاني من المعادلة: دليل الناشرين المتعاونين، وبوابة بتسمح لناشر أو مؤلف إنه يقدّم كتاب للعرض أو للترشيح للترجمة داخل المنصة.",
      pages: [
        {
          id: 1,
          title: "Publishers Directory",
          slug: "publishers",
          description:
            "دليل دور النشر المتعاونة مع المنصة وإصداراتها.",
          images: [
            { id: 1, src: "/projects/booksplatform/publishers-app/publishers/disktop/1.png", alt: "Publishers Directory — Desktop" },
            { id: 2, src: "/projects/booksplatform/publishers-app/publishers/mobile/1.png", alt: "Publishers Directory — Mobile" },
          ],
          features: [
            "Publisher profiles",
            "Published titles",
          ],
        },
        {
          id: 2,
          title: "Publish With Us",
          slug: "publish",
          description:
            "بوابة تقديم الكتب للعرض أو الترشيح للترجمة على المنصة.",
          images: [
            { id: 1, src: "/projects/booksplatform/publishers-app/publish/disktop/1.png", alt: "Publish With Us — Desktop" },
            { id: 2, src: "/projects/booksplatform/publishers-app/publish/mobile/1.png", alt: "Publish With Us — Mobile" },
          ],
          features: [
            "Submission form",
            "Review flow",
            "File upload (R2)",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Info Pages",
      slug: "info-pages",
      summary:
        "الصفحات المؤسسية: من نحن، الخدمات، الفريق، التواصل، والسياسات.",
      description:
        "الصفحات اللي بتشرح المشروع نفسه: رسالته وأهدافه، الخدمات اللي بيقدمها للكُتّاب والقُرّاء والباحثين والناشرين والمترجمين، فريق العمل، التواصل، وسياسات الاستخدام والخصوصية.",
      pages: [
        {
          id: 1,
          title: "About",
          slug: "about",
          description:
            "رسالة المشروع وأهدافه ودوره الثقافي.",
          images: [
            { id: 1, src: "/projects/booksplatform/info-pages/about/disktop/1.png", alt: "About — Desktop" },
            { id: 2, src: "/projects/booksplatform/info-pages/about/mobile/1.png", alt: "About — Mobile" },
          ],
          features: [
            "Mission & vision",
            "Cultural role",
          ],
        },
        {
          id: 2,
          title: "Services",
          slug: "services",
          description:
            "الخدمات المقدمة للكُتّاب والقُرّاء والباحثين والناشرين والمترجمين.",
          images: [
            { id: 1, src: "/projects/booksplatform/info-pages/services/disktop/1.png", alt: "Services — Desktop" },
            { id: 2, src: "/projects/booksplatform/info-pages/services/mobile/1.png", alt: "Services — Mobile" },
          ],
          features: [
            "Per-audience services",
            "Collaboration paths",
          ],
        },
        {
          id: 3,
          title: "Team",
          slug: "team",
          description:
            "فريق المنصة التحريري والتقني.",
          images: [
            { id: 1, src: "/projects/booksplatform/info-pages/team/disktop/1.png", alt: "Team — Desktop" },
            { id: 2, src: "/projects/booksplatform/info-pages/team/mobile/1.png", alt: "Team — Mobile" },
          ],
          features: [
            "Team profiles",
            "Roles",
          ],
        },
        {
          id: 4,
          title: "Contact",
          slug: "contact",
          description:
            "طرق التواصل ونموذج المراسلة.",
          images: [
            { id: 1, src: "/projects/booksplatform/info-pages/contact/disktop/1.png", alt: "Contact — Desktop" },
            { id: 2, src: "/projects/booksplatform/info-pages/contact/mobile/1.png", alt: "Contact — Mobile" },
          ],
          features: [
            "Contact form",
            "Channels",
          ],
        },
        {
          id: 5,
          title: "Privacy Policy",
          slug: "privacy",
          description:
            "سياسة الخصوصية والتعامل مع بيانات المستخدمين.",
          images: [
            { id: 1, src: "/projects/booksplatform/info-pages/privacy/disktop/1.png", alt: "Privacy Policy — Desktop" },
            { id: 2, src: "/projects/booksplatform/info-pages/privacy/mobile/1.png", alt: "Privacy Policy — Mobile" },
          ],
          features: [
            "Data handling",
            "User rights",
          ],
        },
        {
          id: 6,
          title: "Terms",
          slug: "terms",
          description:
            "الشروط والأحكام لاستخدام المنصة.",
          images: [
            { id: 1, src: "/projects/booksplatform/info-pages/terms/disktop/1.png", alt: "Terms — Desktop" },
            { id: 2, src: "/projects/booksplatform/info-pages/terms/mobile/1.png", alt: "Terms — Mobile" },
          ],
          features: [
            "Terms of use",
            "Content policy",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Admin Console",
      slug: "admin-app",
      summary:
        "لوحة التحرير اللي بيتبني فيها كتالوج المنصة ومحتواها.",
      description:
        "لوحة الإدارة هي اللي بيتدار منها كل محتوى المنصة: الكتالوج (أكتر من 4300 كتاب)، دور النشر والمؤلفين، التصنيفات الموضوعية، المقالات التحريرية، مكتبة الوسائط، وسلايدر الصفحة الرئيسية. الصور هنا للصفحات الإدارية الخاصة بالمحتوى فقط — صفحات بيانات المستخدمين والرسائل والطلبات مستبعدة عمداً.",
      pages: [
        {
          id: 1,
          title: "Dashboard",
          slug: "admin-dashboard",
          description:
            "نظرة عامة على المنصة: إجمالي الكتب، دور النشر، المقالات، والعناصر اللي محتاجة مراجعة.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-dashboard/disktop/1.png", alt: "Dashboard — Desktop" },
          ],
          features: [
            "Platform-wide counters",
            "Items pending review",
            "Sales & revenue chart",
            "Quick actions",
            "Recently added books",
          ],
        },
        {
          id: 2,
          title: "Books Catalogue",
          slug: "admin-books",
          description:
            "إدارة كتالوج الكتب: الإضافة والتحرير والتصنيف وحالة الترجمة وحالة النشر.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-books/disktop/1.png", alt: "Books Catalogue — Desktop" },
          ],
          features: [
            "4,300+ titles",
            "Translation status",
            "Topic assignment",
            "Draft / published",
          ],
        },
        {
          id: 3,
          title: "Authors",
          slug: "admin-authors",
          description:
            "إدارة بيانات المؤلفين المرتبطة بالكتب في الكتالوج.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-authors/disktop/1.png", alt: "Authors — Desktop" },
          ],
          features: [
            "Author records",
            "Linked titles",
          ],
        },
        {
          id: 4,
          title: "Publishers",
          slug: "admin-publishers",
          description:
            "إدارة دور النشر (أكتر من 700 دار) وإصداراتها.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-publishers/disktop/1.png", alt: "Publishers — Desktop" },
          ],
          features: [
            "700+ publishers",
            "Publisher profiles",
            "Linked titles",
          ],
        },
        {
          id: 5,
          title: "Categories",
          slug: "admin-categories",
          description:
            "التصنيفات الموضوعية اللي بتتنظّم بيها الكتب والمقالات.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-categories/disktop/1.png", alt: "Categories — Desktop" },
          ],
          features: [
            "Topic taxonomy",
            "Bilingual labels",
          ],
        },
        {
          id: 6,
          title: "Articles",
          slug: "admin-articles",
          description:
            "تحرير المقالات التحريرية للسلاسل الثلاث (حصاد، أفكار، العالم يقرأ) بمحرر نصوص غني.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-articles/disktop/1.png", alt: "Articles — Desktop" },
          ],
          features: [
            "Rich text editor (Tiptap)",
            "Series assignment",
            "Draft / publish",
          ],
        },
        {
          id: 7,
          title: "Media Library",
          slug: "admin-media",
          description:
            "إدارة المحتوى المرئي وحلقات السلاسل والملفات المرفوعة.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-media/disktop/1.png", alt: "Media Library — Desktop" },
          ],
          features: [
            "Media episodes",
            "Series management",
            "R2 uploads",
          ],
        },
        {
          id: 8,
          title: "Home Slider",
          slug: "admin-home-slider",
          description:
            "التحكم في سلايدر الصفحة الرئيسية والرسائل المعروضة عليه.",
          images: [
            { id: 1, src: "/projects/booksplatform/admin-app/admin-home-slider/disktop/1.png", alt: "Home Slider — Desktop" },
          ],
          features: [
            "Slide management",
            "Ordering",
            "Bilingual copy",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Mobile App (Flutter)",
      slug: "mobile-app",
      summary:
        "تطبيق iOS و Android على نفس الـ API وقاعدة البيانات.",
      description:
        "تطبيق Flutter كامل بيوفّر نفس تجربة الاكتشاف والقراءة على الموبايل، مع إشعارات Firebase FCM ومزامنة المفضلات، وبيشارك الويب نفس الـ REST API وقاعدة بيانات PostgreSQL.",
      pages: [
        {
          id: 1,
          title: "Mobile Overview",
          slug: "overview",
          description:
            "تطبيق Flutter لـ iOS و Android بنفس نموذج المحتوى والمصادقة بتوع الويب.",
          images: [],
          features: [
            "Flutter (iOS + Android)",
            "Shared REST API",
            "Firebase FCM push",
            "Favorites sync",
            "Arabic-first RTL",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Backend",
      slug: "backend",
      summary:
        "الـ API وقاعدة البيانات والتخزين والإشعارات اللي بتخدم الويب والموبايل.",
      description:
        "الخلفية مبنية داخل Next.js 16 كـ API Routes فوق Prisma 7 و PostgreSQL 16، مع Cloudflare R2 لتخزين الأغلفة والملفات، Upstash Redis للـ rate limiting والكاش، مصادقة JWT مع دعم Passkeys، وإشعارات Web Push للمتصفح و FCM للموبايل.",
      pages: [
        {
          id: 1,
          title: "API & Modules",
          slug: "api-modules",
          description:
            "بنية الـ API، نموذج البيانات، التخزين، والمصادقة اللي بتخدم المنصتين.",
          images: [],
          features: [
            "Next.js API routes",
            "Prisma 7 models",
            "PostgreSQL 16",
            "Cloudflare R2 storage",
            "Upstash rate limiting",
            "JWT + Passkeys",
            "Web Push + FCM",
          ],
        },
      ],
    },
  ],
};

export const aiaetar: Project = {
  id: 11,
  title: "AIAETAR Institute",
  slug: "aiaetar",
  img: "/projects/aiaetar/cover.png",
  ogImage: "/projects/aiaetar/og.jpg",
  iconLists: [
    "/next.svg",
    "/re.svg",
    "/ts.svg",
    "/tail.svg",
    "/fm.svg",
    "/prisma.svg",
    "/Postgresql.svg",
  ],
  link: "https://www.aiaetar.com",
  des: "موقع ومنظومة المعهد الأمريكي للتعليم التطبيقي لبحوث السياحة والإدارة: برامج معتمدة دولياً، مدربون، موارد، ومعرض أعمال، مع تحقّق عام من الشهادات ولوحة إدارة كاملة.",
  fullDescription:
    "AIAETAR هو المعهد الأمريكي للتعليم التطبيقي لبحوث السياحة والإدارة — معهد مرخّص ببرامج معتمدة دولياً في السياحة والضيافة والهندسة وإدارة الجودة والقيادة الإدارية. المنصة بتعرض أكتر من 50 برنامج موزّعة على دبلومات تطبيقية ودورات قصيرة وتعلّم إلكتروني ومسارات قيادية وهندسية، مع ملفات المدربين (مهنيين ممارسين)، مكتبة موارد مهنية، معرض أعمال، صفحات اعتماد، وتحقّق عام من الشهادات. ورا كده لوحة إدارة كاملة بتدير البرامج والمتدربين والشهادات والتصدير لإكسل. المنتج ثنائي اللغة عربي/إنجليزي ومبني على Next.js 16 و Prisma 7.",

  tools: {
    stacks: [
      {
        title: "Frontend Stack",
        notes:
          "Next.js 16 بـ App Router وتعريب كامل عربي/إنجليزي مع RTL.",
        tools: [
          { name: "Next.js 16", description: "App Router / SSR / SEO" },
          { name: "React 19", description: "UI Components" },
          { name: "TypeScript", description: "Typing وتحسين جودة الكود" },
          { name: "Tailwind CSS 4", description: "Utility-first styling" },
          { name: "shadcn / Base UI", description: "مكوّنات واجهة قابلة للتخصيص" },
          { name: "Framer Motion", description: "Animations وتجارب تفاعلية" },
          { name: "next-intl", description: "تبديل عربي/إنجليزي مع RTL" },
          { name: "React Hook Form + Zod", description: "نماذج مع تحقّق صارم" },
          { name: "Zustand", description: "Client state" },
        ],
      },
      {
        title: "Backend Stack",
        notes:
          "API داخل Next.js فوق Prisma 7 و PostgreSQL مع تخزين وسائط وتصدير بيانات.",
        tools: [
          { name: "Next.js API Routes", description: "طبقة الـ API" },
          { name: "Prisma 7", description: "ORM و migrations" },
          { name: "PostgreSQL", description: "قاعدة بيانات علائقية" },
          { name: "bcryptjs", description: "تشفير كلمات المرور" },
          { name: "Cloudinary", description: "تخزين وتحسين صور البرامج والمعرض" },
          { name: "Zod", description: "تحقّق من المدخلات على السيرفر" },
          { name: "xlsx", description: "تصدير التقارير والبيانات لإكسل" },
        ],
      },
    ],
  },

  sections: [
    {
      id: 1,
      title: "Landing App",
      slug: "landing-app",
      summary:
        "الواجهة التعريفية للمعهد بأرقامه ومميزاته وبرامجه المميزة.",
      description:
        "الصفحة الرئيسية بتقدّم المعهد: Hero بالترخيص والاعتماد الدولي، إحصائيات (خريجين/برامج/سنوات خبرة/دول)، خمس مميزات بتفرّق المعهد، عيّنة من البرامج المميزة، ودعوات واضحة للتصفح والتواصل. ثنائية اللغة بتبديل مباشر من الهيدر.",
      pages: [
        {
          id: 1,
          title: "Home",
          slug: "home",
          description:
            "الصفحة الرئيسية: Hero، الإحصائيات، المميزات الخمسة، البرامج المميزة، والتواصل.",
          images: [
            { id: 1, src: "/projects/aiaetar/landing-app/home/disktop/1.png", alt: "Home — Desktop" },
            { id: 2, src: "/projects/aiaetar/landing-app/home/mobile/1.png", alt: "Home — Mobile" },
          ],
          features: [
            "Hero + accreditation badge",
            "Institute stats",
            "Why-choose-us pillars",
            "Featured programs",
            "AR/EN switch",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Public Pages",
      slug: "public-pages",
      summary:
        "البرامج، الاعتمادات، المدربون، الموارد، المعرض، والتحقق من الشهادات.",
      description:
        "الصفحات اللي بتشكّل عرض المعهد الكامل: كتالوج البرامج بتصنيفاته، صفحات الاعتماد والترخيص، ملفات المدربين كمهنيين ممارسين، مكتبة الموارد المهنية، معرض الصور والفعاليات، التحقق من الشهادات، والتواصل.",
      pages: [
        {
          id: 1,
          title: "About the Institute",
          slug: "about",
          description:
            "تعريف المعهد: الترخيص، الاعتماد الدولي، الرؤية، والمنهج التطبيقي.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/about/disktop/1.png", alt: "About the Institute — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/about/mobile/1.png", alt: "About the Institute — Mobile" },
          ],
          features: [
            "Licensing & accreditation",
            "Vision",
            "Applied methodology",
          ],
        },
        {
          id: 2,
          title: "Programs Catalogue",
          slug: "programs",
          description:
            "كتالوج أكتر من 50 برنامج: دبلومات تطبيقية، دورات قصيرة، تعلّم إلكتروني، مسارات قيادية، وهندسة وصيانة.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/programs/disktop/1.png", alt: "Programs Catalogue — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/programs/mobile/1.png", alt: "Programs Catalogue — Mobile" },
          ],
          features: [
            "50+ programs",
            "Category filters",
            "Duration & delivery mode",
            "Applied diplomas / short courses / e-learning",
          ],
        },
        {
          id: 3,
          title: "Certifications",
          slug: "certifications",
          description:
            "الاعتمادات والشهادات اللي بيصدرها المعهد والجهات المعتمِدة له.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/certifications/disktop/1.png", alt: "Certifications — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/certifications/mobile/1.png", alt: "Certifications — Mobile" },
          ],
          features: [
            "Accrediting bodies",
            "Certificate types",
            "Recognition scope",
          ],
        },
        {
          id: 4,
          title: "Trainers",
          slug: "trainers",
          description:
            "ملفات المدربين: مهندسون ومديرو فنادق ومدققو جودة وخبراء سياحة ممارسون.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/trainers/disktop/1.png", alt: "Trainers — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/trainers/mobile/1.png", alt: "Trainers — Mobile" },
          ],
          features: [
            "Trainer profiles",
            "Industry background",
            "Specializations",
          ],
        },
        {
          id: 5,
          title: "Resources",
          slug: "resources",
          description:
            "مكتبة الموارد المهنية المتاحة للمتدربين والخريجين.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/resources/disktop/1.png", alt: "Resources — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/resources/mobile/1.png", alt: "Resources — Mobile" },
          ],
          features: [
            "Curated resources",
            "Lifelong access",
            "Downloads",
          ],
        },
        {
          id: 6,
          title: "Certificate Verification",
          slug: "verify",
          description:
            "تحقّق عام من شهادات المعهد برقم الشهادة بدون تسجيل دخول.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/verify/disktop/1.png", alt: "Certificate Verification — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/verify/mobile/1.png", alt: "Certificate Verification — Mobile" },
          ],
          features: [
            "Public lookup",
            "No login",
            "Instant result",
          ],
        },
        {
          id: 7,
          title: "Gallery",
          slug: "gallery",
          description:
            "معرض صور الدفعات والفعاليات والتدريبات الميدانية.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/gallery/disktop/1.png", alt: "Gallery — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/gallery/mobile/1.png", alt: "Gallery — Mobile" },
          ],
          features: [
            "Event photos",
            "Cohort galleries",
            "Cloudinary-optimized",
          ],
        },
        {
          id: 8,
          title: "Contact",
          slug: "contact",
          description:
            "التواصل مع المعهد والاستفسار عن البرامج والتسجيل.",
          images: [
            { id: 1, src: "/projects/aiaetar/public-pages/contact/disktop/1.png", alt: "Contact — Desktop" },
            { id: 2, src: "/projects/aiaetar/public-pages/contact/mobile/1.png", alt: "Contact — Mobile" },
          ],
          features: [
            "Contact form",
            "Program enquiry",
            "Validated with Zod",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Admin Console",
      slug: "admin-app",
      summary:
        "لوحة الإدارة اللي بتدير البرامج والشهادات والمعرض.",
      description:
        "لوحة الإدارة بتدير كتالوج البرامج وإصدار الشهادات اللي بيتحقق منها الزوار من الصفحة العامة، بالإضافة لمعرض الصور. الصور هنا للصفحات الإدارية العامة فقط — صفحات بيانات المتقدمين والمتدربين والمستخدمين مستبعدة عمداً.",
      pages: [
        {
          id: 1,
          title: "Dashboard",
          slug: "admin-dashboard",
          description:
            "نظرة عامة على المعهد: البرامج والشهادات والطلبات الواردة.",
          images: [
            { id: 1, src: "/projects/aiaetar/admin-app/admin-dashboard/disktop/1.png", alt: "Dashboard — Desktop" },
            { id: 2, src: "/projects/aiaetar/admin-app/admin-dashboard/mobile/1.png", alt: "Dashboard — Mobile" },
          ],
          features: [
            "Institute counters",
            "Recent activity",
            "Quick navigation",
          ],
        },
        {
          id: 2,
          title: "Gallery Management",
          slug: "admin-gallery",
          description:
            "إدارة معرض الصور: الرفع والترتيب والتصنيف عبر Cloudinary.",
          images: [
            { id: 1, src: "/projects/aiaetar/admin-app/admin-gallery/disktop/1.png", alt: "Gallery Management — Desktop" },
            { id: 2, src: "/projects/aiaetar/admin-app/admin-gallery/mobile/1.png", alt: "Gallery Management — Mobile" },
          ],
          features: [
            "Image upload",
            "Cloudinary optimization",
            "Album ordering",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Backend & Admin",
      slug: "backend",
      summary:
        "الـ API ولوحة الإدارة اللي بتدير البرامج والمتدربين والشهادات.",
      description:
        "الخلفية مبنية داخل Next.js 16 كـ API Routes فوق Prisma 7 و PostgreSQL، مع Cloudinary لإدارة الوسائط، تشفير كلمات المرور بـ bcrypt، تحقّق من المدخلات بـ Zod، وتصدير التقارير لإكسل. لوحة الإدارة بتدير كتالوج البرامج والمدربين والمتدربين وإصدار الشهادات اللي بتتحقق منها الصفحة العامة.",
      pages: [
        {
          id: 1,
          title: "API & Admin Modules",
          slug: "api-modules",
          description:
            "بنية الـ API، نموذج البيانات، وموديولات لوحة الإدارة.",
          images: [],
          features: [
            "Next.js API routes",
            "Prisma 7 models",
            "PostgreSQL schema",
            "Programs & trainers management",
            "Certificate issuing + public verify",
            "Cloudinary media",
            "Excel export (xlsx)",
          ],
        },
      ],
    },
  ],
};

export const nadiaElsayed: Project = {
  id: 12,
  title: "Chef Nadia Elsayed Platform",
  slug: "nadia-elsayed",
  img: "/projects/nadia-elsayed/cover.png",
  ogImage: "/projects/nadia-elsayed/og.jpg",
  iconLists: [
    "/next.svg",
    "/re.svg",
    "/ts.svg",
    "/tail.svg",
    "/fm.svg",
    "/Postgresql.svg",
    "/mo.svg",
  ],
  link: "https://nadia-web.booksplatform.net",
  des: "منصة طبخ كاملة للشيف نادية السيد: ويب وموبايل Flutter ولوحة إدارة ومساعد AI بيرد بلهجتها المصرية — Monorepo من 4 مشاريع مستقلة على قاعدة بيانات وRedis مشتركين.",
  fullDescription:
    "منصة الشيف نادية السيد مبنية حوالين محتوى قناتها على يوتيوب، بس مش مجرد عرض للفيديوهات: كل فيديو بيتحوّل لوصفة حقيقية بمكوّنات برقم قابل للحساب وخطوات تحضير ومستوى صعوبة ونوع وجبة وميزانية ووقت تحضير — كله بيتكتب يدوي من الأدمن بعد الاستيراد. فوق ده: خطة وجبات أسبوعية، مطابقة مكوّنات («عندي إيه في البيت»)، قائمة تسوّق، وضع طبخ بخطوات ومؤقّتات، ومساعد AI (Nadia AI) بيجاوب من بيانات الوصفات المنظّمة بالعامية المصرية بصوت الشيف. المشروع Monorepo من أربع مشاريع مستقلة بحوكمة منفصلة — Backend بـ .NET 10، موبايل Flutter، خدمة AI بـ Python/FastAPI، ولوحة إدارة Next.js 16 — مربوطين بقاعدة بيانات PostgreSQL و Redis مشتركين.",

  tools: {
    stacks: [
      {
        title: "Web & Admin",
        notes:
          "واجهة الويب ولوحة الإدارة مبنيين بـ Next.js 16، عربي أساسي بـ RTL كامل.",
        tools: [
          { name: "Next.js 16", description: "App Router / SSR / SEO" },
          { name: "React 19", description: "UI Components" },
          { name: "TypeScript", description: "Typing وتحسين جودة الكود" },
          { name: "Tailwind CSS", description: "Utility-first styling" },
          { name: "Framer Motion", description: "Animations" },
          { name: "Arabic-first RTL", description: "العربية لغة أساسية والإنجليزية ثانوية" },
        ],
      },
      {
        title: "Backend & Data",
        notes:
          "API مركزي بـ .NET 10 بيخدم الويب والموبايل ولوحة الإدارة.",
        tools: [
          { name: ".NET 10", description: "Backend API مركزي" },
          { name: "PostgreSQL", description: "قاعدة بيانات مشتركة بين المشاريع الأربعة" },
          { name: "Redis", description: "كاش وجلسات مشتركة" },
          { name: "YouTube Data API", description: "استيراد فيديوهات القناة والشورتس" },
          { name: "REST API", description: "نفس الـ API للويب والموبايل" },
        ],
      },
      {
        title: "Mobile & AI",
        notes:
          "تطبيق Flutter لـ iOS و Android، وخدمة AI منفصلة بـ RAG.",
        tools: [
          { name: "Flutter 3.44", description: "تطبيق iOS + Android من قاعدة كود واحدة" },
          { name: "Python 3.12 / FastAPI", description: "خدمة الـ AI المستقلة" },
          { name: "RAG", description: "إجابات مبنية على بيانات الوصفات المنظّمة" },
          { name: "Egyptian-Arabic voice", description: "المساعد بيرد بلهجة الشيف نفسها" },
        ],
      },
    ],
  },

  sections: [
    {
      id: 1,
      title: "Web App",
      slug: "web-app",
      summary:
        "واجهة الويب: الوصفات، الشورتس، الفريدج، اختاريلي، ومساعد Nadia AI.",
      description:
        "تطبيق الويب هو الواجهة الأساسية للمستخدم. قابل للتصفّح بالكامل كضيف من غير تسجيل — التسجيل محتاج بس للتعليق ومزامنة المفضلات. بيغطي تصفّح الوصفات والشورتس، مطابقة المكوّنات، الاختيار الآلي للأكلة، ومساعد الـ AI.",
      pages: [
        {
          id: 1,
          title: "Home",
          slug: "home",
          description:
            "الصفحة الرئيسية: «نطبخ إيه النهارده؟» مع مداخل سريعة للطبخ والتنظيم و Nadia AI.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/home/disktop/1.png", alt: "Home — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/home/mobile/1.png", alt: "Home — Mobile" },
          ],
          features: [
            "Guest-first browsing",
            "Quick entry points",
            "Arabic RTL",
            "Nadia+ membership entry",
          ],
        },
        {
          id: 2,
          title: "Recipes",
          slug: "recipes",
          description:
            "فهرس وصفات الشيف مع التصنيفات والفلاتر حسب نوع الوجبة والصعوبة والوقت.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/recipes/disktop/1.png", alt: "Recipes — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/recipes/mobile/1.png", alt: "Recipes — Mobile" },
          ],
          features: [
            "Recipe catalogue",
            "Category filters",
            "Difficulty & time filters",
          ],
        },
        {
          id: 3,
          title: "Recipe Details",
          slug: "recipe-detail",
          description:
            "صفحة الوصفة: الفيديو، المكوّنات بكميات قابلة للحساب حسب عدد الأفراد، وخطوات التحضير.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/recipe-detail/disktop/1.png", alt: "Recipe Details — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/recipe-detail/mobile/1.png", alt: "Recipe Details — Mobile" },
          ],
          features: [
            "Video + steps",
            "Scalable ingredients",
            "Servings calculator",
            "Related recipes",
          ],
        },
        {
          id: 4,
          title: "Shorts",
          slug: "shorts",
          description:
            "الشورتس المستوردة من القناة معروضة بتجربة تصفّح سريعة.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/shorts/disktop/1.png", alt: "Shorts — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/shorts/mobile/1.png", alt: "Shorts — Mobile" },
          ],
          features: [
            "Vertical shorts feed",
            "Imported from YouTube",
          ],
        },
        {
          id: 5,
          title: "Fridge (عندي مكونات)",
          slug: "fridge",
          description:
            "مطابقة المكوّنات: تختار اللي موجود عندك في البيت والمنصة بترشّح الوصفات اللي تقدر تعملها.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/fridge/disktop/1.png", alt: "Fridge (عندي مكونات) — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/fridge/mobile/1.png", alt: "Fridge (عندي مكونات) — Mobile" },
          ],
          features: [
            "Ingredient picker",
            "Two-stage matching",
            "What-can-I-cook results",
          ],
        },
        {
          id: 6,
          title: "Pick For Me (اختاريلي أكلة)",
          slug: "pick-for-me",
          description:
            "اختيار آلي لأكلة بناءً على تفضيلاتك ووقتك وميزانيتك.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/pick-for-me/disktop/1.png", alt: "Pick For Me (اختاريلي أكلة) — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/pick-for-me/mobile/1.png", alt: "Pick For Me (اختاريلي أكلة) — Mobile" },
          ],
          features: [
            "Preference-based pick",
            "Time & budget filters",
          ],
        },
        {
          id: 7,
          title: "Nadia AI",
          slug: "nadia-ai",
          description:
            "المساعد الذكي بيجاوب على أسئلة الطبخ من بيانات الوصفات المنظّمة، بالعامية المصرية وبصوت الشيف.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/nadia-ai/disktop/1.png", alt: "Nadia AI — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/nadia-ai/mobile/1.png", alt: "Nadia AI — Mobile" },
          ],
          features: [
            "RAG over recipe data",
            "Egyptian-Arabic voice",
            "Cooking-mode context",
            "Grounded answers",
          ],
        },
        {
          id: 8,
          title: "Favorites",
          slug: "favorites",
          description:
            "المفضلات المحفوظة في الحساب ومتزامنة بين الويب والموبايل — متاحة بعد تسجيل الدخول.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/favorites/disktop/1.png", alt: "Favorites — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/favorites/mobile/1.png", alt: "Favorites — Mobile" },
          ],
          features: [
            "Saved recipes",
            "Cross-device sync",
            "Requires login",
          ],
        },
        {
          id: 9,
          title: "Weekly Plan",
          slug: "planner",
          description:
            "خطة الأسبوع: توليد خطة وجبات من التفضيلات وأوقات التحضير ومتابعتها.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/planner/disktop/1.png", alt: "Weekly Plan — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/planner/mobile/1.png", alt: "Weekly Plan — Mobile" },
          ],
          features: [
            "Weekly meal plan",
            "Preference-based generation",
            "Servings & budget",
          ],
        },
        {
          id: 10,
          title: "Shopping List",
          slug: "shopping-list",
          description:
            "قائمة التسوّق المتولّدة من خطة الأسبوع ومن الوصفات، مع إمكانية الإضافة اليدوية.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/shopping-list/disktop/1.png", alt: "Shopping List — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/shopping-list/mobile/1.png", alt: "Shopping List — Mobile" },
          ],
          features: [
            "Auto-built from plan",
            "Manual items",
            "Tick-off tracking",
          ],
        },
        {
          id: 11,
          title: "Settings",
          slug: "settings",
          description:
            "إعدادات المستخدم: المظهر، تقليل الحركة، الأوامر الصوتية والمايك، الإشعارات، وتفضيلات خطة الأسبوع.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/web-app/settings/disktop/1.png", alt: "Settings — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/web-app/settings/mobile/1.png", alt: "Settings — Mobile" },
          ],
          features: [
            "Theme (dark/light)",
            "Reduced motion",
            "Voice commands & mic",
            "Push notifications",
            "Plan defaults",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Mobile App (Flutter)",
      slug: "mobile-app",
      summary:
        "تصميم تطبيق الموبايل الكامل — عربي أولاً بتخطيط RTL.",
      description:
        "تطبيق Flutter لـ iOS و Android بيغطي نفس المنظومة: المصادقة، التصفّح، خطة الوجبات، وضع الطبخ، مطابقة المكوّنات، وقائمة التسوّق. الصور دي من مرحلة تصميم الواجهات (Design prototype) قبل بناء الشاشات في Flutter — إطار الموبايل جزء من التصميم نفسه.",
      pages: [
        {
          id: 1,
          title: "Auth Flow",
          slug: "auth",
          description:
            "مسار المصادقة الكامل: Splash، تسجيل دخول، إنشاء حساب، تأكيد OTP، نسيت كلمة المرور، إعادة التعيين، والبروفايل.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/1.png", alt: "Splash — Mobile" },
            { id: 2, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/2.png", alt: "Login — Mobile" },
            { id: 3, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/3.png", alt: "Register — Mobile" },
            { id: 4, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/4.png", alt: "Verify OTP — Mobile" },
            { id: 5, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/5.png", alt: "Forgot password — Mobile" },
            { id: 6, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/6.png", alt: "Reset password — Mobile" },
            { id: 7, src: "/projects/nadia-elsayed/mobile-app/auth/mobile/7.png", alt: "Profile — Mobile" },
          ],
          features: [
            "Splash",
            "Login & Register",
            "OTP verification",
            "Forgot / Reset password",
            "Profile",
          ],
        },
        {
          id: 2,
          title: "Browse",
          slug: "browse",
          description:
            "تصفّح المحتوى: الرئيسية، البحث والفلاتر، التصنيفات، قوائم التشغيل، تفاصيل الفيديو، الشورتس، منشورات المجتمع، والمفضلات.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/1.png", alt: "Home — Mobile" },
            { id: 2, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/2.png", alt: "Search & filters — Mobile" },
            { id: 3, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/3.png", alt: "Categories — Mobile" },
            { id: 4, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/4.png", alt: "Playlist — Mobile" },
            { id: 5, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/5.png", alt: "Video detail — Mobile" },
            { id: 6, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/6.png", alt: "Short — Mobile" },
            { id: 7, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/7.png", alt: "Community posts — Mobile" },
            { id: 8, src: "/projects/nadia-elsayed/mobile-app/browse/mobile/8.png", alt: "Favorites — Mobile" },
          ],
          features: [
            "Home feed",
            "Search & filters",
            "Categories",
            "Playlists",
            "Video & Shorts",
            "Community posts",
            "Favorites",
          ],
        },
        {
          id: 3,
          title: "Meal Planner",
          slug: "meal-planner",
          description:
            "خطة الوجبات الأسبوعية: عرض الخطط، إنشاء خطة بناءً على التصنيفات والوقت، ومتابعة الخطة.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/mobile-app/meal-planner/mobile/1.png", alt: "Plans list — Mobile" },
            { id: 2, src: "/projects/nadia-elsayed/mobile-app/meal-planner/mobile/2.png", alt: "Create plan — Mobile" },
            { id: 3, src: "/projects/nadia-elsayed/mobile-app/meal-planner/mobile/3.png", alt: "View plan — Mobile" },
          ],
          features: [
            "Weekly plans",
            "Preference-based generation",
            "Prep/cook time filters",
          ],
        },
        {
          id: 4,
          title: "Cooking Mode, AI & Tools",
          slug: "cooking-ai-tools",
          description:
            "وضع الطبخ بالخطوات والمؤقّت، مساعد Nadia AI (عام ومن داخل وضع الطبخ)، مطابقة المكوّنات، اختاريلي، وقائمة التسوّق.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/mobile-app/cooking-ai-tools/mobile/1.png", alt: "Cooking mode step with timer — Mobile" },
            { id: 2, src: "/projects/nadia-elsayed/mobile-app/cooking-ai-tools/mobile/2.png", alt: "Nadia AI — general chat — Mobile" },
            { id: 3, src: "/projects/nadia-elsayed/mobile-app/cooking-ai-tools/mobile/3.png", alt: "Nadia AI — from cooking mode — Mobile" },
            { id: 4, src: "/projects/nadia-elsayed/mobile-app/cooking-ai-tools/mobile/4.png", alt: "Ingredient matching — Mobile" },
            { id: 5, src: "/projects/nadia-elsayed/mobile-app/cooking-ai-tools/mobile/5.png", alt: "Pick for me — Mobile" },
            { id: 6, src: "/projects/nadia-elsayed/mobile-app/cooking-ai-tools/mobile/6.png", alt: "Shopping list — Mobile" },
          ],
          features: [
            "Step-by-step cooking mode",
            "Timers",
            "Nadia AI (general + in-cooking)",
            "Ingredient matching",
            "Pick for me",
            "Shopping list",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Admin Console",
      slug: "admin-app",
      summary:
        "لوحة التحرير اللي بتحوّل فيديو يوتيوب لوصفة كاملة.",
      description:
        "لوحة الإدارة هي اللي بيتبني فيها المحتوى فعلاً. الاستيراد من يوتيوب بيجيب العنوان والصورة والرابط والمدة بس — الوصف والمكوّنات والخطوات والصعوبة ونوع الوجبة والميزانية ووقت التحضير والوسوم والوصفات المرتبطة كلها بتتكتب يدوي من الأدمن. الفيديو بيفضل مسودة لحد ما الأدمن ينشره، وقوائم التشغيل بتتبني بإيد الأدمن بترتيب يدوي مستقل عن قوائم يوتيوب.",
      pages: [
        {
          id: 1,
          title: "Dashboard",
          slug: "dashboard",
          description:
            "لقطة الكتالوج مع استخدام آخر 30 يوم: المنشور مقابل المسودات، جلسات الطبخ، وفجوات الطلب من تقارير الـ AI.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/dashboard/disktop/1.png", alt: "Dashboard — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/dashboard/mobile/1.png", alt: "Dashboard — Mobile" },
          ],
          features: [
            "Catalog snapshot (published vs drafts)",
            "Cooking sessions & completion",
            "Pick For Me misses",
            "Unanswered AI questions",
            "Shopping-list analytics",
            "Search gap reports",
          ],
        },
        {
          id: 2,
          title: "Videos",
          slug: "videos",
          description:
            "استيراد فيديوهات القناة وتحريرها لوصفات كاملة — الاستيراد بيجيب العنوان والصورة والرابط والمدة بس، والباقي بيتكتب يدوي.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/videos/disktop/1.png", alt: "Videos — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/videos/mobile/1.png", alt: "Videos — Mobile" },
          ],
          features: [
            "YouTube import",
            "Manual recipe authoring",
            "Ingredients with numeric amounts",
            "Steps, difficulty, meal type, budget",
            "Draft → publish",
          ],
        },
        {
          id: 3,
          title: "Shorts",
          slug: "shorts",
          description:
            "إدارة الشورتس المستوردة من القناة (أكتر من 560 شورت منشور).",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/shorts/disktop/1.png", alt: "Shorts — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/shorts/mobile/1.png", alt: "Shorts — Mobile" },
          ],
          features: [
            "Shorts library",
            "Import & publish",
            "Tagging",
          ],
        },
        {
          id: 4,
          title: "Playlists",
          slug: "playlists",
          description:
            "بناء قوائم التشغيل بإيد الأدمن — مستقلة تماماً عن قوائم يوتيوب وبترتيب يدوي.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/playlists/disktop/1.png", alt: "Playlists — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/playlists/mobile/1.png", alt: "Playlists — Mobile" },
          ],
          features: [
            "Hand-built playlists",
            "Manual ordering",
            "Cover image",
            "Independent of YouTube",
          ],
        },
        {
          id: 5,
          title: "Categories",
          slug: "categories",
          description:
            "التصنيفات اللي بيتنظّم بيها المحتوى ويتبني عليها اقتراح الخطط.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/categories/disktop/1.png", alt: "Categories — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/categories/mobile/1.png", alt: "Categories — Mobile" },
          ],
          features: [
            "Category tree",
            "Used by meal planner",
          ],
        },
        {
          id: 6,
          title: "Tags",
          slug: "tags",
          description:
            "الوسوم المستخدمة في البحث والفلترة والوصفات المرتبطة.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/tags/disktop/1.png", alt: "Tags — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/tags/mobile/1.png", alt: "Tags — Mobile" },
          ],
          features: [
            "Tag management",
            "Search & filtering",
          ],
        },
        {
          id: 7,
          title: "Ingredients",
          slug: "ingredients",
          description:
            "قائمة المكوّنات الرئيسية اللي بترتبط بيها مكوّنات الوصفات علشان المطابقة والقياس.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/ingredients/disktop/1.png", alt: "Ingredients — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/ingredients/mobile/1.png", alt: "Ingredients — Mobile" },
          ],
          features: [
            "Master ingredient list",
            "Links to recipe ingredients",
            "Powers fridge matching",
          ],
        },
        {
          id: 8,
          title: "AI Chat",
          slug: "ai-chat",
          description:
            "متابعة محادثات مساعد Nadia AI وجودة إجاباته.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/ai-chat/disktop/1.png", alt: "AI Chat — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/ai-chat/mobile/1.png", alt: "AI Chat — Mobile" },
          ],
          features: [
            "Conversation review",
            "Answer quality",
            "RAG grounding",
          ],
        },
        {
          id: 9,
          title: "AI Meal Plan",
          slug: "ai-meal-plan",
          description:
            "ضبط توليد خطط الوجبات بالـ AI ومراجعة مخرجاته.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/ai-meal-plan/disktop/1.png", alt: "AI Meal Plan — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/ai-meal-plan/mobile/1.png", alt: "AI Meal Plan — Mobile" },
          ],
          features: [
            "Plan generation tuning",
            "Output review",
          ],
        },
        {
          id: 10,
          title: "AI Step Review",
          slug: "ai-step-review",
          description:
            "مراجعة خطوات التحضير اللي بيقترحها الـ AI قبل اعتمادها.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/ai-step-review/disktop/1.png", alt: "AI Step Review — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/ai-step-review/mobile/1.png", alt: "AI Step Review — Mobile" },
          ],
          features: [
            "Step suggestions",
            "Human review before publish",
          ],
        },
        {
          id: 11,
          title: "Settings",
          slug: "settings",
          description:
            "إعدادات النظام العامة للوحة الإدارة.",
          images: [
            { id: 1, src: "/projects/nadia-elsayed/admin-app/settings/disktop/1.png", alt: "Settings — Desktop" },
            { id: 2, src: "/projects/nadia-elsayed/admin-app/settings/mobile/1.png", alt: "Settings — Mobile" },
          ],
          features: [
            "System settings",
            "Admin preferences",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Backend & AI Service",
      slug: "backend-ai",
      summary:
        "‏.NET 10 API + خدمة RAG بـ FastAPI على قاعدة بيانات و Redis مشتركين.",
      description:
        "الـ Backend مبني بـ .NET 10 وبيخدم الويب والموبايل ولوحة الإدارة من نفس الـ API. خدمة الـ AI مشروع مستقل بـ Python 3.12 و FastAPI بيعمل RAG فوق بيانات الوصفات المنظّمة علشان الإجابات تكون مبنية على محتوى حقيقي مش مولّدة من فراغ، وبيصيغها بالعامية المصرية بصوت الشيف. المشروعين بيشاركوا نفس PostgreSQL ونفس Redis.",
      pages: [
        {
          id: 1,
          title: "API & Services",
          slug: "api-modules",
          description:
            "بنية الـ API وخدمة الـ AI والبنية التحتية المشتركة بين المشاريع الأربعة.",
          images: [],
          features: [
            ".NET 10 REST API",
            "Python 3.12 / FastAPI AI service",
            "RAG over structured recipes",
            "Shared PostgreSQL",
            "Shared Redis",
            "YouTube Data API import",
            "Serving-based ingredient scaling",
            "YouTube Channel Membership (no in-app purchase)",
          ],
        },
      ],
    },
  ],
};
