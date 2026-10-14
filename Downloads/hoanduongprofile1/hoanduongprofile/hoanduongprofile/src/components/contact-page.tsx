import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Linkedin, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hoanProfile } from '@/lib/hoan-content';

// Preserved Google Apps Script endpoints per project rule
const endpoints = {
  message: 'https://script.google.com/macros/s/AKfycbx30UtQAsPZZJytBtFjrtUZKwIatUWW8rfkABL6z037MdLDZ9_bQxVRYOGHe6fc68lHjg/exec',
  notify: 'https://script.google.com/macros/s/AKfycbzYUixoBzb_zX_smGF7Ug5Trdh4FCwDL2SoOPQeM34Pe1sNF8S4EDP4wTMQGsc-2ea4/exec',
};

export function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setSending(true);
    setErrorMsg('');

    try {
      // Sent via no-cors to preserved Google Apps Script endpoint
      await fetch(endpoints.message, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      });
      // Truthful confirmation without claiming opaque delivery verification
      setSentNotice(true);
      form.reset();
    } catch {
      setErrorMsg('Không thể gửi tin nhắn. Vui lòng gửi email trực tiếp tới hoanvuonxoai@gmail.com.');
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="contact-page">
      <div className="contact-header">
        <span className="section-kicker">KẾT NỐI VÀ LIÊN HỆ</span>
        <h1 className="contact-title">Liên Hệ Với Hoan Duong</h1>
        <p className="contact-lead">
          Bạn có thể liên hệ trực tiếp qua email, kết nối trên LinkedIn, theo dõi các cập nhật trên X hoặc để lại lời nhắn qua biểu mẫu bên dưới.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Direct Channels Column */}
        <section className="contact-direct-channels">
          <h2>Kênh kết nối chính thức</h2>

          <div className="channels-card-list">
            <a
              href={`mailto:${hoanProfile.social.email}`}
              className="direct-channel-card"
              aria-label={`Gửi email đến ${hoanProfile.social.email}`}
            >
              <div className="channel-icon-wrap mail">
                <Mail size={22} aria-hidden="true" />
              </div>
              <div className="channel-text">
                <span className="channel-type">Email cá nhân</span>
                <span className="channel-value">{hoanProfile.social.email}</span>
                <span className="channel-action">Mở trình gửi mail →</span>
              </div>
            </a>

            <a
              href={hoanProfile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="direct-channel-card"
              aria-label="Mở hồ sơ LinkedIn của Hoan Duong (mở tab mới)"
            >
              <div className="channel-icon-wrap linkedin">
                <Linkedin size={22} aria-hidden="true" />
              </div>
              <div className="channel-text">
                <span className="channel-type">LinkedIn</span>
                <span className="channel-value">linkedin.com/in/hoanduongg</span>
                <span className="channel-action">Xem trang cá nhân <ArrowUpRight size={13} /></span>
              </div>
            </a>

            <a
              href={hoanProfile.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="direct-channel-card"
              aria-label="Mở tài khoản X @0xQuzazzz (mở tab mới)"
            >
              <div className="channel-icon-wrap x-brand">
                <svg viewBox="0 0 24 24" className="x-svg" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M18.9 2h3.2l-7 8 8.2 12h-6.4l-5-7.3L5.5 22H2.3l7.5-8.6L1.9 2h6.6l4.5 6.7L18.9 2Zm-1.1 18h1.8L7.5 4H5.6l12.2 16Z"
                  />
                </svg>
              </div>
              <div className="channel-text">
                <span className="channel-type">Mạng xã hội X</span>
                <span className="channel-value">x.com/0xQuzazzz</span>
                <span className="channel-action">Theo dõi trên X <ArrowUpRight size={13} /></span>
              </div>
            </a>
          </div>

          <div className="contact-meta-box">
            <span className="meta-badge">ĐỊA BÀN HOẠT ĐỘNG</span>
            <p className="meta-univ">{hoanProfile.university}</p>
            <p className="meta-loc">{hoanProfile.location}</p>
          </div>
        </section>

        {/* Message Form Column */}
        <section className="contact-form-section">
          <div className="form-wrapper-box">
            <div className="form-box-header">
              <MessageSquare size={18} className="text-acid" aria-hidden="true" />
              <h3>Gửi tin nhắn hoặc ý tưởng</h3>
            </div>
            <p className="form-subtext">
              Bạn có một ý tưởng thú vị hoặc muốn trao đổi về dự án web? Hãy để lại thông tin để mình tiện phản hồi nhé.
            </p>

            {sentNotice ? (
              <div className="form-sent-status" role="status">
                <CheckCircle2 size={24} className="text-acid" aria-hidden="true" />
                <div>
                  <h4>Thông điệp đã được gửi đi!</h4>
                  <p>Cảm ơn bạn. Yêu cầu đã được chuyển tới hệ thống. Mình sẽ phản hồi bạn qua email trong thời gian sớm nhất.</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSentNotice(false)}
                  className="mt-2"
                >
                  Gửi tin nhắn khác
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-msg-form">
                <label className="form-field">
                  <span className="field-label">Tên của bạn *</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    autoComplete="name"
                  />
                </label>

                <label className="form-field">
                  <span className="field-label">Địa chỉ Email phản hồi *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@domain.com"
                    autoComplete="email"
                  />
                </label>

                <label className="form-field">
                  <span className="field-label">Chủ đề / Ý tưởng</span>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Ví dụ: Trao đổi về dự án web hoặc cộng đồng"
                  />
                </label>

                <label className="form-field">
                  <span className="field-label">Nội dung tin nhắn *</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Chia sẻ đôi điều với Hoan Duong..."
                  />
                </label>

                {errorMsg && (
                  <p role="alert" className="form-err-msg">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="submit-contact-btn"
                >
                  <Send size={15} aria-hidden="true" />
                  <span>{sending ? 'Đang gửi…' : 'Gửi thông điệp'}</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
