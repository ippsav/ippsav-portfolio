import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = {
  name: 'ippsav-dark',
  type: 'dark',
  colors: {
    'editor.background': '#0d0d0d',
    'editor.foreground': '#d4d4d4'
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#525252', fontStyle: 'italic' } },
    { scope: ['string', 'string.quoted', 'punctuation.definition.string'], settings: { foreground: '#a8cfa1' } },
    { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#e8b87d' } },
    { scope: ['keyword', 'storage.type', 'storage.modifier', 'keyword.control'], settings: { foreground: '#c4a5ff' } },
    { scope: ['entity.name.function', 'meta.function-call', 'support.function'], settings: { foreground: '#9fc5e8' } },
    { scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class'], settings: { foreground: '#e1c27a' } },
    { scope: ['variable', 'variable.other', 'meta.definition.variable'], settings: { foreground: '#d4d4d4' } },
    { scope: ['variable.parameter'], settings: { foreground: '#d4d4d4', fontStyle: 'italic' } },
    { scope: ['keyword.operator', 'punctuation', 'meta.brace'], settings: { foreground: '#8a8a8a' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#e8b87d' } },
    { scope: ['entity.name.tag', 'punctuation.definition.tag'], settings: { foreground: '#c4a5ff' } },
    { scope: ['markup.heading', 'markup.bold'], settings: { foreground: '#f5f5f5', fontStyle: 'bold' } },
    { scope: ['markup.italic'], settings: { fontStyle: 'italic' } },
    { scope: ['markup.inline.raw', 'markup.fenced_code'], settings: { foreground: '#a8cfa1' } }
  ]
};

let highlighterPromise;

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [theme],
      langs: ['ts', 'tsx', 'js', 'jsx', 'svelte', 'html', 'css', 'json', 'bash', 'shell', 'go', 'rust', 'zig', 'python', 'sql', 'toml', 'yaml', 'diff', 'md']
    });
  }
  return highlighterPromise;
}

export default defineConfig({
  extensions: ['.svx', '.md'],
  smartypants: {
    dashes: 'oldschool'
  },
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const hl = await getHighlighter();
      const html = hl.codeToHtml(code, {
        lang: hl.getLoadedLanguages().includes(lang) ? lang : 'text',
        theme: 'ippsav-dark'
      });
      const escaped = html
        .replace(/\{/g, '&#123;')
        .replace(/\}/g, '&#125;');
      return `<div class="code-block" data-lang="${lang}">${escaped}</div>`;
    }
  }
});
