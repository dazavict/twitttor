


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



// Guardar  en el cache dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {


    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {

            cache.put( req, res.clone() );
            
            return res.clone();

        });

    } else {
        return res;
    }



}

