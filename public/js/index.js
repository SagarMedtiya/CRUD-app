$("#add_task").submit(function(event){
    alert("Data submitted successfully")
})

$('#update_task').submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={}
    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    console.log(unindexed_array)

    var request = {
        "url": `/api/tasks/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function(response){
        alert('Task updated successfully');
        window.location = '/';
    })
})

if(window.location.pathname == '/'){
    $onDelete = $(".table tbody td a.delete");
    $onDelete.click(function(){
        var id = $(this).attr("data-id");
        var request = {
            "url": `/api/tasks/${id}`,
            "method": "DELETE"
        }
        if(confirm("Do you really want to delete the task?")){
            $.ajax(request).done(function(response){
                alert('Task deleted successfully');
                location.reload()
            })
        }
    })
    
}