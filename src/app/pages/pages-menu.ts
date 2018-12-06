import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    'title': 'Initial Setup',
    'icon': 'fas fa-tachometer-alt',
    'children': [
      {
        'title': 'Welcome',
      },
      {
        'title': 'Software Details',
      },
      {
        'title': 'Basic Details',
        'link': '/pages/basic-details',
      },
      {
        'title': ' Session',
      },
      {
        'title': ' Class & Section',
        'link': '/pages/class-and-section',
      },
      {
        'title': ' Fees',
        children: [
          {
            'title': 'Define Fee Type',
          },
          {
            'title': 'Define Transport Fee',
          },
          {
            'title': 'Class Fees',
          },
          {
            'title': 'Update Student Fees',
          },
          {
            'title': 'Fee Reminder',
          },
        ],
      },
      {
        'title': ' Create Subject',
      },
      {
        'title': ' Student',
        children: [
          {
            'title': 'Student Master Entry',
          },
          {
            'title': 'Student Admission',
          },
          {
            'title': 'View Students',
          },
          {
            'title': 'Student Upload',
          },
          {
            'title': 'Promotion',
          },
          {
            'title': 'Transfer Class',
          },
          {
            'title': 'Define Family',
          },
        ],
      },
      {
        'title': ' Finance',
        children: [
          {
            'title': 'Create Account Type',
          },
          {
            'title': 'Create Account',
          },
          {
            'title': 'Income & Expense Head',
          },
        ],
      },
      {
        'title': ' User Permissions',
        children: [
          {
            'title': 'Manage User Type & Permission',
          },
          {
            'title': 'Communication Permissions',
          },
        ],
      },
      {
        'title': ' Manage Staff',
        children: [
          {
            'title': 'Staff Master Entry',
          },
          {
            'title': 'Staff Registration',
          },
          {
            'title': 'View Staff',
          },
          {
            'title': 'Staff Upload',
          },
        ],
      },
      {
        'title': ' Time Table',
        children: [
          {
            'title': 'Automatic Generate',
            children: [
              {
                'title': 'Automatic Timetable',
              },
              {
                'title': 'Assign Subject & Teacher',
              },
            ],
          },
          {
            'title': 'Time Table In Details',
            children: [
              {
                'title': 'Section Time Slot',
              },
              {
                'title': 'TimeTable Day Wise',
              },
              {
                'title': 'TimeTable Date Wise',
              },
            ],
          },
          {
            'title': 'View Time Table',
          },
        ],
      },
      {
        'title': ' Transport',
        children: [
          {
            'title': 'Transport Master Entry',
          },
          {
            'title': 'Vehicle',
          },
          {
            'title': 'Create Stoppage',
          },
          {
            'title': 'Create Route',
          },
          {
            'title': 'Assigning Stop To Route',
          },
          {
            'title': 'Assigning Staff To Route',
          },
          {
            'title': 'Assigning Student To Route',
          },
        ],
      },
      {
        'title': ' Exam',
        children: [
          {
            'title': 'Grade Setup',
          },
          {
            'title': 'Result Setup',
          },
        ],
      },
      {
        'title': ' Library',
        children: [
          {
            'title': 'Library Master Entry',
          },
          {
            'title': 'Manage Books',
          },
          {
            'title': 'Upload Books',
          },
          {
            'title': 'Manage List Books',
          },
          {
            'title': 'Books',
          },
          {
            'title': 'Print Bar Code',
          },
        ],
      },
      {
        'title': ' Manage User',
        children: [
          {
            'title': 'View User',
          },
          {
            'title': 'Login Report',
          },
        ],
      },
      {
        'title': ' Master Entry',
        children: [
          {
            'title': 'Front Office Master Entry',
          },
          {
            'title': 'Certificate / Icard Template Settings',
          },
        ],
      },
      {
        'title': ' Payroll',
        children: [
          {
            'title': 'Payroll Master Entry',
          },
          {
            'title': 'Salary Head & Structure',
          },
          {
            'title': 'Assign Salary Structure',
          },
        ],
      },
      {
        'title': ' Admission Process',
        children: [
          {
            'title': 'Admission Process Master Entry',
          },
          {
            'title': 'Start Admission',
          },
          {
            'title': 'View Admission Request',
          },
        ],
      },
      {
        'title': ' Communicate',
        children: [
          {
            'title': 'Notification Permissions',
          },
        ],
      },
      {
        'title': ' Online Payment',
        children: [
          {
            'title': 'Manage Payment Gateway',
          },
        ],
      },
    ],
  },
  {
    'title': 'Main',
    'icon': 'fas fa-tachometer-alt',
    'children': [
      {
        'title': 'Dashboard',
        'icon': 'fas fa-tachometer-alt',
        'children': [
          {
            'title': 'Form Inputs',
            'link': '/pages/forms/inputs',
          },
          {
            'title': 'Form Layouts',
            'link': '/pages/forms/layouts',
          },
        ],
      },
      {
        'title': 'Attendance',
        'icon': 'fas fa-user-check',
        'children': [
          {
            'title': 'Staff Attendance',
          },
          {
            'title': 'Upload Staff Attendance',
          },
          {
            'title': 'Display Staff Attendance',
          },
          {
            'title': 'Student Attendance',
          },
          {
            'title': 'Display Student Attendance',
          },
          {
            'title': 'Reports',
          },
          {
            'title': 'School Wise Attendance Report',
          },
        ],
      },
      {
        'title': ' Communicate',
        'icon': 'fas fa-phone-square',
        'children': [
          {
            'title': 'Send Message',
          },
          {
            'title': 'Message Report',
          },
          {
            'title': 'Noticeboard',
          },
        ],
      },
      {
        'title': 'Events',
        'icon': 'fas fa-calendar-alt',
        'children': [
          {
            'title': 'Events Calendar',
          },
        ],
      },
      {
        'title': 'Exam',
        'icon': 'fas fa-edit',
        'children': [
          {
            'title': 'Result Entry Scholastic',
          },
          {
            'title': 'Result Entry Co-Scholastic',
          },
          {
            'title': 'View Mark-Sheet',
          },
          {
            'title': 'Reports',
            'children': [
              {
                'title': 'Scholastic Grade Result',
              },
              {
                'title': 'Co-Scholastic Grade Result',
              },
            ],
          },
        ],
      },
      {
        'title': 'Fees',
        'icon': 'fas fa-money-bill-alt',
        'children': [
          {
            'title': 'Fee Payment',
          },
          {
            'title': 'Pending Transaction',
          },
          {
            'title': 'Online Fee Payment List',
          },
          {
            'title': 'Fees Due / Paid List',
          },
          {
            'title': 'Pay Online',
          },
          {
            'title': 'Online Transaction Report',
          },
          {
            'title': 'Reports',
            'children': [
              {
                'title': 'Fees Due School/Class Wise',
              },
              {
                'title': 'Student Fee Register',
              },
              {
                'title': 'Get Class Fee Structure',
              },
              {
                'title': 'See Fees Due For Entire Family',
              },
            ],
          },
        ],
      },
      {
        'title': 'Finance',
        'icon': 'fa fa-money-bill',
        'children': [
          {
            'title': 'Record Expense',
          },
          {
            'title': 'Record Income',
          },
          {
            'title': 'Account Balance Transfer',
          },
          {
            'title': 'Finance Reports',
            'children': [
              {
                'title': 'Daily Register',
              },
              {
                'title': 'P & L',
              },
            ],
          },
        ],
      },
      {
        'title': 'Front Office',
        'icon': 'fa fa-building',
        'children': [
          {
            'title': 'Call & Follow-up',
          },
          {
            'title': 'Enquiry',
          },
          {
            'title': 'Complaint',
          },
          {
            'title': 'Visitor Book',
          },
        ],
      },
      {
        'title': 'Gallery',
        'icon': 'fa fa-object-group',
      },
      {
        'title': 'Homework',
        'icon': 'fa fa-home',
        'children': [
          {
            'title': 'Create Homework',
          },
          {
            'title': 'Homework Evaluation',
          },
          {
            'title': 'Student Homework List',
          },
          {
            'title': 'Reports',
            'children': [
              {
                'title': 'Homework Evaluation Report',
              },
            ],
          },
        ],
      },
      {
        'title': 'Library',
        'icon': 'fas fa-book-reader',
        'children': [
          {
            'title': 'Issue & Return',
          },
          {
            'title': 'Library Due',
          },
          {
            'title': 'Library Reports',
            'children': [
              {
                'title': 'Books Issue Report',
              },
            ],
          },
        ],
      },
      {
        'title': 'Payroll',
        'icon': 'fas fa-credit-card',
        'children': [
          {
            'title': 'Approve Leave',
          },
          {
            'title': 'Salary Payment',
          },
          {
            'title': 'Print Payslip',
          },
        ],
      },
      {
        'title': 'Student',
        'icon': 'fas fa-user-graduate',
        'children': [
          {
            'title': 'Generate Certificate',
          },
          {
            'title': 'Generate Identity Card',
          },
          {
            'title': 'Generated Certificate',
          },
          {
            'title': 'Student List',
          },
          {
            'title': 'Document List',
          },
        ],
      },
      {
        'title': ' Subject',
        'icon': 'fas fa-book',
        'children': [
          {
            'title': 'Elective Subject',
          },
        ],
      },
      {
        'title': 'Manage Staff',
        'icon': 'fas fa-users',
        'children': [
          {
            'title': 'Staff Reports',
            'children': [
              {
                'title': 'Staff Salary',
              },
            ],
          },
        ],
      },
      {
        'title': 'Time Table',
        'icon': 'fas fa-calendar-alt',
        'children': [
          {
            'title': 'View TimeTable',
          },
          {
            'title': 'Time Table Reports',
            'children': [
              {
                'title': 'Staff/Subject Allocation',
              },
              {
                'title': 'Holiday List',
              },
              {
                'title': 'View Subject Plan',
              },
            ],
          },
        ],
      },
      {
        'title': 'Transport',
        'icon': 'fas fa-bus-alt',
        'children': [
          {
            'title': 'Student Transport Attendance',
          },
          {
            'title': 'View Location',
          },
          {
            'title': 'Transport Reports',
            'children': [
              {
                'title': 'Route Details',
              },
              {
                'title': 'Vehicle Report',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    'title': 'Language',
  },
  {
    'title': 'Report Bug',
  },
  {
    'title': 'Voice Command',
  },
  {
    'title': 'Full Screen',
  },
  {
    'title': 'Collapsible Menu',
  },
];
