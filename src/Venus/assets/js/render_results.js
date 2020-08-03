var slider = document.getElementById("year-slider");
var output = document.getElementById("year-notifier");
output.innerHTML = slider.value;

var response_data = {};

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

//  var data = {
//  	"2010" : {
//  		"ITES" : {
//  			"new" : {
//  				"Software Dev" : {
// 					"pay" : 250000,
//  					"requirements" : {
//  						"Bachelors of Technology" : 0.8,
//  						"Masters of Technology" : 0.4,
//  						"Python" : 0.3,
//  						"C++" : 0.12
//  					}
//  				}
//  			},
//  			"old" : {
//  				"Junior Programmer" : {
//  					"pay" : 80000,
// 					"requirements" : {
//  						"Bachelors of Technology" : 0.9,
//  						"Masters of Technology" : 0.1,
//  						"Python" : 0.02,
//  						"C++" : 0.01
//  					}
//  				}
//  			}
//  		}
//  	}
//  }


function render_data(year) {

	document.getElementById("year-notifier").innerText = year;

	year_data = response_data[year];

	outputHTML_Left = ""
	outputHTML_Right = ""
	counter = 0
	for (sector in year_data){
		identifier = "collapse" + String(counter)
		headingIdentifier = "heading" + String(counter)
		unit = "<div class=\"card\">"
		unit += "<div class=\"card-header\" id=\""+headingIdentifier+"\">"
		unit += "<h2><button type=\"button\" class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#"+identifier+"\">"+sector+"</button></h2>";
		unit += "</div>"
		if (counter == 1){
			unit += "<div id=\""+identifier+"\" class=\"collapse show\" aria-labelledby=\""+headingIdentifier+"\">"
		} else{
			unit += "<div id=\""+identifier+"\" class=\"collapse\" aria-labelledby=\""+headingIdentifier+"\">"
		}
		unit += "<div class=\"card-body\">"
		for (new_job in year_data[sector]["new"]){
			unit += "<div class=\"output-job-new\">"
			unit += "<p class=\"output-job-title\">"+new_job+"</p>"
			unit += "<p class=\"output-job-pay\">"+year_data[sector]["new"][new_job]["pay"]+"</p>"
			unit += "<p class=\"output-job-requirements-block\">"
			for (requirement in year_data[sector]["new"][new_job]["requirements"]){
				unit += "<span class=\"output-job-requirement\">"+requirement+"</span> "
				unit += "<span class=\"output-job-requirement-value\">"+year_data[sector]["new"][new_job]["requirements"][requirement]+"</span> | "
			}
			unit += "</p>"
			unit +="</div>"
		}
		for (old_job in year_data[sector]["old"]){
			unit += "<div class=\"output-job-old\">"
			unit += "<p class=\"output-job-title\">"+old_job+"</p>"
			unit += "<p class=\"output-job-pay\">"+year_data[sector]["old"][old_job]["pay"]+"</p>"
			unit += "<p class=\"output-job-requirements-block\">"
			for (requirement in year_data[sector]["old"][old_job]["requirements"]){
				unit += "<span class=\"output-job-requirement\">"+requirement+"</span> "
				unit += "<span class=\"output-job-requirement-value\">"+year_data[sector]["old"][old_job]["requirements"][requirement]+"</span> | "
			}
			unit += "</p>"
			unit +="</div>"
		}
		unit +="</div>"
		unit +="</div>"
		unit +="</div>"

		if (counter < 12){
			outputHTML_Left += unit
		} else{
			outputHTML_Right += unit
		}
		counter += 1
	}
	document.getElementById("output-left").innerHTML=outputHTML_Left;
	document.getElementById("output-right").innerHTML=outputHTML_Right;
}

slider.oninput = function(){
	// document.getElementById("year-notifier").innerText = this.value;
	render_data(this.value);
}

let locations = ["Uttarakshi", "Chamoli", "Pithoragarh", "Champawat",
	"Udham_Singh_Nagar", "Nainital", "Garhwal", "Hardwar", "Dehradun",
	"Tehri_Garhwal", "Rudraprayag", "Bageshwar", "Almora"]

let prev_loc = "";

function locationClick(location){
	post_data = {}
	post_data.location = new Array(location);

	try{
		document.getElementById(prev_loc).fill = "#FBF7F5";
	} catch{
		a = 1;
	}

	document.getElementById(location).fill = "#d8d3d0";
	prev_loc = location;

	console.log(post_data)
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(post_data),
		dataType: 'json',
		url: 'http://api.rasp.team/v1.0/request',
		success: function (e) {
			console.log(e);
			response_data = e.data;
			var slider_year = document.getElementById("year-slider");
			render_data(slider_year.value);
		}
	});
}