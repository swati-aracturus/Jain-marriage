import Header from "@components/header";
import Footer from "@components/footer";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { City, Country, State } from "country-state-city";

const Registration = () => {
  const notify = () => toast.success("Successfully Registered In!");
 
  const options = [
    { value: "Unmarried", label: "Unmarried" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widow", label: "Widow" },
  ];
  const Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const weights = [
    { value: "35 kg", label: "35 kg" },
    { value: "36 kg", label: "36 kg" },
    { value: "37 kg", label: "37 kg" },
    { value: "38 kg", label: "38 kg" },
    { value: "39 kg", label: "39 kg" },
    { value: "40 kg", label: "40 kg" },
    { value: "41 kg", label: "41 kg" },
    { value: "42 kg", label: "42 kg" },
    { value: "43 kg", label: "43 kg" },
    { value: "44 kg", label: "44 kg" },
    { value: "45 kg", label: "45 kg" },
    { value: "46 kg", label: "46 kg" },
    { value: "47 kg", label: "47 kg" },
    { value: "48 kg", label: "48 kg" },
    { value: "49 kg", label: "49 kg" },
    { value: "50 kg", label: "50 kg" },
    { value: "51 kg", label: "51 kg" },
    { value: "52 kg", label: "52 kg" },
    { value: "53 kg", label: "53 kg" },
    { value: "54 kg", label: "54 kg" },
    { value: "55 kg", label: "55 kg" },
    { value: "56 kg", label: "56 kg" },
    { value: "57 kg", label: "57 kg" },
    { value: "58 kg", label: "58 kg" },
    { value: "59 kg", label: "59 kg" },
    { value: "60 kg", label: "60 kg" },
    { value: "61 kg", label: "61 kg" },
    { value: "62 kg", label: "62 kg" },
    { value: "63 kg", label: "63 kg" },
    { value: "64 kg", label: "64 kg" },
    { value: "65 kg", label: "65 kg" },
    { value: "66 kg", label: "66 kg" },
    { value: "67 kg", label: "67 kg" },
    { value: "68 kg", label: "68 kg" },
    { value: "69 kg", label: "69 kg" },
    { value: "70 kg", label: "70 kg" },
    { value: "71 kg", label: "71 kg" },
    { value: "72 kg", label: "72 kg" },
    { value: "73 kg", label: "73 kg" },
    { value: "74 kg", label: "74 kg" },
    { value: "75 kg", label: "75 kg" },
    { value: "76 kg", label: "76 kg" },
    { value: "77 kg", label: "77 kg" },
    { value: "78 kg", label: "78 kg" },
    { value: "79 kg", label: "79 kg" },
    { value: "80 kg", label: "80 kg" },
    { value: "81 kg", label: "81 kg" },
    { value: "82 kg", label: "82 kg" },
    { value: "83 kg", label: "83 kg" },
    { value: "84 kg", label: "84 kg" },
    { value: "85 kg", label: "85 kg" },
    { value: "86 kg", label: "86 kg" },
    { value: "87 kg", label: "87 kg" },
    { value: "88 kg", label: "88 kg" },
    { value: "89 kg", label: "89 kg" },
    { value: "90 kg", label: "90 kg" },
    { value: "91 kg", label: "91 kg" },
    { value: "92 kg", label: "92 kg" },
    { value: "93 kg", label: "93 kg" },
    { value: "94 kg", label: "94 kg" },
    { value: "95 kg", label: "95 kg" },
    { value: "96 kg", label: "96 kg" },
    { value: "97 kg", label: "97 kg" },
    { value: "98 kg", label: "98 kg" },
    { value: "99 kg", label: "99 kg" },
    { value: "100 kg", label: "100 kg" },
    { value: "101 kg", label: "101 kg" },
    { value: "102 kg", label: "102 kg" },
    { value: "103 kg", label: "103 kg" },
    { value: "104 kg", label: "104 kg" },
    { value: "105 kg", label: "105 kg" },
    { value: "106 kg", label: "106 kg" },
    { value: "107 kg", label: "107 kg" },
    { value: "108 kg", label: "108 kg" },
    { value: "109 kg", label: "109 kg" },
    { value: "110 kg", label: "110 kg" },
    { value: "111 kg", label: "111 kg" },
    { value: "112 kg", label: "112 kg" },
    { value: "113 kg", label: "113 kg" },
    { value: "114 kg", label: "114 kg" },
    { value: "115 kg", label: "115 kg" },
    { value: "116 kg", label: "116 kg" },
    { value: "117 kg", label: "117 kg" },
    { value: "118 kg", label: "118 kg" },
    { value: "119 kg", label: "119 kg" },
    { value: "120 kg", label: "120 kg" },
    { value: "121 kg", label: "121 kg" },
    { value: "122 kg", label: "122 kg" },
    { value: "123 kg", label: "123 kg" },
    { value: "124 kg", label: "124 kg" },
    { value: "125 kg", label: "125 kg" },
    { value: "126 kg", label: "126 kg" },
    { value: "127 kg", label: "127 kg" },
    { value: "128 kg", label: "128 kg" },
    { value: "129 kg", label: "129 kg" },
    { value: "130 kg", label: "130 kg" },
    { value: "131 kg", label: "131 kg" },
    { value: "132 kg", label: "132 kg" },
    { value: "133 kg", label: "133 kg" },
    { value: "134 kg", label: "134 kg" },
    { value: "135 kg", label: "135 kg" },
    { value: "136 kg", label: "136 kg" },
    { value: "137 kg", label: "137 kg" },
    { value: "138 kg", label: "138 kg" },
    { value: "139 kg", label: "139 kg" },
    { value: "140 kg", label: "140 kg" },
    { value: "141 kg", label: "141 kg" },
    { value: "142 kg", label: "142 kg" },
    { value: "143 kg", label: "143 kg" },
    { value: "144 kg", label: "144 kg" },
    { value: "145 kg", label: "145 kg" },
    { value: "146 kg", label: "146 kg" },
    { value: "147 kg", label: "147 kg" },
    { value: "148 kg", label: "148 kg" },
    { value: "149 kg", label: "149 kg" },
    { value: "150 kg", label: "150 kg" },
    { value: "151 kg", label: "151 kg" },
    { value: "152 kg", label: "152 kg" },
    { value: "153 kg", label: "153 kg" },
    { value: "154 kg", label: "154 kg" },
    { value: "155 kg", label: "155 kg" },
    { value: "156 kg", label: "156 kg" },
    { value: "157 kg", label: "157 kg" },
    { value: "158 kg", label: "158 kg" },
    { value: "159 kg", label: "159 kg" },
    { value: "160 kg", label: "160 kg" },
    { value: "161 kg", label: "161 kg" },
    { value: "162 kg", label: "162 kg" },
    { value: "163 kg", label: "163 kg" },
    { value: "164 kg", label: "164 kg" },
    { value: "165 kg", label: "165 kg" },
    { value: "166 kg", label: "166 kg" },
    { value: "167 kg", label: "167 kg" },
    { value: "168 kg", label: "168 kg" },
    { value: "169 kg", label: "169 kg" },
    { value: "170 kg", label: "170 kg" },
    { value: "171 kg", label: "171 kg" },
    { value: "172 kg", label: "172 kg" },
    { value: "173 kg", label: "173 kg" },
    { value: "174 kg", label: "174 kg" },
    { value: "175 kg", label: "175 kg" },
    { value: "176 kg", label: "176 kg" },
    { value: "177 kg", label: "177 kg" },
    { value: "178 kg", label: "178 kg" },
    { value: "179 kg", label: "179 kg" },
    { value: "180 kg", label: "180 kg" },
    { value: "181 kg", label: "181 kg" },
    { value: "182 kg", label: "182 kg" },
    { value: "183 kg", label: "183 kg" },
    { value: "184 kg", label: "184 kg" },
    { value: "185 kg", label: "185 kg" },
    { value: "186 kg", label: "186 kg" },
    { value: "187 kg", label: "187 kg" },
    { value: "188 kg", label: "188 kg" },
    { value: "189 kg", label: "189 kg" },
    { value: "190 kg", label: "190 kg" },
    { value: "191 kg", label: "191 kg" },
    { value: "192 kg", label: "192 kg" },
    { value: "193 kg", label: "193 kg" },
    { value: "194 kg", label: "194 kg" },
    { value: "195 kg", label: "195 kg" },
    { value: "196 kg", label: "196 kg" },
    { value: "197 kg", label: "197 kg" },
    { value: "198 kg", label: "198 kg" },
    { value: "199 kg", label: "199 kg" },
    { value: "200 kg", label: "200 kg" },
  ];

  const heights = [
    { value: "4'0", label: "4 feet 0 inches" },
    { value: "4'1", label: "4 feet 1 inch" },
    { value: "4'2", label: "4 feet 2 inches" },
    { value: "4'3", label: "4 feet 3 inches" },
    { value: "4'4", label: "4 feet 4 inches" },
    { value: "4'5", label: "4 feet 5 inches" },
    { value: "4'6", label: "4 feet 6 inches" },
    { value: "4'7", label: "4 feet 7 inches" },
    { value: "4'8", label: "4 feet 8 inches" },
    { value: "4'9", label: "4 feet 9 inches" },
    { value: "4'10", label: "4 feet 10 inches" },
    { value: "4'11", label: "4 feet 11 inches" },
    { value: "5'0", label: "5 feet 0 inches" },
    { value: "5'1", label: "5 feet 1 inch" },
    { value: "5'2", label: "5 feet 2 inches" },
    { value: "5'3", label: "5 feet 3 inches" },
    { value: "5'4", label: "5 feet 4 inches" },
    { value: "5'5", label: "5 feet 5 inches" },
    { value: "5'6", label: "5 feet 6 inches" },
    { value: "5'7", label: "5 feet 7 inches" },
    { value: "5'8", label: "5 feet 8 inches" },
    { value: "5'9", label: "5 feet 9 inches" },
    { value: "5'10", label: "5 feet 10 inches" },
    { value: "5'11", label: "5 feet 11 inches" },
    { value: "6'0", label: "6 feet 0 inches" },
    { value: "6'1", label: "6 feet 1 inch" },
    { value: "6'2", label: "6 feet 2 inches" },
    { value: "6'3", label: "6 feet 3 inches" },
    { value: "6'4", label: "6 feet 4 inches" },
    { value: "6'5", label: "6 feet 5 inches" },
    { value: "6'6", label: "6 feet 6 inches" },
    { value: "6'7", label: "6 feet 7 inches" },
    { value: "6'8", label: "6 feet 8 inches" },
    { value: "6'9", label: "6 feet 9 inches" },
    { value: "6'10", label: "6 feet 10 inches" },
    { value: "6'11", label: "6 feet 11 inches" },
    { value: "7'0", label: "7 feet 0 inches" },
    { value: "7'1", label: "7 feet 1 inch" },
    { value: "7'2", label: "7 feet 2 inches" },
    { value: "7'3", label: "7 feet 3 inches" },
    { value: "7'4", label: "7 feet 4 inches" },
    { value: "7'5", label: "7 feet 5 inches" },
    { value: "7'6", label: "7 feet 6 inches" },
    { value: "7'7", label: "7 feet 7 inches" },
    { value: "7'8", label: "7 feet 8 inches" },
    { value: "7'9", label: "7 feet 9 inches" },
    { value: "7'10", label: "7 feet 10 inches" },
    { value: "7'11", label: "7 feet 11 inches" },
    { value: "8'0", label: "8 feet 0 inches" },
  ];
  const manglik = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
    { value: "don’t know", label: "don’t know" },
  ];
  const matching = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const agefrom = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
  ];

  const ageto = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
  ];

  const optionstwo = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  const complexation = [
    { value: "Extremely fair skin", label: "Extremely fair skin" },
    { value: "Fair skin", label: "Fair skin" },
    { value: "Medium skin", label: "Medium skin" },
    { value: "Olive skin", label: "Olive skin" },
    { value: "Light brown skin", label: "Light brown skin" },
    { value: "Dark Brown skin", label: "Dark Brown skin" },
    { value: "Dark skin", label: "Dark skin" },
  ];

  const Diet = [
    { value: "Veg", label: "Veg" },
    { value: "Non-Veg", label: "Non-Veg" },
    { value: "Vegan", label: "Vegan" },
    { value: "Eggetarian", label: "Eggetarian" },
    { value: "Jain food", label: "Jain food" },
  ];

  const Family_Type = [
    { value: "Nuclear", label: "Nuclear" },
    { value: "Joint", label: "Joint" },
    { value: "single parent", label: "single parent" },
    { value: "Step parent", label: "Step parent" },
    { value: "Grandparent", label: "Grandparent" },
  ];

  const Family_Status = [
    { value: "middle class", label: "middle class" },
    { value: "upper middle Class", label: "upper middle Class" },
    { value: "upper class", label: "upper class" },
    { value: "Rich", label: "Rich" },
  ];

  const Family = [
    { value: "Traditional", label: "Traditional" },
    { value: "Modern", label: "Modern" },
    { value: "Western", label: "Western" },
  ];
  const Marital_status = [
    { value: "Unmarried", label: "Unmarried" },
    { value: "Married", label: "Married" },
    { value: "Widowed", label: "Widowed" },
    { value: "Divorced", label: "Divorced" },
    { value: "Separated", label: "Separated" },
    { value: "In certain cases", label: "In certain cases" },
    { value: "Registered partnership", label: "Registered partnership" },
  ];

  const If_Manglik = [
    { value: "low mangal", label: "low mangal" },
    { value: "high mangal", label: "high mangal" },
    { value: "anshik mangal", label: "anshik mangal" },
    { value: "genral mangal", label: "genral mangal" },
    { value: "dvibal mangal", label: "dvibal mangal" },
    { value: "tribal mangal", label: "tribal mangal" },
  ];

  //drinking and smoking
  const Smoking = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
    { value: "occationally", label: "occationally" },
  ];

  const Sector = [
    { value: "Private company", label: "Private company" },
    {
      value: "Government / public sector",
      label: "Government / public sector",
    },
    { value: "Defense/ civil service", label: "Defense/ civil service" },
    {
      value: "Business / Self employment",
      label: "Business / Self employment",
    },
    { value: "Not working", label: "Not working" },
  ];

  const Salutation_Father = [
    { value: "Mr.", label: "Mr." },
    { value: "Late", label: "Late" },
    { value: "Dr.", label: "Dr." },
    { value: "Adv.", label: "Adv." },
    { value: "CA", label: "CA" },
    { value: "Er.", label: "Er." },
    { value: "Prof", label: "Prof." },
    { value: "Sen", label: "Sen" },
    { value: "M-R", label: "M-R" },
    { value: "Gov.", label: "Gov." },
    { value: "Cap.", label: "Cap.. " },
    { value: "Chief.", label: "Chief." },
  ];

  const Highest_education = [
    { value: "Doctorate", label: "Doctorate" },
    { value: "Master", label: "Master" },
    { value: "Bachelor/undergraduate", label: "Bachelor/undergraduate" },
    { value: "Associate/diploma", label: "Associate/diploma" },
    { value: "High school and below", label: "High school and below" },
  ];

  const Doctorate_Degree = [
    {
      value: "Doctor of Philosophy (PhD)",
      label: "Doctor of Philosophy (PhD)",
    },
    { value: "Doctor of Education (EdD)", label: "Doctor of Education (EdD)" },
    { value: "Doctor of Design (DDes)", label: "Doctor of Design (DDes)" },
    { value: "Doctor of Fine Arts (DFA)", label: "Doctor of Fine Arts (DFA)" },
    {
      value: "Doctor of Nursing Science (DNS)",
      label: "Doctor of Nursing Science (DNS)",
    },
    { value: "Doctor of Theology (ThD)", label: "Doctor of Theology (ThD)" },
    {
      value: "Doctor of Business Administration (DBA)",
      label: "Doctor of Business Administration (DBA)",
    },
    {
      value: "Doctor of Dental Surgery (DDS)",
      label: "Doctor of Dental Surgery (DDS)",
    },
    {
      value: "Doctor of Dental Medicine (DMD)",
      label: "Doctor of Dental Medicine (DMD)",
    },
    {
      value: "Doctor of Podiatric Medicine (DPM)",
      label: "Doctor of Podiatric Medicine (DPM)",
    },
    {
      value: "Doctor of Chiropractic (DC)",
      label: "Doctor of Chiropractic (DC)",
    },
    {
      value: "Doctor of Veterinary Medicine (DVM)",
      label: "Doctor of Veterinary Medicine (DVM)",
    },
    {
      value: "Doctor of Naturopathic Medicine (ND)",
      label: "Doctor of Naturopathic Medicine (ND)",
    },
    { value: "Other", label: "Other" },
  ];

  const Master_Degree = [
    { value: "Master of Accountancy", label: "Master of Accountancy" },
    { value: "Master of Advanced Study", label: "Master of Advanced Study" },
    {
      value: "Masters of Agricultural Economics",
      label: "Masters of Agricultural Economics",
    },
    { value: "Master of Applied Finance", label: "Master of Applied Finance" },
    { value: "Master of Applied Science", label: "Master of Applied Science" },
    { value: "Master of Architecture", label: "Master of Architecture" },
    { value: "Master of Arts", label: "Master of Arts" },
    {
      value: "Master of Arts in Liberal Studies",
      label: "Master of Arts in Liberal Studies",
    },
    {
      value: "Master of Arts in Special Education",
      label: "Master of Arts in Special Education",
    },
    {
      value: "Master of Arts in Teaching",
      label: "Master of Arts in Teaching",
    },
    { value: "Master of Bioethics", label: "Master of Bioethics" },
    {
      value: "Master of Business Administration",
      label: "Master of Business Administration",
    },
    {
      value: "Master of Business, Entrepreneurship and Technology",
      label: "Master of Business, Entrepreneurship and Technology",
    },
    { value: "Master of Business", label: "Master of Business" },
    {
      value: "Master of Business Engineering",
      label: "Master of Business Engineering",
    },
    {
      value: "Master of Business Informatics",
      label: "Master of Business Informatics",
    },
    { value: "Master of Chemistry", label: "Master of Chemistry" },
    {
      value: "Master of Christian Education",
      label: "Master of Christian Education",
    },
    { value: "Master of City Planning", label: "Master of City Planning" },
    { value: "Master of Commerce", label: "Master of Commerce" },
    {
      value: "Master of Computational Finance",
      label: "Master of Computational Finance",
    },
    {
      value: "Master of Computer Applications",
      label: "Master of Computer Applications",
    },
    { value: "Master of Counselling", label: "Master of Counselling" },
    {
      value: "Master of Criminal Justice",
      label: "Master of Criminal Justice",
    },
    {
      value: "Master of Creative Technologies",
      label: "Master of Creative Technologies",
    },
    { value: "Master of Data Science", label: "Master of Data Science" },
    { value: "Master of Defence Studies", label: "Master of Defence Studies" },
    { value: "Master of Design", label: "Master of Design" },
    {
      value: "Masters of Development Economics",
      label: "Masters of Development Economics",
    },
    { value: "Master of Divinity", label: "Master of Divinity" },
    { value: "Master of Economics", label: "Master of Economics" },
    { value: "Master of Education", label: "Master of Education" },
    { value: "Master of Engineering", label: "Master of Engineering" },
    {
      value: "Master of Engineering Management",
      label: "Master of Engineering Management",
    },
    { value: "Master of Applied Science", label: "Master of Applied Science" },
    { value: "Master of Enterprise", label: "Master of Enterprise" },
    { value: "Master of European Law", label: "Master of European Law" },
    { value: "Master of Finance", label: "Master of Finance" },
    {
      value: "Master of Financial Economics",
      label: "Master of Financial Economics",
    },
    {
      value: "Master of Financial Engineering",
      label: "Master of Financial Engineering",
    },
    {
      value: "Master of Financial Mathematics",
      label: "Master of Financial Mathematics",
    },
    { value: "Master of Fine Arts", label: "Master of Fine Arts" },
    {
      value: "Master of Health Administration",
      label: "Master of Health Administration",
    },
    {
      value: "Master of Health Economics",
      label: "Master of Health Economics",
    },
    { value: "Master of Health Science", label: "Master of Health Science" },
    { value: "Master of Humanities", label: "Master of Humanities" },
    {
      value: "Master of Industrial and Labor Relations",
      label: "Master of Industrial and Labor Relations",
    },
    {
      value: "Master of International Affairs",
      label: "Master of International Affairs",
    },
    {
      value: "Master of International Business",
      label: "Master of International Business",
    },
    {
      value: "Masters of International Economics",
      label: "Masters of International Economics",
    },
    {
      value: "Master of International Studies",
      label: "Master of International Studies",
    },
    {
      value: "Master of Information and Cybersecurity",
      label: "Master of Information and Cybersecurity",
    },
    {
      value: "Master of Information and Data Science",
      label: "Master of Information and Data Science",
    },
    {
      value: "Master of Information Management",
      label: "Master of Information Management",
    },
    {
      value: "Master of Information System Management",
      label: "Master of Information System Management",
    },
    { value: "Master of Journalism", label: "Master of Journalism" },
    { value: "Master of Jurisprudence", label: "Master of Jurisprudence" },
    { value: "Master of Laws", label: "Master of Laws" },
    {
      value: "Master of Mass Communication",
      label: "Master of Mass Communication",
    },
    { value: "Master of Studies in Law", label: "Master of Studies in Law" },
    {
      value: "Master of Landscape Architecture",
      label: "Master of Landscape Architecture",
    },
    { value: "Master of Letters", label: "Master of Letters" },
    { value: "Master of Liberal Arts", label: "Master of Liberal Arts" },
    {
      value: "Master of Library and Information Science",
      label: "Master of Library and Information Science",
    },
    { value: "Master of Management", label: "Master of Management" },
    {
      value: "Master of Management of Innovation",
      label: "Master of Management of Innovation",
    },
    { value: "Master of Marketing", label: "Master of Marketing" },
    {
      value: "Master of Mathematical Finance",
      label: "Master of Mathematical Finance",
    },
    { value: "Master of Mathematics", label: "Master of Mathematics" },
    { value: "Master of Medical Science", label: "Master of Medical Science" },
    { value: "Master of Medicine", label: "Master of Medicine" },
    {
      value: "Masters of Military Art and Science",
      label: "Masters of Military Art and Science",
    },
    {
      value: "Master of Military Operational Art and Science",
      label: "Master of Military Operational Art and Science",
    },
    { value: "Master of Ministry", label: "Master of Ministry" },
    { value: "Master of Music", label: "Master of Music" },
    { value: "Master of Music Education", label: "Master of Music Education" },
    {
      value: "Master of Occupational Behaviour and Development",
      label: "Master of Occupational Behaviour and Development",
    },
    {
      value: "Master of Occupational Therapy",
      label: "Master of Occupational Therapy",
    },
    { value: "Master of Pharmacy", label: "Master of Pharmacy" },
    { value: "Master of Philosophy", label: "Master of Philosophy" },
    {
      value: "Master of Physician Assistant Studies",
      label: "Master of Physician Assistant Studies",
    },
    { value: "Master of Physics", label: "Master of Physics" },
    {
      value: "Master of Political Science",
      label: "Master of Political Science",
    },
    {
      value: "Master of Professional Studies",
      label: "Master of Professional Studies",
    },
    { value: "Master of Psychology", label: "Master of Psychology" },
    {
      value: "Master of Public Administration",
      label: "Master of Public Administration",
    },
    { value: "Master of Public Affairs", label: "Master of Public Affairs" },
    { value: "Master of Public Health", label: "Master of Public Health" },
    {
      value: "Master of Public Management",
      label: "Master of Public Management",
    },
    { value: "Master of Public Policy", label: "Master of Public Policy" },
    {
      value: "Master of Public Relations",
      label: "Master of Public Relations",
    },
    { value: "Master of Public Service", label: "Master of Public Service" },
    {
      value: "Master of Quantitative Finance",
      label: "Master of Quantitative Finance",
    },
    {
      value: "Master of Rabbinic Studies",
      label: "Master of Rabbinic Studies",
    },
    {
      value: "Master of Real Estate Development",
      label: "Master of Real Estate Development",
    },
    {
      value: "Master of Religious Education",
      label: "Master of Religious Education",
    },
    { value: "Master of Research", label: "Master of Research" },
    { value: "Master of Sacred Music", label: "Master of Sacred Music" },
    { value: "Master of Sacred Theology", label: "Master of Sacred Theology" },
    { value: "Master of Science", label: "Master of Science" },
    {
      value: "Master of Science in Administration",
      label: "Master of Science in Administration",
    },
    {
      value: "Master of Science in Archaeology",
      label: "Master of Science in Archaeology",
    },
    {
      value: "Master of Science in Biblical Archaeology",
      label: "Master of Science in Biblical Archaeology",
    },
    {
      value: "Master of Science in Bioinformatics",
      label: "Master of Science in Bioinformatics",
    },
    {
      value: "Master of Science in Computer Science",
      label: "Master of Science in Computer Science",
    },
    {
      value: "Master of Science in Counselling",
      label: "Master of Science in Counselling",
    },
    {
      value: "Master of Science in Cyber Security",
      label: "Master of Science in Cyber Security",
    },
    {
      value: "Master of Science in Engineering",
      label: "Master of Science in Engineering",
    },
    {
      value: "Master of Science in Development Administration",
      label: "Master of Science in Development Administration",
    },
    {
      value: "Master of Science in Finance",
      label: "Master of Science in Finance",
    },
    {
      value: "Master of Science in Health Informatics",
      label: "Master of Science in Health Informatics",
    },
    {
      value: "Master of Science in Human Resource Development",
      label: "Master of Science in Human Resource Development",
    },
    {
      value: "Master of Science in Information Assurance",
      label: "Master of Science in Information Assurance",
    },
    {
      value: "Master of Science in Information Systems",
      label: "Master of Science in Information Systems",
    },
    {
      value: "Master of Science in Information Technology",
      label: "Master of Science in Information Technology",
    },
    {
      value: "Master of Science in Leadership",
      label: "Master of Science in Leadership",
    },
    {
      value: "Master of Science in Management",
      label: "Master of Science in Management",
    },
    {
      value: "Master of Science in Nursing",
      label: "Master of Science in Nursing",
    },
    {
      value: "Master of Science in Project Management",
      label: "Master of Science in Project Management",
    },
    {
      value: "Master of Science in Supply Chain Management",
      label: "Master of Science in Supply Chain Management",
    },
    {
      value: "Master of Science in Teaching",
      label: "Master of Science in Teaching",
    },
    {
      value: "Master of Science in Taxation",
      label: "Master of Science in Taxation",
    },
    {
      value: "Master of Science in Yoga Therapy",
      label: "Master of Science in Yoga Therapy",
    },
    { value: "Master of Social Science", label: "Master of Social Science" },
    { value: "Master of Social Work", label: "Master of Social Work" },
    {
      value: "Master of Strategic Studies",
      label: "Master of Strategic Studies",
    },
    { value: "Master of Studies", label: "Master of Studies" },
    { value: "Master of Surgery", label: "Master of Surgery" },
    { value: "Master of Talmudic Law", label: "Master of Talmudic Law" },
    { value: "Master of Taxation", label: "Master of Taxation" },
    {
      value: "Master of Theological Studies",
      label: "Master of Theological Studies",
    },
    { value: "Master of Technology", label: "Master of Technology" },
    { value: "Master of Theology", label: "Master of Theology" },
    { value: "Master of Urban Planning", label: "Master of Urban Planning" },
    {
      value: "Master of Veterinary Science",
      label: "Master of Veterinary Science",
    },
    { value: "Other", label: "Other" },
  ];

  const Bachelor_Degree = [
    {
      value: "Bachelor of Business Administration (BBA)",
      label: "Bachelor of Business Administration (BBA)",
    },
    {
      value: "Bachelor of Management Science (BMS)",
      label: "Bachelor of Management Science (BMS)",
    },
    {
      value: "Bachelor of Fine Arts (BFA)",
      label: "Bachelor of Fine Arts (BFA)",
    },
    {
      value: "Bachelor of Event Management (BEM)",
      label: "Bachelor of Event Management (BEM)",
    },
    {
      value: "Integrated Law Course (BA + LL.B)",
      label: "Integrated Law Course (BA + LL.B)",
    },
    {
      value: "Bachelor of Journalism and Mass Communication (BJMC)",
      label: "Bachelor of Journalism and Mass Communication (BJMC)",
    },
    {
      value: "Bachelor of Fashion Designing (BFD)",
      label: "Bachelor of Fashion Designing (BFD)",
    },
    {
      value: "Bachelor of Social Work (BSW)",
      label: "Bachelor of Social Work (BSW)",
    },
    {
      value: "Bachelor of Business Studies (BBS)",
      label: "Bachelor of Business Studies (BBS)",
    },
    {
      value: "Bachelor of Travel and Tourism Management (BTTM)",
      label: "Bachelor of Travel and Tourism Management (BTTM)",
    },
    { value: "Aviation Courses", label: "Aviation Courses" },
    {
      value: "Bachelor of Science in Interior Design (B.Sc Interior Design)",
      label: "Bachelor of Science in Interior Design (B.Sc Interior Design)",
    },
    {
      value:
        "Bachelor of Science in Hospitality and Hotel Administration (B.Sc Hospitality and Hotel Administration)",
      label:
        "Bachelor of Science in Hospitality and Hotel Administration (B.Sc Hospitality and Hotel Administration)",
    },
    {
      value: "Bachelor of Design (B. Design)",
      label: "Bachelor of Design (B. Design)",
    },
    {
      value: "Bachelor of Performing Arts",
      label: "Bachelor of Performing Arts",
    },
    {
      value: "Bachelor of Arts in History (BA in History)",
      label: "Bachelor of Arts in History (BA in History)",
    },
    {
      value: "Bachelor of Technology (BE/B.Tech)",
      label: "Bachelor of Technology (BE/B.Tech)",
    },
    {
      value: "Bachelor of Architecture (B.Arch)",
      label: "Bachelor of Architecture (B.Arch)",
    },
    {
      value: "Bachelor of Computer Applications (BCA)",
      label: "Bachelor of Computer Applications (BCA)",
    },
    {
      value:
        "Bachelor of Science in Information Technology (B.Sc Information Technology)",
      label:
        "Bachelor of Science in Information Technology (B.Sc Information Technology)",
    },
    {
      value: "Bachelor of Science in Nursing (B.Sc Nursing)",
      label: "Bachelor of Science in Nursing (B.Sc Nursing)",
    },
    {
      value: "Bachelor of Pharmacy (BPharma)",
      label: "Bachelor of Pharmacy (BPharma)",
    },
    {
      value: "Bachelor of Dental Surgery (BDS)",
      label: "Bachelor of Dental Surgery (BDS)",
    },
    {
      value: "Animation, Graphics and Multimedia",
      label: "Animation, Graphics and Multimedia",
    },
    {
      value:
        "Bachelor of Science in Nutrition & Dietetics (B.Sc Nutrition & Dietetics)",
      label:
        "Bachelor of Science in Nutrition & Dietetics (B.Sc Nutrition & Dietetics)",
    },
    {
      value: "Bachelor of Physiotherapy (BPT)",
      label: "Bachelor of Physiotherapy (BPT)",
    },
    {
      value: "Bachelor of Science in Applied Geology (B.Sc Applied Geology)",
      label: "Bachelor of Science in Applied Geology (B.Sc Applied Geology)",
    },
    {
      value:
        "Bachelor of Arts/Bachelor of Science in Liberal Arts (BA/B.Sc Liberal Arts)",
      label:
        "Bachelor of Arts/Bachelor of Science in Liberal Arts (BA/B.Sc Liberal Arts)",
    },
    {
      value: "Bachelor of Science in Physics (B.Sc Physics)",
      label: "Bachelor of Science in Physics (B.Sc Physics)",
    },
    {
      value: "Bachelor of Science in Chemistry (B.Sc Chemistry)",
      label: "Bachelor of Science in Chemistry (B.Sc Chemistry)",
    },
    {
      value: "Bachelor of Science in Mathematics (B.Sc Mathematics)",
      label: "Bachelor of Science in Mathematics (B.Sc Mathematics)",
    },
    { value: "Aeronautical Engineering", label: "Aeronautical Engineering" },
    { value: "Automobile Engineering", label: "Automobile Engineering" },
    { value: "Civil Engineering", label: "Civil Engineering" },
    {
      value: "Computer Science and Engineering",
      label: "Computer Science and Engineering",
    },
    { value: "Biotechnology Engineering", label: "Biotechnology Engineering" },
    {
      value: "Electrical and Electronics Engineering",
      label: "Electrical and Electronics Engineering",
    },
    {
      value: "Electronics and Communication Engineering",
      label: "Electronics and Communication Engineering",
    },
    { value: "Automation and Robotics", label: "Automation and Robotics" },
    { value: "Petroleum Engineering", label: "Petroleum Engineering" },
    {
      value: "Instrumentation Engineering",
      label: "Instrumentation Engineering",
    },
    { value: "Ceramic Engineering", label: "Ceramic Engineering" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    { value: "Structural Engineering", label: "Structural Engineering" },
    {
      value: "Transportation Engineering",
      label: "Transportation Engineering",
    },
    { value: "Construction Engineering", label: "Construction Engineering" },
    { value: "Power Engineering", label: "Power Engineering" },
    { value: "Robotics Engineering", label: "Robotics Engineering" },
    { value: "Textile Engineering", label: "Textile Engineering" },
    {
      value: "Smart Manufacturing & Automation",
      label: "Smart Manufacturing & Automation",
    },
    {
      value: "Bachelor of Commerce (B.Com)",
      label: "Bachelor of Commerce (B.Com)",
    },
    {
      value: "Bachelor of Commerce (Honours) (B.Com (Hons.))",
      label: "Bachelor of Commerce (Honours) (B.Com (Hons.))",
    },
    {
      value:
        "Bachelor of Arts (Honours) in Economics (BA (Hons.) in Economics)",
      label:
        "Bachelor of Arts (Honours) in Economics (BA (Hons.) in Economics)",
    },
    {
      value: "Integrated Law Program (B.Com LL.B)",
      label: "Integrated Law Program (B.Com LL.B)",
    },
    {
      value: "Integrated Law Program (BBA LL.B)",
      label: "Integrated Law Program (BBA LL.B)",
    },
    {
      value: "Chartered Accountancy (CA)",
      label: "Chartered Accountancy (CA)",
    },
    { value: "Company Secretary (CS)", label: "Company Secretary (CS)" },
    {
      value:
        "Bachelor of Design in Accessory Design, Fashion Design, Ceramic Design, Leather Design, Graphic Design, Industrial Design, Jewellery Design",
      label:
        "Bachelor of Design in Accessory Design, Fashion Design, Ceramic Design, Leather Design, Graphic Design, Industrial Design, Jewellery Design",
    },
    {
      value: "Bachelor in Foreign Language",
      label: "Bachelor in Foreign Language",
    },
    { value: "Diploma Courses", label: "Diploma Courses" },
    { value: "Advanced Diploma Courses", label: "Advanced Diploma Courses" },
    { value: "Certificate Courses", label: "Certificate Courses" },
    { value: "Other", label: "Other" },
  ];

  const Heights = [
    { value: "4 '", label: "4 '" },
    { value: "4 ' 1 \"", label: "4 ' 1 \"" },
    { value: "4 ' 2 \"", label: "4 ' 2 \"" },
    { value: "4 ' 3 \"", label: "4 ' 3 \"" },
    { value: "4 ' 4 \"", label: "4 ' 4 \"" },
    { value: "4 ' 5 \"", label: "4 ' 5 \"" },
    { value: "4 ' 6 \"", label: "4 ' 6 \"" },
    { value: "4 ' 7 \"", label: "4 ' 7 \"" },
    { value: "4 ' 8 \"", label: "4 ' 8 \"" },
    { value: "4 ' 9 \"", label: "4 ' 9 \"" },
    { value: "4 ' 10 \"", label: "4 ' 10 \"" },
    { value: "4 ' 11 \"", label: "4 ' 11 \"" },
    { value: "5 '", label: "5 '" },
    { value: "5 ' 1 \"", label: "5 ' 1 \"" },
    { value: "5 ' 2 \"", label: "5 ' 2 \"" },
    { value: "5 ' 3 \"", label: "5 ' 3 \"" },
    { value: "5 ' 4 \"", label: "5 ' 4 \"" },
    { value: "5 ' 5 \"", label: "5 ' 5 \"" },
    { value: "5 ' 6 \"", label: "5 ' 6 \"" },
    { value: "5 ' 7 \"", label: "5 ' 7 \"" },
    { value: "5 ' 8 \"", label: "5 ' 8 \"" },
    { value: "5 ' 9 \"", label: "5 ' 9 \"" },
    { value: "5 ' 10 \"", label: "5 ' 10 \"" },
    { value: "5 ' 11 \"", label: "5 ' 11 \"" },
    { value: "6 '", label: "6 '" },
    { value: "6 ' 1 \"", label: "6 ' 1 \"" },
    { value: "6 ' 2 \"", label: "6 ' 2 \"" },
    { value: "6 ' 3 \"", label: "6 ' 3 \"" },
    { value: "6 ' 4 \"", label: "6 ' 4 \"" },
    { value: "6 ' 5 \"", label: "6 ' 5 \"" },
    { value: "6 ' 6 \"", label: "6 ' 6 \"" },
    { value: "6 ' 7 \"", label: "6 ' 7 \"" },
    { value: "6 ' 8 \"", label: "6 ' 8 \"" },
    { value: "6 ' 9 \"", label: "6 ' 9 \"" },
    { value: "6 ' 10 \"", label: "6 ' 10 \"" },
    { value: "6 ' 11 \"", label: "6 ' 11 \"" },
    { value: "7 '", label: "7 '" },
    { value: "7 ' 1 \"", label: "7 ' 1 \"" },
    { value: "7 ' 2 \"", label: "7 ' 2 \"" },
    { value: "7 ' 3 \"", label: "7 ' 3 \"" },
    { value: "7 ' 4 \"", label: "7 ' 4 \"" },
    { value: "7 ' 5 \"", label: "7 ' 5 \"" },
    { value: "7 ' 6 \"", label: "7 ' 6 \"" },
    { value: "7 ' 7 \"", label: "7 ' 7 \"" },
    { value: "7 ' 8 \"", label: "7 ' 8 \"" },
    { value: "7 ' 9 \"", label: "7 ' 9 \"" },
    { value: "7 ' 10 \"", label: "7 ' 10 \"" },
    { value: "7 ' 11 \"", label: "7 ' 11 \"" },
    { value: "8 '", label: "8 '" },
  ];

  const Weights = [
    { value: "35 kg", label: "35 kg" },
    { value: "36 kg", label: "36 kg" },
    { value: "37 kg", label: "37 kg" },
    { value: "38 kg", label: "38 kg" },
    { value: "39 kg", label: "39 kg" },
    { value: "40 kg", label: "40 kg" },
    { value: "41 kg", label: "41 kg" },
    { value: "42 kg", label: "42 kg" },
    { value: "43 kg", label: "43 kg" },
    { value: "44 kg", label: "44 kg" },
    { value: "45 kg", label: "45 kg" },
    { value: "46 kg", label: "46 kg" },
    { value: "47 kg", label: "47 kg" },
    { value: "48 kg", label: "48 kg" },
    { value: "49 kg", label: "49 kg" },
    { value: "50 kg", label: "50 kg" },
    { value: "51 kg", label: "51 kg" },
    { value: "52 kg", label: "52 kg" },
    { value: "53 kg", label: "53 kg" },
    { value: "54 kg", label: "54 kg" },
    { value: "55 kg", label: "55 kg" },
    { value: "56 kg", label: "56 kg" },
    { value: "57 kg", label: "57 kg" },
    { value: "58 kg", label: "58 kg" },
    { value: "59 kg", label: "59 kg" },
    { value: "60 kg", label: "60 kg" },
    { value: "61 kg", label: "61 kg" },
    { value: "62 kg", label: "62 kg" },
    { value: "63 kg", label: "63 kg" },
    { value: "64 kg", label: "64 kg" },
    { value: "65 kg", label: "65 kg" },
    { value: "66 kg", label: "66 kg" },
    { value: "67 kg", label: "67 kg" },
    { value: "68 kg", label: "68 kg" },
    { value: "69 kg", label: "69 kg" },
    { value: "70 kg", label: "70 kg" },
    { value: "71 kg", label: "71 kg" },
    { value: "72 kg", label: "72 kg" },
    { value: "73 kg", label: "73 kg" },
    { value: "74 kg", label: "74 kg" },
    { value: "75 kg", label: "75 kg" },
    { value: "76 kg", label: "76 kg" },
    { value: "77 kg", label: "77 kg" },
    { value: "78 kg", label: "78 kg" },
    { value: "79 kg", label: "79 kg" },
    { value: "80 kg", label: "80 kg" },
    { value: "81 kg", label: "81 kg" },
    { value: "82 kg", label: "82 kg" },
    { value: "83 kg", label: "83 kg" },
    { value: "84 kg", label: "84 kg" },
    { value: "85 kg", label: "85 kg" },
    { value: "86 kg", label: "86 kg" },
    { value: "87 kg", label: "87 kg" },
    { value: "88 kg", label: "88 kg" },
    { value: "89 kg", label: "89 kg" },
    { value: "90 kg", label: "90 kg" },
    { value: "91 kg", label: "91 kg" },
    { value: "92 kg", label: "92 kg" },
    { value: "93 kg", label: "93 kg" },
    { value: "94 kg", label: "94 kg" },
    { value: "95 kg", label: "95 kg" },
    { value: "96 kg", label: "96 kg" },
    { value: "97 kg", label: "97 kg" },
    { value: "98 kg", label: "98 kg" },
    { value: "99 kg", label: "99 kg" },
    { value: "100 kg", label: "100 kg" },
    { value: "101 kg", label: "101 kg" },
    { value: "102 kg", label: "102 kg" },
    { value: "103 kg", label: "103 kg" },
    { value: "104 kg", label: "104 kg" },
    { value: "105 kg", label: "105 kg" },
    { value: "106 kg", label: "106 kg" },
    { value: "107 kg", label: "107 kg" },
    { value: "108 kg", label: "108 kg" },
    { value: "109 kg", label: "109 kg" },
    { value: "110 kg", label: "110 kg" },
    { value: "111 kg", label: "111 kg" },
    { value: "112 kg", label: "112 kg" },
    { value: "113 kg", label: "113 kg" },
    { value: "114 kg", label: "114 kg" },
    { value: "115 kg", label: "115 kg" },
    { value: "116 kg", label: "116 kg" },
    { value: "117 kg", label: "117 kg" },
    { value: "118 kg", label: "118 kg" },
    { value: "119 kg", label: "119 kg" },
    { value: "120 kg", label: "120 kg" },
    { value: "121 kg", label: "121 kg" },
    { value: "122 kg", label: "122 kg" },
    { value: "123 kg", label: "123 kg" },
    { value: "124 kg", label: "124 kg" },
    { value: "125 kg", label: "125 kg" },
    { value: "126 kg", label: "126 kg" },
    { value: "127 kg", label: "127 kg" },
    { value: "128 kg", label: "128 kg" },
    { value: "129 kg", label: "129 kg" },
    { value: "130 kg", label: "130 kg" },
    { value: "131 kg", label: "131 kg" },
    { value: "132 kg", label: "132 kg" },
    { value: "133 kg", label: "133 kg" },
    { value: "134 kg", label: "134 kg" },
    { value: "135 kg", label: "135 kg" },
    { value: "136 kg", label: "136 kg" },
    { value: "137 kg", label: "137 kg" },
    { value: "138 kg", label: "138 kg" },
    { value: "139 kg", label: "139 kg" },
    { value: "140 kg", label: "140 kg" },
    { value: "141 kg", label: "141 kg" },
    { value: "142 kg", label: "142 kg" },
    { value: "143 kg", label: "143 kg" },
    { value: "144 kg", label: "144 kg" },
    { value: "145 kg", label: "145 kg" },
    { value: "146 kg", label: "146 kg" },
    { value: "147 kg", label: "147 kg" },
    { value: "148 kg", label: "148 kg" },
    { value: "149 kg", label: "149 kg" },
    { value: "150 kg", label: "150 kg" },
    { value: "151 kg", label: "151 kg" },
    { value: "152 kg", label: "152 kg" },
    { value: "153 kg", label: "153 kg" },
    { value: "154 kg", label: "154 kg" },
    { value: "155 kg", label: "155 kg" },
    { value: "156 kg", label: "156 kg" },
    { value: "157 kg", label: "157 kg" },
    { value: "158 kg", label: "158 kg" },
    { value: "159 kg", label: "159 kg" },
    { value: "160 kg", label: "160 kg" },
    { value: "161 kg", label: "161 kg" },
    { value: "162 kg", label: "162 kg" },
    { value: "163 kg", label: "163 kg" },
    { value: "164 kg", label: "164 kg" },
    { value: "165 kg", label: "165 kg" },
    { value: "166 kg", label: "166 kg" },
    { value: "167 kg", label: "167 kg" },
    { value: "168 kg", label: "168 kg" },
    { value: "169 kg", label: "169 kg" },
    { value: "170 kg", label: "170 kg" },
    { value: "171 kg", label: "171 kg" },
    { value: "172 kg", label: "172 kg" },
    { value: "173 kg", label: "173 kg" },
    { value: "174 kg", label: "174 kg" },
    { value: "175 kg", label: "175 kg" },
    { value: "176 kg", label: "176 kg" },
    { value: "177 kg", label: "177 kg" },
    { value: "178 kg", label: "178 kg" },
    { value: "179 kg", label: "179 kg" },
    { value: "180 kg", label: "180 kg" },
    { value: "181 kg", label: "181 kg" },
    { value: "182 kg", label: "182 kg" },
    { value: "183 kg", label: "183 kg" },
    { value: "184 kg", label: "184 kg" },
    { value: "185 kg", label: "185 kg" },
    { value: "186 kg", label: "186 kg" },
    { value: "187 kg", label: "187 kg" },
    { value: "188 kg", label: "188 kg" },
    { value: "189 kg", label: "189 kg" },
    { value: "190 kg", label: "190 kg" },
    { value: "191 kg", label: "191 kg" },
    { value: "192 kg", label: "192 kg" },
    { value: "193 kg", label: "193 kg" },
    { value: "194 kg", label: "194 kg" },
    { value: "195 kg", label: "195 kg" },
    { value: "196 kg", label: "196 kg" },
    { value: "197 kg", label: "197 kg" },
    { value: "198 kg", label: "198 kg" },
    { value: "199 kg", label: "199 kg" },
    { value: "200 kg", label: "200 kg" },
  ];

  const Hobbies = [
    { value: "Reading books", label: "Reading books" },
    { value: "Blogging", label: "Blogging" },
    { value: "Dancing", label: "Dancing" },
    { value: "Singing", label: "Singing" },
    { value: "Listening to music", label: "Listening to music" },
    {
      value: "Playing musical instruments (piano, guitar etc.)",
      label: "Playing musical instruments (piano, guitar etc.)",
    },
    { value: "Learning new languages", label: "Learning new languages" },
    { value: "Shopping", label: "Shopping" },
    { value: "Traveling", label: "Traveling" },
    { value: "Hiking", label: "Hiking" },
    { value: "Cycling", label: "Cycling" },
    { value: "Exercising", label: "Exercising" },
    { value: "Drawing", label: "Drawing" },
    { value: "Painting", label: "Painting" },
    { value: "Collecting things", label: "Collecting things" },
    { value: "Playing computer games", label: "Playing computer games" },
    { value: "Cooking", label: "Cooking" },
    { value: "Baking", label: "Baking" },
    { value: "Gardening", label: "Gardening" },
    { value: "Doing crafts (handmade)", label: "Doing crafts (handmade)" },
    { value: "Embroidering", label: "Embroidering" },
    { value: "Sewing", label: "Sewing" },
    { value: "Knitting", label: "Knitting" },
    { value: "Playing board games", label: "Playing board games" },
    { value: "Walking", label: "Walking" },
    { value: "Writing stories", label: "Writing stories" },
    { value: "Fishing", label: "Fishing" },
    { value: "Photography", label: "Photography" },
    { value: "Skydiving", label: "Skydiving" },
    { value: "Skating", label: "Skating" },
    { value: "Skiing", label: "Skiing" },
    { value: "Roller skating", label: "Roller skating" },
    { value: "Longboarding", label: "Longboarding" },
    { value: "Surfing", label: "Surfing" },
    { value: "Other", label: "Other" },
  ];

  const Income = [
    { value: "1 - 2 L", label: "1 - 2 L" },
    { value: "2 - 3 L", label: "2 - 3 L" },
    { value: "3 - 4 L", label: "3 - 4 L" },
    { value: "4 - 5 L", label: "4 - 5 L" },
    { value: "5 - 10 L", label: "5 - 10 L" },
    { value: "10 - 15 L", label: "10 - 15 L" },
    { value: "15 - 20 L", label: "15 - 20 L" },
    { value: "20 - 25 L", label: "20 - 25 L" },
    { value: "25 - 30 L", label: "25 - 30 L" },
    { value: "30 - 45 L", label: "30 - 45 L" },
    { value: "45 - 50 L", label: "45 - 50 L" },
    { value: "50 - 75 L", label: "50 - 75 L" },
    { value: "75 L - 1 Cr", label: "75 L - 1 Cr" },
    { value: "1 - 2 Cr", label: "1 - 2 Cr" },
    { value: "2 - 3 Cr", label: "2 - 3 Cr" },
    { value: "3 - 5 Cr", label: "3 - 5 Cr" },
    { value: "5 - 10 Cr", label: "5 - 10 Cr" },
    { value: "10 - 15 Cr", label: "10 - 15 Cr" },
    { value: "15 - 100 Cr", label: "15 - 100 Cr" },
    { value: "100 - 200 Cr", label: "100 - 200 Cr" },
    { value: "200 - 500 Cr", label: "200 - 500 Cr" },
    { value: "500 Cr - 1B", label: "500 Cr - 1B" },
    { value: "1B and above", label: "1B and above" },
  ];

  const Profession = [
    {
      value: "Accounting, Banking & Finance",
      label: "Accounting, Banking & Finance",
    },
    { value: "Administration & HR", label: "Administration & HR" },
    {
      value: "Advertising, Media & Entertainment",
      label: "Advertising, Media & Entertainment",
    },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Airline & Aviation", label: "Airline & Aviation" },
    { value: "Architecture & Design", label: "Architecture & Design" },
    {
      value: "Artists, Animators & Web Designers",
      label: "Artists, Animators & Web Designers",
    },
    {
      value: "Beauty, Fashion & Jewellery Designers",
      label: "Beauty, Fashion & Jewellery Designers",
    },
    {
      value: "BPO, KPO, & Customer Support",
      label: "BPO, KPO, & Customer Support",
    },
    {
      value: "Civil Services / Law Enforcement/ Polition",
      label: "Civil Services / Law Enforcement/ Polition",
    },
    { value: "Defense", label: "Defense" },
    { value: "Education & Training", label: "Education & Training" },
    { value: "Engineering", label: "Engineering" },
    { value: "Hotel & Hospitality", label: "Hotel & Hospitality" },
    { value: "Medical & Healthcare", label: "Medical & Healthcare" },
    { value: "Sales & Marketing", label: "Sales & Marketing" },
    { value: "Science", label: "Science" },
    { value: "Corporate Professionals", label: "Corporate Professionals" },
    { value: "Business Man", label: "Business Man" },
    { value: "Others", label: "Others" },
    { value: "Non Working", label: "Non Working" },
  ];

  const Accounts_Banking = [
    { value: "Banking Professional", label: "Banking Professional" },
    { value: "Chartered Accountant", label: "Chartered Accountant" },
    { value: "Company Secretary", label: "Company Secretary" },
    { value: "Finance Professional", label: "Finance Professional" },
    { value: "Investment Professional", label: "Investment Professional" },
    { value: "Others", label: "Others" },
  ];

  const Administration_HR = [
    { value: "Admin Professional", label: "Admin Professional" },
    {
      value: "Human Resources Professional",
      label: "Human Resources Professional",
    },
    { value: "Secretary", label: "Secretary" },
    { value: "Others", label: "Others" },
  ];

  const Advertising_Media = [
    { value: "Actor/Actress", label: "Actor/Actress" },
    { value: "Advertising Professional", label: "Advertising Professional" },
    {
      value: "Entertainment Professional",
      label: "Entertainment Professional",
    },
    { value: "Event Manager", label: "Event Manager" },
    { value: "Journalist", label: "Journalist" },
    { value: "Media Professional", label: "Media Professional" },
    { value: "Painter", label: "Painter" },
    { value: "Filmmaker", label: "Filmmaker" },
    { value: "Photographer", label: "Photographer" },
    { value: "Editor", label: "Editor" },
    { value: "Others", label: "Others" },
  ];

  const Agriculture = [
    { value: "Farming", label: "Farming" },
    { value: "Horticulturist", label: "Horticulturist" },
    { value: "Fisherman", label: "Fisherman" },
    { value: "Milkman", label: "Milkman" },
    { value: "Others", label: "Others" },
  ];

  const Airline = [
    {
      value: "Air Hostess / Flight Attendant",
      label: "Air Hostess / Flight Attendant",
    },
    { value: "Pilot / Co-Pilot", label: "Pilot / Co-Pilot" },
    { value: "Flight Attendant", label: "Flight Attendant" },
    { value: "Air Traffic Controller", label: "Air Traffic Controller" },
    {
      value: "Other Airline Professional",
      label: "Other Airline Professional",
    },
  ];

  const Architecture = [
    { value: "Architect", label: "Architect" },
    { value: "Interior Designer", label: "Interior Designer" },
    { value: "Landscape Architect", label: "Landscape Architect" },
    { value: "Builder", label: "Builder" },
    { value: "Carpenter", label: "Carpenter" },
    { value: "Designer", label: "Designer" },
    { value: "Developer", label: "Developer" },
    { value: "Jeweler", label: "Jeweler" },
  ];

  const Artists = [
    { value: "Animator", label: "Animator" },
    { value: "Commercial Artist", label: "Commercial Artist" },
    { value: "Web / UX Designer", label: "Web / UX Designer" },
    { value: "Writer", label: "Writer" },
    { value: "Musician", label: "Musician" },
    { value: "Singer", label: "Singer" },
    { value: "Programmer", label: "Programmer" },
    { value: "Other", label: "Other" },
  ];

  const Beauty = [
    { value: "Beautician", label: "Beautician" },
    { value: "Fashion Designer", label: "Fashion Designer" },
    { value: "Hairstylists", label: "Hairstylists" },
    { value: "Jewellery Designer", label: "Jewellery Designer" },
    { value: "Others", label: "Others" },
  ];

  const BPO = [
    {
      value: "Customer Support/BPO/KPO Professional",
      label: "Customer Support/BPO/KPO Professional",
    },
    {
      value: "Public Relations Professional",
      label: "Public Relations Professional",
    },
  ];

  const Civil_Services = [
    { value: "IAS / IRS / IES / IFS", label: "IAS / IRS / IES / IFS" },
    {
      value: "Indian Police Services (IPS)",
      label: "Indian Police Services (IPS)",
    },
    { value: "Judge", label: "Judge" },
    { value: "Attorney", label: "Attorney" },
    { value: "Lawyer", label: "Lawyer" },
    { value: "Politician", label: "Politician" },
    { value: "Other", label: "Other" },
  ];

  const Defense = [
    { value: "Airforce", label: "Airforce" },
    { value: "Army", label: "Army" },
    { value: "Navy", label: "Navy" },
    { value: "Others", label: "Others" },
  ];

  const Education = [
    { value: "Lecturer", label: "Lecturer" },
    { value: "Professor", label: "Professor" },
    { value: "Research Assistant", label: "Research Assistant" },
    { value: "Research Scholar", label: "Research Scholar" },
    { value: "Teacher", label: "Teacher" },
    { value: "Coach", label: "Coach" },
    { value: "Other", label: "Other" },
  ];

  const Engineering = [
    {
      value: "Computer Science and Engineering",
      label: "Computer Science and Engineering",
    },
    { value: "Mechanical Engineering", label: "Mechanical Engineering" },
    { value: "Electrical Engineering", label: "Electrical Engineering" },
    { value: "Solar Engineering", label: "Solar Engineering" },
    { value: "Wind Energy Engineering", label: "Wind Energy Engineering" },
    { value: "Nanotechnology", label: "Nanotechnology" },
    { value: "Environmental Engineering", label: "Environmental Engineering" },
    { value: "Marine Engineering", label: "Marine Engineering" },
    { value: "Information Security", label: "Information Security" },
    { value: "Software Development", label: "Software Development" },
    { value: "Biomedical Engineering", label: "Biomedical Engineering" },
    { value: "Civil Engineering", label: "Civil Engineering" },
    { value: "Aerospace Engineering", label: "Aerospace Engineering" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    {
      value: "Electrical and Electronics Engineering",
      label: "Electrical and Electronics Engineering",
    },
    { value: "Petroleum Engineering", label: "Petroleum Engineering" },
    {
      value: "Telecommunication Engineering",
      label: "Telecommunication Engineering",
    },
    {
      value: "Machine Learning and Artificial Intelligence",
      label: "Machine Learning and Artificial Intelligence",
    },
    { value: "Robotics Engineering", label: "Robotics Engineering" },
    { value: "Biochemical Engineering", label: "Biochemical Engineering" },
    { value: "Other", label: "Other" },
  ];

  const Hospitality = [
    {
      value: "Chef / Sommelier / Food Critic",
      label: "Chef / Sommelier / Food Critic",
    },
    { value: "Catering Professional", label: "Catering Professional" },
    { value: "Bartender", label: "Bartender" },
    { value: "Waiter", label: "Waiter" },
    { value: "Waitress", label: "Waitress" },
    { value: "Other", label: "Other" },
  ];

  const MedicalProfessions = [
    { value: "Dentist", label: "Dentist" },
    { value: "Doctor", label: "Doctor" },
    { value: "Medical Transcriptionist", label: "Medical Transcriptionist" },
    { value: "Nurse", label: "Nurse" },
    { value: "Pharmacist", label: "Pharmacist" },
    { value: "Physician", label: "Physician" },
    { value: "Physician Assistant", label: "Physician Assistant" },
    {
      value: "Physiotherapist / Occupational Therapist",
      label: "Physiotherapist / Occupational Therapist",
    },
    { value: "Psychologist", label: "Psychologist" },
    { value: "Surgeon", label: "Surgeon" },
    { value: "Veterinary Doctor", label: "Veterinary Doctor" },
    { value: "Therapist", label: "Therapist" },
    { value: "Nutritionist/Dietician", label: "Nutritionist/Dietician" },
    { value: "Optician", label: "Optician" },
    { value: "Other", label: "Other" },
  ];

  const MarketingSalesProfessions = [
    { value: "Marketing Professional", label: "Marketing Professional" },
    { value: "Sales Professional", label: "Sales Professional" },
    { value: "Receptionist", label: "Receptionist" },
    { value: "Other", label: "Other" },
  ];

  const Science = [
    { value: "Biologist / Botanist", label: "Biologist / Botanist" },
    { value: "Physicist", label: "Physicist" },
    { value: "Other", label: "Other" },
  ];

  const Corporate_Professional = [
    {
      value: "CxO / Chairman / Director / President",
      label: "CxO / Chairman / Director / President",
    },
    { value: "Vp / AVP / GM / DGM", label: "Vp / AVP / GM / DGM" },
    { value: "Sr.Manager / Manager", label: "Sr.Manager / Manager" },
    {
      value: "Consultant / Supervisor / Team Leads / Team Mamber / Staff",
      label: "Consultant / Supervisor / Team Leads / Team Mamber / Staff",
    },
    { value: "Business Owner", label: "Business Owner" },
    { value: "Entrepreneur", label: "Entrepreneur" },
    { value: "OTHER", label: "OTHER" },
  ];

  const Business = [
    { value: "Handyman", label: "Handyman" },
    { value: "Woodworker", label: "Woodworker" },
    { value: "Online Dating Consultant", label: "Online Dating Consultant" },
    {
      value: "Sewing and Alteration Specialist",
      label: "Sewing and Alteration Specialist",
    },
    { value: "Freelance Developer", label: "Freelance Developer" },
    { value: "Personal Trainer", label: "Personal Trainer" },
    {
      value: "Freelance Graphic Designer",
      label: "Freelance Graphic Designer",
    },
    { value: "Life/ Career Coach", label: "Life/ Career Coach" },
    { value: "Resume Writer", label: "Resume Writer" },
    { value: "Freelance Writer", label: "Freelance Writer" },
    { value: "Videographer", label: "Videographer" },
    { value: "Photographer", label: "Photographer" },
    { value: "Bed and Breakfast Owner", label: "Bed and Breakfast Owner" },
    { value: "Clothing Boutique Owner", label: "Clothing Boutique Owner" },
    {
      value: "Specialty Food Store Owner",
      label: "Specialty Food Store Owner",
    },
    { value: "Food Truck Owner", label: "Food Truck Owner" },
    { value: "Car-detailing Specialist", label: "Car-detailing Specialist" },
    { value: "Garden Designer", label: "Garden Designer" },
    { value: "Ecommerce Store Owner", label: "Ecommerce Store Owner" },
    { value: "Travel Planner", label: "Travel Planner" },
    { value: "Home Inspector", label: "Home Inspector" },
    { value: "House Cleaner", label: "House Cleaner" },
    { value: "Massage Therapist", label: "Massage Therapist" },
    { value: "Crafter", label: "Crafter" },
    { value: "Interior Designer", label: "Interior Designer" },
    { value: "Tour Guide", label: "Tour Guide" },
    { value: "Tutor", label: "Tutor" },
    { value: "Consultant", label: "Consultant" },
    { value: "Event Planner", label: "Event Planner" },
    { value: "Consignment Shop Owner", label: "Consignment Shop Owner" },
    { value: "Caterer", label: "Caterer" },
    { value: "Gym Owner", label: "Gym Owner" },
    { value: "Coffee Shop Owner", label: "Coffee Shop Owner" },
    { value: "Makeup Artist", label: "Makeup Artist" },
    { value: "Garment shop", label: "Garment shop" },
    { value: "Other", label: "Other" },
  ];

  const Others = [
    {
      value: "Agent / Broker / Trader / Contactor",
      label: "Agent / Broker / Trader / Contactor",
    },
    {
      value: "Social Worker / Volunteer / NGO",
      label: "Social Worker / Volunteer / NGO",
    },
    { value: "Sportsman", label: "Sportsman" },
    {
      value: "Travel & Transport Professional",
      label: "Travel & Transport Professional",
    },
    { value: "Butcher", label: "Butcher" },
    { value: "Electrician", label: "Electrician" },
    { value: "Mechanic", label: "Mechanic" },
    { value: "Plumber", label: "Plumber" },
    { value: "Translator", label: "Translator" },
    { value: "Undertaker", label: "Undertaker" },
    { value: "Other", label: "Other" },
  ];

  const Non_Working = [
    { value: "Student", label: "Student" },
    { value: "Retired", label: "Retired" },
    { value: "Not working", label: "Not working" },
  ];

  const [reference, SetReference] = useState("");

  const [whatsapp, SetWhatsapp] = useState("");
  const [email, SetEmail] = useState("");

  const [password, SetPassword] = useState("");
  const [password2, SetPassword2] = useState("");

  const [gender, SetGender] = useState("");

  const [name, Setname] = useState("");
  const [dob, SetDOB] = useState("");

  const [age, SetAge] = useState("");
  const [birthplace, SetBirthplace] = useState("");

  const [birthTime, SetBirthTime] = useState("");
  const [height, SetHeight] = useState("");

  const [weight, SetWeight] = useState("");
  const [complexion, SetComplexion] = useState("");

  const [education, SetEducation] = useState("");
  const [profession, SetProfession] = useState("");

  const [occupation, SetOccupation] = useState("");

  const [religion, SetReligion] = useState("");
  const [community_type, SetCommunity_type] = useState("");

  const [physical, SetPhysical] = useState("");

  const [netincome, SetNetIncome] = useState("");

  const [address, SetAddress] = useState("");
  const [isNRI, SetIsNRI] = useState();

  const [visa, SetVisa] = useState("");
  const [nriAddress, SetNRIAddress] = useState("");

  const [fname, SetFname] = useState("");
  const [fatherOccupation, SetfatherOccupation] = useState("");

  const [mname, SetMname] = useState("");
  const [motherOccupation, SetMotherOccupation] = useState("");

  const [residence, SetResidence] = useState("");
  const [gotra, SetGotra] = useState("");

  const [family_community, SetFamily_Community] = useState("");
  const [subCommunity, SetsubCommunity] = useState("");

  const [familyAddress, SetfamilyAddress] = useState("");
  const [brother, SetBrother] = useState("");

  const [sister, SetSister] = useState("");
  const [otherFamilydetails, SetOtherFamilydetails] = useState("");

  const [ismanglik, SetIsManglik] = useState();
  const [phone, SetPhone] = useState("");

  const [photo, SetPhoto] = useState("");
  const [id, SetID] = useState("");

  const [partner_income, SetPartner_Income] = useState("");

  const [partner_education, SetPartner_education] = useState("");
  const [partner_occupation, Setpartner_occupation] = useState("");

  const [partner_profession, SetPartner_profession] = useState("");
  const [partner_mariatal, SetPartner_Mariatal] = useState("");

  const [partner_ismannglik, SetPartner_Ismanglik] = useState("");

  const [partner_astrologyMatching, SetPartner_AstrologyMatching] =
    useState("");
  const [partner_ExpectationDetailes, SetPartner_ExpectationDetailes] =
    useState("");

  const [maritalStatus, SetMaritalStatus] = useState("");

  const [bloodGroup, SetBloodGroup] = useState("");

  const [radio, SetRadio] = useState("");

  const [ageFrom, SetAgefrom] = useState("");
  const [ageTo, SetAgeTo] = useState("");

  const handleReference = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetReference(value);
  };

  const handleWhatsappNo = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetWhatsapp(value);
  };

  const handleEmail = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetEmail(value);
  };

  const handlePassword = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPassword(value);
  };

  const handlePassword2 = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPassword2(value);
  };

  const handleGender = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetGender(value);
  };

  const handleName = (e) => {
    const value = e?.target.value;
    if (value !== null);
    Setname(value);
  };

  const handleDOB = (date) => {
    const selectedDate = date ? date.toISOString().split("T")[0] : null;
    if (date !== null);
    SetDOB(selectedDate); //data format is yyyy-MM-dd
  };

  const handleAge = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetAge(value);
  };

  const handleBirthplace = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetBirthplace(value);
  };

  const handleBirthTime = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetBirthTime(value);
  };

  const handleHeight = (e) => {
    const value = e.value;
    if (value !== null);
    SetHeight(value);
  };

  const handleWeight = (e) => {
    const value = e.value;
    if (value !== null);
    SetWeight(value);
  };

  const handleComplexion = (e) => {
    const value = e.value;
    if (value !== null);
    SetComplexion(value);
  };

  const handleEducation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetEducation(value);
  };

  const handleProfession = (e) => {
    const value = e.value;
    if (value !== null);
    SetProfession(value);
  };

  const handleOccupation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetOccupation(value);
  };

  const handleReligion = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetReligion(value);
  };

  const handleCommunity = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetCommunity_type(value);
  };

  const handlePhysical = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPhysical(value);
  };

  const handleAddress = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetAddress(value);
  };

  const handleNRI = (e) => {
    const value = e.target.value;
    if (value !== null) SetIsNRI(value);
  };

  const handleVisa = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetVisa(value);
  };

  const handleNRIAddress = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetNRIAddress(value);
  };

  const handlefName = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetFname(value);
  };

  const handlefprofession = (e) => {
    const value = e.value;
    if (value !== null);
    SetfatherOccupation(value);
  };

  const handlemname = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetMname(value);
  };

  const handlemprofession = (e) => {
    const value = e.value;
    if (value !== null);
    SetMotherOccupation(value);
  };

  const handlegotra = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetGotra(value);
  };

  const handlefamily_community = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetFamily_Community(value);
  };

  const handlesub_community = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetsubCommunity(value);
  };

  const handlefamily_address = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetfamilyAddress(value);
  };

  const handleBrother = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetBrother(value);
  };

  const handleSister = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetSister(value);
  };

  const handlephone = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPhone(value);
  };

  const handleFamily_detailes = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetOtherFamilydetails(value);
  };

  const handleNetIncome = (e) => {
    const value = e.value;
    if (value !== null);
    SetNetIncome(value);
  };

  const handlePartner_Education = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPartner_education(value);
  };

  const handlepartner_Occupation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    Setpartner_occupation(value);
  };

  const handlepartner_Profession = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPartner_profession(value);
  };

  const handlepartner_expectation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPartner_ExpectationDetailes(value);
  };

  const handlePartner_manglik = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_Ismanglik(value);
  };

  const handlemaritalStatus = (e) => {
    const value = e.value;
    if (value !== null);
    SetMaritalStatus(value);
  };

  const handlePartner_maritalStatus = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_Mariatal(value);
  };

  const handleBloodGroup = (e) => {
    const value = e.value;
    if (value !== null);
    SetBloodGroup(value);
  };

  const handlePartnerIncome = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_Income(value);
  };

  const handlePartnerAstrology = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_AstrologyMatching(value);
  };

  const handlResidence = (e) => {
    const value = e.value;
    if (value !== null);
    SetResidence(value);
  };

  const handlemanglik = (e) => {
    const value = e.value;
    if (value !== null);
    SetIsManglik(value);
  };

  const handleRadio = (e) => {
    const value = e.target.value;
    if (value !== null);
    SetRadio(value);
  };

  const handleAgeFrom = (e) => {
    const value = e.value;
    if (value !== null);
    SetAgefrom(value);
  };

  const handleAgeTo = (e) => {
    const value = e.value;
    if (value !== null);
    SetAgeTo(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      SetPhoto(file);
    } else {
      SetPhoto(null);
    }
  };
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      SetID(file);
    } else {
      SetID(null);
    }
  };

  const validateForm = () => {
    console.log(photo, id);

    if (!reference.trim()) {
      toast.error("Reference is required");
    } else if (!whatsapp.trim()) {
      toast.error("WhatsApp number is required");
    } else if (!email.trim()) {
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Email is invalid");
    } else if (!password.trim()) {
      toast.error("Password is required");
    } else if (password !== password2) {
      toast.error("Passwords do not match");
    } else if (!gender.trim()) {
      toast.error("Gender is required");
    } else if (!name.trim()) {
      toast.error("Name is required");
    } else if (typeof dob === "string" && !dob.trim()) {
      toast.error("Date of birth is required");
    } else if (!age.trim()) {
      toast.error("Age is required");
    } else if (!birthplace.trim()) {
      toast.error("Birthplace is required");
    } else if (!birthTime.trim()) {
      toast.error("Birth time is required");
    } else if (!height.trim()) {
      toast.error("Height is required");
    } else if (!weight.trim()) {
      toast.error("Weight is required");
    } else if (!complexion.trim()) {
      toast.error("Complexion is required");
    } else if (!education.trim()) {
      toast.error("Education is required");
    } else if (!profession.trim()) {
      toast.error("Profession is required");
    } else if (!occupation.trim()) {
      toast.error("Occupation is required");
    } else if (!religion.trim()) {
      toast.error("Religion is required");
    } else if (!community_type.trim()) {
      toast.error("Community is required");
    } else if (!physical.trim()) {
      toast.error("Physical status is required");
    } else if (!netincome.trim()) {
      toast.error("Your Income is required");
    } else if (!address.trim()) {
      toast.error("Address is required");
    } else if (isNRI === undefined) {
      toast.error("NRI status is required");
    } else if (!visa.trim() && isNRI) {
      toast.error("Visa is required for NRI");
    } else if (!nriAddress.trim() && isNRI) {
      toast.error("NRI address is required");
    } else if (!fname.trim()) {
      toast.error("Father's name is required");
    } else if (!fatherOccupation.trim()) {
      toast.error("Father's occupation is required");
    } else if (!mname.trim()) {
      toast.error("Mother's name is required");
    } else if (!motherOccupation.trim()) {
      toast.error("Mother's occupation is required");
    } else if (!residence.trim()) {
      toast.error("Residence is required");
    } else if (!gotra.trim()) {
      toast.error("Gotra is required");
    } else if (!family_community.trim()) {
      toast.error("Family community is required");
    } else if (!subCommunity.trim()) {
      toast.error("Sub-community is required");
    } else if (!familyAddress.trim()) {
      toast.error("Family address is required");
    } else if (!brother.trim()) {
      toast.error("Brother's details are required");
    } else if (!sister.trim()) {
      toast.error("Sister's details are required");
    } else if (!otherFamilydetails.trim()) {
      toast.error("Other family details are required");
    } else if (ismanglik === undefined) {
      toast.error("Manglik status is required");
    } else if (!phone.trim()) {
      toast.error("Phone number is required");
    } else if (!photo) {
      toast.error("Photo is required");
    } else if (!id) {
      toast.error("ID is required");
    } else if (!partner_income.trim()) {
      toast.error("Partner's income is required");
    } else if (!selectedCountry.name.trim()) {
      toast.error("Partner's country is required");
    } else if (!selectedState.name.trim()) {
      toast.error("Partner's state is required");
    } else if (!selectedCity.name.trim()) {
      toast.error("Partner's city is required");
    } else if (!partner_education.trim()) {
      toast.error("Partner's education is required");
    } else if (!partner_occupation.trim()) {
      toast.error("Partner's occupation is required");
    } else if (!partner_profession.trim()) {
      toast.error("Partner's profession is required");
    } else if (!partner_mariatal.trim()) {
      toast.error("Partner's marital status is required");
    } else if (partner_ismannglik === undefined) {
      toast.error("Partner's Manglik status is required");
    } else if (!partner_astrologyMatching.trim()) {
      toast.error("Partner's astrology matching status is required");
    } else if (!partner_ExpectationDetailes.trim()) {
      toast.error("Partner's expectation details are required");
    } else if (!maritalStatus.trim()) {
      toast.error("Marital status is required");
    } else if (!bloodGroup.trim()) {
      toast.error("Blood group is required");
    } else if (!radio.trim()) {
      toast.error("Please select who is it for.");
    } else if (!ageFrom.trim()) {
      toast.error("From Age is required");
    } else if (!ageTo.trim()) {
      toast.error("To Age is required");
    } else {
      registerEvent();
    }
  };

  const registerEvent = async () => {
    const formData = [
      { key: "profile_created_by_type", value: radio, type: "text" },
      { key: "refrence_by", value: reference, type: "text" },
      { key: "whatsapp_no", value: whatsapp, type: "text" },
      { key: "email", value: email, type: "text" },
      { key: "password", value: password, type: "text" },
      { key: "password_confirmation", value: password2, type: "text" },
      { key: "gender", value: gender, type: "text" },
      { key: "name", value: name, type: "text" },
      { key: "dob", value: dob, type: "text" },
      { key: "age", value: age, type: "text" },
      { key: "birth_place", value: birthplace, type: "text" },
      { key: "birth_time", value: birthTime, type: "text" },
      { key: "height", value: height, type: "text" },
      { key: "weight", value: weight, type: "text" },
      { key: "complexion", value: complexion, type: "text" },
      { key: "education", value: education, type: "text" },
      { key: "profession", value: profession, type: "text" },
      { key: "occupation", value: occupation, type: "text" },
      { key: "religion", value: religion, type: "text" },
      { key: "candidate_community", value: community_type, type: "text" },
      { key: "marital_status", value: maritalStatus, type: "text" },
      { key: "physical_status", value: physical, type: "text" },
      { key: "blood_group", value: bloodGroup, type: "text" },
      { key: "candidate_income", value: netincome, type: "text" },
      {
        key: "candidates_address",
        value: address,
        type: "text",
        description: "this is a boolean value",
      },
      { key: "terms_and_conditions", value: "1", type: "text" },
      { key: "if_nri", value: isNRI, type: "text" },
      { key: "candidate_visa", value: visa, type: "text" },
      { key: "address_nri_citizen", value: nriAddress, type: "text" },
      { key: "father_name", value: fname, type: "text" },
      { key: "father_profession", value: fatherOccupation, type: "text" },
      { key: "mother_name", value: mname, type: "text" },
      { key: "mother_profession", value: motherOccupation, type: "text" },
      { key: "residence_type", value: residence, type: "text" },
      { key: "gotra", value: gotra, type: "text" },
      { key: "family_community", value: family_community, type: "text" },
      { key: "family_sub_community", value: subCommunity, type: "text" },
      { key: "family_address", value: familyAddress, type: "text" },
      { key: "brother", value: brother, type: "text" },
      { key: "sister", value: sister, type: "text" },
      { key: "other_family_details", value: otherFamilydetails, type: "text" },
      { key: "calling_no", value: phone, type: "text" },
      { key: "are_you_manglik", value: ismanglik, type: "text" },
      { key: "partner_age_group_from", value: ageFrom, type: "text" },
      { key: "partner_age_group_to", value: ageTo, type: "text" },
      { key: "partner_income", value: partner_income, type: "text" },
      { key: "partner_country", value: selectedCountry.name, type: "text" },
      { key: "partner_state", value: selectedState.name, type: "text" },
      { key: "partner_city", value: selectedCity.name, type: "text" },
      { key: "partner_education", value: partner_education, type: "text" },
      { key: "partner_occupation", value: partner_occupation, type: "text" },
      { key: "partner_profession", value: partner_profession, type: "text" },
      { key: "partner_manglik", value: partner_ismannglik, type: "text" },
      { key: "partner_marital_status", value: partner_mariatal, type: "text" },
      {
        key: "astrology_matching",
        value: partner_astrologyMatching,
        type: "text",
      },
      {
        key: "expectation_partner_details",
        value: partner_ExpectationDetailes,
        type: "text",
      },
      { key: "photo", type: "file" },
    ];

    console.log(formData);

    await axios
      .post("https://shreevct.com/api/register", { formData })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const countries = await Country.getAllCountries();
      setCountryData(countries);
      setSelectedCountry(countries[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        const states = await State.getStatesOfCountry(selectedCountry?.isoCode);
        setStateData(states);
        setSelectedState(states[0]);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedCountry && selectedState) {
        const cities = await City.getCitiesOfState(
          selectedCountry?.isoCode,
          selectedState?.isoCode
        );
        setCityData(cities);
        setSelectedCity(cities[0]);
      }
    };
    fetchCities();
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (e) => {
    const selected = countryData.find(
      (country) => country.name === e.target.value
    );
    setSelectedCountry(selected);
  };

  const handleStateChange = (e) => {
    const selected = stateData.find((state) => state.name === e.target.value);
    setSelectedState(selected);
  };

  const handleCityChange = (e) => {
    const selected = cityData.find((city) => city.name === e.target.value);
    setSelectedCity(selected);
  };

  return (
    <>
      <Header />
      <div className="main_container  mx-auto">
        <div className="pmd:mb-[315%] ps:mb-[270%]">
          <div className="first_container">
            <img src="/bannerx.png" />
          </div>
          {/* pink box */}

          <div className="justify-center flex align-center items-center">
            <div className="w-3/5 py-8 rounded shadow-xl bg-[#EB2188] -translate-y-[34px] ps:-translate-y-[20px]  ps:w-[90%] ps:py-2">
              <div className="flex justify-center align-center items-center flex-wrap">
                <>
                  <div className="flex items-center mr-8 ps:mr-4 align-center justify-center">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio1"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      defaultChecked=""
                      value="Self"
                    />
                    <label
                      htmlFor="radio1"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer  "
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm " />
                      Self
                    </label>
                  </div>
                  <div className="flex items-center mr-8  ps:mr-4">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio2"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Son"
                    />
                    <label
                      htmlFor="radio2"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Son
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio3"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Daughter"
                    />
                    <label
                      htmlFor="radio3"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Daughter
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio4"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Brother"
                    />
                    <label
                      htmlFor="radio4"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Brother
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio5"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Sister"
                    />
                    <label
                      htmlFor="radio5"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Sister
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio6"
                      type="radio"
                      name="radiocheck"
                      style={{ appearance: "none" }}
                      value="Relative"
                    />
                    <label
                      htmlFor="radio6"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Relative
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio7"
                      type="radio"
                      name="radiocheck"
                      style={{ appearance: "none" }}
                      value="Other"
                    />
                    <label
                      htmlFor="radio7"
                      className="flex items-center text-xl leading-[20px]  text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Other
                    </label>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="justify-between flex align-center flex-wrap w-[95%]">
            <div></div>
            <div className="justify-center flex align-center items-center">
              <p className="text-lg ps:text-sm">
                Already have an account - &nbsp;{" "}
              </p>
              <button className="   pm:py-1  ps:text-sm  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 ">
                Log In
              </button>
            </div>
          </div>

          <section className="w-5/6 mx-auto">
            <div className=" flex pt-[3%] ps:pt-[10%] justify-center items-center">
              <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
                CREATE PROFILE on VCT
              </p>
            </div>
            <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
              <img src="/tb.png" className="ps:w-28 " />
            </div>
            <div className=" flex pt-[1%]  justify-center items-center">
              <p className=" ps:!text-[14px] pm:text-[20px] pm:font-[550] font-semibold ">
                All Fields with <span className="text-pink-600">*</span> are
                mandatory
              </p>
            </div>

            <div className="flex justify-center align-center items-center mx-auto ">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[90%] ps:w-[100%]"
              >
                <div className="bg-white  rounded pt-8  flex flex-col ">
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="company"
                    >
                      Reference By <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      required
                      onChange={(e) => handleReference(e)}
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="company"
                      type="text"
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Whatsapp No.<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleWhatsappNo(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      />
                      <div>
                        <span className="text-red-500 text-sm italic">
                          Please fill out this field.
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Email Id<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleEmail(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlePassword(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Re-Type Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlePassword2(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Personal Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Gender<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handleGender(e)}
                        options={Gender}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleName(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Date of birth<span className="text-red-500 ">*</span>
                      </label>
                      <div>
                        <DatePicker
                          id="dob"
                          selected={dob}
                          onChange={(date) => handleDOB(date)}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="dd-mm-yyyy"
                          className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        />
                      </div>
                      {/* <input
                      required
                      onChange={(e) => handleDOB(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      /> */}

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Age<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleAge(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Birthplace <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleBirthplace(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Birth Time<span className="text-red-500 ">*</span>
                      </label>

                      <input
                        id="appt-time"
                        required
                        onChange={(e) => handleBirthTime(e)}
                        className="w-full text-pink-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        type="time"
                        name="appt-time"
                        step="2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Height<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleHeight(e)}
                        options={Heights}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleHeight(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Weight<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleWeight(e)}
                        options={Weights}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleWeight(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Complexion<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleComplexion(e)}
                        options={complexation}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleComplexion(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Education <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleEducation(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleProfession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleProfession(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Occupation<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleOccupation(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Religion<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleReligion(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleCommunity(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mariatal Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handlemaritalStatus(e)}
                        options={Marital_status}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Physical Status<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlePhysical(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Blood Group<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handleBloodGroup(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={optionstwo}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Income<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handleNetIncome(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={Income}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Candidate Address <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handleAddress(e)}
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>

                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      If NRI <span className="text-red-500 ">*</span>
                    </label>

                    <div className=" flex align-center items-center">
                      <div className=" py-2 rounded shadow-xl bg-[#EB2188] px-4 ">
                        <div className="flex  align-center items-center ">
                          <div className="flex items-center mr-8 ps:mr-4 align-center justify-center">
                            <input
                              required
                              onChange={(e) => handleNRI(e)}
                              id="yes"
                              type="radio"
                              name="radio"
                              className="hidden"
                              defaultChecked=""
                              value="Yes"
                            />

                            <label
                              htmlFor="yes"
                              className="flex items-center text-xl leading-[20px] text-white cursor-pointer  "
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-[12px] " />
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center mr-8  ps:mr-4">
                            <input
                              required
                              onChange={(e) => handleNRI(e)}
                              id="no"
                              type="radio"
                              name="radio"
                              className="hidden"
                              value="No"
                            />
                            <label
                              htmlFor="no"
                              className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey " />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isNRI === "Yes" ? (
                    <>
                      <div className="md:flex mb-6">
                        <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                          <label
                            className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                            htmlFor="candidateVisa" // Unique ID for the label
                          >
                            Candidate Visa
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            onChange={(e) => handleVisa(e)}
                            className="w-full text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                            id="candidateVisa" // Unique ID for the textarea
                            type="text"
                          />
                          <div></div>
                        </div>
                        <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                          <label
                            className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                            htmlFor="nriAddress" // Unique ID for the label
                          >
                            Address (NRI Citizen)
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            onChange={(e) => handleNRIAddress(e)}
                            className="w-full text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                            id="nriAddress" // Unique ID for the textarea
                            rows="2"
                            type="text"
                          />
                          <div></div>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Family Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Father Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlefName(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3  mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Father Profession
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handlefprofession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handlefprofession(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mother Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlemname(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Mother Profession
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handlemprofession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handlemprofession(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Residence Type<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlResidence(e)}
                        options={Family_Type}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Gotra<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlegotra(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Family Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlResidence(e)}
                        options={Family_Status}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                       Family Type<span className="text-red-500 ">*</span>
                      </label>
                
                      <Select
                        onChange={(e) => handlResidence(e)}
                        options={Family}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlefamily_community(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Sub Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlesub_community(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Family Address <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handlefamily_address(e)}
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Siblings Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Brother<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleBrother(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Sister<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleSister(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Other Family Details{" "}
                      <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handleFamily_detailes(e)}
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Manglik<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlemanglik(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={manglik}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Phone Number<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlephone(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <label
                    className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                    htmlFor="company"
                  >
                    Photo<span className="text-red-500 ">*</span>{" "}
                    <span className="text-slate-400">
                      ( Face should be near )
                    </span>
                  </label>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file1"
                      className="flex flex-col items-center justify-center w-full h-44 border-2 
                      border-gray-300 border-dashed rounded-lg cursor-pointer
                      bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100
                       hover:bg-gray-200 dark:border-gray-400
                        dark:hover:border-gray-100 dark:hover:bg-gray-200"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-[80px] h-[80px]  mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-lg  ps:text-sm text-gray-700 dark:text-gray-400">
                          Drag and Drop Here / Browse
                        </p>
                      </div>
                      <input
                        required
                        onChange={(e) => handleFileChange(e)}
                        id="dropzone-file1"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>

                  <label
                    className=" tracking-wide pt-8 text-gray-600 text-sm
                     font-bold mb-2"
                    htmlFor="company"
                  >
                    Id Proof<span className="text-red-500 ">*</span>
                    <span className="text-slate-400">
                      {" "}
                      ( Adhar Card, PAN Card, Voter Id, Driving Licence, COVID,
                      Ayushman, Religion Id. ){" "}
                    </span>
                  </label>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file2"
                      className="flex flex-col items-center justify-center w-full h-44 border-2 
                      border-gray-300 border-dashed rounded-lg cursor-pointer
                      bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100
                       hover:bg-gray-200 dark:border-gray-400
                        dark:hover:border-gray-100 dark:hover:bg-gray-200"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-[80px] h-[80px] mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-lg ps:text-sm text-gray-700 dark:text-gray-400">
                          Drag and Drop Here / Browse
                        </p>
                      </div>
                      <input
                        required
                        onChange={(e) => handleFileChange2(e)}
                        id="dropzone-file2"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <label
                    className=" tracking-wide pt-2 text-gray-600 text-xs
                     font-bold mb-2"
                    htmlFor="company"
                  >
                    <span className="text-red-500 ">
                      NOTE_ Without ID’s Proof Account can not be verified.
                    </span>
                  </label>
                  <div className=" md:flex mb-3 pt-8">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Partner Preference -
                      </label>

                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Age Group<span className="text-red-500 ">*</span>
                      </label>

                      <div className="flex flex-wrap pt-4">
                        <div className="flex w-1/2 justify-center align-center items-center text-center ps:w-full ps:pb-2 ">
                          <span className="text-sm  font-semibold  px-2 text-slate-700">
                            From:{" "}
                          </span>
                          <Select
                            onChange={(e) => handleAgeFrom(e)}
                            // defaultValue={selectedOption}
                            // onChange={setSelectedOption}
                            options={agefrom}
                            name="field_name"
                            className="text-gray-600 text-sm font-bold  w-full"
                            type="text"
                            placeholder=""
                          />
                        </div>{" "}
                        <div className="flex  w-1/2 justify-center align-center text-center  items-center ps:w-full ps:pb-2">
                          <span className="text-sm  font-semibold  px-2 text-slate-700">
                            To:
                          </span>
                          <Select
                            onChange={(e) => handleAgeTo(e)}
                            options={ageto}
                            name="field_name"
                            className=" text-gray-600 text-sm font-bold w-full"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Income<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlePartnerIncome(e)}
                        options={Income}
                        className="text-gray-600   mt-4"
                      />

                      <div></div>
                    </div>
                  </div>
                  <div className="md:flex mb-6">
  <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
    <label
      className="tracking-wide text-gray-600 text-sm font-bold mb-2"
      htmlFor="country"
    >
      Country
      <span className="text-red-500">*</span>
    </label>
    <select
      id="country"
      value={selectedCountry?.name}
      onChange={handleCountryChange}
      className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
    >
      {countryData.map((country) => (
        <option key={country.isoCode} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
    <div></div>
  </div>
  <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
    <label
      className="tracking-wide text-gray-600 text-sm font-bold mb-2"
      htmlFor="state"
    >
      State<span className="text-red-500">*</span>
    </label>
    <select
      id="state"
      value={selectedState?.name}
      onChange={handleStateChange}
      className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
    >
      {stateData.map((state) => (
        <option key={state.isoCode} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>
    <div></div>
  </div>
  <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
    <label
      className="tracking-wide text-gray-600 text-sm font-bold mb-2"
      htmlFor="city"
    >
      City<span className="text-red-500">*</span>
    </label>
    <select
      id="city"
      value={selectedCity?.name}
      onChange={handleCityChange}
      className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
    >
      {cityData.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
    <div></div>
  </div>
</div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Education<span className="text-red-500 ">*</span>
                      </label>

                      <input
                        required
                        onChange={(e) => handlePartner_Education(e)}
                        className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Occupation<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlepartner_Occupation(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlepartner_Profession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Manglik<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlePartner_manglik(e)}
                        options={manglik}
                        className="mt-2 h-2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mariatal Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlePartner_maritalStatus(e)}
                      
                        options={Marital_status}
                        className="text-gray-600 border border-gray-400 mt-2"
                        placeholder=""
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 mt-2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Astrology Matching
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlePartnerAstrology(e)}
                    
                        options={matching}
                        className="mt-2 h-2"
                        placeholder=""
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Expectation Partner Details
                      <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handlepartner_expectation(e)}
                      className="w-full text-gray-600 border-[3px] border-gray-300   rounded py-3 px-4 mb-3 mt-2"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>

                  <div className="flex items-center">
                    <input
                      required
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="appearance-none rounded h-4 w-4 bg-transparent
                      focus:ring-0 focus:ring-offset-0 checked:bg-pink-600
                      border-pink-600 border-2  checked:text-pink-200 ps:w-7 ps:h-4"
                    />
                    <label htmlFor="link-checkbox" className="ms-2">
                      Terms and Conditions of services provided by VCT Powered
                      by Prem Rishtey Service Pvt Ltd.
                    </label>
                  </div>

                  <div className="flex justify-center py-4 mt-[5%]">
                    <button
                      className="w-48 ps:w-36   pm:py-1 pm:!text-[14px] text-lg font-bold ps:!text-[16px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                      onClick={validateForm}
                    >
                      Register Now
                    </button>
                    <Toaster
                      position="top-center"
                      reverseOrder={false}
                      gutter={8}
                      containerClassName=""
                      containerStyle={{}}
                      toastOptions={{
                        // Define default options
                        className: "",
                        duration: 5000,
                        style: {
                          background: "#363636",
                          color: "#fff",
                        },

                        // Default options for specific types
                        success: {
                          duration: 3000,
                          theme: {
                            primary: "green",
                            secondary: "black",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
