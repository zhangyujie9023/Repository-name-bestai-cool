import { MetadataRoute } from 'next'
import { tutorials } from '@/data/tutorials'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestai.cool'
  
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/feedback`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]
  
  // 教程详情页
  const tutorialPages = tutorials.map((tutorial) => ({
    url: `${baseUrl}/tutorials/${tutorial.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [...staticPages, ...tutorialPages]
}
