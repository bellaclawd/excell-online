export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What happens after I reach out?',
    answer: 'You get a real reply within 1 business day. From there, we usually start with a short conversation or a focused project review so we can understand the offer, the current friction, and the clearest next step before talking scope in detail.',
  },
  {
    id: '2',
    question: 'What kinds of businesses are the best fit?',
    answer: 'The best fit is usually an established business that already has something real to sell and wants a stronger first impression, clearer trust signals, and a cleaner conversion path. We work especially well with teams that value direct communication and can make decisions without heavy internal churn.',
  },
  {
    id: '3',
    question: 'How are projects scoped and priced?',
    answer: 'Everything is scoped individually. Simpler marketing sites typically start around the lower end of the range shown in the contact form, while more custom builds, web apps, and automation work move upward depending on complexity. We aim to make scope, tradeoffs, and next steps clear before anything is approved.',
  },
  {
    id: '4',
    question: 'Do I need AI agents to work with you?',
    answer: 'No. AI is a specialty, not a requirement. Many projects are simply about making the site, proof, and conversion path stronger. Automation only makes sense when it removes repetitive work, improves response time, or helps the business operate more smoothly.',
  },
  {
    id: '5',
    question: 'Can you improve an existing website instead of rebuilding everything?',
    answer: 'Yes. Some projects need a full reset, but plenty just need sharper hierarchy, better proof, cleaner messaging, faster performance, or more credible contact flow. We can help identify what is worth keeping before recommending a larger rebuild.',
  },
  {
    id: '6',
    question: 'How long does a project usually take?',
    answer: 'A focused marketing site often lands in the 4 to 8 week range, while more custom products or automation-heavy work can extend beyond that. We prefer setting milestones and approvals early so the timeline stays clean instead of vague.',
  },
  {
    id: '7',
    question: 'What happens after launch?',
    answer: 'You keep ownership of the final work, and we can stay involved for support, refinement, or ongoing development if it makes sense. The goal is to launch cleanly and leave you with something maintainable, not create dependence on us.',
  },
]
