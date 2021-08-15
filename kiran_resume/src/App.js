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
const developerName = 'Kiran Madan';
let developerInfo = [{
    id: 1,
    icon: locationPath,
    value: 'Chennai, India'
}, {
    id: 2,
    icon: mailPath,
    value: 'kiranmadan06@gmail.com '
}, {
    id: 3,
    icon: phonePath,
    value: '+91 9884364123'
}, {
    id: 4,
    icon: heartPath,
    value: 'happily Single'
}, {
    id: 5,
    icon: datePath,
    value: '01 Nov 1995'
}, {
    id: 6,
    icon: linkedInPath,
    value: 'https://www.linkedin.com/in/arifit11/'
}];

let developerSummary = [{
    id: 1,
    summaryText: 'Currently Working with HID tech pvt ltd. as Devops engineer with over 3+ years of experience in IT Operations, Infrastructure and Application Support (DevOps)'
}, {
    id: 2,
    summaryText: 'Good understanding and hands on experience on UNIX based operating system, Red Hat Linux, CentOS, AWS and Azure Cloud Infrastructure Management'
}, {
    id: 3,
    summaryText: 'Experience is using DevOps tools like Ansible, Jenkins, GIT'
}, {
    id: 4,
    summaryText: 'Good skills of Information gathering and delivering solutions to coustomer'
}, {
    id: 5,
    summaryText: 'Handling the daily server administration tasks and incidents through ITSM tool ServiceNow'
}, {
    id: 6,
    summaryText: 'Working on migrating Customers to Kubernetes'
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
    lang: 'Punjabi',
    level: 3
}];
// Heading should be Infrastructure Skills
let developmentSkills = [{
    id: 1,
    skillName: 'Linux/UNIX ',
    level: 4
}, {
    id: 2,
    skillName: 'AWS, Azzure',
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
    skillName: 'Jenkins, GIT',
    level: -1
},{
    id: 4,
    skillName: 'Sensu, CloudWatch, Nagios',
    level: -1
}];

let professionalExperience = [{
    id: 1,
    company: 'HID Techs Private Limited',
    isCurrentCompany: true,
    roles: [
      "Managing and leading status calls for the team",
      "Performed requirement gathering, designed and developing technical solutions for teams on Ansible.",
      "Architecting and deploying AWS infrastructure using services like EC2, ELB, Autoscaling, EBS, VPC, S3, CloudFront, RDS, IAM, CloudFormation, EFS, Lambda, Certificate Manager, Trusted Advisor and Route53 & providing the solutions with best practices",
      "Developed CI/CD pipelines for users, so that they can use our solution as self servive tool.",
      "Have automated couchbase cluster which involves various Operations of CB Database.",
      "Developed Playbooks for Udeploy installation, version upgrade on Linux servers.",
      "To help various teams with BAU support, in order to execute pipelines.",
      "Infrastructure & Application monitoring through AWS CloudWatch & custom scripts, also using several tools e.g., Nagios, New-Relic & Splunk ",
      "Monitor health of the cloud infrastructure by deploying various tools like Sensu, NewRelic, Cloudwatch, Graylog, Mwatch",
      "Coordinating with Dev/QA teams for customer related issues.",
      "Handling the daily server administration tasks and incidents through ITSM tool ServiceNow.",
      "Build and Deployment across Prod and Non-Prod Environments managed through Jenkins.",
    ],
    technologies: 'Linux, Ansible, TeamCity and Jenkins',
    Client: 'inhouse Project',
    location: 'Chennai',
    type: 'Cloud Deployment Engineer  - Sep 2019 to Present'
}, {
    id: 2,
    company: 'Capgemni',
    isCurrentCompany: false,
    roles: [

      "Maintaining availability across all components, products and service.",
      "Provisioning Linux servers using Ansible.",
      "Banking application maintenance, code deployment and working with many vendor applications like Sales Platform, Casper, RBIS, ProAKT, Kofax, Linx, Service Platform etc.",
      "Writing Ansible playbook or scripting using Bash to manage the infrastructure using the code best practices.",
      "Monitor health of the cloud infrastructure by deploying various tools like Sensu, NewRelic, Cloudwatch, Graylog, Mwatch and Zabbix.",
      "Managing/Monitoring the JVM performance by Java Heap Size, garbage collection and memory management.",
      "Experience in creating DockerContainers leveraging existing Linux Containers and AMI's in addition to creating Docker Containers from scratch.",
      "Managed Kubernetes charts using Helm. Created reproducible builds of the Kubernetes applications, managedKubernetes manifest files and Managedreleases of Helm packages.",
      "Coordinating with Dev/QA teams for customer related issues.",
      "Developed, maintained and enhanced pre and post build scripts (Shell and Python)."
    ],
    technologies: 'Linux, Ansible, Jenkins, AWS/Azure, Basics of DOCKER & Kubernetes',
    location: 'noida',
    Client: 'Banking ',
    type: 'Sr. Operations Engineer - May 2017 to Dec 2020',
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
    title: 'MSC - Kalinga University  ',
    year: '2020',

}, {
    id: 2,
    year: '2018',
    title: 'BSC MDU Rohtak  '
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
