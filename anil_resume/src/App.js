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
const developerName = 'Anil Kumar Kakarla';
let developerInfo = [{
    id: 1,
    icon: locationPath,
    value: 'Bangalore, India'
}, {
    id: 2,
    icon: mailPath,
    value: 'tech.anilkakarla@gmail.com'
}, {
    id: 3,
    icon: phonePath,
    value: '+91 9738972367'
}, {
    id: 4,
    icon: heartPath,
      value: 'Happily married'
}, {
    id: 5,
    icon: datePath,
    value: '23rd,Jan, 1991'
}, {
    id: 6,
    icon: linkedInPath,
    value: 'https://www.linkedin.com/in/arifit11/'
}];

let developerSummary = [{
    id: 1,
    summaryText: 'Currently Working with Sprinklr India Pvt. Ltd. as Sr. Operations Engineer with over 6+ years of experience in IT Operations, Infrastructure and Application Support (DevOps)'
}, {
    id: 2,
    summaryText: 'Good understanding and hands on experience on UNIX based operating system, Red Hat Linux, CentOS, AWS and Azure Cloud Infrastructure Management'
}, {
    id: 3,
    summaryText: 'Experience is using DevOps tools like Jenkins, Ansible, Elastic search and Docker'
}, {
    id: 4,
    summaryText: 'Good understanding of ITIL framework and its applications'
}, {
    id: 5,
    summaryText: 'Experience in opensource like Kafka, Mesos, GlassFish, Tomacat'
}, {
    id: 6,
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
    level: 2
}, {
    id: 2,
    lang: 'Telugu',
    level: 3
}];
// Heading should be Infrastructure Skills
let developmentSkills = [{
    id: 1,
    skillName: 'Linux, Unix, MAC ',
    level: 5
}, {
    id: 2,
    skillName: 'AWS',
    level: 4
}, {
    id: 3,
    skillName: 'Azure',
    level: 2
}, {
    id: 4,
    skillName: 'Glasssh, Apache, Tomcat',
    level: 3
}, {
    id: 5,
    skillName: 'Docker, kubernetes, Vagrant',
    level: 2
}];

let frameworkTools = [{
    id: 1,
    skillName: 'Zabbix, Sensu, MWatch',
    level: 3
},{
    id: 2,
    skillName: 'Ansible',
    level: 4
},{
    id: 3,
    skillName: 'Jenkins',
    level: 3
},{
    id: 4,
    skillName: 'Elasticsearch, MogoDb, SQL',
    level: 4
},{
    id: 5,
    skillName: 'Scripting (Python, Shell)',
    level: 2
}];

let professionalExperience = [{
    id: 1,
    company: 'Sprinklr',
    isCurrentCompany: true,
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
      "Designed and Developed automation test scripts using Python and shell.",
      "Developed, maintained and enhanced pre and post build scripts (Shell and Python)."
    ],
    technologies: 'Sprinklr is the most complete social media management system for the enterprise. We help the world’s largest brands do marketing, advertising, care, sales, research, and commerce on Facebook, Twitter, LinkedIn, and 21 other channels globally all on one integrated platform. This project involves maintaining end to end infrastructure support globally and ensures platform availability. Managing infrastructure and automation build deployment and releases. Scaling up infrastructure vertically and horizontally depending on the need Proactively Monitor and fix issues to ensure availability within SLA\'s.',
    location: 'Bangalore',
    type: 'Lead. Operations Engineer - May 2017 to Present'
}, {
    id: 2,
    company: 'Harman',
    isCurrentCompany: false,
    roles: [
      "Deployed the applications of WAR, JAR, and EAR on multiple tomcat Server and maintained Load balancing, high availability and Fail over functionality.",
      "Performing Build and Patch Deployment on Test and Production Servers as a part of Release management.",
      "Coordinate with team like (Network, DB, Security) for the failover and patching and upgrades.",
      "Adherence to ITIL processes for processes like Change Management, Incident Management, Release management and Availability management.",
      "Building Linux servers in AWS",
      "Adding servers for Nagios monitoring.",
      "Setting up OS level checks like Disk checks, CPU Load, CPU utilization."
    ],
    technologies: 'Dodge Project involves providing 24X7 supports for the critical applications. The objective is to maintain the availability and performance of all these core apps. This project is This project is aimed at migrating total in-house infra/applications to AWS – cloud. The availability of the sites and critical applications are achieved through monitoring the application and web servers and critical applications using monitoring tools such as Nagios. Project scope involves environment monitoring, L1/L2 application support, incident management, change management, configuration management, release management.',
    location: 'Bangalore',
    type: 'Development Engineer - April 2015 to Feb 2017'
}, {
    id: 3,
    company: 'PSC Global solutions',
    isCurrentCompany: false,
    roles: [
        "First point of contact for any Technical Issues (Network Operation Center).",
        "24/7 dedicated support to ensure uninterrupted availability of IT resource.",
        "Perform health checks on servers by monitoring performance related components such as memory, CPU, network and disk activities and analyzing these reports and nding any issues that occur using Mwatch tool."
    ],
    technologies: 'Incyyte is aimed at creating the web application. Integration of fixed tasks, troubleshooting, building, releasing, configuration management deliveries etc. The SCM setup is GIT and Jenkins CI server.',
    location: 'Bangalore',
    type: 'Associate Engineer- Aug 2013 to March 2015'
}];

let developerEducation = [{
    id: 1,
    title: 'BE in Computer Science',
    year: '2008 - 2012',
    desc: 'Acharya Nagarjuna University, Distinction - Guntur AP'
}, {
    id: 2,
    title: 'Intermediate',
    year: '2007 - 2008',
    desc: 'AP Board '
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
}
];

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
