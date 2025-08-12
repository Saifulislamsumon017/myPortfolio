import Portfolio from '../assets/All Image/Portfolio.png';

const projectData = [
  {
    id: 1,
    name: 'Portfolio',
    image: Portfolio,
    details: {
      techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      description:
        'A personal portfolio showcasing my work, skills, and projects with a clean and responsive design.',
      liveLink: 'https://rohitsingh93300-portfolio.vercel.app/',
      githubClient: 'https://github.com/rohitsingh93300/portfolio',
      challenges: [
        'Ensuring responsive design across multiple devices',
        'Optimizing performance for fast load times',
        'Implementing smooth animations without layout shifts',
      ],
      futurePlans: [
        'Add dark mode toggle',
        'Integrate blog section',
        'Enhance accessibility features',
      ],
    },
  },
  {
    id: 2,
    name: 'E-Commerce Store',
    image: Portfolio,
    details: {
      techStack: ['Next.js', 'Tailwind CSS', 'Stripe API'],
      description:
        'A fully functional online store with product listings, cart management, and secure payments.',
      liveLink: 'https://ecommerce-demo.vercel.app/',
      githubClient: 'https://github.com/example/ecommerce-client',
      challenges: [
        'Integrating Stripe for secure payments',
        'Handling complex cart state management',
        'SEO optimization for product pages',
      ],
      futurePlans: [
        'Add user reviews and ratings',
        'Implement advanced search and filtering',
        'Integrate real-time inventory tracking',
      ],
    },
  },
  {
    id: 3,
    name: 'Task Manager App',
    image: Portfolio,
    details: {
      techStack: ['React.js', 'Node.js', 'MongoDB'],
      description:
        'A task management tool allowing users to create, update, and track tasks with deadlines.',
      liveLink: 'https://taskmanager-demo.vercel.app/',
      githubClient: 'https://github.com/example/taskmanager-client',
      challenges: [
        'Implementing JWT authentication',
        'Real-time task updates using WebSockets',
        'Ensuring smooth UI interactions',
      ],
      futurePlans: [
        'Add drag-and-drop task reordering',
        'Create mobile app version',
        'Add AI-based task prioritization',
      ],
    },
  },
];

export default projectData;
