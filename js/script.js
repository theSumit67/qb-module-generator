document.getElementById("refreshApp")
    .click(function refreshAppBtnClick() {
        var iframe = document.getElementById("ngApp");
        iframe.src = iframe.src;
        
        iframe.contentWindow.location.reload(true);
    });

