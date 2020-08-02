function sendRequest() {

    var location_selected = [];
    $('#location_picker :selected').each(function(){
        location_selected.push($(this).text());
    });

    var sector_selected = [];
    $('#sector_picker :selected').each(function(){
        sector_selected.push($(this).text());
    });

    var ss = {};
    ss.location = location_selected;
    ss.sector = sector_selected;

    $.ajax({
        type: 'POST',
        // Provide correct Content-Type, so that Flask will know how to process it.
        contentType: 'application/json',
        // Encode your data as JSON.
        data: JSON.stringify(ss),
        // This is the type of data you're expecting back from the server.
        dataType: 'json',
        url: 'http://api.rasp.team:5000/v1.0/request',
        success: function (e) {
            var num_jobs = e['jobs_found'];

            if (num_jobs == 0) {
                document.getElementById('error').innerHTML = 'No Jobs Found!';
                // TODO: Have to clear map.
            }else{
                document.getElementById('error').innerHTML = '';
                data = sum_districts(e['data'])
                renderData(data);
                filterData(data);
            }
        }
    });
}