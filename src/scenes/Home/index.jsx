import React from 'react';
import Header from "../../components/Header";
import FutureGames from "./components/FutureGames";

class Home extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header title="Budoucí akce" />
                {/*<FutureGames />*/}
            </div>
        );
    }
}

export default Home;
