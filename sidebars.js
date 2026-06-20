/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      className: 'category-as-header getting-started-header',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'index',
          label: 'Introduction',
        },
      ],
    },

    {
      type: 'category',
      label: 'Platform UI',
      className: 'category-as-header usage-header',
      collapsed: true,
      items: [    
        'ui/index',
        'ui/setup-orgs',
        'ui/setup-projects',
      ],
    },    

    {
      type: 'category',
      label: 'Platform IAC',
      className: 'category-as-header api-reference-header',
      collapsed: false,
      items: [
        'iac/index',
      ],
    },    

    {
      type: 'category',
      label: 'Platform API',
      className: 'category-as-header code-definition-header',
      collapsed: true,
      items: [    
        'api/index',
      ],
    },    
  ],
};

module.exports = sidebars;
