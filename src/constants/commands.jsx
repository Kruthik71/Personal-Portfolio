// src/constants/commands.jsx
import experience from "./experience";

export const commands = {
  help: (
    <div className="text-green-300 space-y-4">
      <div>
        <span className="font-bold">💻 System Commands:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>help</strong> – Show available commands
          </li>
          <li>
            <strong>clear</strong> – Clear the terminal
          </li>
          <li>
            <strong>neofetch</strong> – Display system info (Arch Linux style)
          </li>
        </ul>
      </div>

      <div>
        <span className="font-bold">👤 Personal Information:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>whoami</strong> – Display my identity
          </li>
          <li>
            <strong>about</strong> – Display about information
          </li>
          <li>
            <strong>skills</strong> – Show my technical skills
          </li>
          <li>
            <strong>projects</strong> – List my featured projects
          </li>
          <li>
            <strong>awards</strong> – Display my achievements
          </li>
          <li>
            <strong>others</strong> – Show my management/soft skills
          </li>
          <li>
            <strong>certifications</strong> – Show my certifications
          </li>
          <li>
            <strong>contact</strong> – Get my contact details
          </li>
        </ul>
      </div>

      <div>
        <span className="font-bold">🌐 Online Profiles:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>linkedin</strong> – Open my LinkedIn profile
          </li>
          <li>
            <strong>github</strong> – Open my GitHub profile
          </li>
          <li>
            <strong>leetcode</strong> – Open my LeetCode profile
          </li>
        </ul>
      </div>

      <div>
        <span className="font-bold">📄 Documents:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>resume</strong> – Download my resume
          </li>
        </ul>
      </div>
    </div>
  ),
  whoami:
    "Hi, I'm Kruthik B — a passionate backend developer exploring frontend, cloud, and GenAI 🚀",

  about: (
    <div>
      <p>
        👋 Hi, I'm <span className="text-green-300 font-bold">Kruthik B</span>.
      </p>
      <p>
        I'm a Software Developer with experience building scalable full-stack and backend systems using Java, Spring Boot, and modern microservice-based architectures. I specialize in designing RESTful APIs, implementing secure role-based authentication with Spring Security and JWT, and optimizing backend performance through Hibernate, DTO patterns, and Redis caching. I’ve worked on internal tools like Smart Desk and Help Nest, integrating MySQL, JDBC, and Thymeleaf to deliver end-to-end solutions. My expertise includes containerization with Docker, API documentation using OpenAPI/Swagger, and deploying applications on Azure with CI/CD pipelines. I’ve also contributed to headless CMS implementations (Contentstack, Contentful, Akeneo) and worked on high-concurrency, event-driven architectures using Kafka.{" "}
      </p>
      <br />
      <p>
        Alongside backend development, I've gained solid experience with ReactJS
        and TypeScript, allowing me to build full-stack features and deliver
        polished user experiences. Whether it's architecting backend systems,
        handling cloud deployments, or crafting frontend interfaces - I take
        pride in owning what I build and making it reliable.
      </p>{" "}
      <br />
      <p>
        Lately, I've been exploring the world of Generative AI and have enjoyed
        building intelligent apps using frameworks like LangChain. I'm always
        excited by opportunities where I can solve real problems, work with
        great teams, and keep pushing myself to grow as a developer.
        <br />
        <br />
        <p>
          Let's connect and see what we can create together!
          <br />
          📩kruthikbhupal7@gmail.com
        </p>
      </p>
    </div>
  ),
  projects: {
    render: () => (
      <div>
        <div className="mb-4">
          <span className="text-green-400 font-bold">
            Smart Desk - A booking application for reserving seat
          </span>{" "}
          <span className="text-green-300">
            [Java, SpringBoot, MySQL, Hibernate, React.js]
          </span>
          <ul className="list-disc ml-6 mt-1 text-green-200">
            <li>
              Documented the Smart Desk web platform, focusing on features like seat reservation and real-time availability using React and Spring Boot.
            </li>
            <li>
              Outlined user workflows, utilizing MySQL for data management and Spring Security for user authentication. Used Git and Bitbucket/GitHub for version control, reducing code merge conflicts.
            </li>
            <li>
              Detailed admin functionalities, integrating Spring Boot with MySQL JDBC Template and REST APIs for backend processes.
            </li>
            <li>
              Implemented security protocols for data protection and enhancing database connection pooling and performance. (An internal office tool used for booking and managing employee seating arrangements.)            </li>
          </ul>
        </div>

        <div>
          <span className="text-green-400 font-bold">
            Help Nest – A grievance application to raise and close disputes.
          </span>{" "}
          <span className="text-green-300">
            [Java, SpringBoot, MySQL, JDBC, Thymeleaf]
          </span>
          <ul className="list-disc ml-6 mt-1 text-green-200">
            <li>
              Built full-stack portal for raising and closing complaints with Thymeleaf templates and Spring Security role-based UI, featuring end-to-end form validation.
            </li>
            <li>
              Developed REST APIs using Hibernate ORM with JWT authentication, optimizing performance through DTOs and lazy loading.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  skills: {
    render: () => (
      <div className="text-green-300">
        <p className="text-green-200">
          <span className="font-bold text-green-400">
            • Programming Languages and Frameworks:
          </span>{" "}
          Java, OOPS, DSA, Spring Boot, Hibernate, Spring MVC, Multithreading, Collections, JDBC, Serialization.
        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">• Backend and System Design:</span>{" "}
          REST APIs, OAuth, Microservices, OpenAPI Generator, Scalable & Secure Multi-Tenant Architecture, Event-Driven Architecture (Kafka), High-Concurrency.
        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">• Database & Cloud:</span>{" "}
          SQL, MySQL, RDBMS, Azure, Application Gateway, Docker, Redis.
        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">• DevOps & Tools:</span>{" "}
          CI/CD Pipelines, Jenkins, Git, Maven
        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">• Cloud and DevOps:</span>{" "}
          AWS, Docker, Kubernetes, GitLab CI/CD, Jenkins
        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">
            • Testing & QA:
          </span>{" "}
          TDD, Postman, Unit & Integration Testing, Mockito.
        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">• Headless CMS & Services:</span>
          Contentstack, Contentful, Algolia, and Akeneo.        </p>
        <p className="text-green-200">
          <span className="font-bold text-green-400">
            • Problem Solving Skills:
          </span>{" "}
          Data Structures and Algorithms: Java (LeetCode – Active profile),
          System Design (LLD patterns, proficient in HLD concepts)
        </p>
      </div>
    ),
  },
  linkedin: {
    description: "Open LinkedIn profile",
    render: () => {
      // Open LinkedIn in a new tab
      if (typeof window !== "undefined") {
        window.open(
          "https://www.linkedin.com/in/kruthik-b-14a085215/",
          "_blank"
        );
      }
      return (
        <span>
          Opening{" "}
          <span className="underline font-bold">
            LinkedIn/kruthik-b-14a085215
          </span>
          ...
        </span>
      );
    },
  },
  resume: {
    description: "Download my resume",
    render: () => {
      if (typeof window !== "undefined") {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // Path relative to public/
        link.download = "Kruthik_Resume.pdf"; // Optional: Rename on download
        link.click();
      }

      return (
        <span>
          Downloading{" "}
          <span className="underline font-bold">Kruthik_Resume.pdf</span>...
        </span>
      );
    },
  },
  others: {
    description: "Show my management and soft skills",
    render: () => (
      <div className="text-green-300 space-y-4">
        <div>
          <span className="font-bold">🧠 Soft Skills:</span>
          <ul className="ml-4 list-disc">
            <li>
              Rapid learner with a strong ability to adapt to new technologies
              and environments.
            </li>
            <li>
              Excellent written and verbal communication skills, ensuring smooth
              collaboration.
            </li>
            <li>
              Proactive problem solver who enjoys tackling challenges with
              creativity and logic.
            </li>
            <li>
              Highly organized and detail-oriented, maintaining clarity even
              under pressure.
            </li>
            <li>
              Effective in cross-functional collaboration and open to feedback
              for continuous growth.
            </li>
          </ul>
        </div>

        <div>
          <span className="font-bold">🧑‍💼 Management Skills:</span>
          <ul className="ml-4 list-disc">
            <li>
              Demonstrated ownership of end-to-end project delivery in
              fast-paced environments.
            </li>
            <li>
              Experienced in Agile methodologies with regular sprint planning
              and retrospectives.
            </li>
            <li>
              Strong time management and prioritization to ensure deadlines are
              consistently met.
            </li>
            <li>
              Comfortable leading technical discussions and mentoring junior
              team members.
            </li>
            <li>
              Collaborated with cross-functional teams including QA, DevOps, and
              Product Owners.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  github: {
    description: "Open GitHub profile",
    render: () => {
      // Open GitHub in a new tab
      if (typeof window !== "undefined") {
        window.open("https://github.com/Kruthik71", "_blank");
      }
      return (
        <span>
          Opening{" "}
          <span className="underline font-bold">GitHub/Kruthik71</span>
          ...
        </span>
      );
    },
  },
  neofetch: {
    description: "Display system info (neofetch style)",
    alias: ["neofetch"],
    render: () => (
      <pre className="text-green-300 whitespace-pre-wrap">
        {`
       /\\       
      /  \\      
     / /\\ \\     
    / ____ \\    
   /_/    \\_\\   

User: Kruthik B
OS: Arch Linux
Hostname: kruthik.in
Time: ${new Date().toLocaleTimeString()}
Email: kruthikbhupal7@gmail.com
GitHub: gitHub.com/Kruthik71
LinkedIn: linkedin.com/in/kruthik-b-14a085215
`}
      </pre>
    ),
  },
  awards: {
    description: "Show awards and recognitions",
    render: () => (
      <div className="text-green-300 space-y-4">
        <div className="text-green-200">
          <p className="font-bold text-green-400 mb-1">
            🏆 Gems of Valtech Award - Valtech, India (<a href="https://www.linkedin.com/posts/kruthik-b-14a085215_gratitude-teamwork-valtech-activity-7318505215547133952-DRQb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZLOooB5m3HyKw5Eym9AkXUPhJf9qI1aUE">LINK</a>)
          </p>
          <p className="italic text-sm text-green-300 mb-2 ml-4">
            Presented: April 2025
          </p>
          <p className="ml-4 ">
              "Gratitude & Teamwork at Valtech"
              <br/>
              Recognized for exceptional collaboration and dedication while working with an incredible team at Valtech. Played a key role in driving successful backend development by fostering strong cross-functional partnerships, innovative problem-solving, and a shared commitment to excellence. This experience highlights the power of teamwork in achieving remarkable outcomes and delivering impactful solutions in a dynamic digital environment. Grateful for the opportunity to contribute, learn, and grow alongside such talented professionals!
              <br/>
              (Acknowledgment received from Valtech for outstanding teamwork and contributions to high-impact initiatives.)
          </p>
        </div>
        <div className="text-green-200">
          <p className="font-bold text-green-400 mb-1">
            🏆 Integration Champions Award - Valtech, India (<a href="https://www.linkedin.com/posts/kruthik-b-14a085215_embracing-the-future-with-mach-architectures-activity-7231174303981957120-MT3i?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZLOooB5m3HyKw5Eym9AkXUPhJf9qI1aUE">LINK</a>)
          </p>
          <p className="italic text-sm text-green-300 mb-2 ml-4">
            Presented: October 2024
          </p>
          <p className="ml-4">
              "Embracing the Future with MACH Architectures"
              <br/>
              Recognized for driving innovation and modernization by leveraging MACH (Microservices, API-first, Cloud-native, Headless) architectures to build scalable, future-proof digital solutions. Played a pivotal role in designing and implementing cutting-edge systems that enhance flexibility, performance, and business agility. Contributed to seamless integrations, optimized cloud-native deployments, and fostered a culture of continuous improvement through API-first and headless approaches. This acknowledgment highlights my commitment to transforming traditional systems into modular, resilient, and customer-centric architectures, enabling organizations to stay ahead in a rapidly evolving digital landscape.          </p>
        </div>
      </div>
    ),
  },
  contact: {
    description: "Show contact information",
    render: () => (
      <div className="text-green-200 space-y-1">
        <p>
          <span className="text-green-400 font-semibold">📧 Email:</span>{" "}
          kruthikbhupal7@gmail.com
        </p>
        <p>
          <span className="text-green-400 font-semibold">📍 Location:</span>{" "}
          Bangalore, India
        </p>
        <p>
          <span className="text-green-400 font-semibold">📞 Phone:</span>{" "}
          +91-9916878237
        </p>
        <p>
          <span className="text-green-400 font-semibold">🔗 LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/kruthik-b-14a085215/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-300"
          >
            linkedin.com/in/kruthik-b-14a085215
          </a>
        </p>
      </div>
    ),
  },
  certifications: {
    description: "Show my certifications",
    render: () => (
      <div className="text-green-300 space-y-4">
        <div>
          <span className="font-bold text-green-400">
            📄 Contentstack Implementaion Certification (Expiry - July 2026)
          </span>
          <p className="ml-4 text-green-200">
            This hands-on experience deepened my understanding of the MACH (Microservices-based, API-first, Cloud-native, Headless) architecture — a modern approach to building scalable, modular, and flexible digital platforms. I worked with Contentstack, a leading headless CMS, to implement a decoupled content infrastructure that supports seamless omnichannel delivery. This included: • Designing content models that separate content from presentation • Consuming APIs in front-end frameworks for dynamic content rendering • Leveraging cloud-native services to scale delivery and reduce latency.
          </p>
        </div>
        <div>
          <span className="font-bold text-green-400">
            📄 Contentful Certified Professional Exam (Expiry - Jun 2026)
          </span>
          <p className="ml-4 text-green-200">
            This certification validates my proficiency in Contentful, a leading headless CMS used for building modular, API-first digital experiences. It demonstrates my ability to design scalable content models, manage environments and workflows, and integrate Contentful into modern web architectures using REST and GraphQL APIs.
            <br/>
            As part of this journey, I gained hands-on experience in:
            <br/>
            {" "}• Structuring content types and references for reusability
            <br/>
            {" "}• Delivering omnichannel content using SDKs and API integrations
            <br/>
            {" "}• Managing localization, roles, and app framework extensions  
            <br/>
            This credential showcases my readiness to deliver enterprise-grade content solutions that align with MACH architecture principles.
          </p>
        </div>
      </div>
    ),
  },
  experience,
  leetcode: {
    description: "Open LeetCode profile",
    render: () => {
      // Open LeetCode in a new tab
      if (typeof window !== "undefined") {
        window.open("https://leetcode.com/u/kruthikb/", "_blank");
      }
      return (
        <span>
          Opening{" "}
          <span className="underline font-bold">LeetCode/kruthikb</span>
          ...
        </span>
      );
    },
  },
};
