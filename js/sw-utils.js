


// Guardar en el cache dinamico

function actualizaCache(dynanicCache, req, res) {

    if ( res.ok){
       return  caches.open(dynanicCache).then( cache => {
            cache.put(req, res);
            return res.clone();
        })


    } else {
        return res;
    }

}