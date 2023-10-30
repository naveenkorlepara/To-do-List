const to_do = [];
document.getElementById('printbody').style.display='none';

    afterAddingTodolist();

    function afterAddingTodolist() {
      let html = '';
      for (let i = 0; i < to_do.length; i++) {
        const todo = to_do[i];
        const { name, date } = todo;
        const ht = `<p id="pr">
        <span id="span1">${name}</span> <span id="span2">${date}</span>
                <button onclick="
                    deleteTask(${i}),id='span3'
                    ">Delete</button>
             </p>
             `;
        html += ht;
      }
    
      document.querySelector('.printbody1').innerHTML=html;
    }
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }

    function add() {
      const addword = document.querySelector('.js-add');
      const newelement = (addword.value);
      const adddate = document.querySelector('.date');
      const newdate = formatDate(new Date(adddate.value));

      to_do.push({
        name: newelement,
        date: newdate
      });
      afterAddingTodolist();
      addword.value = '';
      adddate.value = '';
      document.getElementById('printbody').style.display='';
    }
    function deleteTask(index){
      to_do.splice(index,1);
      afterAddingTodolist();
    }
    function deleteAll(){
      to_do.length=0;
      afterAddingTodolist();
      document.getElementById('printbody').style.display='none';
     
    }

    