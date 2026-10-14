import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Compass, Laptop, MapPin, Sparkles, Terminal } from 'lucide-react';
import { hoanProfile } from '@/lib/hoan-content';

export function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-hero">
        <div className="about-tag-row">
          <span className="section-kicker">GIỚI THIỆU BẢN THÂN</span>
          <span className="location-chip">
            <MapPin size={13} aria-hidden="true" />
            {hoanProfile.location}
          </span>
        </div>
        <h1 className="about-title">
          Hoan Duong — <span className="title-sub">{hoanProfile.motto}</span>
        </h1>
        <p className="about-lead">
          Sinh viên công nghệ tại ICTU, tò mò về văn hóa Internet, lập trình web và đang từng bước học hỏi qua những sản phẩm thực tế.
        </p>
      </div>

      <div className="about-content-grid">
        <section className="about-narrative">
          <div className="narrative-card">
            <h2>Hành trình tại ICTU và tình yêu với thế giới số</h2>
            <p>
              Mình hiện là sinh viên ngành công nghệ tại <strong>Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU)</strong>, Đại học Thái Nguyên.
            </p>
            <p>
              Giữa rất nhiều hướng đi trong ngành công nghệ thông tin, điều luôn kích thích sự tò mò của mình là <em>cách các sản phẩm và cộng đồng hoạt động trên Internet</em>: Làm thế nào một nhóm người xa lạ từ khắp nơi trên thế giới có thể kết nối, chia sẻ cùng một văn hóa, và cùng tương tác trên một giao diện website duy nhất?
            </p>
          </div>

          <div className="narrative-card">
            <h2>Thử nghiệm thực tế: Từ meme culture đến dòng code</h2>
            <p>
              Thay vì chỉ dừng lại ở bài tập lý thuyết, mình đã chủ động bắt tay vào làm. Mình từng xây dựng một số website phục vụ các cộng đồng trực tuyến, bao gồm các trang web quảng bá memecoin.
            </p>
            <p>
              Đó là một môi trường thử nghiệm thực tế đầy thử thách: nhịp độ rất nhanh, người dùng truy cập chủ yếu từ điện thoại qua mạng xã hội, và giao diện phải tạo được cảm xúc tức thì. Trải nghiệm đó đã dạy cho mình bài học sâu sắc về hiệu năng, thiết kế mobile-first và tầm quan trọng của trải nghiệm người dùng thực.
            </p>
          </div>

          <div className="narrative-card">
            <h2>Biến ý tưởng thành sản phẩm có thể sử dụng được</h2>
            <p>
              Mục tiêu lớn nhất của mình trong giai đoạn này là hiểu sâu hơn về quá trình <strong>biến một ý tưởng sơ khai thành một sản phẩm hoàn chỉnh, ổn định và có thể sử dụng được</strong>.
            </p>
            <p>
              Mình không vội nhận mình là một chuyên gia. Tinh thần của mình rất đơn giản: <em>Learning by building</em> — học hỏi từ mỗi dòng code, mỗi lỗi gặp phải và mỗi thử nghiệm mới trên Internet.
            </p>
          </div>
        </section>

        <aside className="about-sidebar">
          <div className="sidebar-box">
            <h3>Thông tin cơ bản</h3>
            <ul className="info-list">
              <li>
                <span className="info-label">Họ và tên:</span>
                <span className="info-value">{hoanProfile.name}</span>
              </li>
              <li>
                <span className="info-label">Trường học:</span>
                <span className="info-value">{hoanProfile.university}</span>
              </li>
              <li>
                <span className="info-label">Địa điểm:</span>
                <span className="info-value">{hoanProfile.location}</span>
              </li>
              <li>
                <span className="info-label">Định vị:</span>
                <span className="info-value">Work in progress</span>
              </li>
            </ul>
          </div>

          <div className="sidebar-box">
            <h3>Lĩnh vực quan tâm</h3>
            <div className="interest-tags">
              {hoanProfile.interests.map((item) => (
                <span key={item} className="interest-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="sidebar-box highlight-box">
            <Compass size={18} className="text-acid" aria-hidden="true" />
            <h4>Triết lý cá nhân</h4>
            <p className="philosophy-quote">
              “Still figuring things out. Exploring the internet, one idea at a time.”
            </p>
            <Link to="/projects" className="sidebar-link">
              Khám phá các dự án của mình <ArrowUpRight size={14} />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
