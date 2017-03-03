var rowId = 0;

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

    $(document).on('change', '.myAcceptanceCriteriaSelect', function() {
        updateAcceptanceCriteriaButton(this);

    });

    $(document).on('change', '.myStatusSelect', function() {
        updateStatusButton(this);

    });

});

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
