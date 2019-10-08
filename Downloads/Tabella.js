<script type='text/javascript'>
02
function aggiungiRiga(id_table){
03
     var table = document.getElementById(id_table);
04
     var tbody = table.getElementsByTagName('tbody')[0];
05
     var colonne = table.getElementsByTagName('th').length; 
06
     var tr = document.createElement('tr');
07
     for(var i=0; i<colonne; i++){
08
          var td = document.createElement('td');
09
          var tx = document.createTextNode(prompt("Inserisci testo per cella "+(i+1),""));
10
          td.appendChild(tx);
11
          tr.appendChild(td);
12
     }
13
     tbody.appendChild(tr);
14
}
15
</script>

