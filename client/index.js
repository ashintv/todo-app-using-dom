renderTodo()

function createElemet (data, index) {
        const rt = ` <div id=${index} class="flex gap-10 m-10">
                        <h1>
                             ${index + 1}.${data} 
                        </h1>
                        <button class="bg-red-400 px-2 rounded-xs" onclick='{deleteTod(${index})}'>Delete</button>
                </div>`

        return rt
}
async function renderTodo () {
        const response = await axios.get("http://localhost:3002")
        const TODO = response.data.TODO
        const todoelemet = document.getElementById('todo')
        const index = TODO.length
        let st = ''
        for (let i = 0; i < TODO.length; i++) {
                st = st + createElemet(TODO[i], i)
        }
        todoelemet.innerHTML = st
}
async function addtodo () {
        const todo = document.getElementById('inp').value
        await axios.post("http://localhost:3002", {
                newTodo: todo
        })

        renderTodo()

}

async function deleteTod (index) {
        console.log(index)
        await axios.delete("http://localhost:3002",{
               data:{
                index
               }
        })
        renderTodo()
}