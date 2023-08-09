import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';

export default function Appbar() {
    return (
        <header className={css.header}>
            <Container>
                <Navigation />
            </Container>
        </header>
    );
}
