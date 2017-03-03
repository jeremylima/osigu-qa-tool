function updateAcceptanceCriteriaButton(select) {

    var val = select.value;
    var currentRow = select.id.replace("acceptanceCriteriaSelect","");

    $( '#acceptanceCriteriaButton' + currentRow).removeClass("btn-success btn-danger btn-warning");

    var statusClass = "";

    if(val.indexOf("200")>=0){
        statusClass = "btn-success";
    }else if(val.indexOf("403")>=0){
        statusClass = "btn-warning";
    }else if(val.indexOf("404")>=0){
        statusClass = "btn-danger";
    }else{
        statusClass = "btn-default";
    }
    $( '#acceptanceCriteriaButton' + currentRow ).addClass(statusClass);
}

function updateStatusButton(select) {
    var val = select.value;
    var currentRow = select.id.replace("statusSelect","");


    $( '#statusButton' + currentRow ).removeClass("btn-success btn-danger btn-warning");

    var statusClass = "";

    if(val.indexOf("Success")>=0){
        statusClass = "btn-success";
    }else if(val.indexOf("Pending")>=0){
        statusClass = "btn-warning";
    }else{
        statusClass = "btn-danger";
    }
    $( '#statusButton' + currentRow ).addClass(statusClass);
}
