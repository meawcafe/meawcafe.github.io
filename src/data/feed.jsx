// import cat from "../assets/cat.jpeg";

export default [
  {
    section_id: "about-me",
    user: {
      name: "Milton M",
      at: "@meawcafe",
      avatar: "https://avatars.githubusercontent.com/u/44252635?v=4",
    },
    //     content: `<b style="font-size: 1.4rem">Hi, Welcome to my profile.</b>
    // <span>👾 ⚬ A bit about me:</span>
    // <span>I'm a <b>proactive</b>, <b>organized</b>, and <b>detail-oriented</b> person with strong interpersonal skills and a goal-oriented mindset. I'm a <b>fast learner</b> and passionate about what I do.</span>
    // <span>I've been living on my own since I was 19yo, and I'm very responsible. I'm open to relocating if needed. By the way, <b>i'm ${((
    //       d
    //     ) =>
    //       new Date().getFullYear() -
    //       d.getFullYear() -
    //       (new Date() <
    //       new Date(new Date().getFullYear(), d.getMonth(), d.getDate())
    //         ? 1
    //         : 0))(new Date("2002-11-23"))}yo</b>.</span>
    // <span><b>I started programming 7 years ago</b> with Python, and now I focus on <b>web development</b>. I'm very dedicated to what I do and pick things up quickly. I'm pretty easygoing, communicate well, and <b>enjoy working in a team</b>.</span>
    // <span>I’m curious and enjoy learning a bit of everything — from <b>editing images</b> and <b>videos</b> (mostly for personal projects) to <b>assembling</b> and <b>maintaining computers</b>. I also love <b>photography</b>.</span>`,
    content: (
      <>
        <b style={{ fontSize: "1.4rem" }}>Hi, Welcome to my profile.</b>
        <span>👾 ⚬ A bit about me:</span>
        <span>
          I'm a <b>proactive</b>, <b>organized</b>, and <b>detail-oriented</b>{" "}
          person with strong interpersonal skills and a goal-oriented mindset.
          I'm a <b>fast learner</b> and passionate about what I do.
        </span>
        <span>
          I've been living on my own since I was 19yo, and I'm very responsible.
          I'm open to relocating if needed. By the way,{" "}
          <b>
            i'm{" "}
            {((d) =>
              new Date().getFullYear() -
              d.getFullYear() -
              (new Date() <
              new Date(new Date().getFullYear(), d.getMonth(), d.getDate())
                ? 1
                : 0))(new Date("2002-11-23"))}
            yo
          </b>
          .
        </span>
        <span>
          <b>I started programming 7 years ago</b> with Python, and now I focus
          on <b>web development</b>. I'm very dedicated to what I do and pick
          things up quickly. I'm pretty easygoing, communicate well, and{" "}
          <b>enjoy working in a team</b>.
        </span>
        <span>
          I’m curious and enjoy learning a bit of everything — from{" "}
          <b>editing images</b> and <b>videos</b> (mostly for personal projects)
          to <b>assembling</b> and <b>maintaining computers</b>. I also love{" "}
          <b>photography</b>.
        </span>
      </>
    ),
    social_info: {
      views: 1500,
      likes: 120,
      comments: 45,
      shares: 30,
    },
    timestamp: "2 hours ago",
    overflow: true,
    // media: [
    //   {
    //     type: "image",
    //     url: cat,
    //     alt: "A cute cat"
    //   }
    // ]
  },
  {
    section_id: "education",
    user: {
      name: "Milton M",
      at: "@meawcafe",
      avatar: "https://avatars.githubusercontent.com/u/44252635?v=4",
    },
    // content: `<b style="font-size: 1.4rem">Education</b>
    // <span>🎓 ⚬ <b>Bachelor of Technology</b> in Internet Systems</span>
    // <span><b>Total workload:</b> 2,800 hours. <span style="color: #828282">(2,400 hours theoretical and practical – compliant with <a href="https://cncst.mec.gov.br/" target="_blank">CNCST</a> requirements – 240 hours <b>Supervised Internship</b> – 160 hours <b>Graduation Project</b>)</span></span>
    // <span><b>Institution:</b> <a href="https://www.fatecjales.edu.br/" target="_blank">Faculdade de Tecnologia Prof. José Camargo</a></span>
    // <span><b>Maintaining Institution:</b> <a href="https://www.cps.sp.gov.br/" target="_blank">Centro Paula Souza</a></span>
    // <span><b>Professional Roles:</b> Systems Analyst, Web Developer (Frontend/Backend/Full Stack), Software Engineer, Technical Web Designer, Web Solutions Architect, SEO Analyst, IT Project Manager, IT Consultant.</span>

    // <br />
    // <span>🎓 ⚬ <b>Technical Course</b> in Internet Computing</span>
    // <span><b>Total workload:</b> 1,200 hours <span style="color: #828282">(100 hours <b>Graduation Project</b>)</span></span>
    // <span><b>Institution:</b> <a href="https://etecvotuporanga.cps.sp.gov.br/" target="_blank">ETEC Frei Arnaldo Maria de Itaporanga</a></span>
    // <span><b>Maintaining Institution:</b> <a href="https://www.cps.sp.gov.br/" target="_blank">Centro Paula Souza</a></span>
    // <span><b>Professional Roles:</b> Advertising agencies, research centers, educational institutions, public and private organizations, non-profits, and companies specializing in software, app, and website development across mobile, desktop, and web platforms.</span>

    // <br />
    // <span>🎓 ⚬ <b>Master of Science (M.Sc.)</b> in Computer Science</span>
    // <span><b>Total workload:</b> From March 2024 to May 2024</span>
    // <span><b>Institution:</b> <a href="https://www.ibilce.unesp.br/" target="_blank">UNESP – IBILCE – Instituto de Biociências, Letras e Ciências Exatas</a></span>
    // <span><b>About:</b> Not completed due to personal reasons. I plan to pursue a similar program again in Spain.</span>
    // `,
    content: (
      <>
        <b style={{ fontSize: "1.4rem" }}>Education</b>
        <span>
          🎓 ⚬ <b>Bachelor of Technology</b> in Internet Systems
        </span>
        <span>
          <b>Total workload:</b> 2,800 hours.{" "}
          <span style={{ color: "#828282" }}>
            (2,400 hours theoretical and practical – compliant with{" "}
            <a
              href="https://cncst.mec.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNCST
            </a>{" "}
            requirements – 240 hours <b>Supervised Internship</b> – 160 hours{" "}
            <b>Graduation Project</b>)
          </span>
        </span>
        <span>
          <b>Institution:</b>{" "}
          <a
            href="https://www.fatecjales.edu.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Faculdade de Tecnologia Prof. José Camargo
          </a>
        </span>
        <span>
          <b>Maintaining Institution:</b>{" "}
          <a
            href="https://www.cps.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centro Paula Souza
          </a>
        </span>
        <span>
          <b>Professional Roles:</b> Systems Analyst, Web Developer
          (Frontend/Backend/Full Stack), Software Engineer, Technical Web
          Designer, Web Solutions Architect, SEO Analyst, IT Project Manager, IT
          Consultant.
        </span>

        <br />
        <span>
          🎓 ⚬ <b>Technical Course</b> in Internet Computing
        </span>
        <span>
          <b>Total workload:</b> 1,200 hours{" "}
          <span style={{ color: "#828282" }}>
            (100 hours Graduation Project)
          </span>
        </span>
        <span>
          <b>Institution:</b>{" "}
          <a
            href="https://etecvotuporanga.cps.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETEC Frei Arnaldo Maria de Itaporanga
          </a>
        </span>
        <span>
          <b>Maintaining Institution:</b>{" "}
          <a
            href="https://www.cps.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centro Paula Souza
          </a>
        </span>
        <span>
          <b>Professional Roles:</b> Advertising agencies, research centers,
          educational institutions, public and private organizations,
          non-profits, and companies specializing in software, app, and website
          development across mobile, desktop, and web platforms.
        </span>
        <br />
        <span>
          🎓 ⚬ <b>Master of Science (M.Sc.)</b> in Computer Science
        </span>
        <span>
          <b>Total workload:</b> From March 2024 to May 2024
        </span>
        <span>
          <b>Institution:</b>{" "}
          <a
            href="https://www.ibilce.unesp.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNESP – IBILCE – Instituto de Biociências, Letras e Ciências Exatas
          </a>
        </span>
        <span>
          <b>About:</b> Not completed due to personal reasons. I plan to pursue
          a similar program again in Spain.
        </span>
      </>
    ),
    social_info: {
      views: 1500,
      likes: 120,
      comments: 45,
      shares: 30,
    },
    timestamp: "3 hours ago",
    overflow: true,
  },
  {
    section_id: "work-experience",
    user: {
      name: "Milton M",
      at: "@meawcafe",
      avatar: "https://avatars.githubusercontent.com/u/44252635?v=4",
    },
    // content: `<b style="font-size: 1.4rem">Work Experience</b>
    // <\span>💼 ⚬ <b>Full-Stack Developer</b> – <a href="https://www.linkedin.com/company/enterscience" target="_blank">EnterScience</a> (The website of this company was actually entirely developed by me).</span>
    // <span><b>Total workload:</b> From May 2022 to April 2024</span>
    // <span>Worked on Front-End development using React, Next.js, and Vue.js across various projects including e-commerce sites, course platforms, landing pages, evaluation systems, and more.
    // Back-End development experience with Laravel, Node.js, PostgreSQL, and MySQL.</span>

    // <br />
    // <span>💼 ⚬ <b>Administrative Assistant Intern</b> – <a href="https://www.votuporanga.sp.gov.br/portal/secretarias/32/secretaria-da-saude" target="_blank">Secretaria de Saúde de Votuporanga</a></span>
    // <span><b>Total workload:</b> From June 2020 to December 2020</span>
    // <span><b>Internship completed during technical course</b>. Responsible for organizing and filing documents, preparing spreadsheets, and editing data in the e-SUS system (Brazilian Ministry of Health).</span>
    // `,
    content: (
      <>
        <b style={{ fontSize: "1.4rem" }}>Work Experience</b>
        <span>
          💼 ⚬ <b>Full-Stack Developer</b> –{" "}
          <a
            href="https://www.linkedin.com/company/enterscience"
            target="_blank"
            rel="noopener noreferrer"
          >
            EnterScience
          </a>{" "}
          (The website of this company was actually entirely developed by me).
        </span>
        <span>
          <b>Total workload:</b> From May 2022 to April 2024
        </span>
        <span>
          Worked on Front-End development using React, Next.js, and Vue.js
          across various projects including e-commerce sites, course platforms,
          landing pages, evaluation systems, and more. Back-End development
          experience with Laravel, Node.js, PostgreSQL, and MySQL.
        </span>

        <br />
        <span>
          💼 ⚬ <b>Administrative Assistant Intern</b> –{" "}
          <a
            href="https://www.votuporanga.sp.gov.br/portal/secretarias/32/secretaria-da-saude"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secretaria de Saúde de Votuporanga
          </a>
        </span>
        <span>
          <b>Total workload:</b> From June 2020 to December 2020
        </span>
        <span>
          <b>Internship completed during technical course</b>. Responsible for
          organizing and filing documents, preparing spreadsheets, and editing
          data in the e-SUS system (Brazilian Ministry of Health).
        </span>
      </>
    ),
    social_info: {
      views: 1500,
      likes: 120,
      comments: 45,
      shares: 30,
    },
    timestamp: "5 hours ago",
    overflow: true,
  },
  {
    section_id: "skills",
    user: {
      name: "Milton M",
      at: "@meawcafe",
      avatar: "https://avatars.githubusercontent.com/u/44252635?v=4",
    },
    // content: `<b style="font-size: 1.4rem">Technologies and languages I work with</b>

    // <span>🚀 ⚬ Frequently Used:</span>
    // <img src="https://skillicons.dev/icons?i=react,vue,html,css,tailwind,js,ts,linux,laravel,nextjs,nodejs,php,py,jquery,mysql,postgres,vscode,docker,git,github,bootstrap,bash&perline=11" alt="Skills" style="width: 100%; height: auto;" />
    // <span style="font-size: 0.8rem"><b>Skills:</b> React, Vue.js, HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Linux, Laravel, Next.js, Node.js, PHP, Python, JQuery, MySQL, PostgreSQL, VSCode, Docker, Git, GitHub, Bootstrap, Bash</span>

    // <br />
    // <span>🧪 ⚬ Occasionally Used:</span>
    // <img src="https://skillicons.dev/icons?i=ae,ps,pr,angular,svelte,gitlab,c,cs,java,electron,figma,firebase,flutter,mongodb&perline=11" alt="Skills" style="width: 100%; height: auto;" />
    // <span style="font-size: 0.8rem"><b>Skills:</b> Adobe After Effects, Adobe Photoshop, Adobe Premiere Pro, Angular, Svelte, GitLab, C, C#, Java, Electron, Figma, Firebase, Flutter, MongoDB</span>
    // `,
    content: (
      <>
        <b style={{ fontSize: "1.4rem" }}>
          Technologies and languages I work with
        </b>

        <span>🚀 ⚬ Frequently Used:</span>
        <img
          src="https://skillicons.dev/icons?i=react,vue,html,css,tailwind,js,ts,linux,laravel,nextjs,nodejs,php,py,jquery,mysql,postgres,vscode,docker,git,github,bootstrap,bash&perline=11"
          alt="Skills"
          style={{ width: "100%", height: "auto" }}
        />
        <span style={{ fontSize: "0.8rem" }}>
          <b>Skills:</b> React, Vue.js, HTML, CSS, Tailwind CSS, JavaScript,
          TypeScript, Linux, Laravel, Next.js, Node.js, PHP, Python, JQuery,
          MySQL, PostgreSQL, VSCode, Docker, Git, GitHub, Bootstrap, Bash
        </span>

        <br />
        <span>🧪 ⚬ Occasionally Used:</span>
        <img
          src="https://skillicons.dev/icons?i=ae,ps,pr,angular,svelte,gitlab,c,cs,java,electron,figma,firebase,flutter,mongodb&perline=11"
          alt="Skills"
          style={{ width: "100%", height: "auto" }}
        />
        <span style={{ fontSize: "0.8rem" }}>
          <b>Skills:</b> Adobe After Effects, Adobe Photoshop, Adobe Premiere
          Pro, Angular, Svelte, GitLab, C, C#, Java, Electron, Figma,
          FirebaseFlutterMongoDB
        </span>
      </>
    ),
    social_info: {
      views: 1500,
      likes: 120,
      comments: 45,
      shares: 30,
    },
    timestamp: "8 hours ago",
    overflow: true,
  },

  {
    section_id: "projects",
    user: {
      name: "Milton M",
      at: "@meawcafe",
      avatar: "https://avatars.githubusercontent.com/u/44252635?v=4",
    },
    content: (
      <>
        <b style={{ fontSize: "1.4rem" }}>
          Personal Projects & Professional Projects
        </b>

        <span>
          I’ve done many other things, but I can’t show them or no longer have
          access to them. Some I chose not to reveal, like the admin panel of
          certain websites, because, just like the code is proprietary, the
          admin panel is a sensitive area.
        </span>
        <span>
          What you’re seeing here was 100% made by me, including the back-end.
          I’ve also worked on several other projects with others, but those are
          not included because they weren’t solely my effort.
        </span>
        {/* check out my https://github.com/meawcafe profile button */}
        <span>
          If you want to see more of my work, check out my{" "}
          <a
            href="https://github.com/meawcafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>
          .
        </span>
      </>
    ),
    social_info: {
      views: 1500,
      likes: 120,
      comments: 45,
      shares: 30,
    },
    timestamp: "11 hours ago",
    overflow: true,
    media: [
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/baI7v3IgWMw/hqdefault.jpg",
        url: "https://www.youtube.com/embed/baI7v3IgWMw",
        title: "MeetES Video Call",
        details:
          "I only recorded the front-end. Later, I developed the connection system using Socket.io and Mediasoup, allowing multiple users to connect with camera, screen, and microphone sharing.",
      },
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/0hyPui-C5VA/hqdefault.jpg",
        url: "https://www.youtube.com/embed/0hyPui-C5VA",
        title: "RTEcommerce",
        details:
          "An e-commerce website with a unique feature: each product page is customizable, and the side preview updates in real time. The preview uses the main page’s component, making maintenance easier. Note: colors and images need to be properly adjusted for a better visual appeal.",
      },
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/XVlx_2XO3-I/hqdefault.jpg",
        url: "https://www.youtube.com/embed/XVlx_2XO3-I",
        title: "EnterScience Website",
        details:
          "The company I worked for requested for a modern website to attract more clients. They liked it so much that they still use the website I developed to this day.",
      },
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/WbyLQVdAjac/hqdefault.jpg",
        url: "https://www.youtube.com/embed/WbyLQVdAjac",
        title: "BM Words",
        details:
          "This is a language consulting and courses company, featuring a functional blog, a detailed services section, and an admin panel.",
      },
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/yataTMEFKPg/hqdefault.jpg",
        url: "https://www.youtube.com/embed/yataTMEFKPg",
        title: "OnTEST",
        details:
          "OnTest is a software that uses Artificial Intelligence to enable scalability in the selection processes of educational institutions worldwide, providing security and advanced monitoring.",
      },
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/elKWnTmS8Pw/hqdefault.jpg",
        url: "https://www.youtube.com/embed/elKWnTmS8Pw",
        title: "OnTEST Student",
        details: "Is the same idea as the previous one, but for students.",
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/meawcafe/windowing-system/refs/heads/gh-pages/assets/demo.gif",
        title: "Windowing System",
        details:
          "Simulating a windowing system of an operating system with web technologies.",
      },
      {
        type: "image",
        url: "https://i.imgur.com/tv1Cioy.png",
        title: "NOTO OS",
        details:
          "Simulating the graphic interface of an operating system with web technologies",
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/meawcafe/Orion/refs/heads/main/demo.gif",
        title: "Orion Shopping List Organizer",
        details:
          "Orion is a mobile application that simplifies shopping list organization. I was creating this for my personal use. The main idea was to help me shop at the supermarket and spend exactly the amount I had available lol.",
      },
      {
        type: "image",
        url: "https://i.imgur.com/1iDqv1I.png",
        title: "Notoryu Post Maker",
        details:
          "A simple social media post creator, entirely designed to meet the requirements of a university project.",
      },
    ],
  },
];
