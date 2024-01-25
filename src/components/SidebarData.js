import React from 'react';
import * as IoIcons from 'react-icons/io';
import DashboardIcon from '../assets/dashboard.svg';
import UploadIcon from '../assets/upload.svg';
import InvoiceIcon from '../assets/invoice.svg';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <img src={DashboardIcon} alt="Dashboard" style={{ height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Upload',
    path: '/upload',
    icon: <img src={UploadIcon} alt="Upload" style={{ height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Invoice',
    path: '/invoice',
    icon: <img src={InvoiceIcon} alt="Invoice" style={{ height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: <IoIcons.IoIosPaper   style={{height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <IoIcons.IoMdCalendar   style={{height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: <IoIcons.IoMdNotifications   style={{height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoMdSettings  style={{height: '20px', width: '20px' }} />,
    cName: 'nav-text'
  }
];