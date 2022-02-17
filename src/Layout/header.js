export default function Header() {
  const NavigationHeader = document.createElement('div'),
    navWrapper = document.createElement('nav'),
    navContainer = document.createElement('div'),
    searchBar = document.createElement('div'),
    searchContainer = document.createElement('div'),
    navButtonSection = document.createElement('div'),
    todayBtn = document.createElement('div'),
    laterBtn = document.createElement('div'),
    completedBtn = document.createElement('div');

  NavigationHeader.className = 'header';
  navWrapper.className = 'header-container';
  navContainer.className = 'header-wrapper';
  searchBar.className = 'search-bar';
  searchContainer.className = 'search-container';
  todayBtn.className = 'button-active';
  laterBtn.className = 'header-buttons';
  completedBtn.className = 'header-buttons';

  todayBtn.textContent = 'Today';
  laterBtn.textContent = 'Later';
  completedBtn.textContent = 'Completed';

  searchContainer.append(todayBtn, laterBtn, completedBtn);

  searchBar.appendChild(searchContainer);
  NavigationHeader.appendChild(navWrapper);
  navWrapper.appendChild(navContainer);
  navContainer.append(searchBar);

  return NavigationHeader;
}
