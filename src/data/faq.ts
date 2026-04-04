export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How much does a website cost?',
    answer: 'Every project is scoped individually based on your requirements. A brochure website starts around $3,500, while full custom web apps and AI-integrated platforms range from $8,000 to $50,000+. We provide a detailed proposal with transparent line-item pricing before any work begins.',
  },
  {
    id: '2',
    question: 'How long does a project take?',
    answer: 'A standard website takes 4–8 weeks from kickoff to launch. Complex web applications and AI integrations typically run 8–16 weeks. We set clear milestones upfront and hit them — no vague timelines.',
  },
  {
    id: '3',
    question: 'Do you work with businesses outside Toronto?',
    answer: 'Absolutely. While we\'re based in Toronto and specialize in the GTA market, we work with clients across Canada and internationally. All our processes are remote-friendly, and we\'re comfortable working across time zones.',
  },
  {
    id: '4',
    question: 'What exactly are AI agents and do I need them?',
    answer: 'AI agents are autonomous software programs that handle tasks like answering customer inquiries, qualifying leads, booking appointments, and processing workflows — 24/7, without human input. If your business handles repetitive communication or data tasks, an AI agent can save you significant time and money.',
  },
  {
    id: '5',
    question: 'Who owns the website when it\'s done?',
    answer: 'You do. 100%. Once the project is paid in full, all code, designs, and assets are transferred to you. We don\'t hold your website hostage or lock you into proprietary systems you can\'t access.',
  },
  {
    id: '6',
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We handle redesigns frequently — whether you need a visual refresh, a platform migration, or a full architectural rebuild. We\'ll audit your current site first and give you an honest assessment of what\'s worth keeping.',
  },
  {
    id: '7',
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes. We offer monthly maintenance plans that include updates, security patches, content changes, and priority support. Many clients also retain us on a monthly basis for ongoing development and marketing work.',
  },
]
