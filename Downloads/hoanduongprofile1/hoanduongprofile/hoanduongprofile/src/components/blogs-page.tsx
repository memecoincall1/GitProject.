import { useState } from 'react';
import { ArrowLeft, BookOpen, Code2, Compass, Expand, Folder, Globe, Info, Minimize, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articlesList } from '@/lib/hoan-content';

const categories = [
  { id: 'all', label: 'Tất cả ghi chú', icon: Folder },
  { id: 'Lập trình & Kỹ thuật', label: 'Lập trình & Kỹ thuật', icon: Code2 },
  { id: 'Thử nghiệm Web', label: 'Thử nghiệm Web', icon: Globe },
  { id: 'Suy ngẫm & Hành trình', label: 'Suy ngẫm & Hành trình', icon: Compass },
];

export function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(articlesList[0]?.id || null);
  const [expanded, setExpanded] = useState(false);

  const filteredArticles =
    selectedCategory === 'all'
      ? articlesList
      : articlesList.filter((a) => a.category === selectedCategory);

  const currentArticle = articlesList.find((a) => a.id === selectedArticleId);

  return (
    <main className={`blogs-page ${expanded ? 'expanded' : ''} ${currentArticle ? 'has-article' : ''}`}>
      <div className="notes-container-window">
        {/* Sidebar Folders */}
        <aside className="notes-sidebar">
          <div className="sidebar-header-box">
            <span className="sidebar-title">THƯ MỤC GHI CHÚ</span>
          </div>

          <div className="folders-list">
            {categories.map((c) => {
              const Icon = c.icon;
              const count =
                c.id === 'all'
                  ? articlesList.length
                  : articlesList.filter((a) => a.category === c.id).length;

              return (
                <button
                  key={c.id}
                  type="button"
                  className={`folder-item-btn ${selectedCategory === c.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(c.id);
                    const matching =
                      c.id === 'all'
                        ? articlesList
                        : articlesList.filter((a) => a.category === c.id);
                    if (matching.length > 0) {
                      setSelectedArticleId(matching[0].id);
                    } else {
                      setSelectedArticleId(null);
                    }
                    setExpanded(false);
                  }}
                >
                  <Icon size={14} className="folder-icon" aria-hidden="true" />
                  <span className="folder-name">{c.label}</span>
                  <span className="folder-badge">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="sidebar-footer-note">
            <Info size={13} aria-hidden="true" />
            <p>Các ghi chú mẫu định hướng để Hoan Duong cập nhật nội dung thực tế.</p>
          </div>
        </aside>

        {/* Middle Article List */}
        <section className="notes-list-panel">
          <div className="notes-list-header">
            <h2>{categories.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="count-sub">{filteredArticles.length} ghi chép</p>
          </div>

          <div className="notes-items-scroll">
            {filteredArticles.length === 0 ? (
              <div className="empty-category-msg">Chưa có ghi chép trong mục này.</div>
            ) : (
              filteredArticles.map((art) => (
                <button
                  key={art.id}
                  type="button"
                  className={`note-preview-item ${art.id === selectedArticleId ? 'selected' : ''}`}
                  onClick={() => setSelectedArticleId(art.id)}
                >
                  <div className="item-title-row">
                    <span className="item-title">{art.title}</span>
                  </div>
                  <p className="item-snippet">{art.preview}</p>
                  <div className="item-meta-row">
                    <span className="item-date">{art.date}</span>
                    <span className="item-readtime">{art.readTime}</span>
                    {art.isSample && <span className="sample-pill">Ghi chú mẫu</span>}
                  </div>
                </button>
              ))
            )}
          </div>
        </section>

        {/* Right Reader Content */}
        <section className="notes-reader-panel">
          {currentArticle ? (
            <div className="article-wrapper">
              <div className="reader-toolbar">
                <Button
                  variant="ghost"
                  className="mobile-back-btn"
                  onClick={() => {
                    setSelectedArticleId(null);
                    setExpanded(false);
                  }}
                >
                  <ArrowLeft size={14} /> Danh sách
                </Button>

                <div className="sample-status-callout">
                  <span className="sample-indicator-dot" />
                  <span>Nội dung mẫu định hướng — Hoan Duong có thể thay thế bất cứ lúc nào</span>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="expand-btn"
                  aria-label={expanded ? 'Thu nhỏ giao diện' : 'Toàn màn hình đọc'}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? <Minimize size={15} /> : <Expand size={15} />}
                </Button>
              </div>

              <article className="article-body-content">
                <header className="article-header">
                  <div className="article-meta-line">
                    <span className="article-cat-tag">{currentArticle.category}</span>
                    <span className="meta-sep">·</span>
                    <span className="article-date-tag">{currentArticle.date}</span>
                    <span className="meta-sep">·</span>
                    <span>{currentArticle.readTime}</span>
                  </div>
                  <h1 className="article-heading-title">{currentArticle.title}</h1>
                </header>

                <div className="article-paragraphs">
                  {currentArticle.body.map((block, i) => {
                    if (block.tag === 'h3') {
                      return <h3 key={i}>{block.text}</h3>;
                    }
                    if (block.tag === 'blockquote') {
                      return <blockquote key={i}>{block.text}</blockquote>;
                    }
                    if (block.tag === 'em') {
                      return <p key={i}><em>{block.text}</em></p>;
                    }
                    return <p key={i}>{block.text}</p>;
                  })}
                </div>

                <div className="article-end-mark">
                  <div className="end-dots" aria-hidden="true">***</div>
                  <p className="end-note">
                    Ghi chép bởi Hoan Duong · ICTU Thái Nguyên
                  </p>
                </div>
              </article>
            </div>
          ) : (
            <div className="reader-empty-state">
              <BookOpen size={32} className="empty-icon" aria-hidden="true" />
              <p>Chọn một ghi chú ở cột bên trái để đọc nội dung</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}