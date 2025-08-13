async function getCommentData() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

getCommentData();
function addUser(email,password){
axios.post('/user',{
    emial:email,
    password:password
})
.then((res)=>{
    console.log(res.data)
})
.then((err)=>{
    console.log(err.message)
})
}