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
const developerName = 'Arif Mohammad Khan';
let developerInfo = [{
    id: 1,
    icon: locationPath,
    value: 'Bangalore, India'
}, {
    id: 2,
    icon: mailPath,
    value: 'arifit11@gmail.com'
}, {
    id: 3,
    icon: phonePath,
    value: '+91 9176482450'
}, {
    id: 4,
    icon: heartPath,
    value: 'Single'
}, {
    id: 5,
    icon: datePath,
    value: '23,Jan, 1991'
}, {
    id: 6,
    icon: linkedInPath,
    value: 'https://www.linkedin.com/in/arifit11/'
}];

let developerSummary = [{
    id: 1,
    summaryText: 'Currently Working with Larsen & Tubro Infotech. as Devops engineer with over 7.5 years of experience in IT Operations, Infrastructure and Application Support (DevOps)'
}, {
    id: 2,
    summaryText: 'Good understanding and hands on experience on UNIX based operating system, Red Hat Linux, CentOS, AWS and Azure Cloud Infrastructure Management'
}, {
    id: 3,
    summaryText: 'Experience is using DevOps tools like Ansible, Jenkins, TeamCity and Docker'
}, {
    id: 4,
    summaryText: 'Good skills of Information gathering and delivering solutions to coustomer'
}, {
    id: 5,
    summaryText: 'Experience in opensource like Kafka, Mesos, GlassFish, Tomacat'
}, {
    id: 6,
    summaryText: 'A self-motivated, responsible, and reliable team player with a set of very strong technical skills'
}, {
    id: 7,
    summaryText: 'A self-motivated, responsible, and reliable team player with a set of very strong technical skills'
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
},{
    id: 3,
    lang: 'Urdu',
    level: 3
}];
// Heading should be Infrastructure Skills
let developmentSkills = [{
    id: 1,
    skillName: 'Linux/UNIX ',
    level: 4
}, {
    id: 2,
    skillName: 'AWS, Azure',
    level: 3
}, {
    id: 3,
    skillName: 'Ansible',
    level: 4
}, {
    id: 4,
    skillName: 'Python/Shell',
    level: 2
}];

let frameworkTools = [{
    id: 1,
    skillName: 'Ansible',
    level: -1
},{
    id: 2,
    skillName: 'Docker/Kubernetes',
    level: -1
},{
    id: 3,
    skillName: 'Jenkins, TeamCity',
    level: -1
},{
    id: 4,
    skillName: 'Sensu, Mwatch, Udeploy',
    level: -1
}];

let professionalExperience = [{
    id: 1,
    company: 'Larsen & Tubro Infotech',
    isCurrentCompany: true,
    roles: [
      "Managing and leading status calls for the team",
      "Performed requirement gathering, designed and developing technical solutions for teams on Ansible.",
      "Upgrade versions of infra using Ansible playbooks",
      "Developed CI/CD pipelines for users, so that they can use our solution as self servive tool.",
      "Have automated couchbase cluster which involves various Operations of CB Database.",
      "Developed Playbooks for Udeploy installation, version upgrade on Linux servers.",
      "To help various teams with BAU support, in order to execute pipelines.",
      "Have onboarded multiple payments app on our solutions.",

    ],
    technologies: 'Linux, Ansible, TeamCity and Jenkins',
    Client: 'Financial Bank',
    location: 'Bangalore',
    type: 'Technical Lead (Specialist)  - Dec 2020 to Present'
}, {
    id: 2,
    company: 'Sprinklr',
    isCurrentCompany: false,
    roles: [
      "Build and Deployment across Prod and Non-Prod Environments managed through Jenkins.",
      "Maintaining availability across all components, products and service cross Sprinklr Platform.",
      "Provisioning Linux servers using Ansible.",
      "Maintaining 5000+ AWS EC2 servers in Prod/QA environments and AWS resources like S3, Route53, Elastic Load Balancer.",
      "Writing Ansible playbook or scripting using Bash to manage the infrastructure using the code best practices.",
      "Monitor health of the cloud infrastructure by deploying various tools like Sensu, NewRelic, Cloudwatch, Graylog, Mwatch and Zabbix.",
      "Managing/Monitoring the JVM performance by Java Heap Size, garbage collection and memory management.",
      "Experience in creating DockerContainers leveraging existing Linux Containers and AMI's in addition to creating Docker Containers from scratch.",
      "Managed Kubernetes charts using Helm. Created reproducible builds of the Kubernetes applications, managedKubernetes manifest files and Managedreleases of Helm packages.",
      "Coordinating with Dev/QA teams for customer related issues.",
      "Developed, maintained and enhanced pre and post build scripts (Shell and Python)."
    ],
    technologies: 'Linux, Ansible, Jenkins, AWS/Azure, Basics of DOCKER & Kubernetes',
    location: 'Bangalore',
    Client: 'Inhouse',
    type: 'Sr. Operations Engineer - May 2017 to Dec 2020',
},
 {
    id: 3,
    company: 'NTT Data GDS',
    isCurrentCompany: false,
    roles: [
      "Deployed the applications of WAR, JAR, and EAR on multiple tomcat Server and maintained Load balancing, high availability and Fail over functionality.",
      "Performing Build and Patch Deployment on Test and Production Servers as a part of Release management.",
      "Coordinate with team like (Network, DB, Security) for the failover and patching and upgrades.",
      "Adherence to ITIL processes for processes like Change Management, Incident Management, Release management and Availability management.",
      "Coordinating in synergy with Infrastructure support teams during Disaster Recovery exercise.",
      "Creation, updating and troubleshooting of F5 Load Balancer Virtual and Siteminder Administration.",
      "Applications Deployment/ Decommission & Deco of Server Groups Zapplet Creation, Updating and Decommission."
    ],
    technologies: 'Linux Administrator, Middleware Operations.',
    Client: 'morgan stanley',
    location: 'Bangalore',
    type: 'Sr. Operations Consultant - Oct 2015 to Apr 2017'

},{
    id: 4,
    company: 'Mindtree Ltd.',
    isCurrentCompany: false,
    Client: 'KPN, netherlands',
    roles: [
        "First point of contact for any Technical Issues (Network Operation Center).",
        "24/7 dedicated support to ensure uninterrupted availability of IT resource.",
        "Perform health checks on servers by monitoring performance related components such as memory, CPU, network and disk activities and analyzing these reports and nding any issues that occur using Mwatch tool."
    ],
    technologies: 'Linux Administrator, Solaris and HP UX',
    location: 'Chennai',
    type: 'System Engineer - nov 2013 to OCT 2015'
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
    title: 'Red Hat Certified System Administrator (RHEL7) ',
    year: '01/2017',

}, {
    id: 2,
    year: '03/2017',
    title: 'RedHat Certified Engineer'
}, {
    id: 3,
    year: '03/2014',
    title: 'ITIL (Foundation Certificate in IT servive managment)'
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
