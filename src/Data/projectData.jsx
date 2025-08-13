import LearnovaPlatform from '../assets/ProjectsImag/Learnova-Platform.png';
import EventStride from '../assets/ProjectsImag/EventStride.png';
import GreenTrack from '../assets/ProjectsImag/GreenTrack.png';

const projectData = [
  {
    id: 1,
    name: 'Learnova-platform',
    image: LearnovaPlatform,
    details: {
      techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      description:
        'Developed an authentication integration platform utilizing modern authentication solutions to enhance user security and streamline access management.',
      liveLink: 'https://auth-integration-b3106.web.app/',
      githubClient: 'https://github.com/Saifulislamsumon017/Learnova-platform',
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
    name: 'EventStride',
    image: EventStride,
    details: {
      techStack: ['Next.js', 'Tailwind CSS', 'Firebase'],
      description:
        'Developed EventStride, an authentication-enabled web application designed to streamline access to event-related features such as registration, scheduling, and personalized dashboards. The app ensures secure entry and enhances user experience with a smooth, responsive interface.',
      liveLink: 'https://eventstride-auth.web.app/',
      githubClient: 'https://github.com/Saifulislamsumon017/EventStride-Client',
      challenges: [
        'Integrating multiple authentication flows seamlessly',
        'Maintaining secure session management while optimizing performance',
        'Ensuring cross-platform compatibility and responsive layout consistency',
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
    image: GreenTrack,
    details: {
      techStack: ['React.js', 'Tailwind Css', 'Firebase'],
      description:
        'Developed Green-Track, a secure, responsive web application that implements user authentication to safeguard access to environmental tracking or dashboard features. Users can sign in using email/password or social logins, and then access personalized tracking tools or data management interfaces.',
      liveLink: 'https://green-track-auth.web.app/',
      githubClient: 'https://github.com/Saifulislamsumon017/GreenTrack-Client',
      challenges: [
        'Ensuring seamless integration of authentication flow across components',
        'Balancing performance optimization while maintaining security best practices',
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
