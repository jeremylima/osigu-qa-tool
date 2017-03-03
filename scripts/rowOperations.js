function setRowNumber() {
    $('.tablerow').each(function(i) {
        $("td:first", this).html(i + 1);
    });
}

function addRow() {
    rowId++;

    $("#tb tr:last").after("<tr class='tablerow' id='row"+ (rowId) +"'>");
    $('#row'+rowId).html("<td> 1 </td> <td> <textarea name='scenario' placeholder='Scenario Name' class='form-control'></textarea> </td> <td> <div> <textarea class='form-control form-group' name='inputData' placeholder='Input Data' ></textarea> </div> <div> <textarea class='form-control form-group' name='Payload' placeholder='Payload' ></textarea> </div> </td> <td>  <div class='form-group form-group-multiple-selectsp'> <div class='input-group input-group-multiple-selectp'> <select id='acceptanceCriteriaSelect" + rowId + "' class='form-control myAcceptanceCriteriaSelect' name='values[]'> <option >200 OK</option> <option >403 Forbidden</option> <option >404 Not found</option> <option >Nothing</option> </select> <span class='input-group-addon input-group-addon-remove'> <span id='acceptanceCriteriaButton" + rowId + "' class='btn btn-success btn-circle'></span> </span> </div>   </div> <div> <textarea class='form-control form-group' name='acceptanceCriteria' placeholder='Acceptance Criteria' ></textarea> </div>  </td> <td> <div class='form-group form-group-multiple-selectsp'> <div class='input-group input-group-multiple-selectp'> <select id='statusSelect" + rowId + "' class='form-control myStatusSelect' name='values[]'> <option >Successful</option> <option >Pending</option> <option >Failure</option> </select> <span class='input-group-addon input-group-addon-remove'> <span id='statusButton" + rowId + "' class='btn btn-success btn-circle'></span> </span> </div> </div>  </td> <td> <textarea name='comments[]' placeholder='Comments' class='form-control'></textarea> </td> <td> <a href='javascript:void(0);' class='clone' title='Clone row'><span class='glyphicon glyphicon-copyright-mark'></span></a> <a href='javascript:void(0);' class='remove' title='Remove row'><span class='glyphicon glyphicon-remove' style='color:red'></span></a> </td>"  );

    setRowNumber();
}

function removeRow(row) {
    var rowCount = $('#tb tr').length;
    if (rowCount > 2) {
        $(row).closest("tr").remove();
        setRowNumber();
    } else {
        toastr.warning("Can't remove the last row!", 'Warning', {timeOut: 2000});
    }
}

function cloneRow(row) {

    rowId++;
    var tr = $(row).closest("tr");
    var clone = tr.clone();
    clone.attr('id','row'+ rowId);

    //Select AcceptanceCriteria ------------
    var acceptanceCriteriaSelect = $(clone).closest("tr").find('.myAcceptanceCriteriaSelect')[0];
    $(acceptanceCriteriaSelect).attr('id','acceptanceCriteriaSelect'+ rowId);
    var originAcceptanceCriteriaSelectValue = $(tr).closest("tr").find('.myAcceptanceCriteriaSelect')[0];
    $(acceptanceCriteriaSelect).val(originAcceptanceCriteriaSelectValue.value);

    var acceptanceCriteriaButton = $(clone).closest("tr").find('.myAcceptanceCriteriaButton')[0];
    $(acceptanceCriteriaButton).attr('id','acceptanceCriteriaButton'+ rowId);

    //Select Status -------------------
    var statusSelect = $(clone).closest("tr").find('.myStatusSelect')[0];
    $(statusSelect).attr('id','statusSelect'+ rowId);
    var originStatusSelectValue = $(tr).closest("tr").find('.myStatusSelect')[0];
    $(statusSelect).val(originStatusSelectValue.value);

    var statusButton = $(clone).closest("tr").find('.myStatusButton')[0];
    $(statusButton).attr('id','statusButton'+ rowId);

    tr.after(clone);

    setRowNumber();
}
