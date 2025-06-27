import { MdSpaceDashboard, MdOutlineReport } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsClipboardPlus, BsChatSquareQuote } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export const doctorSidebar = [
  {
    name: "Dashboard",
    route: "dashboard",
    activeRoutes: ["/doctor/dashboard"],
    icon: <MdSpaceDashboard />,
  },
  { name:"CancerDetection",
    route:"CancerDetection", 
    activeRoutes:["/doctor/CancerDetection"],
    icon: <BsChatSquareQuote />
    },
  {
    name: "Appointments",
    route: "appointments",
    activeRoutes: ["/doctor/appointments"],
    icon: <TbCalendarStats />,
  },
  {
    name: "Patients",
    route: "patients",
    activeRoutes: ["/doctor/patients"],
    icon: <FiUsers />,
  },
  {
    name: "Prescriptions",
    route: "prescriptions",
    activeRoutes: ["/doctor/prescriptions"],
    icon: <BsClipboardPlus />,
  },
  {
    name: "Reports",
    route: "reports",
    activeRoutes: ["/doctor/reports"],
    icon: <MdOutlineReport />,
  },
  {
    name: "Requests",
    route: "requests",
    activeRoutes: ["/doctor/requests"],
    icon: <VscGitPullRequestNewChanges />,
  },
  {
    name: "Notifications",
    route: "notifications",
    activeRoutes: ["/doctor/notifications"],
    icon: <IoMdNotificationsOutline />,
  },
  {
    name: "Settings",
    route: "settings",
    activeRoutes: ["/doctor/settings"],
    icon: <IoSettingsOutline />,
  },
];


export const doctorNavTabs = [
  { name: "Appointments", route: "appointments", activeRoutes: ["/doctor/appointments"] },
  { name: "Patients", route: "patients", activeRoutes: ["/doctor/patients"] },
   {name:  "NeuroScan Diagnosis" , route:"MedScan" ,activeRoutes:["/doctor/test"]},
   {name:"CancerDetection",route:"CancerDetection", activeRoutes:["/doctor/CancerDetection"]},
  { name: "Settings", route: "settings", activeRoutes: ["/doctor/settings"] },
];
