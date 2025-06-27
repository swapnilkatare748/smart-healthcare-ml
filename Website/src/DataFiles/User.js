// import {ProfileBanner} from "../assets/assets.js";
// import {defolt_User }from "../assets/assets.js";

// export const users = [
//   {
//     id: 1,
//     name: "Swapnil Katare",
//     email: "swapnil@example.com",
//     gender: "Male",
//     profilePhoto: defolt_User ?? "https://example.com/default-profile.jpg",
//     profileBanner: ProfileBanner ?? "https://example.com/default-banner.jpg",
//     dateOfBirth: "2000-05-15",
//     phone: "+91 9876543210",
//     address: {
//       street: "123 Wellness Street",
//       city: "Pune",
//       state: "Maharashtra",
//       postalCode: "411001",
//       country: "India",
//     },
//     userRole: "Patient",
//     medicalHistory: [
//       {
//         condition: "Hypertension",
//         diagnosedOn: "2022-03-10",
//         medications: ["Amlodipine 5mg"],
//         doctor: "Dr. Rajesh Sharma",
//       },
//       {
//         condition: "Allergic Rhinitis",
//         diagnosedOn: "2023-06-15",
//         medications: ["Loratadine 10mg"],
//         doctor: "Dr. Priya Mehta",
//       },
//     ],
//     upcomingAppointments: [
//       {
//         appointmentId: "APT20241010",
//         date: "2024-10-10",
//         time: "10:30 AM",
//         doctor: "Dr. Sameer Desai",
//         department: "Cardiology",
//         hospital: "Pune Heart Care Center",
//       },
//     ],
//     prescriptions: [
//       {
//         prescriptionId: "RX1001",
//         date: "2024-08-20",
//         doctor: "Dr. Priya Mehta",
//         medications: [
//           { name: "Cetirizine", dosage: "10mg", frequency: "Once daily" },
//         ],
//       },
//     ],
//     healthMetrics: {
//       bloodPressure: "120/80 mmHg",
//       heartRate: "72 bpm",
//       weight: "70 kg",
//       height: "175 cm",
//       bmi: 22.9,
//     },
//     insurance: {
//       provider: "HDFC Health Insurance",
//       policyNumber: "HDFC12345678",
//       coverage: "₹5,00,000",
//       expiryDate: "2025-12-31",
//     },
//     emergencyContact: {
//       name: "Ramesh Katare",
//       relation: "Father",
//       phone: "+91 9876543211",
//     },
//     notifications: {
//       email: true,
//       sms: true,
//       push: false,
//     },
//     security: {
//       twoFactorAuth: true,
//       recoveryEmail: "swapnil.recovery@example.com",
//     },
//   },
// ];


import { ProfileBanner } from "../assets/assets.js";
import { defolt_User,defoltDoctor } from "../assets/assets.js";

export const users = [
  {
    id: 1,
    name: "Swapnil Katare",
    email: "swapnil@example.com",
    gender: "Male",
    rating: 4.8,
    profilePhoto: defolt_User ?? "https://example.com/default-profile.jpg",
    profileBanner: ProfileBanner ?? "https://example.com/default-banner.jpg",
    dateOfBirth: "2000-05-15",
    phone: "+91 9876543210",
    address: {
      street: "123 Wellness Street",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411001",
      country: "India",
    },
    userRole: "Patient",
    medicalHistory: [
      {
        condition: "Hypertension",
        diagnosedOn: "2022-03-10",
        medications: ["Amlodipine 5mg"],
        doctor: "Dr. Rajesh Sharma",
      },
      {
        condition: "Allergic Rhinitis",
        diagnosedOn: "2023-06-15",
        medications: ["Loratadine 10mg"],
        doctor: "Dr. Priya Mehta",
      },
    ],
    upcomingAppointments: [
      {
        appointmentId: "APT20241010",
        date: "2024-10-10",
        time: "10:30 AM",
        doctor: "Dr. Sameer Desai",
        department: "Cardiology",
        hospital: "Pune Heart Care Center",
      },
    ],
    prescriptions: [
      {
        prescriptionId: "RX1001",
        date: "2024-08-20",
        doctor: "Dr. Priya Mehta",
        medications: [
          { name: "Cetirizine", dosage: "10mg", frequency: "Once daily" },
        ],
      },
    ],
    healthMetrics: {
      bloodPressure: "120/80 mmHg",
      heartRate: "72 bpm",
      weight: "70 kg",
      height: "175 cm",
      bmi: 22.9,
    },
    insurance: {
      provider: "HDFC Health Insurance",
      policyNumber: "HDFC12345678",
      coverage: "₹5,00,000",
      expiryDate: "2025-12-31",
    },
    emergencyContact: {
      name: "Ramesh Katare",
      relation: "Father",
      phone: "+91 9876543211",
    },
    notifications: {
      email: true,
      sms: true,
      push: false,
    },
    security: {
      twoFactorAuth: true,
      recoveryEmail: "swapnil.recovery@example.com",
    },
  },
  {
    id: 2,
    name: "Dr. Aryan Deshmukh",
    email: "aryan.deshmukh@example.com",
    gender: "Male",
    rating: 4.8,
    profilePhoto: defoltDoctor ?? "https://example.com/default-profile.jpg",
    profileBanner: ProfileBanner ?? "https://example.com/default-banner.jpg",
    dateOfBirth: "1985-08-22",
    phone: "+91 9876543220",
    address: {
      street: "456 Health Avenue",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
    },
    userRole: "Doctor",
    specialization: "Cardiology",
    experience: "15 years",
    hospital: "Mumbai Heart Institute",
    patients: [
      {
        patientId: 1,
        name: "Swapnil Katare",
        condition: "Hypertension",
        lastAppointment: "2024-08-10",
      },
    ],
    schedule: [
      {
        day: "Monday",
        time: "9:00 AM - 1:00 PM",
        location: "Mumbai Heart Institute",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 2:00 PM",
        location: "Mumbai Heart Institute",
      },
    ],
    security: {
      twoFactorAuth: true,
      recoveryEmail: "aryan.recovery@example.com",
    },
  },
  {
    id: 3,
    name: "Dr. Neha Sharma",
    email: "neha.sharma@example.com",
    gender: "Female",
    rating: 4 ,
    profilePhoto: defoltDoctor ?? "https://example.com/default-profile.jpg",
    profileBanner: ProfileBanner ?? "https://example.com/default-banner.jpg",
    dateOfBirth: "1990-03-12",
    phone: "+91 9876543230",
    address: {
      street: "789 Care Lane",
      city: "Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India",
    },
    userRole: "Doctor",
    specialization: "Dermatology",
    experience: "10 years",
    hospital: "Delhi Skin Care Clinic",
    patients: [
      {
        patientId: 1,
        name: "Swapnil Katare",
        condition: "Allergic Rhinitis",
        lastAppointment: "2024-07-25",
      },
    ],
    schedule: [
      {
        day: "Tuesday",
        time: "10:00 AM - 4:00 PM",
        location: "Delhi Skin Care Clinic",
      },
      {
        day: "Friday",
        time: "11:00 AM - 3:00 PM",
        location: "Delhi Skin Care Clinic",
      },
    ],
    security: {
      twoFactorAuth: true,
      recoveryEmail: "neha.recovery@example.com",
    },
  },
  {
    id: 4,
    name: "Dr. Sujit Chan",
    email: "sujit.chan@example.com",
    gender: "Male",
    rating: 3.8,
    profilePhoto: defoltDoctor ?? "https://example.com/default-profile.jpg",
    profileBanner: ProfileBanner ?? "https://example.com/default-banner.jpg",
    dateOfBirth: "1982-07-10",
    phone: "+91 9876543240",
    userRole: "Doctor",
    specialization: "Orthopedics",
    experience: "12 years",
    hospital: "Pune Orthopedic Hospital",
    security: {
      twoFactorAuth: true,
      recoveryEmail: "sujit.chan.recovery@example.com",
    },
  },
  {
    id: 5,
    name: "Dr. Sujit Bhalerav",
    email: "sujit.bhalerav@example.com",
    gender: "Male",
    rating: 2.8,
    profilePhoto: defoltDoctor || "https://example.com/default-profile.jpg",
    profileBanner: ProfileBanner ?? "https://example.com/default-banner.jpg",
    dateOfBirth: "1980-05-14",
    phone: "+91 9876543250",
    userRole: "Doctor",
    specialization: "Neurology",
    experience: "14 years",
    hospital: "Mumbai Neuro Clinic",
    security: {
      twoFactorAuth: true,
      recoveryEmail: "sujit.bhalerav.recovery@example.com",
    },
  },
];
