import './SideBar.css'

function SideBar({pages, selectedPage, setSelectedPage}) {

  return (
    <div className="sidebar">
      <h1>Contenidos</h1>
      {pages.map(page => <a onClick={() => setSelectedPage(page)} className={page.name === selectedPage.name ? `active` : ''}>{page.name}</a>)}
    </div>
  );
}

export { SideBar };