var tipiAttoPath = "/app:company_home" +
"/cm:"+search.ISO9075Encode("CRL") +
"/cm:"+search.ISO9075Encode("Gestione Atti") +
"/cm:"+search.ISO9075Encode("Anagrafica") +
"/cm:"+search.ISO9075Encode("Tipi atto") + "/*";
var luceneQueryTipiAtto = "PATH:\""+tipiAttoPath+"\"";
var tipiAttoResults = search.luceneSearch(luceneQueryTipiAtto);
model.tipiAttoResults = tipiAttoResults;