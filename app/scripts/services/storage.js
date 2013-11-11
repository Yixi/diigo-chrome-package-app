/**
 * Created by liuyixi on 13-11-11.
 */

angular.module("diigoApp.Storage",[]).
    service('ItemsModel',function($rootScope){
        var service = {
            items:[
                {
                    "type":"note",
                    "title":"this is a test note",
                    "content":"this is a test content"
                }
            ],

            addItem: function(item){
                service.items.push(item);
                $rootScope.$broadcast('item.update');
            }
        }
        return service
    });