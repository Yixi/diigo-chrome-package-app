/**
 * Created by liuyixi on 13-11-11.
 */

angular.module('diigoApp').
    directive('diigoAddNote',function(ItemsModel){

        return {
            link:function(scope,element){
                element.on('click',function(){
                    ItemsModel.addItem({
                        "type":"note",
                        "title":"note12",
                        "content":"dasfdsaf"
                    })
                });
            }
        };
    });