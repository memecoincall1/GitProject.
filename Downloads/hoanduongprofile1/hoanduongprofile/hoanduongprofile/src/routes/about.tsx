import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/about-page';
import { pageMeta } from '@/lib/page-meta';

export const Route = createFileRoute('/about')({
  head: () =>
    pageMeta(
      'Giới thiệu — Hoan Duong',
      'Tìm hiểu về hành trình học tập, thử nghiệm công nghệ và con đường riêng của Hoan Duong tại ICTU Thái Nguyên.'
    ),
  component: AboutPage,
});
