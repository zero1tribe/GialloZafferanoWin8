(function () {
    "use strict";

    var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";
    var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
    var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";

    // These three strings encode placeholder images. You will want to set the
    // backgroundImage property in your real data to be URLs to images.
    var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
    var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";
    var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";

    var imageBg = "ms-appx-web:///http://www.giallozafferano.it/images/ricette/19/1943/preview.jpg";
    // Each of these sample groups must have a unique key to be displayed
    // separately.
    var sampleGroups = [
        { key: "group1", title: "Ricette del Giorno", subtitle: "Group Subtitle: 1", backgroundImage: darkGray, description: groupDescription },
        { key: "group2", title: "Categorie", subtitle: "Group Subtitle: 2", backgroundImage: lightGray, description: groupDescription },
        { key: "group3", title: "Preferiti", subtitle: "Group Subtitle: 3", backgroundImage: mediumGray, description: groupDescription },
        { key: "group4", title: "Lista della Spesa", subtitle: "Group Subtitle: 4", backgroundImage: lightGray, description: groupDescription }
    ];
    var today = sampleGroups[0];

    // Each of these sample items should have a reference to a particular
    // group.
    var sampleItems = [
        { group:today, title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
        { group:today, title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group:today, title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
        { group:today, title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group:today, title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
        /*
        { group: sampleGroups[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group: sampleGroups[1], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
        { group: sampleGroups[1], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: lightGray },
        */
        { group: sampleGroups[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
        { group: sampleGroups[2], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: lightGray },
        { group: sampleGroups[2], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group: sampleGroups[2], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: lightGray },
        { group: sampleGroups[2], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
        { group: sampleGroups[2], title: "Item Title: 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group: sampleGroups[2], title: "Item Title: 7", subtitle: "Item Subtitle: 7", description: itemDescription, content: itemContent, backgroundImage: mediumGray },

        { group: sampleGroups[3], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group: sampleGroups[3], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: lightGray },
        { group: sampleGroups[3], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: darkGray },
        { group: sampleGroups[3], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: lightGray },
        { group: sampleGroups[3], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
        { group: sampleGroups[3], title: "Item Title: 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: lightGray }
    ];

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    function resolveGroupReference(key) {
        for (var i = 0; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

   



    var baseUrl = "http://api.giallozafferano.it/windowsphone/it/getItemsList/";
    var url = "http://api.giallozafferano.it/windowsphone/it/getItemsList/";
    var level = 0;
    var username = "esternitest";
    var password = "only4test";


    function getItems(param) {
        
        console.log("param = " + param)

        if (param != undefined) {
            level = 0;
            $.each(param, function (i, data) {
                if (data == "/") {
                    level++;
                }

            });
            console.log(level);

            url = baseUrl + param;

        } else {
            url = baseUrl;
            level = 0;
        }

        console.log("CALLING= " + url);

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'text',
            async: false,
            //data: '{}',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', make_base_auth(username, password));
            },
            success: function (data) {
                console.log("SUCCESS");
                console.log(data);
                //Scrive il risultato in formato STRINGA in un FILE
                StorageRecipes.writeText(data);

                //Trasformo la STRINGA in JSON e la parso
                data = JSON.parse(data);
                 $.each(data.items, function (index, art) {
                     console.log(art.label);

                     var newCategory = new CategoryData.CategoryClass(art);
                     
                     sampleItems.push({
                         group: sampleGroups[1],
                         title: newCategory.label,
                         subtitle: newCategory.description,
                         description: newCategory.description,
                         content: newCategory.description,
                         backgroundImage: darkGray
                     });
        
                   
                 })
                
                // TODO: Replace the data with your real data.
                // You can add data from asynchronous sources whenever it becomes available.
                sampleItems.forEach(function (item) {
                    list.push(item);
                });


            },
            error: function (e) {
                console.log("error");
                console.log(e);
            }
        });

    }

    function make_base_auth(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
    }

    function getAllRecipes(param, single) {
        console.log("getAllRecipes - singleImg= " + single);
        var allRecipesData = [];
        url = "http://api.giallozafferano.it/windowsphone/it/getLeaves/" + param;

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', make_base_auth(username, password));
            },
            success: function (data) {

                $.each(data.items, function (index, art) {

                    //Imamgine singola
                    if (single === true) {
                        console.log("single = " + single);
                        allRecipesData = art;
                        return false;
                    } else {
                        //Array di ricette
                        allRecipesData.push(art);
                    }
                })

            }

        });
       // StorageRecipes.writeText(allRecipesData);
        return allRecipesData;

    }

    /*RECIPE PROTOTYPE OBJ*/
    WinJS.Namespace.define("RecipeData", {
    //LoginClass becomes a constructor for bindable objects with the specified properties
        RecipeClass: WinJS.Binding.define(
            {
            cookingTime: "'30'",
            cost: "Bassa",
            costAsNumber: "0",
            description: "Le nepitelle sono dolci tradizionali calabresi, tipiche della festività del Natale", 
            difficulty: "Bassa",
            difficultyAsNumber: "2",
            dosiXpers: "10",
            id: "208",
            image: {
                    hd: "http://www.giallozafferano.it/images/ricette/nepitelle380m.jpg",
                    sd: "http://www.giallozafferano.it/images/ricette/nepitelle380m-small.jpg"
                 },
            partialUrl: "208/",
            preparationTime: "40",
            properties: {
                     comments: "14",
                     hasvideo: ""
                    },
            title: "Nepitelle",
            type: "leaf"
            }),
    });

    /*CATEGORY PROTOTYPE OBJ*/
    WinJS.Namespace.define("CategoryData", {
        CategoryClass: WinJS.Binding.define(
            {
                count: "1971",
                description: "Tutte le ricette di cucina di GialloZafferano divise in portate; dagli antipasti ai  dolci e dessert.",
                id: "16",
                label: "Portate",
                partialUrl: "16/",
                type: "node"
            }),
    });

    /*Save IMG TO FILE*/
    var client = null;

    function downloadAndSave() {
        try {
            //  var url = document.getElementById("targetUrl").value;
            var url="http://www.giallozafferano.it/images/ricette/nepitelle380m.jpg";
            if (url) {
                client = new XMLHttpRequest();
                if (client) {
                    client.open("GET", url, true);
                    client.responseType = "blob";
                    client.onreadystatechange = readyStateCallback;
                    client.send(null);
                } else {
                    console.log("Cannot create new XMLHttpRequest object", "sample", "error");
                }
            } else {
                console.log("Enter the full url to an image", "sample", "error");
            }
        }
        catch (e) {
            console.log("Exception while using XMLHttpRequest object " + e, "sample", "error");
        }
    }

    function readyStateCallback() {
        if (client.readyState === 4) {
            if (client.status !== 200) {
                console.log("Unable to download blob - status code: " + client.status.toString(), "sample", "error");
            } else {
                var blob = client.response;
                writeBlobToFile(blob);
            }
        }
    }

    WinJS.Namespace.define("BlobSample", {
        asyncError: function (error) {
            console.log("Async failure", "sample", "error");
        }
    });

    function writeBlobToFile(blob) {

        var filename = "imamgine";
        // Open the picker to create a file to save the blob
        Windows.Storage.KnownFolders.picturesLibrary.createFileAsync(filename, Windows.Storage.CreationCollisionOption.generateUniqueName).then(function (file) {
            // Open the returned file in order to copy the data
            file.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (output) {

                // Get the IInputStream stream from the blob object
                var input = blob.msDetachStream();

                // Copy the stream from the blob to the File stream
                Windows.Storage.Streams.RandomAccessStream.copyAsync(input, output).then(function () {
                    output.flushAsync().done(function () {
                        input.close();
                        output.close();
                        console.log(file.path);

                        $(".itemtemplate .item-image").attr("src", file.path + ".jpg");
                        console.log("File '" + file.name + "' saved successfully to the Pictures Library!", "sample", "status");
                    }, BlobSample.asyncError);
                }, BlobSample.asyncError);
            }, BlobSample.asyncError);
        }, BlobSample.asyncError);
    }


  //getItems();

    WinJS.Namespace.define("Data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemsFromGroup: getItemsFromGroup,
        getItemReference: getItemReference,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

   // StorageRecipes.readText();
    
    // downloadAndSave();
    function getImageurl(img, destintation) {

        WinJS.xhr({ url: img, responseType: "blob" })
        .done(
            function (request) {
                var imageBlob = URL.createObjectURL(request.response);
                console.log(imageBlob);
                var imageTag = document.createElement("image");
                imageTag.src = imageBlob;
                $(destintation).append(imageTag);
                /*  $("#mydiv").append(imageTag);
                  console.log($("#mydiv"));*/

            });

    }

    getImageurl("http://www.giallozafferano.it/images/ricette/19/1943/preview.jpg", "#mydiv");

})();
