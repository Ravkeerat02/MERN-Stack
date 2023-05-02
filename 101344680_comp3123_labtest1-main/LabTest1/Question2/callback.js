/*
Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to delayedSuccess and resolves a 
message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to delayedException and rejects an 
error message after a timeout of 500ms.
o Call both promises separately and handle the resolved and reject results and then output 
to the console
*/
const resolvedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(res({ message: "delayed success!" }), 500)
  });

const rejectedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(rej({ error: "delayed exception!" }), 500)
  });

resolvedPromise().then((message) => console.log(message));
rejectedPromise().catch((err) => console.log(err));