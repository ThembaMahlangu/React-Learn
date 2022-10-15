import Header from "./Header"
import Footer from "./Footer"
import ReactDOM from "react-dom"
import MainContent from "./MainContent"

function Page() {
    return (
        <div className="bodyy">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))