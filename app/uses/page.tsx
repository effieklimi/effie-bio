import type { Metadata } from 'next';
import FooterCentered from 'components/footer';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="mx-3 font-bold max-w-[590px] text-3xl font-serif mb-8 max-w-4xl">Tech I use</h1>
      <p className="mx-3 text-neutral-700 max-w-[590px] dark:text-neutral-700 max-w-4xl">
        Here's what tech I'm currently using for coding & research:
      </p>
      <div className="mx-5 max-w-[590px] prose prose-neutral dark:prose-invert text-neutral-700 dark:text-neutral-700">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>14&quot; Macbook Pro (2021) - M1 Max, 64GB Memory</li>
          <li>Logitech MX Vertical Ergonomic Wireless Mouse</li>
          <li>Keychron K1v5 Wireless Mechanical Keyboard, RBG, Optical Red Switches </li>
          <li>Monitor: varies</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode
          </li>
          <li>Theme: Monokai High Contrast</li>
          <li>Terminal: iTerm / zsh</li>
          <li>Python enviroments: venv</li>
          <li>R enviroments: miniconda + mamba</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Raycast</li>
          <li>Obsidian</li>
          <li>RetroClip</li>
          <li>Spotify</li>
          <li>IGV</li>
          <li>Superhuman</li>
          <li>Rize</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
      </div>
    </section>
  );
}
