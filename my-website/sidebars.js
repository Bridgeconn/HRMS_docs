/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};
module.exports = {
  sidebar: [
    'intro',
    {
      type: 'category',
      label: 'HRMS Features',
      items: [
        'HRMS Features/p1-1-homepage',
        'HRMS Features/p1-2-myaccount',
        'HRMS Features/p1-3-leavemodule',
        'HRMS Features/p1-4-attendance',
        'HRMS Features/p1-5-travel',
        'HRMS Features/p1-6-timesheet',
        'HRMS Features/p1-7-performance',
        'HRMS Features/p1-8-company',
      ],
      collapsed: false,  // Ensures the category is expanded by default
    },
  ],
};



export default sidebar;
