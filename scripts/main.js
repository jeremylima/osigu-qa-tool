$(document).ready(function() {
    $('#addMore').on('click', function() {
        addRow();
    });

    $(document).on('click', '.remove', function() {
        removeRow(this);
    });

    $(document).on('click', '.clone', function() {
        cloneRow(this);
    });

    $('#copyToClipboard').on('click', function() {
        copyToClipboard();
    });

    $('#acceptanceCriteriaSelect').change(function() {
        updateAcceptanceCriteriaStatus(this.value);
    });

});

function updateAcceptanceCriteriaStatus(val) {
    $( "#acceptanceCriteriaStatus" ).removeClass("btn-success btn-danger btn-warning");

    var statusClass = "";
    /*if (str.indexOf("Yes") >= 0)*/
    if(val.indexOf("200")>=0){
        statusClass = "btn-success";
    }else if(val.indexOf("403")>=0){
        statusClass = "btn-warning";
    }else{
        statusClass = "btn-danger";
    }
    $( "#acceptanceCriteriaStatus" ).addClass(statusClass);
}

function setRowNumber() {
    $('.tablerow').each(function(i) {
        $("td:first", this).html(i + 1);
    });
}

function addRow() {
    var tr = $("#tb tr:last");
    var clone = tr.clone();
    clone.find(':text').val('');
    tr.after(clone);

    setRowNumber();
}

function removeRow(row) {
    var rowCount = $('#tb tr').length;
    if (rowCount > 2) {
        $(row).closest("tr").remove();
        setRowNumber();
    } else {
        alert("Sorry!! Can't remove the last row!");
    }
}

function cloneRow(row) {
    var tr = $(row).closest("tr");
    var clone = tr.clone();
    tr.after(clone);
    setRowNumber();
}

function copyToClipboard() {
    var table = document.getElementById('tb');

    var stringFormatted = "";

    var rowLength = table.rows.length;
    for (var i = 0; i < rowLength; i += 1) {
        var row = table.rows[i];
        if (i == 0) {
            stringFormatted += "||";
            var cellsLength = row.cells.length - 1;

            for (var j = 0; j < cellsLength; j += 1) {
                stringFormatted += row.cells[j].innerHTML.trim() + "||";
            }
            stringFormatted += "\n";
        } else {
            var line = i;
            stringFormatted += "|";
            stringFormatted += line + "|";
            var scenario = row.getElementsByTagName("textarea")[0].value;
            scenario = scenario.replace(/(?:\r\n|\r|\n)/g, " \\\\");
            stringFormatted += scenario + "|";

            var inputData = row.getElementsByTagName("textarea")[1].value;
            inputData = inputData.replace(/(?:\r\n|\r|\n)/g, " \\\\");
            stringFormatted += inputData + "|";

            var acceptanceCriteria = row.getElementsByTagName("textarea")[2].value;
            inputData = inputData.replace(/(?:\r\n|\r|\n)/g, " \\\\");
            stringFormatted += acceptanceCriteria + "|";

            var status = row.getElementsByTagName("input")[0].value;
            stringFormatted += status + "|";

            var comments = row.getElementsByTagName("textarea")[3].value;
            inputData = inputData.replace(/(?:\r\n|\r|\n)/g, " \\\\");
            stringFormatted += comments + "|";

            stringFormatted += "\n";
        }

    }

    console.log(stringFormatted);
}
