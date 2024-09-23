import Header from "../containers/Header/header";
import Footer from "../containers/Footer/footer";

const BaseLayout = ({ children }) => {

    return (
    <>
        <Header />
        { children }
        <Footer />
    </>
);
};

export default BaseLayout;