import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Burger } from "./assets/images/burger.svg";

const App = () => {
    return (
        <div className="App flex flex-col justify-start max-w-[1100px] mx-auto">
            <header className="flex justify-between items-center py-5">
                <div className="flex items-center">
                    <Logo className=" fill-logoC" />
                    <h1 className=" font-inter font-black text-2xl text-logo text-logoC">Cry</h1>
                </div>
                <div>
                    <button>
                        <Burger />
                    </button>
                </div>
            </header>

            <div className="flex-auto">
                {/* <nav className="">
                    <ul>
                        <li>Главная</li>
                        <li>Сообщения</li>
                        <li>Друзья</li>
                    </ul>
                </nav> */}
                <main className=" text-aTextC">
                    <section className="bg-textC">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </section>
                </main>
            </div>
            <footer>footer</footer>
        </div>
    );
};

export default App;
