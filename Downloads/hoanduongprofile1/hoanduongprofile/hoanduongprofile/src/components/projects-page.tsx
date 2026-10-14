import { Code2, ExternalLink, HelpCircle, Layers, Sparkles, Terminal } from 'lucide-react';
import { projectsList } from '@/lib/hoan-content';

export function ProjectsPage() {
  return (
    <main className="projects-page mx-auto w-full max-w-3xl px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
          THỬ NGHIỆM &amp; DỰ ÁN
        </span>
        <h1
          className="mt-3 text-4xl leading-tight text-gray-900 md:text-5xl"
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontWeight: 400 }}
        >
          Projects &amp; Experiments
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
          Những website và thử nghiệm giao diện mình từng xây dựng cho các cộng đồng trực tuyến và trong quá trình học tập tại ICTU Thái Nguyên. Trình bày chân thực, tập trung vào bài học kinh nghiệm và kỹ thuật thực tế.
        </p>
      </div>

      <div>
        {projectsList.map((project, index) => (
          <article
            key={project.id}
            className="border-b border-gray-200/50 pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-gray-400">0{index + 1}</span>
              <span className="inline-block rounded-full bg-gray-900 px-2.5 py-1 text-[11px] font-medium text-gray-100">
                {project.badge}
              </span>
              <span className="inline-block rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600">
                {project.role}
              </span>
            </div>

            <h2
              className="mt-4 text-2xl leading-snug text-gray-900 md:text-[1.75rem]"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontWeight: 500 }}
            >
              {project.title}
            </h2>
            <p className="mt-3 text-[1rem] leading-8 text-gray-700">{project.concept}</p>

            <div className="mt-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold leading-7 text-gray-900">
                <Layers size={14} className="shrink-0 text-gray-500" aria-hidden="true" />
                Mục tiêu &amp; Đối tượng sử dụng
              </h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-gray-600">{project.targetAudience}</p>
            </div>

            <div className="mt-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold leading-7 text-gray-900">
                <Code2 size={14} className="shrink-0 text-gray-500" aria-hidden="true" />
                Công nghệ sử dụng
              </h3>
              <div className="mt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="mr-2 mb-2 inline-block rounded bg-gray-100 px-2 py-1 text-xs leading-5 text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold leading-7 text-gray-900">
                <Sparkles size={14} className="shrink-0 text-gray-500" aria-hidden="true" />
                Bài học rút ra trong quá trình triển khai
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.95rem] leading-7 text-gray-600">
                {project.learnings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900"
                  >
                    {link.label}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}

            {project.needsInput && (
              <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-gray-200/70 bg-gray-50 p-4">
                <HelpCircle size={15} className="mt-1 shrink-0 text-gray-500" aria-hidden="true" />
                <div>
                  <span className="text-sm font-semibold leading-7 text-gray-900">Ghi chú bổ sung:</span>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{project.needsInput}</p>
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold leading-7 text-gray-900">
                <Terminal size={14} className="shrink-0 text-gray-500" aria-hidden="true" />
                <span>
                  Code snippet{' '}
                  <span className="font-mono font-normal text-gray-500">preview_{project.id}.tsx</span>
                </span>
              </h3>
                <div className="mt-3 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-7 text-gray-100">
                  <pre className="min-w-max"><code><span className="text-gray-500">// Thử nghiệm giao diện cộng đồng</span>{'\n'}<span className="text-violet-300">const</span> <span className="text-sky-200">project</span> <span className="text-gray-300">= {'{'}</span>{'\n'}<span className="text-gray-300">  </span><span className="text-emerald-300">name</span><span className="text-gray-300">: </span><span className="text-amber-200">"{project.title}",</span>{'\n'}<span className="text-gray-300">  </span><span className="text-emerald-300">target</span><span className="text-gray-300">: </span><span className="text-amber-200">"Community Web",</span>{'\n'}<span className="text-gray-300">  </span><span className="text-emerald-300">stack</span><span className="text-gray-300">: [</span><span className="text-amber-200">"{project.tech[0]}"</span><span className="text-gray-300">, </span><span className="text-amber-200">"{project.tech[1] ?? project.tech[0]}"</span><span className="text-gray-300">],</span>{'\n'}<span className="text-gray-300">  </span><span className="text-emerald-300">deployed</span><span className="text-gray-300">: </span><span className="text-violet-300">true,</span>{'\n'}<span className="text-gray-300">{'};'}</span></code></pre>
                <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-xs"><span className="text-gray-500">STATUS:</span><span className="font-semibold tracking-wide text-emerald-300">BUILD_SUCCESS</span></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
