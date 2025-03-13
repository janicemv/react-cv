
import janiceImage from '../assets/janice.jpg';

export const CVData = {
  personalData: {
    name: 'Janice Vilela',
    title: 'Junior Fullstack Developer',
    image: janiceImage,
    contacts: [
      { type: 'email', value: 'janice.vilela@gmail.com' },
      { type: 'location', value: 'Bertem, Belgium' },
      { type: 'linkedin', value: 'linkedin.com/in/janicevilela' },
      { type: 'github', value: 'github.com/janicemv' }
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'About Me',
      content: `I\'m a former researcher who turned my passion for technology into a career.
\n\n
I love automating processes, making information accessible, and structuring data in a clear and intuitive way. Now that I’m working in the field of my lifelong special interest, I’m excited to grow, learn, and build even more.`,
      icon: 'usertie'
    },
    // {
    //   type: 'tag-list',
    //   title: 'Skills',
    //   icon: 'rocket',
    //   items: ['HTML', 'CSS', 'Javascript', 'PHP', 'SQL', 'Wordpress', 'Laravel', 'React']
    // },
    {
      type: 'experiences-list',
      title: 'IT Training',
      description: '',
      icon: 'graduation',
      items: [
        {
          title: 'Fullstack Development Training',
          company: 'VDAB Campus',
          description: 'PHP, SQL, databases, HTML, CSS, Bootstrap, JavaScript, Laravel, React, Node, Tailwind, communication training, implementing and using Scrum for project management.',
          companyWebSite: 'http://www.vdab.be',
          datesBetween: '05/2024 - 02/2025',
          descriptionTags: ['HTML', 'CSS', 'Javascript', 'React', 'PHP', 'SQL', 'Laravel', 'Scrum', 'Agile', 'Bootstrap', 'Tailwind', 'Blade'],
        },
        {
          title: 'Harvard CS50: Introduction to Computer Science',
          company: 'Harvard Online/EdX',
          description: 'Resource Management, Python (Programming Language), HyperText Markup Language (HTML), C (Programming Language), Cryptography, Security Software, Forensic Sciences, SQL (Programming Language), Data Structures, Cascading Style Sheets (CSS), Algorithms, Finance, JavaScript (Programming Language), Computer Science',
          companyWebSite: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science',
          datesBetween: '12/2023 - 05/2024',
          descriptionTags: ['HTML', 'CSS', 'Javascript', 'C', 'Python', 'SQL'],
        },
        {
          title: 'Blasting Off with Bootstrap',
          company: 'Codeschool',
          companyWebSite: 'https://www.pluralsight.com/courses/code-school-blasting-off-with-bootstrap',
          datesBetween: '2013',
          descriptionTags: ['Bootstrap'],

        },
        {
          title: 'Webdesign course',
          company: 'Eibneti Treinamento em Informática, Brasilia, Brazil',
          datesBetween: '2012',
          descriptionTags: ['HTML', 'CSS', 'Photoshop'],

        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Recent Work Experience',
      icon: 'archive',
      items: [
        {
          title: 'Web & Tech Coordinator (volunteer)',
          company: 'European Ovary Workshop',
          description: 'I created the event logo and developed and managed the EOW website, registrations, and abstract submissions. I also updated the schedule on the website (using HTML code inside Wordpress) and on the Sched app and used a Python script to automate the generation of certificates for attendees, presentations, posters and organisers.',
          companyWebSite: 'http://europeanovaryworkshop.com',
          datesBetween: '05/2024 - Present',
          descriptionTags: ['Wordpress', 'HTML', 'CSS', 'Python', 'Javascript', 'PHP'],
        },
        {
          title: 'Secretary (volunteer)',
          company: 'Society of Low Temperature Biology (SLTB)',
          description: 'Managed the website, organized events, and handled document creation, registrations, and certificate generation. I also handled the migration of the 2019 event website from WordPress to Squarespace.',
          companyWebSite: 'http://sltb.info',
          datesBetween: '05/2019 - 08/2022',
          descriptionTags: ['Wordpress', 'Squarespace', 'Databases', 'Mailchimp', 'Microsoft Office'],
        },
        {
          title: 'Postdoc/Research Assistant',
          company: 'Université Catholique de Louvain (UCLouvain, Belgium)',
          description: 'Postdoc with WBI grant (2018-2020); Funded by Innoviris Proof of Concept (2021-2022); Research on fertility preservation in women',
          companyWebSite: 'https://www.researchgate.net/lab/Pole-de-Recherche-en-Physiopathologie-de-la-Reproduction-REPR-Christiani-Andrade-Amorim',
          datesBetween: '11/2018 - 08/2022',
          descriptionTags: ['Research', 'Data analysis', 'Statistics', 'Project Management', 'Scientific writing', 'Presentations'],
        },
        {
          title: 'Full Collaborator Researcher',
          company: 'Universidade de Brasília (UnB, Brazil)',
          description: 'Postdoctoral Program in Nanoscience and Nanobiotechnology',
          datesBetween: '2017 - 2019',
        },
        {
          title: 'Administrative Assistant',
          company: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES, Brazil)',
          description: 'Department of International Relations - Managed the migration of form data from universities of the whole country',
          companyWebSite: 'https://www.gov.br/capes/pt-br',
          datesBetween: '2017 - 2018',
        },
        {
          title: 'Professor',
          company: 'Faculdades Integradas da União Educacional do Planalto Central (FACIPLAC,  Brazil)',
          description: 'Physiology, Immunology and Microbiology',
          companyWebSite: 'https://www.uniceplac.edu.br/',
          datesBetween: '2014',
        },
        {
          title: 'Webmaster',
          company: 'Bioloja',
          description: 'Family business: development of digital learning materials on Biology. I designed and maintained the website (WordPress) from 2013 to 2017.',
          companyWebSite: 'https://www.bioloja.bio.br',
          datesBetween: '2013 - 2017',
          descriptionTags: ['Wordpress', 'Microsoft Office', 'Presentations', 'Teaching materials'],
        },
        {
          title: 'Wild Animal Care (volunteer)',
          company: 'Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA, Brazil)',
          description: 'Clinic, Surgery and Animal Care – wild birds, mammals, small primates',
          datesBetween: '2007 / 2009',
        },
        {
          title: 'Rescuing of Marine Animals (volunteer)',
          company: 'Instituto de Pesquisas Cananéia (IPeC, Brazil)',
          description: 'Beach monitoring, rescue and care of grounding penguins',
          datesBetween: '2008',
        },

      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'Stargate',
          description: 'Laravel application to access information of Stars and Constellations',
          items: [
            { title: 'Github repository', projectUrl: 'https://github.com/janicemv/stargate', description: 'Screenshots and info' },
          ]
        },
        {
          sectionHeader: 'Academic Research',
          description: 'My publications during my academic years',
          items: [
            { title: 'Fertility Database', projectUrl: 'https://airtable.com/appfO1qRNoGz3DRsZ/shr9eoxd68mFQCDR1', description: 'Airtable database created for my systematic review' },
            { title: 'Research Gate', projectUrl: 'https://www.researchgate.net/profile/Janice-Vilela-2', description: 'My publications' },
            { title: 'Presentations and Multimedia', projectUrl: 'https://drive.google.com/drive/folders/1CcDVCIhpiEtQTQoPSOHlcDEU1RkONvtu', description: 'Materials of lessons as a professor' },
          ]

        },
      ]
    },

    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'English',
          authorityMeta: 'Fluent'
        },
        {
          authority: 'Dutch',
          authorityMeta: 'Advanced'
        },
        {
          authority: 'Portuguese',
          authorityMeta: 'Native'
        },
        {
          authority: 'French',
          authorityMeta: 'Intermediate'
        }
      ]
    },

    {
      type: 'experiences-list',
      title: 'Education',
      description: '',
      icon: 'graduation',
      items: [
        {
          title: 'Dutch for Non-native Speakers',
          company: 'ILT - KULeuven',
          description: 'Level achieved: B2 (independent language use according to CEFR)',
          datesBetween: '11/2022 - 11/2023',
        },
        {
          title: 'PhD in Animal Biology',
          company: 'Universidade de Brasilia (UnB, Brazil)',
          description: 'Sandwich PhD in Belgium – UCLouvain (February - July/2015). Research on fertility preservation of cats as a model for endangered felids',
          datesBetween: '2012 - 2016',
        },
        {
          title: 'Master in Compared Animal Physiology',
          company: 'Universidade Federal de Rio Grande (FURG, Brazil)',
          description: 'Research on the toxicology of Bisphenol A on the fertility of wild mice',
          datesBetween: '2010-2012',
        },
        {
          title: 'Bachelor in Veternary Medicine',
          company: 'Universidade Federal de Minas Gerais (UFMG, Brazil)',
          datesBetween: '2004-2010',
        },
      ]
    },
    {
      type: 'experiences-list',
      title: 'Certificates',
      description: '',
      icon: 'graduation',
      items: [
        {
          title: 'Interdisciplinary Program in Healthcare Innovation (I³H)',
          company: 'Université Libre de Bruxelles',
          companyWebSite: 'https://i3health.eu/i3h-education/',
          description: 'Basic knowledge and a holistic view of the complex processes that translate scientific advances into new standards of care. Addresses the scientific, commercial and social issues of modern health.',
          datesBetween: '2020',
        },
        {
          title: 'Ovarian tissue freezing and thawing',
          company: 'Cliniques Universitaires St Luc, UCL, Belgium',
          description: 'Training of laboratory technologist personnel for the freezing and thawing of ovarian tissue',
          datesBetween: '2020',
        },
        {
          title: 'Workshop – Marketing for Scientists',
          company: 'Université Catholique de Louvain',
          companyWebSite: 'https://marketingforscientists.com/',
          description: 'Ministered by Marc Kuchner  - 7h duration',
          datesBetween: '2019',
        },
        {
          title: 'FELASA B & C Certificates',
          company: 'Université Catholique de Louvain',
          description: 'Science and medicine of laboratory animals',
          datesBetween: '2018 - 2019',
        },
      ]
    },
    {
      type: 'common-list',
      title: 'Skills',
      icon: 'rocket',
      items: [
        {
          authority: 'Goal-directed and results-oriented professional',
        },
        {
          authority: 'Fast learner with strong writing skills: able to grasp new concepts and articulate them effectively',
        },
        {
          authority: 'Leadership and bridge-building: skilled in conflict mediation, team guidance, and fostering a collaborative culture',
        },
        {
          authority: 'Ability to absorb, analyse and interpret detailed data and information',
        },
        {
          authority: 'Effective team player: collaborates seamlessly with colleagues to drive projects forward in shared areas of expertise',
        },
        {
          authority: 'Expertise in researching, training, writing, documentation, and structured organization',
        },

        {
          authority: 'Adaptable and comfortable working in cross-cultural environments',
        },
        {
          authority: 'Driven and results-focused: takes initiative and maintains a sharp focus on objectives',
        },
        {
          authority: 'Creative problem-solving and idea fusion: able to think beyond conventional boundaries and link insights effectively',
        },
        {
          authority: 'Resilient mindset: consistently overcomes obstacles with determination and strategic thinking',
        },
        {
          authority: 'Effective knowledge transfer: experienced in teaching and simplifying complex ideas for diverse audiences',
        },




      ]
    },
    // {
    //   type: 'tag-list',
    //   title: 'Hobbies & Interests',
    //   icon: 'cubes',
    //   items: ['Photography', 'Poetry']
    // }
  ]
}