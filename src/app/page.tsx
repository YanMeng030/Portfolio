'use client';

import { useEffect, useState } from 'react';

import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
import { projectsData } from '@/lib/data';

const Home = () => {
  // 为 useState 明确指定类型
  const [starsCount, setStarsCount] = useState<number[]>([]);

  useEffect(() => {
    const fetchStars = async () => {
      const counts = await Promise.all(
        projectsData.map(async ({ links }) => {
          const res = await fetch(links.githubApi, { cache: 'no-store' });
          const data = await res.json();
          return data.stargazers_count;
        })
      );
      setStarsCount(counts);
    };

    fetchStars();
  }, []);

  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        {/* 确保 Projects 组件能够接收 starsCount 作为 prop */}
        <Projects starsCount={starsCount} />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default Home;
