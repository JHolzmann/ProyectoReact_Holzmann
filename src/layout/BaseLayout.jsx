import Header from "../containers/Header/header";

const BaseLayout = ({ children }) => {

    return (
    <>
        <Header />
        { children }
        <footer>
        <p>Proyecto Jessica Holzmann Reac js</p>
        </footer>
    </>
);
};

export default BaseLayout;