<!DOCTYPE html>
<html>
    <head>
        <script src="app.js"></script>
    </head>

    <body>
        <video id="localVideo" autoplay muted style="width:40%;"></video>
        <video id="remoteVideo" autoplay style="width:40%;"></video>

        <br />

        <input type="button" id="start" onclick="start(true)" value="Start Video"></input>

        <script type="text/javascript">
            pageReady();
        </script>
    </body>
</html>