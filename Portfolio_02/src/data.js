// Single source of truth for all portfolio content.
export const profile = {
  name: 'Shouvik Kumar Maity',
  initials: 'SM',
  logo: 'SHOUVIK',
  role: 'Front-End Developer',
  location: 'Tamluk, West Bengal',
  email: 'shouvik4611@gmail.com',
  phone: '+91 93394 97399',
  phoneHref: 'tel:+919339497399',
  linkedin: {
    label: 'linkedin.com/in/shouvik-kumar-maity-050844364',
    href: 'https://www.linkedin.com/in/shouvik-kumar-maity-050844364?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  github: { label: 'github.com/shouvikkumar', href: 'https://github.com/shouvikkumar' },
  gradYear: '2025',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const aboutChips = [
  'HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design',
  'DSA', 'C Language', 'Debugging', 'UI/UX Thinking',
];

export const infoItems = [
  { icon: '📍', label: 'Location', value: 'Tamluk, India' },
  { icon: '🎓', label: 'Education', value: 'BCA · TIMT · 2025' },
  { icon: '⚡', label: 'Superpower', value: 'Debugging' },
  { icon: '📚', label: 'Learning', value: 'React · Next.js' },
  { icon: '💼', label: 'Experience', value: 'Fresher · 2025' },
  { icon: '🌐', label: 'Languages', value: 'Bengali · English · Hindi' },
];

export const facts = [
  '☕ Turning coffee into clean UI since 2025',
  '🚀 Fresh BCA grad, ready to ship real products',
  '🐛 Debugging is my superpower',
  '📚 Currently learning React & Next.js',
  '🌐 Building the web, one line at a time',
  '💡 Great UI = great feeling + great code',
];

export const skills = [
  { icon: '🌐', name: 'HTML5', level: 'Proficient', pct: 88 },
  { icon: '🎨', name: 'CSS3', level: 'Proficient', pct: 83 },
  { icon: '⚡', name: 'JavaScript', level: 'Intermediate', pct: 73 },
  { icon: '🔢', name: 'DSA', level: 'Intermediate', pct: 68 },
  { icon: '💻', name: 'C Programming', level: 'Intermediate', pct: 65 },
  { icon: '🐛', name: 'Debugging', level: 'Strong', pct: 82 },
];

export const projects = [
  {
    title: 'Photo Converter',
    desc: 'A browser-based utility to convert images between formats like JPG and PNG — no server needed, fully client-side with a smooth UX.',
    features: [
      'Drag-and-drop file upload UI',
      'Live image preview before conversion',
      'Client-side format conversion',
      'One-click download of output file',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'File API'],
  },
  {
    title: 'Music System',
    desc: 'An API-powered music player that streams songs with full playback controls — built with responsive layout for a native-app feel in the browser.',
    features: [
      'API-powered song streaming',
      'Play / Pause / Skip controls',
      'Volume slider with smooth UX',
      'Playlist management system',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Audio API'],
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  university: 'Tamralipta Institute of Management and Technology',
  location: 'West Bengal, India',
  year: '2025',
};
