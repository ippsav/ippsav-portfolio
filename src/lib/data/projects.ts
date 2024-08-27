import type { ProjectItemType } from '$lib/types/shared';

export default [
  {
    title: 'Redzig',
    description:
      'Built a Redis clone from scratch, implementing the RESP protocol and diving deep into distributed caching. Later pivoted to Zcached, adapting to new project needs while leveraging insights from the Redis work.',
    stack: ['Zig'],
    githubUrl: 'https://github.com/ippsav/redzig'
  },
  {
    title: 'Zitorrent',
    description:
      'Crafted a BitTorrent client from the ground up, implementing Bencode parsing and seeder communication protocols. This project showcases hands-on experience with peer-to-peer networking and distributed file sharing systems.',
    stack: ['Zig'],
    githubUrl: 'https://github.com/ippsav/zitorrent'
  },
  {
    title: 'firebase-secrets-cli',
    description:
      'A powerful command-line tool built with Rust, allowing users to easily set multiple secrets at once from a file containing key-value pairs. This eliminates the need for manual, time-consuming configuration of individual secrets, streamlining the process and simplifying the management of sensitive data in Firebase projects.',
    stack: ['Rust'],
    githubUrl: 'https://github.com/ippsav/firebase-secrets-cli'
  }
] satisfies ProjectItemType[];
