function Pageheader({tittle}) {
    return (
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{tittle}</h2>
                    </div>
                    <div class="col-12">
                        <a href="/">Home</a>
                        <a href="">{tittle}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pageheader