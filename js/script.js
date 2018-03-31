document
  .getElementById("refreshApp")
  .addEventListener("click", function refreshAppBtnClick() {
    Rx.Observable.fromPromise(fetch('http://localhost:9000' + '/component', {
        body: editor.getValue(),
        cache: "no-cache",
        headers: {
          "content-type": "text/plain"
        },
        method: "POST", 
        mode: "no-cors"
      }))
      .subscribe(response => {
        console.log(' holla -> ' + response)
      });

    var iframe = document.getElementById("ngApp");
    iframe.src = iframe.src;
    // iframe.contentWindow.location.reload(true);
  });

/**
 * Editor
 */
var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night_bright");
editor.session.setMode("ace/mode/typescript");

editor.commands.addCommand({
  name: "saveFile",
  bindKey: {
    win: "Ctrl-S",
    mac: "Command-S",
    sender: "editor|cli"
  },
  exec: function(env) {
    console.log(env);
  }
});
