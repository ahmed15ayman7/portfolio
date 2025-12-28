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
  iconLists: [
    "/icons/next.svg",
    "/icons/re.svg",
    "/icons/ts.svg",
    "/icons/tail.svg",
    "icon/fm.svg",
    "/icons/NestJS.svg",
    "/icons/Postgresql.svg",
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
          { name: "Next.js", icon: "/icons/next.svg", description: "App Router / SSR / SEO" },
          { name: "React.js", icon: "/icons/re.svg", description: "UI Components" },
          { name: "TypeScript", icon: "/icons/typescript.svg", description: "Types & Safety" },
          { name: "TailwindCSS", icon: "/icons/tailwind.svg", description: "Utility-first styling" },
          { name: "Framer Motion", icon: "/icons/framer-motion.svg", description: "Animations" },
          { name: "React Icons", icon: "/icons/react-icons.svg", description: "Icon library" },
          { name: "React Query", icon: "/icons/react-query.svg", description: "Server state & caching" },
        ],
      },
      {
        title: "Backend Stack",
        notes: "API موحد يخدم جميع التطبيقات داخل الـ Monorepo.",
        tools: [
          { name: "NestJS", icon: "/icons/nestjs.svg", description: "Backend framework" },
          { name: "TypeScript", icon: "/icons/typescript.svg", description: "Types & Safety" },
          { name: "Prisma ORM", icon: "/icons/prisma.svg", description: "DB ORM & migrations" },
          { name: "PostgreSQL", icon: "/icons/Postgresql.svg", description: "Relational database" },
          { name: "Swagger", icon: "/icons/swagger.svg", description: "API documentation" },
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

      images: [
        { id: 1, src: "/projects/sporton/landing/landing-overview.png", alt: "Sporton Landing Overview" },
      ],

      pages: [
        {
          id: 1,
          title: "Landing (One Page)",
          slug: "landing",
          description:
            "صفحة واحدة تضم: Hero + من نحن + رؤيتنا ورسالتنا + مميزاتنا + سياسة الاسترجاع + سياسة الخصوصية + الفرق بين حسابات البرو والعادي + تواصل معنا.",
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

      pages: [
        {
          id: 1,
          title: "Sign In",
          slug: "signin",
          description: "تسجيل الدخول عبر Google / Facebook / Guest / Email + Password.",
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
          images: [
            { id: 1, src: "/projects/sporton/auth/payment-success/disktop/1.png", alt: "Payment success page English" },
            { id: 2, src: "/projects/sporton/auth/payment-success/mobile/1.png", alt: "Payment success page English" },],
        },
        {
          id: 16,
          title: "Payment Failure",
          slug: "payment-failure",
          description: "تظهر عند عدم اكتمال الدفع أو فشل الدفع.",
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
        { id: 1, src: "/projects/sporton/home/layout.png", alt: "Home app layout" },
      ],

      pages: [
        {
          id: 1,
          title: "Main Layout",
          slug: "layout",
          description:
            "Layout عام من 4 أقسام: Navbar + Left Sidebar + Right Sidebar + Bottom Sidebar للموبايل.",
          images: [{ id: 1, src: "/projects/sporton/home/main-layout.png", alt: "Main layout" }],
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
          description:
            "الصفحة الرئيسية: إنشاء منشور (نص/صورة/فيديو/ملف شخصي/فرص) ثم عرض المنشورات مع التفاعل والتعليقات والمشاركة وإعادة النشر.",
          images: [{ id: 1, src: "/projects/sporton/home/on/disktop/1.png", alt: "Home feed page English" },
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