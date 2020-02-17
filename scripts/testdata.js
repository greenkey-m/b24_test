const x = 'Hello daddy!';
console.log('hello baby@');

BX.ready(function () {

    console.log('Fuckme');

    BX.callMethod(
        'catalog.product.list',
        { select:{
                id
            } ,
            filter:{},
            order:{
                id: ASC
            },
            navigation: 1
        },
        function(result)
        {
            if(result.error())
                console.error(result.error().ex);
            else
                console.log(result.data());
        });

});