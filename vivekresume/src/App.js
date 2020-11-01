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
    summaryText: 'Has overall experience of 8.10 years in SAP Technical area which involves hands on experience in 1 Product Development, 3 End to End SAP implementation project and 3 SAP R/3 Enhancement Support Project'
}, {
    id: 2,
    summaryText: 'Good understanding and hands on experience on development for SAP SD, MM, FI, PP and WM modules'
}, {
    id: 3,
    summaryText: 'Have good onsite UAT exposure with direct users as Senior SAP ABAP Technical Consultant'
}, {
    id: 4,
    summaryText: 'Apart from the technical hands-on, has thorough experience on defect analysis, designing solutions, efficient and innovative ideas for different customer requirements'
}, {
    id: 5,
    summaryText: 'Good Experience in Run time analysis along with Performance Tuning'
}, {
    id: 6,
    summaryText: 'Excellent analytical, problem solving skills and a motivated team player with excellent inter-personal skills'
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
}, {
    id: 3,
    lang: 'German',
    level: 3
}];
// Heading should be Infrastructure Skills
let developmentSkills = [{
    id: 1,
    skillName: 'Data Dictionary Objects ',
    level: 5
}, {
    id: 2,
    skillName: 'Batch Data com Programs',
    level: 4
}, {
    id: 3,
    skillName: 'Module Pool Programming',
    level: 2
}, {
    id: 4,
    skillName: 'ALE, RFC, IDocs',
    level: 3
}, {
    id: 5,
    skillName: 'Docker, kubernetes, Vagrant',
    level: 2
}];

let frameworkTools = [{
    id: 1,
    skillName: 'Debugger',
    level: 3
},{
    id: 2,
    skillName: 'ABAP for HANA',
    level: 4
},{
    id: 3,
    skillName: 'CDS views',
    level: 3
},{
    id: 4,
    skillName: 'ADBC, AMDP',
    level: 4
},{
    id: 5,
    skillName: 'files,IDocs interface using AIF',
    level: 2
}];

let professionalExperience = [{
    id: 1,
    company: 'Metro Global Business Services',
    isCurrentCompany: true,
    roles: [
      "Requirement gathering from client and providing solution with Functional team.",
      "Preparing and reviewing Technical Specification, effort estimate and Unit Testing documents.",
      "Development of Interfaces for Flat files, IDocs using AIF.",
      "Development of CDS views and AMDPs.",
      "Development of OO ABAP objects and RICEF"

    ],
    technologies: 'Sprinklr is the most complete social media management system for the enterprise. We help the world’s largest brands do marketing, advertising, care, sales, research, and commerce on Facebook, Twitter, LinkedIn, and 21 other channels globally all on one integrated platform. This project involves maintaining end to end infrastructure support globally and ensures platform availability. Managing infrastructure and automation build deployment and releases. Scaling up infrastructure vertically and horizontally depending on the need Proactively Monitor and fix issues to ensure availability within SLA\'s.',
    location: 'Pune',
    type: 'Sr. Technical Consultant  - Nov 2018 to Present'
}, {
    id: 2,
    company: 'Tieto India Pvt. Ltd',
    isCurrentCompany: false,
    roles: [
      "Requirement gathering from client and providing solution with Functional team.",
      "Preparing and reviewing Technical Specification, effort estimate and Unit Testing documents.",
      "Individually Handling Loading capacity module for Customer online.",
      "Developed Webservices for Customer online (SD module)",
      "Worked on Enhancements, IDocs. ",
      "Developed Smartforms"
    ],
    technologies: 'MS Application management Project involves providing 24X7 supports for the critical applications. The objective is to maintain the availability and performance of all these core apps. This project is related to middleware technology involving tomcat application servers and apache webservers. The availability of the sites and critical applications are achieved through monitoring the application and web servers and critical applications using monitoring tools such as Zabbix, Netcool. Issues must be identified and fixed to avoid a drop-in availability. Other major activities are performance tuning and developing monitoring scripts. Project scope involves environment monitoring, L1/L2 application support, incident management, change management, configuration management, release management.',
    location: 'Pune',
    type: 'ABAP Technical Consultant - May 2016 to Nov 2018'
}, {
    id: 3,
    company: 'Accenture Services Pvt. Ltd',
    isCurrentCompany: false,
    roles: [
      "Worked on Inbound Outbound IDocs.",
      "Developed Cost Center data upload report.",
      "Developed data upload for G/L, Release strategy and Material master.",
      "Developed report for vendor wise debit note/credit note.",
      "Worked on User exits, Customer Exists.",
      "Developed Webservices for SD and MM modules.",
      "Worked on Reports like:",
        "a)	Company License delivery check.",
        "b)	Sales Summary"

    ],
    technologies: 'MS Application management Project involves providing 24X7 supports for the critical applications. The objective is to maintain the availability and performance of all these core apps. This project is related to middleware technology involving tomcat application servers and apache webservers. The availability of the sites and critical applications are achieved through monitoring the application and web servers and critical applications using monitoring tools such as Zabbix, Netcool. Issues must be identified and fixed to avoid a drop-in availability. Other major activities are performance tuning and developing monitoring scripts. Project scope involves environment monitoring, L1/L2 application support, incident management, change management, configuration management, release management.',
    location: 'Pune',
    type: 'ABAP Technical Consultant - July 2015 to April 2016'
}
];

let developerEducation = [{
    id: 1,
    title: 'BE in Information Science',
    year: '2008 - 2012',
    desc: 'sagar institute of research and technology - Bhopal'
}, {
    id: 2,
    title: 'Intermediate',
    year: '2007 - 2008',
    desc: 'MP Board - Tikamgarh'
}, {
    id: 3,
    title: 'High School',
    year: '2005 - 2006',
    desc: 'Pushpa High School - Tikamgarh'
}];

let developerAchievements = [{
    id: 1,
    title: 'Certification',
    year: '2017',
    desc: 'RedHat certified System Administrator'
}, {
    id: 2,
    title: 'Certification',
    year: '2017',
    desc: 'RedHat certified System Engineer'
}, {
    id: 3,
    title: 'Certification',
    year: '2015',
    desc: 'ITIL V3'
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
