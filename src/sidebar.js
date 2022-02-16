// TODO: Should get populated by user created projects
let menuItems = ['Projects', 'Work', '+ Add New'];

const Sidebar = () => {
  const mainDiv = document.getElementById('#content');
  const NavigationSidebar = document.createElement('div');

  const navWrapper = document.createElement('nav');
  const navContainer = document.createElement('div');

  for (let i = 0; i < menuItems.length; i++) {
    const MenuItem = document.createElement('div');
    MenuItem.textContent = `${menuItems[i]}`;
    MenuItem.className = 'menu-item';
    navContainer.appendChild(MenuItem);
  }

  NavigationSidebar.className = 'sidebar';
  navWrapper.className = 'navigation';
  navContainer.className = 'nav-container';

  NavigationSidebar.appendChild(navWrapper);
  navWrapper.appendChild(navContainer);

  mainDiv.appendChild(NavigationSidebar);
};

export default Sidebar;
