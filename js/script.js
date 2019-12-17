function change (button) {
    document.getElementById("checklist_btn").disabled = true;
    document.getElementById("prediction_btn").disabled = true;
    document.getElementById("movie_btn").disabled = true;
    let id = button.id;
    let value = document.getElementById(id).innerHTML;
   $.post('/start', { id: id }, function(data, status){
    document.getElementById('result_'+id).innerHTML = '<div class="result"><div id="data">'+data+'</div></div>';
    document.getElementById(id).innerHTML = value;
    document.getElementById("checklist_btn").disabled = false;
    document.getElementById("prediction_btn").disabled = false;
    document.getElementById("movie_btn").disabled = false;
   });
    let qq = '';
    qq += 'Santa`s elfs started their work';
    document.getElementById(id).innerHTML = qq;    
}