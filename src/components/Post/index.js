const Post = (props) => { //também é possível desestruturar Exemplo: em vez de props colocar: (subtitle, title, children) irá funcionar da mesma forma e não será necessario usar o props.subtitle por exeplo somente subtitle
    return (
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>{props.subtitle}</h5>
            <h3>{props.title}</h3>
            <p className="mt-1">
                {props.children}
            </p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">Fulano de Tal</h6>
                    <p> Aug 2, 2020 - 8 min read</p>
                </div>

            </div>
        </div>
    )
}

export default Post