const appRoot = document.getElementById('app-root');

let countries =  externalService.getRegionsList();
let languages = externalService.getLanguagesList();



//---------------------------------------------- Heading ---------------------------------------------------

let h1 = document.createElement("h1")
h1.innerText = "Countries Search"
appRoot.appendChild(h1)

//------------------------------------------ Input for search type -----------------------------------------------

let lable =  document.createElement("lable")
lable.innerText = "Please choose type of search:  "
appRoot.appendChild(lable);

//-------------------------------------------------- SPACE ---------------------------------------

let jaga = document.createTextNode('\u00A0')
appRoot.appendChild(jaga)

let input1 = document.createElement("input")
input1.type = "radio"
input1.id = "opt1"
input1.value = "By Region"
input1.name = "opt"
input1.selected = false
input1.onclick = abc1
appRoot.appendChild(input1)
let lable1 = document.createElement("label")
lable1.innerText = "By Region"
appRoot.appendChild(lable1)

//---------------------- Line Break --------------------

let _line_break1 =  document.createElement("br")
appRoot.appendChild(_line_break1)

let input2 = document.createElement("input")
input2.type = "radio"
input2.id = "opt2"
input2.value = "By Language"
input2.name = "opt"
input2.selected = false
input2.onclick = abc2
appRoot.appendChild(input2)
let lable2 = document.createElement("label")
lable2.innerText = "By Language"
appRoot.appendChild(lable2)

//---------------------- Line Break --------------------

let _line_break2 =  document.createElement("br")
appRoot.appendChild(_line_break2)

//------------------------------------  Input for query type  -----------------------------------------

let lable3 = document.createElement("label")
lable3.innerText = "Please choose search query:  "
lable3.id = "lblid"
appRoot.appendChild(lable3)


let select = document.createElement("select")
select.id = "selectbx"
select.onchange = deepExtractor
let option = document.createElement("option")
option.innerText = "Select value"
select.appendChild(option)
appRoot.appendChild(select)


//---------------------- Line Break --------------------

let _line_break4 =  document.createElement("br")
appRoot.appendChild(_line_break4)

//---------------------- Line Break --------------------

let _line_break3 =  document.createElement("br")
appRoot.appendChild(_line_break3)


function abc1(){
    
    console.log(document.getElementById("opt1").value)
    select.options.length = 0
    let option = document.createElement("option")
    option.innerText = "Select value"
    select.appendChild(option)
    for (var i in countries){
        var opt = document.createElement("option");
        opt.value = countries[i]
        opt.innerText = countries[i]
        opt.id = i
        select.appendChild(opt);
    }
    input1.selected = true  
}

function abc2(){
    console.log(document.getElementById("opt2").value)
    select.options.length = 0
    let option = document.createElement("option")
    option.innerText = "Select value"
    select.appendChild(option)
    for (var i in languages){
        var opt = document.createElement("option");
        opt.value = languages[i]
        opt.innerText = languages[i]
        opt.id = i
        select.appendChild(opt);
    }
    input2.selected = true
}

let big_brain = 0
function deepExtractor(){
    // if (big_brain == 1){
    //     window.location.reload();
    // }
    var selectbox = document.getElementById("selectbx")
    var selectvalue = selectbox.options[selectbox.selectedIndex].value
    console.log(externalService.getCountryListByRegion(selectvalue))
    console.log(selectvalue)
    let region_wise_data = externalService.getCountryListByRegion(selectvalue)
    let lang_wise_data = externalService.getCountryListByLanguage(selectvalue)
    let table_lenght = externalService.getCountryListByRegion(selectvalue).length

    

    if (input1.selected == true){

        let table = document.createElement("table")
        table.style.width = "90%"
    
        let tr = document.createElement("tr")
        let th1 = document.createElement("th")
        let th2 = document.createElement("th")
        let th3 = document.createElement("th")
        let th4 = document.createElement("th")
        let th5 = document.createElement("th")
        let th6 = document.createElement("th")
        tr.id = "gg"
        th1.innerText = "Country name"
        th2.innerText = "Capital"
        th3.innerText = "World Region"
        th4.innerText = "Languages"
        th5.innerText = "Area"
        th6.innerText = "Flag"
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
        tr.appendChild(th4)
        tr.appendChild(th5)
        tr.appendChild(th6)
        table.appendChild(tr)
        appRoot.appendChild(table)
       
    
        for(let i in region_wise_data){
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")
            let td5 = document.createElement("td")
            let td6 = document.createElement("td")
            let td6_data = document.createElement("img")
        
            td1.innerText = region_wise_data[i].name
            td2.innerText = region_wise_data[i].capital
            td3.innerText = region_wise_data[i].region
            td4.innerText = Object.values(region_wise_data[i].languages)
            td5.innerText = region_wise_data[i].area
            td6_data.src = region_wise_data[i].flagURL

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)
            td6.appendChild(td6_data)
            table.appendChild(tr)
        }
        big_brain = 1    
    }
    else if (input2.selected == true){
        let table = document.createElement("table")
        table.style.width = "90%"
        
        let tr = document.createElement("tr")
        let th1 = document.createElement("th")
        let th2 = document.createElement("th")
        let th3 = document.createElement("th")
        let th4 = document.createElement("th")
        let th5 = document.createElement("th")
        let th6 = document.createElement("th")
        tr.id = "gg"
        th1.innerText = "Country name"
        th2.innerText = "Capital"
        th3.innerText = "World Region"
        th4.innerText = "Languages"
        th5.innerText = "Area"
        th6.innerText = "Flag"
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
        tr.appendChild(th4)
        tr.appendChild(th5)
        tr.appendChild(th6)
        table.appendChild(tr)
        appRoot.appendChild(table)
           
        
        for(let i in lang_wise_data){
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")
            let td5 = document.createElement("td")
            let td6 = document.createElement("td")
            let td6_data = document.createElement("img")
            
            td1.innerText = lang_wise_data[i].name
            td2.innerText = lang_wise_data[i].capital
            td3.innerText = lang_wise_data[i].region
            td4.innerText = Object.values(lang_wise_data[i].languages)
            td5.innerText = lang_wise_data[i].area
            td6_data.src = lang_wise_data[i].flagURL
    
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)
            td6.appendChild(td6_data)
            table.appendChild(tr)
        }  
        big_brain = 1  
    }

}
/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();

get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/
