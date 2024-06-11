import { context } from "../../Helpers/logHelper";
context.result.body = await logMovies('https://jsonplaceholder.typicode.com/todos/1');
async function logMovies(fname: RequestInfo | URL) {
    var response = await fetch(fname);
    var j = await response.text(); //.json()
    return j;
}
