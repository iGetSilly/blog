import Post from "../Post"

function Article() {
    return (
        <section className="container">
            <h1>Article</h1>
            <div className=" mt-5 container-posts">
                <Post subtitle="tecnologia" title="O Guia definitivo do blog">
                    Texto de teste 1
                </Post>
                <Post subtitle="fotografia" title="Quais as melhores câmeras em 2023?">
                    Texto de teste 2
                </Post>
                <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
                    Texto de teste 3
                </Post>
            </div>
            
        </section>
        
    )
}

export default Article