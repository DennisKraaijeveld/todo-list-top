const Header = () => {
  const contentDiv = document.getElementById('#main-content');

  const NavigationHeader = document.createElement('div'),
    navWrapper = document.createElement('nav'),
    navContainer = document.createElement('div'),
    searchBar = document.createElement('div'),
    navButtonSection = document.createElement('div');

  navButtonSection.setAttribute('id', '#buttons');

  NavigationHeader.className = 'header';
  navWrapper.className = 'header-container';
  navContainer.className = 'header-wrapper';
  searchBar.className = 'search-bar';
  navButtonSection.className = 'header-buttons';

  NavigationHeader.appendChild(navWrapper);
  navWrapper.appendChild(navContainer);
  navContainer.append(searchBar, navButtonSection);

  contentDiv.appendChild(NavigationHeader);
};

export default Header;
