// @ts-nocheck
import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  UserRound,
  UserCog,
  Layers3,
  CalendarDays,
  ClipboardCheck,
  BookOpenCheck,
  WalletCards,
  ChartNoAxesCombined,
  Megaphone,
  ScrollText,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Download,
  Filter,
  MoreHorizontal,
  Users,
  Clock3,
  CircleCheck,
  CircleAlert,
  CalendarClock,
  Sparkles,
  LogOut,
  Sun,
  Moon,
  FileText,
  Eye,
  Mail,
  Phone,
  MapPin,
  Check,
  ChevronRight,
  SlidersHorizontal,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  BadgeCheck,
  CircleDollarSign,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const navGroups = [
  { label: "OVERVIEW", items: [{ name: "Dashboard", icon: LayoutDashboard }] },
  {
    label: "ACADEMIC",
    items: [
      { name: "Students", icon: GraduationCap },
      { name: "Admissions", icon: ClipboardCheck },
      { name: "Faculty & Staff", icon: UserCog },
      { name: "Batch Management", icon: Layers3 },
      { name: "Timetable", icon: CalendarDays },
      { name: "Academics", icon: ChartNoAxesCombined },
    ],
  },
  {
    label: "ADMINISTRATION",
    items: [
      { name: "Fees & Finance", icon: WalletCards },
      { name: "Reports", icon: ScrollText },
      { name: "Announcements", icon: Megaphone },
      { name: "Audit Logs", icon: ShieldCheck },
    ],
  },
];

const initialStudents = [
  {
    id: "STU-2401",
    name: "Aarav Sharma",
    course: "B.E. Artificial Intelligence",
    batch: "AIML-A · 2024",
    semester: "5th Semester",
    fees: "Paid",
    status: "Active",
    email: "aarav.sharma@example.edu",
    phone: "+91 98765 12001",
    color: "lavender",
  },
  {
    id: "STU-2402",
    name: "Diya Reddy",
    course: "B.E. Computer Science",
    batch: "CSE-B · 2024",
    semester: "5th Semester",
    fees: "Pending",
    status: "Active",
    email: "diya.reddy@example.edu",
    phone: "+91 98765 12002",
    color: "peach",
  },
  {
    id: "STU-2403",
    name: "Kabir Patel",
    course: "B.E. Artificial Intelligence",
    batch: "AIML-A · 2024",
    semester: "5th Semester",
    fees: "Paid",
    status: "Active",
    email: "kabir.patel@example.edu",
    phone: "+91 98765 12003",
    color: "mint",
  },
  {
    id: "STU-2404",
    name: "Ananya Iyer",
    course: "B.E. Information Science",
    batch: "ISE-A · 2023",
    semester: "7th Semester",
    fees: "Paid",
    status: "Active",
    email: "ananya.iyer@example.edu",
    phone: "+91 98765 12004",
    color: "sky",
  },
  {
    id: "STU-2405",
    name: "Vihaan Rao",
    course: "B.E. Computer Science",
    batch: "CSE-A · 2025",
    semester: "3rd Semester",
    fees: "Pending",
    status: "Review",
    email: "vihaan.rao@example.edu",
    phone: "+91 98765 12005",
    color: "lemon",
  },
  {
    id: "STU-2406",
    name: "Sara Thomas",
    course: "B.E. Artificial Intelligence",
    batch: "AIML-B · 2024",
    semester: "5th Semester",
    fees: "Paid",
    status: "Active",
    email: "sara.thomas@example.edu",
    phone: "+91 98765 12006",
    color: "rose",
  },
  {
    id: "STU-2407",
    name: "Arjun Nair",
    course: "B.E. Electronics",
    batch: "ECE-A · 2023",
    semester: "7th Semester",
    fees: "Pending",
    status: "Active",
    email: "arjun.nair@example.edu",
    phone: "+91 98765 12007",
    color: "lavender",
  },
];

const admissionsSeed = [
  {
    id: "APP-26081",
    name: "Meera Kulkarni",
    course: "B.E. Artificial Intelligence",
    date: "02 Nov 2026",
    stage: "Documents review",
    initials: "MK",
    color: "lavender",
  },
  {
    id: "APP-26080",
    name: "Rohan Shetty",
    course: "B.E. Computer Science",
    date: "01 Nov 2026",
    stage: "Interview",
    initials: "RS",
    color: "mint",
  },
  {
    id: "APP-26079",
    name: "Ishita Das",
    course: "B.E. Information Science",
    date: "31 Oct 2026",
    stage: "Awaiting decision",
    initials: "ID",
    color: "peach",
  },
  {
    id: "APP-26078",
    name: "Dev Malhotra",
    course: "B.E. Electronics",
    date: "30 Oct 2026",
    stage: "Documents review",
    initials: "DM",
    color: "sky",
  },
];

const facultySeed = [
  {
    id: "FAC-018",
    name: "Dr. Kavita Rao",
    department: "Artificial Intelligence",
    role: "Head of Department",
    load: "14 / 18 hrs",
    status: "Available",
    initials: "KR",
    color: "lavender",
  },
  {
    id: "FAC-024",
    name: "Prof. Rahul Menon",
    department: "Computer Science",
    role: "Associate Professor",
    load: "16 / 18 hrs",
    status: "In class",
    initials: "RM",
    color: "mint",
  },
  {
    id: "FAC-031",
    name: "Dr. Sneha Kulkarni",
    department: "Information Science",
    role: "Assistant Professor",
    load: "12 / 18 hrs",
    status: "Available",
    initials: "SK",
    color: "peach",
  },
  {
    id: "FAC-037",
    name: "Prof. Amit Joshi",
    department: "Electronics",
    role: "Assistant Professor",
    load: "17 / 18 hrs",
    status: "On leave",
    initials: "AJ",
    color: "sky",
  },
];

const enrollmentData = [
  { month: "Jun", students: 820, admissions: 110 },
  { month: "Jul", students: 900, admissions: 145 },
  { month: "Aug", students: 940, admissions: 95 },
  { month: "Sep", students: 1020, admissions: 130 },
  { month: "Oct", students: 1090, admissions: 165 },
  { month: "Nov", students: 1180, admissions: 142 },
  { month: "Dec", students: 1248, admissions: 120 },
];
const financeData = [
  { month: "Jun", amount: 28 },
  { month: "Jul", amount: 34 },
  { month: "Aug", amount: 31 },
  { month: "Sep", amount: 42 },
  { month: "Oct", amount: 38 },
  { month: "Nov", amount: 48 },
];
const courseData = [
  { name: "Computer Science", value: 32, color: "var(--purple)" },
  { name: "Artificial Intelligence", value: 27, color: "var(--mint)" },
  { name: "Information Science", value: 22, color: "var(--orange)" },
  { name: "Electronics", value: 19, color: "var(--pink)" },
];

const initials = (name = "Director") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
const money = (n) => "₹" + Number(n).toLocaleString("en-IN");

function Avatar({ name, color = "lavender", size = "" }) {
  return <span className={`avatar ${color} ${size}`}>{initials(name)}</span>;
}
function Badge({ children, type = "neutral" }) {
  return <span className={`badge ${type}`}>{children}</span>;
}
function SectionTitle({ eyebrow, title, subtitle, action }) {
  return (
    <div className="section-title">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
function MetricCard({ title, value, change, trend = "up", icon: Icon, tone = "purple", note }) {
  return (
    <article className="metric-card">
      <div className="metric-top">
        <span className={`metric-icon ${tone}`}>
          <Icon size={19} />
        </span>
        <button className="icon-button subtle" aria-label={`More about ${title}`}>
          <MoreHorizontal size={19} />
        </button>
      </div>
      <div className="metric-label">{title}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-foot">
        <span className={`trend ${trend}`}>
          {trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {change}
        </span>
        <span>{note || "vs. last month"}</span>
      </div>
    </article>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState(initialStudents);
  const [admissions, setAdmissions] = useState(admissionsSeed);
  const [toast, setToast] = useState("");
  const [studentFilter, setStudentFilter] = useState("All students");
  const [modal, setModal] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    id: "",
    course: "B.E. Artificial Intelligence",
    batch: "AIML-A · 2026",
    email: "",
  });
  const [announcement, setAnnouncement] = useState({
    title: "",
    message: "",
    audience: "Everyone",
  });
  const [announcements, setAnnouncements] = useState([
    {
      title: "Mid-semester examination schedule published",
      message: "The timetable for mid-semester examinations is now available for all departments.",
      audience: "Students & Faculty",
      date: "Today · 10:30 AM",
      color: "lavender",
    },
    {
      title: "Faculty development workshop",
      message: "Registration is open for the teaching innovation workshop on 12 November.",
      audience: "Faculty",
      date: "Yesterday",
      color: "mint",
    },
    {
      title: "Fee payment reminder",
      message:
        "Students with outstanding balances should contact the accounts office before 15 November.",
      audience: "Students",
      date: "30 Oct 2026",
      color: "peach",
    },
  ]);
  const [noticeOpen, setNoticeOpen] = useState(false);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };
  const selectPage = (name) => {
    setActive(name);
    setSidebarOpen(false);
    setSearch("");
  };
  const filteredStudents = useMemo(
    () =>
      students.filter((s) => {
        const q = search.toLowerCase();
        const matches = [s.name, s.id, s.course, s.batch, s.email].some((v) =>
          v.toLowerCase().includes(q),
        );
        const filter =
          studentFilter === "All students" ||
          (studentFilter === "Fee pending" && s.fees === "Pending") ||
          (studentFilter === "Active" && s.status === "Active");
        return matches && filter;
      }),
    [students, search, studentFilter],
  );

  const addStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name.trim() || !newStudent.id.trim()) return;
    setStudents((prev) => [
      {
        ...newStudent,
        semester: "1st Semester",
        fees: "Pending",
        status: "Active",
        phone: "Not provided",
        color: "sky",
      },
      ...prev,
    ]);
    setNewStudent({
      name: "",
      id: "",
      course: "B.E. Artificial Intelligence",
      batch: "AIML-A · 2026",
      email: "",
    });
    setModal(null);
    showToast("Student added to the demo directory.");
  };
  const decideAdmission = (id, stage) => {
    setAdmissions((prev) => prev.map((a) => (a.id === id ? { ...a, stage } : a)));
    showToast(`Application ${id} marked ${stage.toLowerCase()}.`);
  };
  const exportStudents = () => {
    const rows = filteredStudents.map((s) => [
      s.id,
      s.name,
      s.course,
      s.batch,
      s.fees,
      s.status,
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Student report exported as CSV.");
  };

  return (
    <div className={`app-shell ${dark ? "dark" : ""}`}>
      {sidebarOpen && (
        <button
          className="mobile-scrim"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="brand-row compact">
          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <div className="nav-label">{group.label}</div>
              {group.items.map((item) => (
                <button
                  key={item.name}
                  className={`nav-item ${active === item.name ? "active" : ""}`}
                  onClick={() => selectPage(item.name)}
                >
                  <item.icon size={18} strokeWidth={1.8} />
                  <span>{item.name}</span>
                  {item.name === "Admissions" && (
                    <span className="nav-count">
                      {
                        admissions.filter((a) => a.stage !== "Approved" && a.stage !== "Rejected")
                          .length
                      }
                    </span>
                  )}
                  {active === item.name && <span className="active-line" />}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item settings-link" onClick={() => selectPage("Settings")}>
            <Settings size={18} />
            <span>Settings</span>
          </button>
          <div className="profile-mini">
            <Avatar name="Nihal Director" color="peach" />
            <div className="profile-mini-copy">
              <strong>Nihal Director</strong>
              <small>Institution Director</small>
            </div>
            <button
              className="icon-button subtle"
              onClick={() => showToast("You are signed in to the local demo.")}
              aria-label="Profile options"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu icon-button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={21} />
            </button>
            <div className="breadcrumb">
              Workspace <ChevronRight size={14} /> <strong>{active}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <div className="global-search">
              <Search size={16} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search anything..."
                aria-label="Search current page"
              />
              <kbd>⌘ K</kbd>
            </div>
            <button
              className="icon-button theme-button"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="notification-wrap">
              <button
                className="icon-button notification-button"
                onClick={() => setNoticeOpen(!noticeOpen)}
                aria-label="Notifications"
              >
                <Bell size={18} />
                <i />
              </button>
              {noticeOpen && (
                <div className="notification-popover">
                  <strong>Notifications</strong>
                  <p>
                    <span className="dot purple-dot" /> 4 admission applications need review.
                  </p>
                  <p>
                    <span className="dot green-dot" /> Monthly report is ready to view.
                  </p>
                  <button
                    onClick={() => {
                      setNoticeOpen(false);
                      selectPage("Admissions");
                    }}
                  >
                    Review admissions <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>
            <div className="topbar-divider" />
            <button className="director-chip" onClick={() => selectPage("Settings")}>
              <Avatar name="Nihal Director" color="peach" size="small" />
              <span>
                <strong>Nihal Director</strong>
                <small>Director</small>
              </span>
              <ChevronDown size={14} />
            </button>
          </div>
        </header>

        <div className="page-content">
          {active === "Dashboard" && (
            <Dashboard
              students={students}
              admissions={admissions}
              onNavigate={selectPage}
              onToast={showToast}
            />
          )}
          {active === "Students" && (
            <StudentsPage
              students={filteredStudents}
              filter={studentFilter}
              setFilter={setStudentFilter}
              search={search}
              setSearch={setSearch}
              onAdd={() => setModal("student")}
              onExport={exportStudents}
              onView={(s) => setModal({ type: "studentView", student: s })}
            />
          )}
          {active === "Admissions" && (
            <AdmissionsPage admissions={admissions} onDecide={decideAdmission} search={search} />
          )}
          {active === "Faculty & Staff" && <FacultyPage search={search} onToast={showToast} />}
          {active === "Batch Management" && <BatchesPage onToast={showToast} />}
          {active === "Timetable" && <TimetablePage onToast={showToast} />}
          {active === "Academics" && <AcademicsPage onToast={showToast} />}
          {active === "Fees & Finance" && <FinancePage onToast={showToast} />}
          {active === "Reports" && <ReportsPage onExport={exportStudents} onToast={showToast} />}
          {active === "Announcements" && (
            <AnnouncementsPage
              announcements={announcements}
              onAdd={() => setModal("announcement")}
              onToast={showToast}
            />
          )}
          {active === "Audit Logs" && <AuditPage />}
          {active === "Settings" && (
            <SettingsPage dark={dark} setDark={setDark} onToast={showToast} />
          )}
        </div>
        <footer className="footer">
          <span>© 2026 · Director Portal</span>
          <span>
            <span className="status-dot" /> All systems operational{" "}
            <span className="footer-divider">·</span> v1.0.0
          </span>
        </footer>
      </main>

      {modal === "student" && (
        <Modal
          title="Add a student"
          subtitle="Add a student record to the current demo directory."
          onClose={() => setModal(null)}
        >
          <form className="modal-form" onSubmit={addStudent}>
            <label>
              Full name
              <input
                required
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                placeholder="e.g. Aditi Kumar"
              />
            </label>
            <label>
              Student ID / USN
              <input
                required
                value={newStudent.id}
                onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
                placeholder="e.g. STU-2608"
              />
            </label>
            <label>
              Course
              <select
                value={newStudent.course}
                onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
              >
                <option>B.E. Artificial Intelligence</option>
                <option>B.E. Computer Science</option>
                <option>B.E. Information Science</option>
                <option>B.E. Electronics</option>
              </select>
            </label>
            <label>
              Batch
              <input
                value={newStudent.batch}
                onChange={(e) => setNewStudent({ ...newStudent, batch: e.target.value })}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                placeholder="student@example.edu"
              />
            </label>
            <div className="modal-actions">
              <button type="button" className="btn secondary" onClick={() => setModal(null)}>
                Cancel
              </button>
              <button type="submit" className="btn primary">
                <Plus size={16} /> Add student
              </button>
            </div>
          </form>
        </Modal>
      )}
      {modal?.type === "studentView" && (
        <Modal
          title="Student profile"
          subtitle="Student details · demo record"
          onClose={() => setModal(null)}
        >
          <div className="student-profile-modal">
            <Avatar name={modal.student.name} color={modal.student.color} />
            <h3>{modal.student.name}</h3>
            <p>{modal.student.id}</p>
            <div className="profile-detail">
              <BookOpen size={16} />
              <span>{modal.student.course}</span>
            </div>
            <div className="profile-detail">
              <Layers3 size={16} />
              <span>
                {modal.student.batch} · {modal.student.semester}
              </span>
            </div>
            <div className="profile-detail">
              <Mail size={16} />
              <span>{modal.student.email || "Email not provided"}</span>
            </div>
            <div className="profile-detail">
              <Phone size={16} />
              <span>{modal.student.phone}</span>
            </div>
            <div className="profile-modal-stats">
              <div>
                <small>Fee status</small>
                <strong>{modal.student.fees}</strong>
              </div>
              <div>
                <small>Student status</small>
                <strong>{modal.student.status}</strong>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {modal === "announcement" && (
        <Modal
          title="Create announcement"
          subtitle="Share an update with your institution."
          onClose={() => setModal(null)}
        >
          <form
            className="modal-form"
            onSubmit={(e) => {
              e.preventDefault();
              setAnnouncements([
                { ...announcement, date: "Just now", color: "lavender" },
                ...announcements,
              ]);
              setAnnouncement({ title: "", message: "", audience: "Everyone" });
              setModal(null);
              showToast("Announcement published in this demo.");
            }}
          >
            <label>
              Announcement title
              <input
                required
                value={announcement.title}
                onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                placeholder="Enter a clear title"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows="4"
                value={announcement.message}
                onChange={(e) => setAnnouncement({ ...announcement, message: e.target.value })}
                placeholder="Write your announcement..."
              />
            </label>
            <label>
              Audience
              <select
                value={announcement.audience}
                onChange={(e) => setAnnouncement({ ...announcement, audience: e.target.value })}
              >
                <option>Everyone</option>
                <option>Students</option>
                <option>Faculty</option>
                <option>Students & Faculty</option>
              </select>
            </label>
            <div className="modal-actions">
              <button type="button" className="btn secondary" onClick={() => setModal(null)}>
                Cancel
              </button>
              <button type="submit" className="btn primary">
                <Megaphone size={16} /> Publish
              </button>
            </div>
          </form>
        </Modal>
      )}
      {toast && (
        <div className="toast">
          <CircleCheck size={18} />
          {toast}
        </div>
      )}
    </div>
  );
}

function Dashboard({ students, admissions, onNavigate, onToast }) {
  const pending = admissions.filter((a) => a.stage !== "Approved" && a.stage !== "Rejected");
  return (
    <div className="page-stack">
      <div className="welcome-banner">
        <div className="welcome-orb orb-one" />
        <div className="welcome-orb orb-two" />
        <div className="welcome-content">
          <div className="welcome-kicker">
            <span className="welcome-spark">
              <Sparkles size={13} />
            </span>{" "}
            MONDAY, 02 NOVEMBER 2026 <span className="welcome-line" />
          </div>
          <h1>
            Good afternoon, Nihal <span>✦</span>
          </h1>
          <p>Here’s what’s happening across your institution today.</p>
          <div className="welcome-actions">
            <button className="btn white-btn" onClick={() => onNavigate("Reports")}>
              <ChartNoAxesCombined size={16} /> View reports <ArrowUpRight size={15} />
            </button>
            <button className="text-btn-light" onClick={() => onNavigate("Admissions")}>
              Review admissions <ChevronRight size={15} />
            </button>
          </div>
        </div>
        <div className="welcome-illustration">
          <div className="illustration-ring ring-a" />
          <div className="illustration-ring ring-b" />
          <div className="illustration-cap">
            <GraduationCap size={65} />
          </div>
          <div className="floating-tag tag-students">
            <Users size={15} />
            <span>
              <b>1,248</b>
              <small>Students</small>
            </span>
          </div>
          <div className="floating-tag tag-growth">
            <TrendingUp size={15} />
            <span>
              <b>+12.8%</b>
              <small>Growth</small>
            </span>
          </div>
          <div className="sparkle s-one">✦</div>
          <div className="sparkle s-two">✧</div>
        </div>
      </div>
      <div className="metrics-grid">
        <MetricCard
          title="Total students"
          value="1,248"
          change="12.8%"
          icon={GraduationCap}
          tone="purple"
          note="vs. previous term"
        />
        <MetricCard
          title="Faculty & staff"
          value="86"
          change="4.2%"
          icon={Users}
          tone="mint"
          note="vs. last academic year"
        />
        <MetricCard
          title="New admissions"
          value={String(pending.length + 82).padStart(2, "0")}
          change="8.6%"
          icon={ClipboardCheck}
          tone="orange"
          note="this admission cycle"
        />
      </div>
      <div className="content-grid chart-row">
        <section className="panel enrollment-panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">INSTITUTION GROWTH</div>
              <h3>Student enrollment</h3>
              <p>Student strength through the academic year</p>
            </div>
            <select className="select-small" defaultValue="2026–27">
              <option>2026–27</option>
              <option>2025–26</option>
            </select>
          </div>
          <div className="chart-legend">
            <span>
              <i className="legend-dot purple-bg" />
              Total students
            </span>
            <span>
              <i className="legend-dot mint-bg" />
              New admissions
            </span>
            <span className="chart-total">
              1,248 <small>total</small>
            </span>
          </div>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData} margin={{ top: 12, right: 5, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--purple)" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="var(--purple)" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 5" vertical={false} stroke="var(--chart-grid)" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "var(--muted)" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "var(--muted)" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--panel)",
                    color: "var(--text)",
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="var(--purple)"
                  strokeWidth={2.8}
                  fill="url(#studentGradient)"
                  activeDot={{ r: 5 }}
                />
                <Area
                  type="monotone"
                  dataKey="admissions"
                  stroke="var(--mint)"
                  strokeWidth={2}
                  fill="transparent"
                  activeDot={{ r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
      <div className="content-grid lower-row">
        <section className="panel admissions-panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">ACTION REQUIRED</div>
              <h3>
                Recent admissions <span className="heading-count">{pending.length}</span>
              </h3>
              <p>Applications waiting for your attention</p>
            </div>
            <button className="panel-link" onClick={() => onNavigate("Admissions")}>
              View all <ArrowUpRight size={15} />
            </button>
          </div>
          <div className="compact-list">
            {pending.slice(0, 3).map((a) => (
              <div className="admission-row" key={a.id}>
                <Avatar name={a.name} color={a.color} />
                <div className="admission-main">
                  <strong>{a.name}</strong>
                  <small>
                    {a.course.replace("B.E. ", "")} · {a.id}
                  </small>
                </div>
                <div className="admission-status">
                  <Badge
                    type={
                      a.stage === "Interview"
                        ? "orange"
                        : a.stage === "Awaiting decision"
                          ? "purple"
                          : "neutral"
                    }
                  >
                    {a.stage}
                  </Badge>
                  <small>{a.date}</small>
                </div>
                <button
                  className="icon-button subtle"
                  onClick={() => onNavigate("Admissions")}
                  aria-label="Review application"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            ))}
          </div>
          <button className="full-width-link" onClick={() => onNavigate("Admissions")}>
            Review all applications <ArrowUpRight size={15} />
          </button>
        </section>
        <section className="panel finance-panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">FINANCIAL PULSE</div>
              <h3>Fee collection</h3>
              <p>Monthly collection in lakhs</p>
            </div>
            <button
              className="icon-button subtle"
              onClick={() => onNavigate("Fees & Finance")}
              aria-label="Open finance"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="finance-total">
            <strong>₹48.6L</strong>
            <span className="trend up">
              <ArrowUpRight size={14} /> 14.6%
            </span>
            <small>collected this month</small>
          </div>
          <div className="finance-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financeData} margin={{ top: 4, right: 0, left: -28, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 5" vertical={false} stroke="var(--chart-grid)" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "var(--muted)" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "var(--muted)" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                    background: "var(--panel)",
                    color: "var(--text)",
                    fontSize: 12,
                  }}
                  formatter={(v) => [`₹${v}L`, "Collected"]}
                />
                <Bar dataKey="amount" fill="var(--purple)" radius={[5, 5, 0, 0]} barSize={21} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="finance-footer">
            <span>
              <i className="legend-dot purple-bg" />
              Collected <b>₹3.82Cr</b>
            </span>
            <span>
              <i className="legend-dot orange-bg" />
              Outstanding <b>₹42.5L</b>
            </span>
          </div>
          <button className="panel-link" onClick={() => onNavigate("Fees & Finance")}>
            Open finance overview <ArrowUpRight size={15} />
          </button>
        </section>
        <section className="panel distribution-panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">STUDENT MIX</div>
              <h3>Course distribution</h3>
              <p>Enrolment by department</p>
            </div>
            <button
              className="icon-button subtle"
              onClick={() => onNavigate("Students")}
              aria-label="Open students"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="distribution-chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={67}
                  paddingAngle={3}
                  stroke="none"
                >
                  {courseData.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v) => [`${v}%`, "Share"]}
                  contentStyle={{
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                    background: "var(--panel)",
                    color: "var(--text)",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="distribution-legend">
              {courseData.map((d) => (
                <div key={d.name}>
                  <i style={{ background: d.color }} />
                  <span>{d.name}</span>
                  <strong>{d.value}%</strong>
                </div>
              ))}
            </div>
          </div>
          <button className="panel-link" onClick={() => onNavigate("Students")}>
            Explore students <ArrowUpRight size={15} />
          </button>
        </section>
      </div>
      <div className="bottom-strip">
        <div className="strip-icon">
          <CalendarClock size={19} />
        </div>
        <div>
          <strong>Coming up this week</strong>
          <p>Academic Council Meeting · 05 Nov, 11:00 AM · Board Room</p>
        </div>
        <Badge type="purple">In 3 days</Badge>
        <button
          className="icon-button subtle"
          onClick={() => onToast("Calendar details opened in the demo.")}
          aria-label="View event"
        >
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}

function StudentsPage({ students, filter, setFilter, search, setSearch, onAdd, onExport, onView }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="STUDENT DIRECTORY"
        title="Student management"
        subtitle="A complete view of your student community."
        action={
          <div className="title-actions">
            <button className="btn secondary" onClick={onExport}>
              <Download size={16} /> Export
            </button>
          </div>
        }
      />
      <div className="mini-stats-grid">
        <MiniStat label="Total students" value="1,248" delta="+12.8%" icon={GraduationCap} />
        <MiniStat label="Active students" value="1,201" delta="96.2% of total" icon={BadgeCheck} />
        <MiniStat
          label="Fee pending"
          value={students
            .filter((s) => s.fees === "Pending")
            .length.toString()
            .padStart(2, "0")}
          delta="In current view"
          icon={CircleDollarSign}
        />
      </div>
      <section className="panel table-panel">
        <div className="table-toolbar">
          <div>
            <h3>
              All students <span className="heading-count">{students.length}</span>
            </h3>
            <p>Search, filter, and view student records.</p>
          </div>
          <div className="table-tools">
            <div className="table-search">
              <Search size={15} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search students..."
              />
            </div>
            <select
              className="select-small"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All students</option>
              <option>Active</option>
              <option>Fee pending</option>
            </select>
            <button className="btn secondary compact" onClick={() => setFilter("All students")}>
              <SlidersHorizontal size={15} /> Reset
            </button>
          </div>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>STUDENT ID</th>
                <th>COURSE / BATCH</th>
                <th>FEE STATUS</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>
                    <div className="table-person">
                      <Avatar name={s.name} color={s.color} size="small" />
                      <div>
                        <strong>{s.name}</strong>
                        <small>{s.email || "Email not provided"}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mono">{s.id}</span>
                  </td>
                  <td>
                    <div className="course-cell">
                      <strong>{s.course.replace("B.E. ", "")}</strong>
                      <small>{s.batch}</small>
                    </div>
                  </td>
                  <td>
                    <Badge type={s.fees === "Paid" ? "green" : "orange"}>{s.fees}</Badge>
                  </td>
                  <td>
                    <Badge type={s.status === "Active" ? "green" : "purple"}>{s.status}</Badge>
                  </td>
                  <td>
                    <button
                      className="icon-button subtle"
                      onClick={() => onView(s)}
                      aria-label={`View ${s.name}`}
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {students.length === 0 && (
            <EmptyState
              icon={Users}
              title="No students found"
              text="Try changing your search or filters."
            />
          )}
        </div>
        <div className="table-pagination">
          <span>
            Showing <b>{students.length}</b> student records in this view
          </span>
          <div>
            <button className="page-btn active">1</button>
            <button className="page-btn" onClick={() => {}}>
              2
            </button>
            <button className="page-btn" onClick={() => {}}>
              3
            </button>
            <button className="page-btn" onClick={() => {}}>
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AdmissionsPage({ admissions, onDecide, search }) {
  const list = admissions.filter((a) =>
    [a.name, a.id, a.course, a.stage].some((v) => v.toLowerCase().includes(search.toLowerCase())),
  );
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="ENROLMENT PIPELINE"
        title="Admissions"
        subtitle="Track applicants and move applications through the review process."
        action={
          <button className="btn secondary" onClick={() => window.print()}>
            <Download size={16} /> Print overview
          </button>
        }
      />
      <div className="mini-stats-grid">
        <MiniStat label="Applications" value="286" delta="+8.6% this cycle" icon={FileText} />
        <MiniStat
          label="Under review"
          value={String(
            admissions.filter((a) => a.stage !== "Approved" && a.stage !== "Rejected").length,
          ).padStart(2, "0")}
          delta="Requires attention"
          icon={Clock3}
        />
        <MiniStat
          label="Approved"
          value={String(admissions.filter((a) => a.stage === "Approved").length + 74)}
          delta="This admission cycle"
          icon={CircleCheck}
        />
        <MiniStat
          label="Pending documents"
          value={String(admissions.filter((a) => a.stage === "Documents review").length).padStart(
            2,
            "0",
          )}
          delta="Verification queue"
          icon={CircleAlert}
        />
      </div>
      <section className="panel table-panel">
        <div className="table-toolbar">
          <div>
            <h3>Applicant pipeline</h3>
            <p>Review applications and update their current stage.</p>
          </div>
          <Badge type="purple">2026–27 intake</Badge>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>APPLICANT</th>
                <th>APPLICATION ID</th>
                <th>PROGRAMME</th>
                <th>APPLIED ON</th>
                <th>CURRENT STAGE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {list.map((a) => (
                <tr key={a.id}>
                  <td>
                    <div className="table-person">
                      <Avatar name={a.name} color={a.color} size="small" />
                      <div>
                        <strong>{a.name}</strong>
                        <small>First-year applicant</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mono">{a.id}</span>
                  </td>
                  <td>{a.course.replace("B.E. ", "")}</td>
                  <td>{a.date}</td>
                  <td>
                    <Badge
                      type={
                        a.stage === "Approved"
                          ? "green"
                          : a.stage === "Rejected"
                            ? "red"
                            : a.stage === "Interview"
                              ? "orange"
                              : "purple"
                      }
                    >
                      {a.stage}
                    </Badge>
                  </td>
                  <td>
                    <div className="row-actions">
                      {a.stage !== "Approved" && a.stage !== "Rejected" ? (
                        <>
                          <button
                            className="btn tiny secondary"
                            onClick={() => onDecide(a.id, "Approved")}
                          >
                            <Check size={13} /> Approve
                          </button>
                          <button
                            className="btn tiny ghost-danger"
                            onClick={() => onDecide(a.id, "Rejected")}
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <span className="muted-text">Decision saved</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {list.length === 0 && (
            <EmptyState
              icon={ClipboardCheck}
              title="No matching applications"
              text="Try another search term."
            />
          )}
        </div>
        <div className="admission-note">
          <ShieldCheck size={17} />
          <span>
            Every decision is reflected in this local demo state. Connect your backend to persist
            decisions and write an audit log.
          </span>
        </div>
      </section>
    </div>
  );
}

function FacultyPage({ search, onToast }) {
  const list = facultySeed.filter((f) =>
    [f.name, f.department, f.role, f.id].some((v) =>
      v.toLowerCase().includes(search.toLowerCase()),
    ),
  );
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="PEOPLE & WORKLOAD"
        title="Faculty & staff"
        subtitle="Monitor departments, teaching assignments, and faculty availability."
        action={
          <button
            className="btn primary"
            onClick={() => onToast("Connect a staff management API to add real employee records.")}
          >
            <Plus size={16} /> Add staff
          </button>
        }
      />
      <div className="mini-stats-grid">
        <MiniStat label="Total staff" value="86" delta="Across 6 departments" icon={Users} />
        <MiniStat
          label="Teaching faculty"
          value="64"
          delta="74% of workforce"
          icon={GraduationCap}
        />
        <MiniStat
          label="Available today"
          value="58"
          delta="Live status not connected"
          icon={CircleCheck}
        />
        <MiniStat label="Average workload" value="14.6 hrs" delta="Per week" icon={Clock3} />
      </div>
      <div className="faculty-grid">
        {list.map((f) => (
          <article className="panel faculty-card" key={f.id}>
            <div className="faculty-card-top">
              <Avatar name={f.name} color={f.color} />
              <button
                className="icon-button subtle"
                onClick={() => onToast(`Staff profile for ${f.name} selected.`)}
                aria-label="Staff options"
              >
                <MoreHorizontal size={18} />
              </button>
            </div>
            <h3>{f.name}</h3>
            <p>{f.role}</p>
            <div className="faculty-dept">
              <BookOpen size={15} />
              {f.department}
            </div>
            <div className="faculty-divider" />
            <div className="faculty-meta">
              <span>Weekly workload</span>
              <strong>{f.load}</strong>
            </div>
            <div className="faculty-progress">
              <span style={{ width: `${(parseInt(f.load) / 18) * 100}%` }} />
            </div>
            <div className="faculty-card-bottom">
              <Badge
                type={
                  f.status === "Available" ? "green" : f.status === "In class" ? "purple" : "orange"
                }
              >
                {f.status}
              </Badge>
              <span className="mono">{f.id}</span>
            </div>
          </article>
        ))}
      </div>
      {list.length === 0 && (
        <EmptyState icon={Users} title="No staff found" text="Try a different search." />
      )}
    </div>
  );
}

function BatchesPage({ onToast }) {
  const batches = [
    ["AIML-A", "B.E. Artificial Intelligence", "60", "Dr. Kavita Rao", "5th Semester", "Active"],
    ["CSE-B", "B.E. Computer Science", "55", "Prof. Rahul Menon", "5th Semester", "Active"],
    ["AIML-B", "B.E. Artificial Intelligence", "58", "Dr. Kavita Rao", "5th Semester", "Active"],
    ["ISE-A", "B.E. Information Science", "52", "Dr. Sneha Kulkarni", "7th Semester", "Active"],
    ["ECE-A", "B.E. Electronics", "48", "Prof. Amit Joshi", "7th Semester", "Active"],
    ["CSE-A", "B.E. Computer Science", "57", "Prof. Rahul Menon", "3rd Semester", "Active"],
  ];
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="ACADEMIC ORGANISATION"
        title="Batch management"
        subtitle="Monitor batch strength, coordinators, and academic progress."
        action={
          <button
            className="btn primary"
            onClick={() => onToast("Batch creation form can be connected to your database next.")}
          >
            <Plus size={16} /> Create batch
          </button>
        }
      />
      <div className="mini-stats-grid">
        <MiniStat label="Active batches" value="32" delta="Across all courses" icon={Layers3} />
        <MiniStat
          label="Students assigned"
          value="1,248"
          delta="96% capacity utilised"
          icon={Users}
        />
        <MiniStat
          label="Average batch size"
          value="39"
          delta="Institution average"
          icon={GraduationCap}
        />
        <MiniStat label="Course programmes" value="6" delta="Undergraduate" icon={BookOpen} />
      </div>
      <section className="panel table-panel">
        <div className="table-toolbar">
          <div>
            <h3>Active batches</h3>
            <p>Academic year 2026–27</p>
          </div>
          <button
            className="btn secondary compact"
            onClick={() => onToast("Batch list export is ready to connect to real records.")}
          >
            <Download size={15} /> Export
          </button>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>BATCH</th>
                <th>PROGRAMME</th>
                <th>STUDENTS</th>
                <th>COORDINATOR</th>
                <th>SEMESTER</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b, i) => (
                <tr key={b[0]}>
                  <td>
                    <div className="batch-name">
                      <span className={`batch-symbol symbol-${i % 4}`}>
                        <Layers3 size={16} />
                      </span>
                      <strong>{b[0]}</strong>
                    </div>
                  </td>
                  <td>{b[1]}</td>
                  <td>
                    <strong>{b[2]}</strong> <span className="muted-text">students</span>
                  </td>
                  <td>{b[3]}</td>
                  <td>{b[4]}</td>
                  <td>
                    <Badge type="green">{b[5]}</Badge>
                  </td>
                  <td>
                    <button
                      className="icon-button subtle"
                      onClick={() => onToast(`${b[0]} batch selected.`)}
                      aria-label="View batch"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function TimetablePage({ onToast }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = ["09:00", "10:00", "11:30", "13:30", "14:30"];
  const schedule = [
    ["Deep Learning", "Dr. Kavita Rao", "A-204"],
    ["Database Systems", "Prof. Rahul Menon", "B-102"],
    ["Neural Networks", "Dr. Kavita Rao", "AI Lab"],
    ["Operating Systems", "Prof. Rahul Menon", "C-302"],
    ["Project Lab", "Dr. Sneha Kulkarni", "Innovation Lab"],
  ];
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="ACADEMIC CALENDAR"
        title="Timetable"
        subtitle="A quick overview of the weekly teaching schedule."
        action={
          <button
            className="btn secondary"
            onClick={() => onToast("Connect the timetable service to edit or publish schedules.")}
          >
            <CalendarDays size={16} /> Manage schedule
          </button>
        }
      />
      <div className="schedule-banner">
        <div className="schedule-banner-icon">
          <CalendarClock size={22} />
        </div>
        <div>
          <strong>Week 45 · 02–06 November 2026</strong>
          <p>Showing sample schedule for AIML-A · 5th semester</p>
        </div>
        <Badge type="green">5 days scheduled</Badge>
      </div>
      <div className="schedule-grid">
        <div className="schedule-head time-col">TIME</div>
        {days.map((d) => (
          <div className="schedule-head" key={d}>
            {d.toUpperCase()}
            <small>
              {d === "Monday"
                ? "02"
                : d === "Tuesday"
                  ? "03"
                  : d === "Wednesday"
                    ? "04"
                    : d === "Thursday"
                      ? "05"
                      : "06"}{" "}
              NOV
            </small>
          </div>
        ))}
        {times.map((time, i) => (
          <React.Fragment key={time}>
            <div className="time-slot">
              {time}
              <small>
                {i === 0
                  ? "09:00–09:50"
                  : i === 1
                    ? "10:00–10:50"
                    : i === 2
                      ? "11:30–12:20"
                      : i === 3
                        ? "13:30–14:20"
                        : "14:30–15:20"}
              </small>
            </div>
            {days.map((d, j) => {
              const show = (i + j) % 3 !== 1;
              const s = schedule[(i + j) % schedule.length];
              return (
                <div className="schedule-cell" key={d + time}>
                  {show && (
                    <button
                      className={`class-card class-${(i + j) % 4}`}
                      onClick={() => onToast(`${s[0]} · ${s[1]} · Room ${s[2]}`)}
                    >
                      <strong>{s[0]}</strong>
                      <span>{s[1]}</span>
                      <small>
                        <MapPin size={11} />
                        {s[2]}
                      </small>
                    </button>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="schedule-legend">
        <span>
          <i className="legend-dot purple-bg" />
          Core subject
        </span>
        <span>
          <i className="legend-dot mint-bg" />
          Laboratory
        </span>
        <span>
          <i className="legend-dot orange-bg" />
          Project / seminar
        </span>
      </div>
      <p className="demo-disclaimer">
        This is sample timetable data for the interface preview. Connect your institution's
        timetable database before operational use.
      </p>
    </div>
  );
}


function AcademicsPage({ onToast }) {
  const courses = [
    ["Computer Science", "CSE", "89.2%", 92, "purple"],
    ["Artificial Intelligence", "AIML", "91.6%", 96, "mint"],
    ["Information Science", "ISE", "86.4%", 87, "orange"],
    ["Electronics", "ECE", "82.8%", 84, "pink"],
  ];
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="LEARNING OUTCOMES"
        title="Academic performance"
        subtitle="Track results, learning outcomes, and course-level progress."
        action={
          <button
            className="btn secondary"
            onClick={() => onToast("Connect exam results data to export official reports.")}
          >
            <Download size={16} /> Export results
          </button>
        }
      />
      <div className="mini-stats-grid">
        <MiniStat
          label="Overall pass rate"
          value="87.8%"
          delta="+3.4% vs last year"
          icon={ChartNoAxesCombined}
        />
        <MiniStat label="Average score" value="78.6" delta="Out of 100" icon={BookOpenCheck} />
        <MiniStat
          label="Students with distinction"
          value="186"
          delta="15% of cohort"
          icon={BadgeCheck}
        />
        <MiniStat
          label="Need academic support"
          value="42"
          delta="Across all programmes"
          icon={CircleAlert}
        />
      </div>
      <section className="panel">
        <div className="panel-heading">
          <div>
            <h3>Department performance</h3>
            <p>Semester examination summary · 2026–27</p>
          </div>
          <select className="select-small">
            <option>5th semester</option>
            <option>3rd semester</option>
            <option>7th semester</option>
          </select>
        </div>
        <div className="department-performance-list">
          {courses.map(([name, code, rate, score, tone]) => (
            <div className="performance-row" key={code}>
              <div className={`performance-icon ${tone}`}>
                <BookOpenCheck size={19} />
              </div>
              <div className="performance-name">
                <strong>{name}</strong>
                <small>{code} · Semester results</small>
              </div>
              <div className="performance-score">
                <small>Average score</small>
                <strong>{score}/100</strong>
              </div>
              <div className="performance-rate">
                <small>Pass rate</small>
                <strong>{rate}</strong>
                <div className="progress-track">
                  <span style={{ width: rate }} />
                </div>
              </div>
              <button
                className="icon-button subtle"
                onClick={() => onToast(`${name} performance detail selected.`)}
                aria-label="View department performance"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="info-callout">
        <Sparkles size={17} />
        <span>
          Use this overview to spot trends. Official student results should be loaded from your
          examination records before making academic decisions.
        </span>
      </div>
    </div>
  );
}

function FinancePage({ onToast }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="INSTITUTION FINANCES"
        title="Fees & finance"
        subtitle="Monitor collections, outstanding balances, and payment trends."
        action={
          <button
            className="btn secondary"
            onClick={() => onToast("Finance export requires a connected fee database.")}
          >
            <Download size={16} /> Export report
          </button>
        }
      />
      <div className="mini-stats-grid">
        <MiniStat
          label="Fees collected"
          value="₹3.82 Cr"
          delta="+14.6% this term"
          icon={CircleDollarSign}
        />
        <MiniStat
          label="Outstanding fees"
          value="₹42.5 L"
          delta="Follow-up needed"
          icon={WalletCards}
        />
        <MiniStat label="Collection rate" value="89.1%" delta="+4.2% this term" icon={TrendingUp} />
        <MiniStat
          label="Payments this month"
          value="642"
          delta="Across all courses"
          icon={Activity}
        />
      </div>
      <section className="panel">
        <div className="panel-heading">
          <div>
            <h3>Monthly collection</h3>
            <p>Fee collection in lakhs · illustrative figures</p>
          </div>
          <Badge type="green">
            <TrendingUp size={13} /> Trending up
          </Badge>
        </div>
        <div className="large-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={financeData} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 5" vertical={false} stroke="var(--chart-grid)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted)", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  color: "var(--text)",
                }}
                formatter={(v) => [`₹${v}L`, "Collected"]}
              />
              <Bar dataKey="amount" fill="var(--purple)" radius={[7, 7, 0, 0]} barSize={35} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="panel table-panel">
        <div className="table-toolbar">
          <div>
            <h3>Fee status overview</h3>
            <p>Illustrative student fee records</p>
          </div>
          <button
            className="btn secondary compact"
            onClick={() =>
              onToast("Connect the payment provider and fee database to open transactions.")
            }
          >
            <Eye size={15} /> View transactions
          </button>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>COURSE / BATCH</th>
                <th>FEE STATUS</th>
                <th>AMOUNT DUE</th>
                <th>LAST PAYMENT</th>
              </tr>
            </thead>
            <tbody>
              {initialStudents.slice(0, 5).map((s, i) => (
                <tr key={s.id}>
                  <td>
                    <div className="table-person">
                      <Avatar name={s.name} color={s.color} size="small" />
                      <div>
                        <strong>{s.name}</strong>
                        <small>{s.id}</small>
                      </div>
                    </div>
                  </td>
                  <td>{s.batch}</td>
                  <td>
                    <Badge type={s.fees === "Paid" ? "green" : "orange"}>{s.fees}</Badge>
                  </td>
                  <td>
                    <strong>
                      {s.fees === "Paid" ? "₹0" : money([25000, 18000, 32000][i % 3])}
                    </strong>
                  </td>
                  <td>{s.fees === "Paid" ? "28 Oct 2026" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <p className="demo-disclaimer">
        Financial values in this preview are sample data only and must not be used for accounting.
      </p>
    </div>
  );
}

function ReportsPage({ onExport, onToast }) {
  const reports = [
    ["Student directory", "Current enrolment, batch and status details", "Students", "purple"],
    ["Admissions summary", "Application pipeline and decision outcomes", "Admissions", "mint"],
    ["Academic performance", "Course pass rates and score summary", "Academics", "pink"],
    ["Fee collection summary", "Collections and outstanding balance overview", "Finance", "purple"],
    ["Faculty workload", "Department assignments and workload overview", "Staff", "mint"],
  ];
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="INSIGHTS & EXPORTS"
        title="Reports & analytics"
        subtitle="Find the information you need to make confident institutional decisions."
        action={
          <button className="btn secondary" onClick={onExport}>
            <Download size={16} /> Export student CSV
          </button>
        }
      />
      <div className="report-filter-bar">
        <div>
          <Filter size={16} />
          <span>Report period</span>
        </div>
        <select className="select-small">
          <option>Academic year 2026–27</option>
          <option>Academic year 2025–26</option>
        </select>
        <select className="select-small">
          <option>All departments</option>
          <option>Computer Science</option>
          <option>Artificial Intelligence</option>
        </select>
        <button
          className="btn secondary compact"
          onClick={() => onToast("Filters applied to the report preview.")}
        >
          Apply filters
        </button>
      </div>
      <div className="reports-grid">
        {reports.map(([title, desc, tag, tone]) => (
          <article className="panel report-card" key={title}>
            <div className={`report-icon ${tone}`}>
              <FileText size={21} />
            </div>
            <Badge type="neutral">{tag}</Badge>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="report-card-bottom">
              <span>Updated 02 Nov 2026</span>
              <button
                className="btn secondary compact"
                onClick={() =>
                  title === "Student directory"
                    ? onExport()
                    : onToast(
                        `${title} preview selected. Connect the relevant dataset to generate the official report.`,
                      )
                }
              >
                <Download size={14} /> Export
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function AnnouncementsPage({ announcements, onAdd, onToast }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="INSTITUTION COMMUNICATION"
        title="Announcements"
        subtitle="Keep students and staff informed with timely institutional updates."
        action={
          <button className="btn primary" onClick={onAdd}>
            <Plus size={16} /> New announcement
          </button>
        }
      />
      <div className="announcement-hero">
        <div className="announcement-hero-icon">
          <Megaphone size={25} />
        </div>
        <div>
          <strong>One clear message. Everyone in sync.</strong>
          <p>Publish notices for students, faculty, or your entire institution.</p>
        </div>
        <div className="announcement-hero-stat">
          <strong>{announcements.length}</strong>
          <small>Published in demo</small>
        </div>
      </div>
      <div className="announcement-list">
        {announcements.map((a, i) => (
          <article className="panel announcement-card" key={a.title + i}>
            <div className={`announcement-icon ${a.color}`}>
              <Megaphone size={19} />
            </div>
            <div className="announcement-body">
              <div className="announcement-meta">
                <Badge type="purple">{a.audience}</Badge>
                <span>{a.date}</span>
              </div>
              <h3>{a.title}</h3>
              <p>{a.message}</p>
              <div className="announcement-card-foot">
                <span>
                  <CircleCheck size={14} /> Published
                </span>
                <button
                  className="text-button"
                  onClick={() => onToast("Announcement detail selected.")}
                >
                  View details <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
            <button
              className="icon-button subtle"
              onClick={() =>
                onToast("Announcement options are available when connected to your backend.")
              }
              aria-label="Announcement options"
            >
              <MoreHorizontal size={18} />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

function AuditPage() {
  const logs = [
    [
      "Admission application approved",
      "Nihal Director",
      "APP-26072",
      "02 Nov 2026 · 11:42 AM",
      "green",
    ],
    ["Student record viewed", "Nihal Director", "STU-2401", "02 Nov 2026 · 10:18 AM", "purple"],
    ["Fee report exported", "Accounts Office", "FIN-2026-11", "01 Nov 2026 · 04:35 PM", "orange"],
    [
      "Batch assignment updated",
      "Academic Admin",
      "BATCH-AIML-A",
      "01 Nov 2026 · 02:12 PM",
      "mint",
    ],
    ["Announcement published", "Nihal Director", "ANN-118", "31 Oct 2026 · 09:25 AM", "pink"],
  ];
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="SECURITY & ACCOUNTABILITY"
        title="Audit logs"
        subtitle="Review a traceable history of important system activities."
        action={
          <button className="btn secondary" onClick={() => window.print()}>
            <Download size={16} /> Print logs
          </button>
        }
      />
      <div className="info-callout">
        <ShieldCheck size={18} />
        <span>
          Production audit logs should be generated server-side and protected from modification. The
          records below are illustrative examples.
        </span>
      </div>
      <section className="panel table-panel">
        <div className="table-toolbar">
          <div>
            <h3>Recent activity</h3>
            <p>Latest recorded actions across the institution.</p>
          </div>
          <Badge type="green">Audit monitoring</Badge>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ACTION</th>
                <th>PERFORMED BY</th>
                <th>RECORD</th>
                <th>DATE & TIME</th>
                <th>TYPE</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={i}>
                  <td>
                    <div className="audit-action">
                      <span className={`audit-icon ${l[4]}`}>
                        <Activity size={15} />
                      </span>
                      <strong>{l[0]}</strong>
                    </div>
                  </td>
                  <td>{l[1]}</td>
                  <td className="mono">{l[2]}</td>
                  <td>{l[3]}</td>
                  <td>
                    <Badge
                      type={l[4] === "green" ? "green" : l[4] === "orange" ? "orange" : "purple"}
                    >
                      {i === 0
                        ? "Approval"
                        : i === 1
                          ? "Read"
                          : i === 2
                            ? "Export"
                            : i === 3
                              ? "Update"
                              : "Publish"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function SettingsPage({ dark, setDark, onToast }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="PERSONALISE YOUR WORKSPACE"
        title="Settings"
        subtitle="Manage your director profile and dashboard preferences."
      />
      <div className="settings-layout">
        <div className="settings-menu panel">
          <div className="settings-menu-item selected">
            <UserRound size={17} /> Profile details
          </div>
          <div
            className="settings-menu-item"
            onClick={() => onToast("Security settings require authentication integration.")}
          >
            <ShieldCheck size={17} /> Security
          </div>
          <div
            className="settings-menu-item"
            onClick={() => onToast("Notification preferences selected.")}
          >
            <Bell size={17} /> Notifications
          </div>
          <div
            className="settings-menu-item"
            onClick={() => onToast("Institution settings require administrator permissions.")}
          >
            <Settings size={17} /> Institution
          </div>
        </div>
        <div className="settings-main">
          <section className="panel settings-card">
            <div className="settings-card-heading">
              <div>
                <h3>Director profile</h3>
                <p>Personal information shown in your workspace.</p>
              </div>
              <Badge type="purple">Director</Badge>
            </div>
            <div className="profile-edit-header">
              <Avatar name="Nihal Director" color="peach" size="large" />
              <div>
                <strong>Nihal Director</strong>
                <p>Institution Director</p>
                <button
                  className="text-button"
                  onClick={() => onToast("Connect profile storage to change your photo.")}
                >
                  Change profile photo
                </button>
              </div>
            </div>
            <div className="settings-fields">
              <label>
                Full name
                <input defaultValue="Nihal Director" />
              </label>
              <label>
                Work email
                <input defaultValue="director@example.edu" type="email" />
              </label>
              <label>
                Role
                <input value="Institution Director" readOnly />
              </label>
            </div>
            <div className="settings-save">
              <span>Profile editing is a UI preview.</span>
              <button
                className="btn primary"
                onClick={() => onToast("Connect authentication and profile APIs to save changes.")}
              >
                <Check size={16} /> Save changes
              </button>
            </div>
          </section>
          <section className="panel settings-card">
            <div className="settings-card-heading">
              <div>
                <h3>Appearance</h3>
                <p>Choose how the director workspace looks.</p>
              </div>
            </div>
            <div className="appearance-option">
              <div className="appearance-icon">
                <Sun size={18} />
              </div>
              <div>
                <strong>Light appearance</strong>
                <p>Bright, clean and easy to read.</p>
              </div>
              <button
                className={`toggle ${!dark ? "on" : ""}`}
                onClick={() => setDark(false)}
                aria-label="Use light appearance"
              >
                <span />
              </button>
            </div>
            <div className="appearance-option">
              <div className="appearance-icon dark-preview">
                <Moon size={18} />
              </div>
              <div>
                <strong>Dark appearance</strong>
                <p>Comfortable for low-light environments.</p>
              </div>
              <button
                className={`toggle ${dark ? "on" : ""}`}
                onClick={() => setDark(true)}
                aria-label="Use dark appearance"
              >
                <span />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value, delta, icon: Icon }) {
  return (
    <article className="panel mini-stat">
      <div className="mini-stat-icon">
        <Icon size={17} />
      </div>
      <div className="mini-stat-label">{label}</div>
      <strong>{value}</strong>
      <small>{delta}</small>
    </article>
  );
}
function EmptyState({ icon: Icon, title, text }) {
  return (
    <div className="empty-state">
      <span>
        <Icon size={24} />
      </span>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}
function Modal({ title, subtitle, onClose, children }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-heading">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <button className="icon-button subtle" onClick={onClose} aria-label="Close modal">
            <X size={19} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
