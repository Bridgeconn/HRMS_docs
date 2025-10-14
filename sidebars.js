/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  hrmsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'HRMS Features',
      items: [
        'HRMS Features/p1-1-homepage',
        'HRMS Features/p1-2-myaccount',
        'HRMS Features/p1-3-leavemodule',
        'HRMS Features/p1-4-attendance',
        'HRMS Features/p1-5-toggltrack',
        'HRMS Features/p1-6-performance',
        'HRMS Features/p1-7-travel',
        'HRMS Features/p1-8-hotel',
        'HRMS Features/p1-9-recruitment',
        'HRMS Features/p1-10-employment',
        'HRMS Features/p1-11-department',
        'HRMS Features/p1-12-company',
        'HRMS Features/p1-13-profile',
      ],
    },
    {
      type: 'category',
      label: 'HOD/Reporting Person',
      items: [
        'HOD/Reporting Person/p2-1-Leave',
        'HOD/Reporting Person/p2-2-Attendance',
        'HOD/Reporting Person/p2-3-Timesheet',
        'HOD/Reporting Person/p2-4-Appraisals',
        'HOD/Reporting Person/p2-5-Travel',
        'HOD/Reporting Person/p2-6-Hotel',
      ],
    },
    {
      type: 'category',
      label: 'HR Processes',
      items: [
        'HR Processes/p3-1-leave',
        'HR Processes/p3-2-attendance',
        'HR Processes/p3-3-performance',
        'HR Processes/p3-4-travel',
        'HR Processes/p3-5-hotel',
        'HR Processes/p3-6-recruitment',
        'HR Processes/p3-7-employment',
        'HR Processes/p3-8-department',
        'HR Processes/p3-9-company',
      ],
    },
  ],
};

module.exports = sidebars;
