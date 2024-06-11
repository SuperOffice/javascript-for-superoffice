import { context } from "../../Helpers/logHelper";
let numbers = [1, 2, 3];
for (let num of numbers) {
    context.result.body += num + ",";
}
//Returns 1,2,3,
