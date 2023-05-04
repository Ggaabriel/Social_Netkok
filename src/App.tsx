import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Burger } from "./assets/images/burger.svg";

const App = () => {
    var viewportHeight = window.innerHeight;
console.log(viewportHeight);
    //привет
    return (
        <div className="App flex flex-col justify-start max-w-[1920px] mx-auto">
            <header className=" relative bg-banner bg-cover bg-center overflow-hidden bg-no-repeat max-h-[300px] h-full w-[100%] before:bg-black before:w-full before:absolute before:h-full before:opacity-50 before:z-0">
                <div className="flex justify-between items-center absolute w-full p-5 z-10">
                    <div className="flex items-center">
                        <Logo className=" fill-textC" />
                        <h1 className=" font-inter font-black text-2xl text-logo text-textC">Cry</h1>
                    </div>
                    <div>
                        <button>
                            <Burger />
                        </button>
                    </div>
                </div>
            </header>
            <main className=" text-aTextC flex-auto ">
                <section className="bg-textC p-5">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </section>
            </main>
            <footer className="">
                footer
            </footer>
            
        </div>
    );
};

export default App;
