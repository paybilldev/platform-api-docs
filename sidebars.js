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
    }
  ],
};

module.exports = sidebars;
