import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  certificate: any=[
     {
      id: 1,
      title: 'Angular-The Complete Guide',
      completionDate:'June 3, 2021',
      Platform: 'Udemy',
      imgUrl: '/assets/images/angular.jpg',
    },
    {
      id: 2,
      title: 'Node-The Complete Node.js Developer Course',
      completionDate:'June 13, 2021',
      Platform: 'Udemy',
      imgUrl: '/assets/images/node.jpg',
    },
    {
      id: 3,
      title: 'Accenture Discovery Program',
      completionDate:'June 20, 2020',
      Platform: 'InsideSherpa',
      imgUrl: '/assets/images/accenture.jpg',
    },
    {
      id: 4,
      title: 'Agile Software Deveopment-Scrum For Developers',
      completionDate:'July 5, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/agile-software-development.jpg',
    },
    {
      id: 5,
      title: 'Agile Testing',
      completionDate:'July 5, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/agile-testing.jpg',
    },
    {
      id: 6,
      title: 'Angular',
      completionDate:'May 31, 2020',
      Platform: 'Guvi',
      imgUrl: '/assets/images/guvi-angular.jpg',
    },
    {
      id: 7,
      title: 'Java',
      completionDate:'May 31, 2020',
      Platform: 'Guvi',
      imgUrl: '/assets/images/guvi-java.jpg',
    },
    {
      id: 8,
      title: 'Http Essential Training',
      completionDate:'July 7, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/http-essential-training.jpg',
    },
    {
      id: 9,
      title: 'JavaScript Basic For Beginners',
      completionDate:'Febuary 21, 2021',
      Platform: 'Udemy',
      imgUrl: '/assets/images/javascript-basic-for-beginners-udemy.jpg',
    },
    {
      id: 10,
      title: 'JavaScript Essential Training',
      completionDate:'May 27, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/javascript-essential-training.jpg',
    },
    {
      id: 11,
      title: 'Learning Azure DevOps',
      completionDate:'July 5, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/learning-azure-devops.jpg',
    },
    {
      id: 12,
      title: 'JPMorgan Chase & Co- Software Engineering Virtual Experiance',
      completionDate:'July 20, 2020',
      Platform: 'InsideSherpa',
      imgUrl: '/assets/images/jpmorgan.jpg',
    },
    {
      id: 13,
      title: 'Learning MongoDB',
      completionDate:'July 8, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/learning-mongo-db.jpg',
    },
    {
      id: 14,
      title: 'Microservices Foundation',
      completionDate:'July 7, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/microserices-foundation.jpg',
    },
    {
      id: 15,
      title: 'Responsive Web Design-html5+css3 for entrepreneurs 2018',
      completionDate:'Febuary 17, 2021',
      Platform: 'Udemy',
      imgUrl: '/assets/images/responsive-web-design.jpg',
    },
    {
      id: 16,
      title: 'Software Architecture-Domain-Driven-Design',
      completionDate:'July 7, 2021',
      Platform: 'LinkedIn Learning',
      imgUrl: '/assets/images/software-arc.jpg',
    },
  ]
  projects:any = [
    {
      id: 1,
      title: 'Twitter Sentiment Analysis Using Natural Language Processing',
      duration:'Sep 2020 - Jun 2021',
      githurl:'https://github.com/sheth17nirali/twittter-sentiment-analysis',
      desc: `This project is for Master Thesis during Masters.
      Regex was applied to filter the tweets from the csv file and for cleaning the data for further use.
      Involved Twitter Tweepy API for fetching the tweets in a CSV file.
      This is done using Anaconda spyder and in this project algorithms are used on dataset to see which algorithm gives much accuracy`,
    },
    {
      id: 2,
      title: ' Ductal Carcinoma Prediction Using Machine Learning',
      duration:'Dec 2019 - May 2020',
      githurl:'',
      desc: `This project was done for the 20th International Conference on Science, Engineering and Technology . 
      This paper showed how to detect breast cancer using the already stored data that may help in future to 
      recognize cancer in early stages.
       `,
    },
    {
      id: 3,
      title: ' Process Synchronization In Logical Clocks Using Lamport Algorithm',
      duration:'Dec 2019 - May 2020',
      githurl:'',
      desc: `This project shows which event occurred first in distributed system as time is an 
       important issue which is used for ordering the event and scheduling the process.
       Using java programming, the diagram view of ordering of event was shown.
        `,
    },
    {
      id: 4,
      title: 'Sweet Treats-E commerce Website',
      duration:'Dec 2019 - May 2020',
      githurl:'https://github.com/sheth17nirali/sweet-treats-ecommerce-website',
      desc: `A normal E commerce website that deals with bakery items, gift items.
      It performed major Operations like add to cart, delete from cart, payment options also had an admin option
      which the owner can use to add/remove products and to mention if certain product is out of stock.
      A project developed for college component using HTML, CSS/JavaScript and PHP as database server.`,
    },
    {
      id: 5,
      title: 'Automatic Text Summarization in Natural Language Processing',
      duration:'Aug 2019 - Nov 2019',
      githurl:'',
      desc: `This project was done for the 19th International Conference on Science,
       Engineering and Technology. 
       this paper gave breif description of how text summarization works using NLP.`,
    },
    {
      id: 6,
      title: 'Hostel Management System',
      duration:'Jan 2018 - May 2018',
      githurl:'',
      desc: `A system that simplifies the need to register for hostel allotment. 
      this project was made using html/CSS,
       Java Script and php for the database. 
       This was made as a final year project for my graduation.`,
    },
    {
      id: 7,
      title: 'Library Management System Using Java',
      duration:'Jun 2017 - Dec 2017',
      githurl:'',
      desc: `This project was build as a personal project to understand the working of java in real word. 
      In this project the admin can add and delete and librarian add/view, can issue/view, and return books. 
      Tools used for the creation is Eclipse and mySQL for database.`,
    },
    {
      id: 8,
      title: 'Bus ticket Management System',
      duration:'Jun 2017 - Dec 2017',
      githurl:'https://github.com/sheth17nirali/bus-ticket-management-system',
      desc: `This project was build as a personal project to understand the working of java in real word. 
      In this project the user can see the management of ticket using a portal, user can book ticket and also cancel
      ticket. User can also see whether there is empty seat and book his desired seat.`,
    },


  ]
  about2 = `Experienced Mean Stack, and Java developer with a strong track record in creating user-friendly web applications .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Proficient in Java, Angular 2+,node.js, and database management (mongoDB, MySQL and Oracle) .
  Collaborative team player with expertise in complex workflow functionality and using Git, and Azure DevOps for version control`

  about = "Goal-oriented Mean Stack developer with almost 2 years of experience, seeking opportunities to apply expertise in building dynamic web applications. Committed to delivering efficient and innovative solutions using Angular and Java. Eager to contribute to a dynamic team and enhance skills in software development."
  resumeurl = "https://drive.google.com/file/d/1s4TVk_hZfv4VZJWfyKOVjuVopkCwGxZt/view?usp=drive_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL , MONOGO , PL/SQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'JAVA',
      'progress': '75%'
    },
  ];


  educationData: any = [
    {
      'id': '4',
      'from_to_year': '2019-2021',
      'education': 'Master\'s Degree',
      'stream': 'Master of Computer Application',
      'location':'Vellore, Tamil Nadu',
      'info': `
Completed M.C.A in Computer Applicaion with 8.41 GPA.
`,
      'institution': 'VIT'
    },
    {
      'id': '3',
      'from_to_year': '2015 - 2018',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Computer Application',
      'location':'Ranchi, Jharkhand',
      'info': `
Completed BCA in Computer Application with 6.64 CGPA.
`,
      'institution': 'BIT MESRA'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2014',
      'education': 'Higher Secondary',
      'stream': 'Science, Computer and Mathematics',
      'location':'Jamshedpur, Jharkhand',
      'institution': 'A.D.L.S. SUNSHINE SCHOOL',
      'info': `The High School was mainly focus on the bases of computer, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 84%.`
    },
    {
      'id': '1',
      'from_to_year': '2011 - 2012',
      'education': 'Secondary  School',
      'stream': 'Science,Computer and Mathematics',
      'location':'Jamshedpur, Jharkhand',
      'institution': 'A.D.L.S. SUNSHINE SCHOOL',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 82%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'PwC',
      location: 'Kolkata',
      timeline: 'November 2021 to May 2023',
      role: 'Associate',
      work: `Worked for different state level electricity projects for scheduling, Accounting, Metering, and settlement of transaction in electricity .
      Processing of collected real time data, Worked on validation of data for further calculation of bills with respect to the regulation provided by client .
      Involved in development of jsp and angular framework based application following waterfall model .
      Worked on complex framework which involves data processing and calculation with respect to data using stored procedures and also fetching the final calculated data .
      Creating stored procedures and managing of data in the backend for the real time data fetched .
      Proficient in implementing CI/CD with Azure DevOps pipelines and managing project tasks through Azure Boards for effective progress tracking .
      Built numerous stored procedures using joins to fetch data from multiple data points simultaneously .
      Collaborated on workflow optimization with Azure Repos and utilized Azure DevOps for planning, version control, and CI/CD. Demonstrated expertise in leveraging Azure DevOps tools to streamline project development and achieve efficient software delivery .
      Delivered project on time, ensuring high customer satisfaction 
      `

    },
    {
      id: 3,
      company: 'Jio Platforms Limited',
      location: 'Mumbai',
      timeline: 'June 2021 to November 2022',
      role: 'Software Developer',
      work: `Worked for internal projects for jio facilities application, FTTX portal, Change order management system, and Report module application . 
      Developed multiple features and also actively participated in the resolution of production bugs . 
      Acted on complex workflow functionality and also performed CRUD operations . 
      Fetching data using API and altering the fetched data handled using frontend . 
      Made reusable components like dynamic data field addition, filtered data tables, custom message pop-ups, etc . 
      Used Git version control technology, azure, visual studio code, postman, dqman etc for development and deployment . 
      Binding of various API with frontend using Angular .
      Responsible for the backend development by building Get and Post calls .
      Designed Enterprise Content Management Portals at reliance jio using angular framework .
      Collaborated with web Designers, backend developers and UX designers to design, build, test and improve web applications .
      Proficient in implementing CI/CD with Azure DevOps pipelines and managing project tasks through Azure Boards for effective progress tracking .
      Collaborated on workflow optimization with Azure Repos and utilized Azure DevOps for planning, version control, and CI/CD. Demonstrated expertise in leveraging Azure DevOps tools to streamline project development and achieve efficient software delivery .
      Delivered project on time, ensuring high customer satisfaction .
      Involved in all stages of software development life cycle(SLDC) as well as AGILE/SCRUM workflow
      `
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

  //   {
  //     id: 1,
  //     company: 'Tata Consultancy Services',
  //     location: 'Gandhinagar and Pune',
  //     timeline: 'June 2019 - Jan 2021',
  //     role: 'Assistant System Engineer Trainee',
  //     work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

  // Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  // Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  // Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  // `
  //   },


  ]

  extraCircularInfo: any = [
    // {
    //   id: 4,
    //   company: 'PwC',
    //   location: 'Kolkata',
    //   timeline: 'November 2021 to May 2023',
    //   role: 'Associate',
    //   work: `Worked for different state level electricity projects for scheduling, Accounting, Metering, and settlement of transaction in electricity .
    //   Processing of collected real time data, Worked on validation of data for further calculation of bills with respect to the regulation provided by client .
    //   Involved in development of jsp and angular framework based application following waterfall model .
    //   Worked on complex framework which involves data processing and calculation with respect to data using stored procedures and also fetching the final calculated data .
    //   Creating stored procedures and managing of data in the backend for the real time data fetched .
    //   Proficient in implementing CI/CD with Azure DevOps pipelines and managing project tasks through Azure Boards for effective progress tracking .
    //   Built numerous stored procedures using joins to fetch data from multiple data points simultaneously .
    //   Collaborated on workflow optimization with Azure Repos and utilized Azure DevOps for planning, version control, and CI/CD. Demonstrated expertise in leveraging Azure DevOps tools to streamline project development and achieve efficient software delivery .
    //   Delivered project on time, ensuring high customer satisfaction 
    //   `
    // },
    {
      id: 1,
      company: 'Cognizant',
      location: 'Kolkata',
      timeline: 'May 2018-June 2018',
      role: 'Programmer Analyst Trainee',
      work: `Designed, developed, and tested features using spring boot on a banking application .
      Dynamic & seamless testing .
      Successfully performed test runs against multiple product features at once .
      Tackled complex problems using advanced logic in the java environment .
      Scaled applications and deployed those using Kubernetes .
      Implemented the micro services using spring boot .
      Developed the application using Hibernate and Spring Framework
      
      `
    },
    {
      id: 2,
      company: 'Volt Technologies',
      location: 'Ranchi',
      timeline: 'January 2021 to June 2021',
      role: 'Live project and Training',
      work: `project title: Online Contractor's Registration (client:
        Jharkhand Government) worked on vb.net, html, c#, java script.
         My work representation was I was in charge of developing front-end and connecting
        database for fetching and altering of data.
        
      `
    }
    // {
    //   id:1,
    //   title: 'Blogger',
    //   description: '',
    //   img: 'assets/images/Nirali Kothari – Medium1.png',
    //   url: 'https://mehulkothari05.medium.com/'
    // },
    // {
    //   id:1,
    //   title: 'Github',
    //   description: '',
    //   img: 'assets/images/Mehulkothari_github.png',
    //   url: 'https://github.com/mehulk05/'
    // },
    // {
    //   id:1,
    //   title: 'Freelancing',
    //   description: '',
    //   img: 'assets/images/mehul_freelancing.png',
    //   url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    // },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  getCertificates(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.certificate;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
