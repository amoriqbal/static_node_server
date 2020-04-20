# static_node_server

Put your data in ``jsondata.json`` file in ``public`` folder.
Copy all contents of your ``<react-app-folder>/build`` as they are and paste into ``public`` folder beside ``jsondata.json``
This server serves the react app build at ``public`` folder and json data from ``jsondata.json`` via post req at ``/tabledata``.
Feel free to add more routes to index.js. But they should all be added before the last route that handles "/*"
