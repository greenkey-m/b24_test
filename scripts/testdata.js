import "//api.bitrix24.com/api/v1/"

const x = 'Hello daddy!';
console.log('hello baby@');

BX24.init(function () {

    BX24.callMethod(
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