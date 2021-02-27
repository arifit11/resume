import React from 'react';
import ResumeExperience from './components/ResumeExperience';
import ResumeSummary from './components/ResumeSummary';
import './css/Bootstrap.css';
import './css/App.css';
import userImage from './images/dev.jpg';
import calenderPath from './images/icons/calendar.png';
import datePath from './images/icons/date.png';
import heartPath from './images/icons/heart-icon.png';
import linkedInPath from './images/icons/in-icon.png';
import locationPath from './images/icons/location.png';
import mailPath from './images/icons/mail-icon.png';
import phonePath from './images/icons/telephone-icon.png';

//define variables
const developerName = 'Vivek Soni';
let developerInfo = [{
    id: 1,
    icon: locationPath,
    value: 'Pune, India'
}, {
    id: 2,
    icon: mailPath,
    value: 'viveksoni.2587@gmail.com'
}, {
    id: 3,
    icon: phonePath,
    value: '+91 9993278577'
}, {
    id: 4,
    icon: heartPath,
    value: 'happily married'
}, {
    id: 5,
    icon: datePath,
    value: '25th,OCT, 1987'
}, {
    id: 6,
    icon: linkedInPath,
    value: 'https://www.linkedin.com/in/vivek-soni-671a8b166/'
}];

let developerSummary = [{
    id: 1,
    summaryText: 'Has overall experience of 9 years in designing, developing and maintaining ABAP & HANA solutions, which involves Product Development, End to End SAP implementations and SAP R/3 Enhancement / Support Projects.'
}, {
    id: 2,
    summaryText: 'Involved in development for various SAP functional modules like SD, MM, FI, WM etc.'
}, {
    id: 3,
    summaryText: 'Excellent knowledge in developing and managing DDIC, OOPs and RICEF objects.'
}, {
    id: 4,
    summaryText: 'Hands-on experience in developing and managing CDS views and AMDPs.'
}, {
    id: 5,
    summaryText: 'Hands-on experience with SAP HANA Studio in Designing Schemas, Creating Packages and Calculation view.'
}, {
    id: 6,
    summaryText: 'Experience in Native HANA Modeling, SQL scripting, stored procedures and user defined functions.'
}, {
    id: 7,
    summaryText: 'Worked on Live Connection, Import Connection, and Calculated Dimensions/Measure/Input control in SAP Analytics Cloud.'
}, {
    id: 8,
    summaryText: 'Well versed in visualizations and usage of charts, tables, maps, filters, dropdown menus, hiding functions, interactive objects and pictures in SAP Analytics Cloud.'
}, {
    id: 9,
    summaryText: 'Leverage SAP SLT and Business Object Data Services BODS to acquire the data into SAP HANA.'
}, {
    id: 10,
    summaryText: 'Experience in Developing and Managing SAP Web Services, Finding and Implementing SAP Note.'
}, {
    id: 11,
    summaryText: 'Good experience in using Debugger.'
},{
    id: 12,
    summaryText: 'Excellent knowledge in gathering business requirements, analysing the business process, Implementation, Designing, Configuration, Customization, Unit/Integration testing, Go-live and Post-go-live support.'
},{
    id: 13,
    summaryText: 'Good Experience in Run time analysis along with optimizing code/performance tuning.'
},{
    id: 14,
    summaryText: 'Received Excellence Award for outstanding contribution to client business outcome.'
},{
    id: 15,
    summaryText: 'Have rich onsite UAT exposure and excellent client-facing skills.'
}];

let developerActivities = [{
    id: 1,
    activity: 'Gym, MMA, Atletics '
}, {
    id: 2,
    activity: 'Blood donation camps'
}];

let developerLanguages = [{
    id: 1,
    lang: 'English',
    level: 3
}, {
    id: 2,
    lang: 'Hindi',
    level: 3
}];
// Heading should be Infrastructure Skills
let developmentSkills = [{
    id: 1,
    skillName: 'ABAP ',
    level: 4
}, {
    id: 2,
    skillName: 'ABAP on HANA',
    level: 4
}, {
    id: 3,
    skillName: 'HANA Modeling',
    level: 4
}, {
    id: 4,
    skillName: 'Native HANA',
    level: 3
}];

let frameworkTools = [{
    id: 1,
    skillName: 'SAC (SAP Analytics Cloud)',
    level: -1
},{
    id: 2,
    skillName: 'HANA Studio',
    level: -1
},{
    id: 3,
    skillName: 'Eclipse IDE',
    level: -1
},{
    id: 4,
    skillName: 'Service Now, JIRA',
    level: -1
}];

let professionalExperience = [{
    id: 1,
    company: 'Metro Services',
    isCurrentCompany: true,
    roles: [
      "Managing and leading status calls for the team",
      "Performed requirement gathering, designed and developing technical solutions for ABAP deliverable.",
      "Upgrade ABAP code to HANA",
      "Developed CDS views and AMDPs(ABAP Managed Database Procedures).",
      "Performed requirement gathering for Model, Story and Dashboard/Agenda development in SAC.",
      "Build Analytical CDS and used them in Sap Analytics Cloud model creation.",
      "Creating canvas/responsive/grid stories, Smart Discovery, data wrangling, blending data, formulas, cross calculations, input controls, linked analysis.",
      "Created FI/SD KPI reports and presented to product owners in SAC.",
      "Created Database Procedures and User Defined Functions using HANA SQL Script.",
      "Developed Calculation views along with custom calculated columns",
      "Worked on various performance improvement objects.",
      "Exposure of WebIDE"

    ],
    technologies: 'S/4 HANA implementation and HANA Enhancement',
    Client: 'Metro AG (Inhouse)',

    location: 'Pune',
    type: 'Sr. Technical Consultant  - Nov 2018 to Present'
}, {
    id: 2,
    company: 'Tieto India',
    isCurrentCompany: false,
    roles: [
      "Requirement gathering from client and providing solution with Functional team.",
      "Preparing and reviewing TS, effort estimate and Unit Testing documents.",
      "Enhanced Open SQL.",
      "Upgrade ABAP code to HANA.",
      "Developed CDS views and AMDPs.",
      "Developed POCs on KPI Modeler.",
      "Worked on various performance improvement objects."
    ],
    technologies: 'S/4 HANA implementation',
    location: 'Pune',
    Client: 'SATO, Finland',
    type: 'ABAP/HANA Technical Consultant - June 2018 to Nov 2018',
},{

   id: 2,
   isCurrentCompany: false,
   roles: [
     "Requirement gathering and providing technical solutions.",
     "Preparing and reviewing TS, effort estimate and Unit Testing documents.",
     "Individually handling Loading capacity module for Customer online.",
     "Developed Calculation Views and exposed them for consumption.",
     "Leverage Data Provisioning technique like SLT to acquire the data into SAP HANA",
     "Developed Function module Webservices, Smartforms.",
     "Developed Reports like Manage loading Capacities for various mill locations, Sales order summary.",
     "Worked on various performance improvement objects",
     "Went Onsite for UAT support"
   ],
   technologies: 'ABAP/HANA Enhancement & Support Project',
   location: 'Pune',
   Client: 'UPM Kymmene, Finland',
   type: ' May 2016 to June 2018',
},
 {
    id: 3,
    company: 'Accenture Services',
    isCurrentCompany: false,
    roles: [
      "Developed Cost Center data upload report.",
      "Worked on Inbound/Outbound IDocs.",
      "Data upload for G/L, Release strategy and Material master.",
      "Developed report for vendor debit/credit note, Sales Summary.",
      "Worked on User exits, Customer Exists.",
      "Developed Webservices for SD and MM modules.",
    ],
    technologies: 'SAP Implementation project.',
    Client: 'Cardinal Health, North America',
    location: 'Pune',
    type: 'ABAP Technical Consultant - July 2015 to April 2016'

},{
   id: 3,
   isCurrentCompany: false,
   roles: [
     "Developed Web dynpro component for creating and maintaining Projects.",
     "Worked on developing and managing RICEF objects.",
     "Created an Asset for Planning Integration in BI",
     "Developed Reports.",
     "Handled User Tickets and resolved them within defined SLA ."
   ],
   technologies: 'Support and Enhancement project.',
   Client: 'Siemens Energy, Germany',
   location: 'Pune',
   type: ' Oct 2014 to June 2015'

}, {
    id: 4,
    company: 'Surtel Technologies',
    isCurrentCompany: false,
    Client: 'BRIGGS & Stratton, USA',
    roles: [
      "Developed Reports and Module Pool Programs as per user requirements",
      "Part of SAP Upgrade Project Team.",
      "Developed an In-house Project ‘Avtex CRM project’ which includes creation of 9 SAP Webservices for performing specific tasks.",
      "Developed In-house 'Coop Project' which keeps track of Customer Monthly activities.",
      "Developed Smartforms and enhance existing Script Programs",
      "Archiving done by SARA",
      "Performance improvement of existing programs"
    ],
    technologies: 'SAP Support project',
    location: 'Indore',
    type: 'ABAP Consultant - Feb 2013 to Sep 2014'
},{
    id: 5,
    company: 'I-Novate Technologies',
    isCurrentCompany: false,
    Client: 'Terrace Bay Pulp Inc, Cannada',

    roles: [
      "Developing and Customizing ABAP Dictionary Objects.",
      "Developed a Report for Stock, Sales Production Summary.",
      "Developed a Report for Order Book.",
      "Developed a Module Pool Program for Repair and Return.",
      "Developed a Smartform for Shipping Notice, Invoice Print, PR Print.",
    ],
    technologies: 'SAP Implementation project',
    location: 'Indore',
    type: 'ABAP Consultant - Aug 2012 to Dec 2012'
},
{
    id: 5,
    isCurrentCompany: false,
    Client: 'In-house Project',

    roles: [
      "Developing and Customizing ABAP Dictionary Objects.",
      "Developed Report for Plot Details, Farmer Details, Acquisition Details.",
      "Developed a Dialog Program for Parchi System,",
      "Developed Smartforms for Calendar Scheduling, parchi etc."
    ],
    technologies: 'Product development (AGROVATE)',
    location: 'Indore',
    type: 'April 2012 to July 2012'
}


];

let developerEducation = [{
    id: 1,
    title: 'Computer Science',
    year: '2006 - 2010',
    desc: 'Bansal Institute of Science & Technology - Bhopal'
}, {
    id: 2,
    title: 'Intermediate',
    year: '2004 - 2006',
    desc: 'CBSE Board - Tikamgarh'
}, {
    id: 3,
    title: 'High School',
    year: '2005 - 2006',
    desc: 'Pushpa High School - Tikamgarh'
}];

let developerAchievements = [{
    id: 1,
    title: 'Sap Certified Development Associate - SAP HANA 2.0 (SPS04)',
    year: '2021',

}, {
    id: 2,
    year: '2020',
    title: 'SAP Certified Application Associate - SAP Analytics Cloud'
}, {
    id: 3,
    year: '2020',
    title:  'SAP Certified Development Specialist - ABAP for SAP HANA 2.0',
}, {
    id: 2,
    year: '2017',
    title: 'ITIL (Foundation Certificate in IT Service management)'
}];

class App extends React.Component {
    render() {
        return(
            <div className="pad-15 lgrey center resume">
                <ResumeSummary
                    userImage = {userImage}
                    developerName = {developerName}
                    developerInfo = {developerInfo}
                    developerSummary = {developerSummary}
                    developerActivities = {developerActivities}
                    developerLanguages = {developerLanguages}
                    developerEducation = {developerEducation}
                />
                <ResumeExperience
                    developmentSkills = {developmentSkills}
                    frameworkTools = {frameworkTools}
                    professionalExperience = {professionalExperience}
                    developerEducation = {developerEducation}
                    developerAchievements = {developerAchievements}
                />
                <div className="clearfix"></div>
            </div>
        );
    };
}

export default App;
