import type { ProjectItemType } from '$lib/types/shared';

export default [
  {
    title: 'Redzig / Zcached',
    description:
      'Redis clone built from scratch in Zig, implementing the RESP protocol and distributed caching; pivoted to Zcached adapting the architecture to new requirements.',
    stack: ['Zig'],
    githubUrl: 'https://github.com/ippsav/redzig'
  },
  {
    title: 'Zitorrent',
    description:
      'BitTorrent client in Zig implementing Bencode parsing and seeder communication protocols, demonstrating P2P networking and distributed file sharing.',
    stack: ['Zig'],
    githubUrl: 'https://github.com/ippsav/zitorrent'
  },
  {
    title: 'Bun (OSS)',
    description:
      'Contributed critical bug fixes and new features to native modules.',
    stack: ['Zig', 'C++', 'JavaScript'],
    githubUrl: 'https://github.com/oven-sh/bun'
  },
  {
    title: 'Zig (OSS)',
    description:
      'Redesigned the Linux syscall generation process to simplify support for multiple architectures.',
    stack: ['Zig'],
    githubUrl: 'https://github.com/ziglang/zig'
  }
] satisfies ProjectItemType[];
