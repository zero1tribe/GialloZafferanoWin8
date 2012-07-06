(function () {
    "use strict";


    /*FILE WRITE*/

    var sampleFile = null;



    function createFile() {
        console.log("CREATE FILE");
        Windows.Storage.KnownFolders.documentsLibrary.createFileAsync("ricette.dat", Windows.Storage.CreationCollisionOption.replaceExisting).done(
        function (file) {
            StorageRecipes.sampleFile = file;
           console.log("The file '" + StorageRecipes.sampleFile.name + "' was created.");
        },
        function (error) {
            console.log("ERRORE  =  " + error);
            console.log(error, "sample", "error");
        });
    }

    function deleteFile() {
        console.log("DELETE FILE");

        if (StorageRecipes.sampleFile !== null) {
            StorageRecipes.sampleFile.deleteAsync().done(function () {
                StorageRecipes.sampleFile = null;
                console.log( "The file 'sample.dat' was deleted.");
            },
            function (error) {
                console.log("ERRORE  =  " + error);
                console.log(error, "sample", "error");
            });
        }
    }

    function validateFileExistence() {
        console.log("VALIDATE FILE");

        Windows.Storage.KnownFolders.documentsLibrary.getFileAsync("ricette.dat").done(
            function (file) {
                // If file exists.
                StorageRecipes.sampleFile = file;
            },
            function (err) {
                // If file doesn't exist, indicate users to use scenario 1.
                createFile();
                /*StorageRecipes.sampleFile = null;
                console.log("The file 'sample.dat' does not exist. Use scenario one to create this file.", "sample", "error");*/
            }
        );
    };

    // Writes some text to 'sample.dat'
    function writeText(userContent) {
        StorageRecipes.validateFileExistence();
        if (StorageRecipes.sampleFile !== null) {
            console.log("WRITE " + userContent);
            if (userContent !== "") {
                Windows.Storage.FileIO.writeTextAsync(StorageRecipes.sampleFile, userContent).done(function () {
                    console.log("The following text was written to '" + StorageRecipes.sampleFile.name + "':<br /><br />" + userContent);
                    readText();
                },
                function (error) {
                    console.log("ERRORE  =  " + error);
                    console.log(error, "sample", "error");
                });
            } else {
                console.log( "The text box is empty, please write something and then click 'Write' again.");
            }
        }
    }

    // Reads text from 'sample.dat'
    function readText() {
        StorageRecipes.validateFileExistence();
        console.log("READ ");
        if (StorageRecipes.sampleFile !== null) {
            Windows.Storage.FileIO.readTextAsync(StorageRecipes.sampleFile).done(function (fileContent) {
               
                console.log("The following text was read from '" + StorageRecipes.sampleFile.name + "':<br /><br />" + fileContent);
                console.log(JSON.parse(fileContent));
            },
            function (error) {
                console.log("ERRORE  =  " + error);
                console.log(error, "sample", "error");
            });
        }
    }



    var newCreate = false;

    function createDB() {
        // Create the request to open the database, named BookDB. If it doesn't exist, create it and immediately
        // upgrade to version 1.
        var dbRequest = window.indexedDB.open("RecipeDB", 1);

        // Add asynchronous callback functions
        dbRequest.onerror = function () { console.log("Error creating database.", "sample", "error"); };
        dbRequest.onsuccess = function (evt) { dbSuccess(evt); };
        dbRequest.onupgradeneeded = function (evt) { dbVersionUpgrade(evt); };
        dbRequest.onblocked = function () { console.log("Database create blocked.", "sample", "error"); };

        // Reset the flag that indicates whether this is a new creation request. 
        // Assume that the database was previously created.
        newCreate = false;
    }

    function deleteDB() {

        // Close and clear the handle to the database, held in the parent RecipeDB namespace.
        if (RecipeDB.db) {
            RecipeDB.db.close();
        }
        RecipeDB.db = null;
        var dbRequest = window.indexedDB.deleteDatabase("RecipeDB");
        dbRequest.onerror = function () { console.log("Error deleting database.", "sample", "error"); };
        dbRequest.onsuccess = function () { console.log("Database deleted.", "sample", "status"); };
        dbRequest.onblocked = function () {
            console.log("Database delete blocked.", "sample", "error");
        };
    }

    var db = null;
    WinJS.Namespace.define("RecipeDB", {
        createDB: createDB,
        db: db
    });



    WinJS.Namespace.define("StorageRecipes", {
        validateFileExistence: validateFileExistence,
        createFile: createFile,
        deleteFile: deleteFile,
        writeText: writeText,
        readText: readText,
        sampleFile: sampleFile
    });

})();