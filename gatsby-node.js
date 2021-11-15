exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const treatmentOptions = [
    {
      name: 'Treatment Options',
      url: '/treatment-options/',
      external: false,
    },
    {
      name: 'With medication',
      url: '/treatment-options/with-medication/',
      external: false,
    },
    {
      name: 'Open chest',
      url: '/treatment-options/open-chest/',
      external: false,
    },
    {
      name: 'Minimal incision',
      url: '/treatment-options/minimal-incision/',
      external: false,
    },
    {
      name: 'Trancatheter approach (TAVR)',
      url: 'https://newheartvalve.com/understand-aortic-stenosis/treatment-options/',
      external: true,
    },
  ]

  const heartBasics = [
    {
      name: 'What you should know about your heart and heart valve diseases',
      url: '/heart-basics/',
    },
    {
      name: 'Basic anatomy and function of the heart',
      url: '/heart-basics/heart-anatomy/',
    },
    {
      name: 'How the heart valves work',
      url: '/heart-basics/heart-valves/',
    },
    {
      name: 'Causes and effects of heart valve disease',
      url: '/heart-basics/valve-diseases/',
    },
    {
      name: 'Diagnosis of heart valve disease',

      url: '/heart-basics/disease-diagnosis/',
    },
    {
      name: 'Get to know your medical team',
      url: '/heart-basics/your-medical-team/',
    },
    // {
    //   name: 'Frequently asked questions',

    //   url: '/heart-basics/faqs/',

    //   external: false,

    //   content: {
    //     title: 'Frequently asked questions',

    //     description: 'This is sample content',
    //   },
    // },
    {
      name: 'Frequently asked questions',
      url: '/heart-basics/faqs/',
    },
  ]

  const legalTerms = [
    { name: 'Legal Terms', url: '/legal-terms/' },
    {
      name: 'Copyrights / Trademarks',
      url: '/legal-terms/copyright-trademarks/',
    },
    { name: 'Disclaimers', url: '/legal-terms/disclaimers/' },
    { name: 'Third-party links', url: '/legal-terms/third-party-links/' },
    { name: 'Submissions', url: '/legal-terms/submissions/' },
    { name: 'Forward statements', url: '/legal-terms/forward-statements/' },
    { name: 'Applicable laws', url: '/legal-terms/applicable-laws/' },
    { name: 'IP Infringement', url: '/legal-terms/ip-infringement/' },
    { name: 'Posted content', url: '/legal-terms/posted-content/' },
    { name: 'Miscellaneous', url: '/legal-terms/miscellaneous/' },
  ]

  const contactUs = [
    {
      name: 'Contact us',
      url: '/contact-us/',
    },
    {
      name: 'Healthcare Professionals',
      url: '/contact-us/healthcare-professionals/',
    },
    {
      name: 'Patients & Caregivers',
      url: '/contact-us/patients-and-caregivers/',
    },
    {
      name: 'General Contact Inquiries',
      url: '/contact-us/general-contact-inquiries/',
    },
    {
      name: 'Customer Service',
      url: '/contact-us/customer-service/',
    },
    {
      name: 'Media',
      url: '/contact-us/media/',
    },
    {
      name: 'Investor',
      url: '/contact-us/investor/',
    },
    {
      name: 'Technical Support',
      url: '/contact-us/technical-support/',
    },
    {
      name: 'Global Locations',
      url: '/contact-us/global-locations/',
    },
  ]

  const privacyPolicy = [
    {
      name: 'Privacy Policy',
      url: '/privacy-policy/',
    },
    {
      name: 'On-line information',
      url: '/privacy-policy/on-line-information/',
    },
    {
      name: 'Disclosure of Information',
      url: '/privacy-policy/disclosure-of-information/',
    },
    { name: 'Cookies', url: '/privacy-policy/cookies/' },
    {
      name: ' On-line Visitors Under 13',
      url: '/privacy-policy/children-under-13/',
    },
    { name: 'Security', url: '/privacy-policy/security/' },
    {
      name: 'Policy Change',
      url: '/privacy-policy/policy-change/',
    },
  ]

  treatmentOptions.forEach((item) => {
    !item.external &&
      createPage({
        path: `${item.url}`,
        component: require.resolve(`./src/templates/page-template.js`),
        context: { item },
      })
  })

  heartBasics.forEach((item) => {
    createPage({
      path: `${item.url}`,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { item },
    })
  })

  legalTerms.forEach((item) => {
    createPage({
      path: `${item.url}`,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { item },
    })
  })

  contactUs.forEach((item) => {
    createPage({
      path: `${item.url}`,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { item },
    })
  })
  privacyPolicy.forEach((item) => {
    createPage({
      path: `${item.url}`,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { item },
    })
  })
}
