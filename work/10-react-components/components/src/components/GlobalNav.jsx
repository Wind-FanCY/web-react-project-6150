import '../styles/GlobalNav.css';
import Button from './Button';

const menu = [
    {
        name: "Home",
    },
    {
        name: "Dogs",
    },
    {
        name: "About",
    }
];

function GlobalNav({ setPage, className, setTitle }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
        setTitle(page);
    }

    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={ item.name }>
                <Button type="button" name={item.name} visual="link" onClick={ (e) => go(e,  item.name)}> { item.name } </Button>
            </li>
        )
    });

    return (
        <nav className={ `global-nav ${ className }` }>
            <ul className="global-nav__list">
                { list }
            </ul>
        </nav>
    )
}

export default GlobalNav;