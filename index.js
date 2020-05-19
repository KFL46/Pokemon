
$("#berriesList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/berry/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#contestsList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/contest-type/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#encountersList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/encounter-method/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#evolutionList").click(() => {
    $.ajax({
      
      type: "GET",
      url: "https://pokeapi.co/api/v2/evolution-chain/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#gamesList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/generation/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });

  $("#itemsList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/item/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#locationsList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/location/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#machinesList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/machine/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#movesList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/move/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  $("#pokemonList").click(() => {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/ability/",
      data: "",
      success: successProc,
      dataType: "json",
    });
  });
  function appelAjax(url){
    return function(){
      $.ajax({
        type: "GET",
        url: url,
        data: "",
        dataType:"json",
        success: successProc,
      });
    }
  }
  
  function successProc(data) {
    console.log(data)
    $("#resultElmt").html(" ")
    jdeAttachElem("resultElmt", "div", ["contenerList"], "", "contList");
    jdeAttachElem("contList", "H1", "", "contListTitre (" + data["count"] + ")", "contListTitre");
    jdeAttachElem("contList", "div", "", "", "tabList");
    for (let index in data["results"]) {
      jdeAttachElem("tabList", "div", ["ligneList"], "", "ligneList" + index);
      if (data["results"][index]["name"] == null) {
        data["results"][index]["name"] = data["results"][index]["title"]
      }
      if (data["results"][index]["name"] == null) {
        data["results"][index]["name"] = (+index + 1)
      }
      jdeAttachElem("ligneList" + index, "span", ["numLigneList"], "N°" + (+index + 1) + " : ");
      jdeAttachElem("ligneList" + index, "div", ["titreLigneList"], data["results"][index]["name"], "");
    }
    jdeAttachElem("contList", "div", ["contenerBout"], "", "contBoutList");
    
    if (data["previous"] !== null) {
      let parsedUrl = new URL(data["previous"]);
      jdeAttachElem("contBoutList", "div", ["bout"], "Précédant", "boutPrevious", appelAjax(data["previous"]))
    }
    else {
      jdeAttachElem("contBoutList", "div", "", "", "")
    }
    if (data["next"] !== null) {
      let parsedUrl = new URL(data["next"]);
      jdeAttachElem("contBoutList", "div", ["bout"], "Suivant", "boutNext");
    }
    else {
      jdeAttachElem("contBoutList", "div", "", "", "")
    }
  }
  (function(data) {
    console.log("affichage du titre de ma liste apres le clic" + data)
  })("titre");
  

 
  /**
   * Fonction permettant d'ajouter un element dans un autre
   * 
   * @param {string} parentId - Id de l'élément à appeler
   * @param {string} elem - tag de l'élément à créer
   * @param {string[]} classElem - tableau de chaine de classes à ajouter
   * @param {string} contentElem - contenu de l'élément
   * @param {string} idElem - id de l'element à inserer
   * @param {onClickCallback} fonct - fonction executé sur clic souris
   */
  function jdeAttachElem(parentId, elem, classElem = [], contentElem = "", idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
      for (let uneClasse in classElem) {
        elemACreer.classList.add(classElem[uneClasse])
      }
  
    }
    if (idElem != "") {
      elemACreer.id = idElem
    }
    if (fonct != "") {
      elemACreer.addEventListener('click', fonct);
    }
    elemACreer.innerHTML += contentElem
    document.getElementById(parentId).appendChild(elemACreer)
  
  }
