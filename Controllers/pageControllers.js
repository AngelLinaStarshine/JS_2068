exports.show = (req, res) => {

    //path is a root or page
    const path = (req.path === '/') ? `/home` : req.path;
        
    //render that path

    res.render(`pages${path}`); 
    //views/pages/about


};

//function (req, res) ();