
        document.getElementById('btn'). addEventListener('click',
        function(){
        
            let input=document.getElementById('input').value;
            let elem=document.createElement('li');
            let btn1=document.createElement('button');
            let btn2=document.createElement('button');
            btn1.innerText="Done";
            btn2.innerText="Delete";
            elem.innerText=input;
            let ul=document.querySelector('ul');
            ul.appendChild(elem);
            elem.appendChild(btn1);
            elem.appendChild(btn2); 
            btn2.style.border="none";
            btn2.style.marginleft="3%";
            btn1.style.borderRadius="8px";
            btn1.style.background="#b4b3d8";
            btn1.addEventListener('click',
            function(){
                elem.style.textDecoration="line-through";
            }
            );btn2.addEventListener('click',
            function(){
                elem.remove();
            }
            );

            document.getElementById('input').value="";
        }
        );
 
      