import 'animate.css';

function Hero() {

    return (
        <>
        <section className="container">
            <div className="conteudo" id="home">
            <div className="container-text">
                <h1 className="my-h1"></h1>
                <h2 className="my-h2 ">Dariks</h2>
                <h2 className="my-h3">Barbershop</h2>
                <p className="my-p">Transformamos cabelos em obras de arte, um corte de cada vez.</p>
            </div>
        <div className="obj">
            <div className="obj-text">
                <p>Reserve seu Horario. Agende agora!</p>
                <a target='blank' href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0"><button>WhatsApp</button></a>
            </div>
        </div>
        </div>
        </section>      
        </>
        
    )
}

export default Hero;