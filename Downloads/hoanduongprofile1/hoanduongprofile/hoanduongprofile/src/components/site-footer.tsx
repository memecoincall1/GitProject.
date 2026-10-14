import { hoanProfile } from '@/lib/hoan-content';

export function SiteFooter() {
  return (
    <footer>
      <div className="contact-item">
        <span className="contact-label">E</span>
        <a href={`mailto:${hoanProfile.social.email}`}>{hoanProfile.social.email}</a>
      </div>
      <div className="contact-item">
        <span className="contact-label">in</span>
        <a href={hoanProfile.social.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin.com/in/hoanduongg
        </a>
      </div>
      <div className="contact-item">
        <span className="contact-label">X</span>
        <a href={hoanProfile.social.x} target="_blank" rel="noopener noreferrer">
          @0xQuzazzz
        </a>
      </div>
    </footer>
  );
}
