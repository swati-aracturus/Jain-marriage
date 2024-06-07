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
// import CountryRegionSelector from "react-country-region-selector";

const Registration = () => {
  const notify = () => toast.success("Successfully Registered In!");
  const ToggleDivComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleRadioChange = (event) => {
      setIsVisible(event.target.value === 'yes');
    };
  
  const options = [
    { value: "Unmarried", label: "Unmarried" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widow", label: "Widow" },
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
    { value: "8'0", label: "8 feet 0 inches" }
  ];
  const income = [
    { value: "0.5k to 1k", label: "0.5k to 1k" },
    { value: "1k to 2k", label: "1k to 2k" },
    { value: "2k to 3k", label: "2k to 3k" },
    { value: "3k to 4k", label: "3k to 4k" },
  ];
  const manglik = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
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

  const handleDOB = (e) => {
    const value = e;
    const selectedDate = e ? e.toISOString().split("T")[0] : null;
    // console.log("Formatted Date:", selectedDate); example Formatted Date: 2024-06-17
    if (value !== null);
    SetDOB(value);
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
    const value = e?.target.value;
    if (value !== null);
    SetHeight(value);
  };

  const handleWeight = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetWeight(value);
  };

  const handleComplexion = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetComplexion(value);
  };

  const handleEducation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetEducation(value);
  };

  const handleProfession = (e) => {
    const value = e?.target.value;
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
    const value = e?.target.value;
    if (value !== null);
    SetfatherOccupation(value);
  };

  const handlemname = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetMname(value);
  };

  const handlemprofession = (e) => {
    const value = e?.target.value;
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

  const handleIncome = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPartner_Income(value);
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
    const value = e.target.value;
    console.log(value)
    console.log(typeof(value))
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

  const handleNRI = (e) => {
    const value = e.target.value;
    if (value !== null);
    SetIsNRI(value);
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
    console.log(photo, id)


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
                      style={{ appearance: 'none' }}

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
                      style={{ appearance: 'none' }}
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
                      style={{ appearance: 'none' }}

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
                      style={{ appearance: 'none' }}

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
                      style={{ appearance: 'none' }}

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
                      // className="hidden"
                      style={{ appearance: 'none' }}

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
                      // className="hidden"
                      style={{ appearance: 'none' }}

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
              {/* form */}

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
                      <input
                        required
                        onChange={(e) => handleGender(e)}
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
                          onChange={(e) => handleDOB(e)}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="Select Date"
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
                        required
                        onChange={(e) => handleBirthTime(e)}
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
                        Height<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                    placeholder=""
                      onChange={(e) => handleHeight(e)}
                      options={heights}
                      className="text-gray-600 border border-gray-400 mt-2"
                    />
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
                      onChange={(e) => handleWeight(e)}
                      options={weights}
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
                        Complexion<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleComplexion(e)}
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
                      <input
                        required
                        onChange={(e) => handleProfession(e)}
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
                        options={options}
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
                        options={income}
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
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Visa<span className="text-red-500 ">*</span>
                      </label>
                      <textarea
                        onChange={(e) => handleVisa(e)}
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
                        Address ( NRI Citizen )
                        <span className="text-red-500 ">*</span>
                      </label>
                      <textarea
                        onChange={(e) => handleNRIAddress(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        rows="2"
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
                      <input
                        required
                        onChange={(e) => handlefprofession(e)}
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
                      <input
                        required
                        onChange={(e) => handlemprofession(e)}
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
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Residence Type<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlResidence(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={options}
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
                            // defaultValue={selectedOption}
                            // onChange={setSelectedOption}
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
                      <input
                        required
                        onChange={(e) => handlePartnerIncome(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Country<span className="text-red-500 ">*</span>
                      </label>
                      <select
                        value={selectedCountry?.name}
                        onChange={handleCountryChange}
                      >
                        {countryData.map((country) => (
                          <option key={country.isoCode} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      {/* <input
                        required
                        onChange={(e) => handlecountry(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        State<span className="text-red-500 ">*</span>
                      </label>
                      <select
                        value={selectedState?.name}
                        onChange={handleStateChange}
                      >
                        {stateData.map((state) => (
                          <option key={state.isoCode} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </select>

                      {/* <input
                        required
                        onChange={(e) => handleState(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        City<span className="text-red-500 ">*</span>
                      </label>
                      <select
                        value={selectedCity?.name}
                        onChange={handleCityChange}
                      >
                        {cityData.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                      {/* <input
                        required
                        onChange={(e) => handleCity(e)}
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
                        Education<span className="text-red-500 ">*</span>
                      </label>

                      <input
                        required
                        onChange={(e) => handlePartner_Education(e)}
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

                      <input
                        required
                        onChange={(e) => handlepartner_Profession(e)}
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
                        Manglik<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
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
                        // defaultValue={selectedOption}
                        options={options}
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
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
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
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
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
