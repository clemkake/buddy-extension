// New set and Old Setup
function MainSetup(){
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
    var a = document;
    var b = document.createElement("img");
    b.setAttribute('src', 'http://tagteamtools.regalix.com/images/Auth.png')
    b.setAttribute('width', '30')
    b.setAttribute('height', '30')
    b.className = "AuthEmail";
    b.title = "Authorization Email";
    b.onclick = function() {
      open('http://tagteamtools.regalix.com/authemail.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1100,height=1100,scrollbars=no')
    }
    document.body.appendChild(b);
  
  }
  
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
    var c = document;
    var d = document.createElement("img");
    d.setAttribute('src', 'http://tagteamtools.regalix.com/images/Comments.png')
    d.setAttribute('width', '30')
    d.setAttribute('height', '30')
    d.className = "SFDCComments";
    d.title = "Comments";
    d.onclick = function() {
      open('http://tagteamtools.regalix.com/comment.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText), '_blank', 'width=500,height=600')
    }
    document.body.appendChild(d);
  }
  
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
    var e = document;
    var g = document.createElement("img");
    g.setAttribute('src', 'http://tagteamtools.regalix.com/images/Confirmation.png')
    g.setAttribute('width', '30')
    g.setAttribute('height', '30')
    g.className = "ConfEmail";
    g.title = "Confirmation Email";
    
    var w = document.createElement("label");
    w.setAttribute('width', '30')
    w.setAttribute('height', '30')
    w.setAttribute('for','modal-1')
    w.className = "webmaster";
    w.title = "Webmaster";
    
    var join_Implementation = document.createElement("label");
    join_Implementation.setAttribute('width', '30')
    join_Implementation.setAttribute('height', '30')
    join_Implementation.setAttribute('for','modal-2')
    join_Implementation.className = "joinImplementation";
    join_Implementation.title = "Join Implementation";
    
    
    g.onclick = function() {
      open('http://tagteamtools.regalix.com/confirmation-email.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1200,height=1000')
    }
    document.body.appendChild(g);
    document.body.appendChild(w);
  }
  
  var taskTypes = '';
  var allTaskss = '';
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
    var comma = ", "
    jQuery('.headerRow:contains("Task Type")').parents('.list').find('tr td.dataCell:contains("Inactive")').each(function() {
      taskTypes = jQuery(this).parents('tr.dataRow').find('th.dataCell').text() + comma;
      allTaskss = allTaskss + taskTypes;
      console.log(taskTypes)
    })
      
    
    var i = document;
    var j = document.createElement("img");
    j.setAttribute('src', 'http://tagteamtools.regalix.com/images/Inactive.png')
    j.setAttribute('width', '30')
    j.setAttribute('height', '30')
    j.className = "inactiveemail";
    j.title = "Inactive Email";	
    j.onclick = function() {
  
      open('http://tagteamtools.regalix.com/inactive.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&tasktype=' + allTaskss.slice(0, -2) + '&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1000,height=800,scrollbars=no')
    }
    document.body.appendChild(j);
  }
  
  
  var taskType = '';
  var allTasks = '';
  var all_URL_1 = '';
  var All_codes = '';
  var completion_status = '';
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
  var intTest = 1;
  
    jQuery('.headerRow:contains("Task Type")').parents('.list').find('tr td.dataCell:contains("Completed")').each(function() {
      URL_1 = jQuery(this).parents('tr.dataRow').find('td.dataCell a').attr('href');
      taskType = jQuery(this).parents('tr.dataRow').find('th.dataCell').text();
      completionStatus = jQuery(this).text()
      allTasks = allTasks + taskType;
      completion_status = completion_status + completionStatus;
      all_URL_1 = all_URL_1 + URL_1;
      All_codes = All_codes + "<b>" + "Codetype "+ intTest +": "+ "</b>" + taskType + "<br>" + "<b>" + "URL: " +"</b>" + URL_1 +"<br>"+ "<b>" + "Status: "+ "</b>"+completionStatus +  "<br><br>";
      console.log("Codetype "+ intTest +": " + taskType + "<br>" + "URL:- " + URL_1  +"\n"+ completionStatus + "<br>");
      intTest++;
    })
  
    jQuery('.headerRow:contains("Task Type")').parents('.list').find('tr td.dataCell:contains("Inactive")').each(function() {
      URL_1 = jQuery(this).parents('tr.dataRow').find('td.dataCell a').attr('href');
      completionStatus = jQuery(this).text()
      taskType = jQuery(this).parents('tr.dataRow').find('th.dataCell').text();
      allTasks = allTasks + taskType;
      all_URL_1 = all_URL_1 + URL_1;
      completion_status = completion_status + completionStatus;
      All_codes = All_codes + "<b>" + "Codetype "+ intTest +": "+ "</b>" + taskType + "<br>" + "<b>" + "URL: " +"</b>" + URL_1 +"<br>"+ "<b>" + "Status: "+ "</b>"+completionStatus + "<br>" + "<b style='color:red'>" + "{Reason/Comments}" +"</b>" + "<br><br>";
      console.log("Codetype "+ intTest +": " + taskType + "<br>" + "URL:- " + URL_1  +"\n"+ completionStatus + "<br>");
      intTest++;
    })
    
    var m = document;
    var n = document.createElement("img");
    n.setAttribute('src', 'http://tagteamtools.regalix.com/images/Confirmation.png')
    n.setAttribute('width', '30')
    n.setAttribute('height', '30')
    n.className = "newConfirmationEmail";
    n.title = "New Confirmation Email";	
    n.onclick = function() {
  
    if(jQuery('#00N3600000QIS9O_ileinner').text() != " "){
    var dateOfInstallation = jQuery('#00N3600000QIS9O_ileinner').text()
    }
    if(jQuery('#00N3600000QIS9O_ileinner').text() == " "){
      var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
      
      var dateOfInstallation = [month, day, year].join('/')
    }
    //console.log(dateOfInstallation)
  
      open('https://tagauthorizationemai.000webhostapp.com/New_conf.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&DOI=' + encodeURIComponent(dateOfInstallation) + '&NOC=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBg_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&tasktype=' + encodeURIComponent(All_codes) +'&gCaseAlias=' + encodeURIComponent(document.querySelector('[id="00N3600000SvgFy_ileinner"]').innerText) +'&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1000,height=800,scrollbars=no')
    }
    document.body.appendChild(n); 
  }
  
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
    var k = document;
    var l = document.createElement("img");
    l.setAttribute('src', 'http://tagteamtools.regalix.com/images/Calendar.png')
    l.setAttribute('width', '30')
    l.setAttribute('height', '30')
    l.className = "calendar_event";
    l.title = "Calendar Event";
    l.onclick = function() {
      var advertiser_email1 = jQuery('#00N3600000QIS9t_ileinner').text();
      var webmaster_email = jQuery('td.dataCell a[href*="mailto"]')[0].innerText;
      var gCase_alias = jQuery('#00N3600000Svggu_ileinner').text();
      if (jQuery('td.dataCell a[href*="mailto"]').length > 1) {
        var advertiser_email = jQuery('td.dataCell a[href*="mailto"]')[1].innerText;
        console.log(advertiser_email)
      }
  
  
      if (jQuery('#00N3600000QISD6_ileinner').text() != " ") {
        var from = jQuery('#00N3600000QISD6_ileinner').text()
        var to = new Date(from);
        to.setHours(to.getHours() + 1)
        var fromUTC = new Date(from).toISOString().replace(/[^a-z0-9]/gi, '').slice(0, -4) + 'Z';
        var toUTC = new Date(to).toISOString().replace(/[^a-z0-9]/gi, '').slice(0, -4) + 'Z';
      }
      if (jQuery('#00N3600000QISD6_ileinner').text() == " ") {
        var from = jQuery('#00N3600000QIS8G_ileinner').text()
        var to = new Date(from);
        to.setHours(to.getHours() + 1)
        var fromUTC = new Date(from).toISOString().replace(/[^a-z0-9]/gi, '').slice(0, -4) + 'Z';
        var toUTC = new Date(to).toISOString().replace(/[^a-z0-9]/gi, '').slice(0, -4) + 'Z';
      };

      var teambasedline = "";
      if($('.detailList tr:contains("Team"):last td:eq("1"):contains("NBS")') || $('.detailList tr:contains("Team"):last td:eq("1"):contains("Kickstart +")') || $('.detailList tr:contains("Team"):last td:eq("1"):contains("MMS")')){
        teambasedline = 'We will attempt to reach you at ' + jQuery('#00N3600000R0Mvk_ileinner').text() + 
                    ' and we can use the above meet link for screensharing.'
      }
      var inviteBody = 'Case Id = ' + jQuery('#cas2_ileinner').text() + 
                    '%0A' + 'CID = ' + jQuery('#00N3600000QIS9M_ileinner').text().split('g')[0].trim() + 
                    '%0A' + '%0A' + 
                    'Make sure you have administrative access to your site. This means you have either FTP or admin panel credentials and can make code changes to your website. If you don\'t, you can invite your webmaster to join our call. If you don\'t have site access and your webmaster is unavailable we\'ll need to reschedule our call, just let me know by replying to this email.' +
                    '%0A' + '%0A' + 'Make a backup of your website (I strongly recommend this)' + 
                    '%0A' + '%0A' + teambasedline;
      open('https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE' + '&text=' + jQuery('th.dataCell:nth(0)').text() + ' Setup ' + '|' + ' Adwords CID - ' + jQuery('#00N3600000QIS9M_ileinner').text().split('g')[0].trim().split('-')[0] + "-" + jQuery('#00N3600000QIS9M_ileinner').text().split('g')[0].trim().split('-')[1] + "-" + "XXXX" + '&dates=' + fromUTC + '/' + toUTC + '&add=' + advertiser_email + '%0A' + advertiser_email1 + '%0A' + webmaster_email + '&details=' + inviteBody + '&sf=' + 'true' + '&output=' + 'xml' + '&trp=' + 'false', '_blank', 'width=1000,height=760')
    }
    document.body.appendChild(l);
  }

var CIDs = jQuery('#00N3600000QIS9M_ileinner').text();
if (jQuery(CIDs != "")) {
jQuery('#00N3600000QIS9M_ileinner').html("<a href='https://awics.corp.google.com/ics/go?destPage=campaignSummary&bestGuess=" + encodeURIComponent(CIDs) + "' target='_blank'><b style='color:#c8161d;'><u>" + CIDs + "</u></b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://cases.corp.google.com/Client.html#cto+" + encodeURIComponent(CIDs) + "' target='_blank'><b style='color:#c8161d;'>g-Cases</b></a>")
}
var Gcase = jQuery('#00N3600000QISEN_ileinner').text();
if (jQuery(Gcase != "")) {
jQuery('#00N3600000QISEN_ileinner').html("<a href='https://cases.corp.google.com/Client.html#e" + encodeURIComponent(Gcase) + "' target='_blank'><b style='color:#c8161d;'><u>" + Gcase + "</u></b></a>")
}

var MCN = jQuery('#00N3600000QISBU_ileinner').text();
if (jQuery(MCN != "")) {
jQuery('#00N3600000QISBU_ileinner').html("<a href='https://mcn-ics.corp.google.com/mc/merchantdashboard?a=" + encodeURIComponent(MCN) + "' target='_blank'><b style='color:#c8161d;'><u>" + MCN + "</u></b></a>")
}


if ((jQuery('#00N3600000QISDb_ileinner:contains("ETO")').is(":visible")) && (jQuery('#00N3600000QISAG_ileinner:contains("Canada")').is(":visible"))) {
alert('Pitch for GA Starter Pack Implementation\n\nIf you are not trained please consult your Team Leader', 'http://www.google.com');
}
if ((jQuery('#00N3600000QISDb_ileinner:contains("Kickstart +")').is(":visible")) && (jQuery('#00N3600000QISAG_ileinner:contains("Canada")').is(":visible"))) {
alert('Pitch for GA Starter Pack Implementation\n\nIf you are not trained please consult your Team Leader', 'http://www.google.com');
}
if ((jQuery('#00N3600000QISDb_ileinner:contains("Kickstart Scaled")').is(":visible")) && (jQuery('#00N3600000QISAG_ileinner:contains("Canada")').is(":visible"))) {
alert('Pitch for GA Starter Pack Implementation\n\nIf you are not trained please consult your Team Leader', 'http://www.google.com');
}
if ((jQuery('#00N3600000QISDb_ileinner:contains("NBS")').is(":visible")) && (jQuery('#00N3600000QISAG_ileinner:contains("Canada")').is(":visible"))) {
alert('Pitch for GA Starter Pack Implementation\n\nIf you are not trained please consult your Team Leader', 'http://www.google.com');
}

if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
var m = document;
var n = document.createElement("img");
n.setAttribute('src', 'http://tagteamtools.regalix.com/images/faq.png')
n.setAttribute('width', '30')
n.setAttribute('height', '30')
n.className = "faqform";
n.title = "FAQ Form";
n.onclick = function() {
  open('https://docs.google.com/forms/d/e/1FAIpQLSf4Gyxlg3-dJjHMtU2uiOObAyAexj-VMZ9fbRabRiCjMtjBag/viewform?usp=pp_url&entry.1413885900=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&entry.1108683748=' + encodeURIComponent(document.querySelector('[id="cas2_ileinner"]').innerText) + '&entry.368446637=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText.split("[Change]")[0]), '_blank', 'width=800,height=1000')
}
document.body.appendChild(n);
}



if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
window.addEventListener('load', function() {
jQuery('.labelCol:contains("Authorization Email Sent")').html('<b style="color:red;">Authorization Email Sent</b>');
jQuery('.labelCol:contains("Appointment Sub-Status")').html('<b style="color:red;">Appointment Sub-Status</b>');
jQuery('.labelCol:contains("CMS/Platform")').html('<b style="color:red;">CMS/Platform</b>');
jQuery('.labelCol:contains("Authorization Email Sent")').html('<b style="color:red;">Authorization Email Sent</b>');
jQuery('.labelCol:contains("Screenshare Scheduled")').html('<b style="color:red;">Screenshare Scheduled</b>');
jQuery('.labelCol:contains("Campaigns already created by GSR")').html('<b style="color:red;">Campaigns already created by GSR</b>');
jQuery('.labelCol:contains("Case via Live Transfer")').html('<b style="color:red;">Case via Live Transfer</b>');
jQuery('.labelCol:contains("gCases ID")').html('<b style="color:red;">gCases ID</b>');
jQuery('.labelCol:contains("Mouse Control Taken")').html('<b style="color:red;">Mouse Control Taken</b>');
jQuery('.labelCol:contains("Adwords CID Submitted")').html('<b style="color:red;">Adwords CID Submitted</b>');
jQuery('#head_01B3600000MIdKq_ep').html('GA Health Check <b style="color:red;">(Leave detailed Comments for "Recommended Only")</b>')
if (jQuery('div#cas14_ileinner:contains("Shopping")').is(":visible")) {
  jQuery('.labelCol:contains("Status"):first').html('<b style="color:red;">Status</b>');
  jQuery('.labelCol:contains("Sub Status")').html('<b style="color:red;">Sub Status</b>');
  jQuery('.labelCol:contains("Shopping Code Type")').html('<b style="color:red;">Shopping Code Type</b>');
  jQuery('#head_01B3600000KHRfN_ep:contains("Alternate Contact Details:")').html('<b style="color:red;">Alternate Contact Details:</b>');
  jQuery('.labelCol:contains("MC-ID")').html('<b style="color:red;">MC-ID</b>');
  jQuery('.labelCol:contains("Method used for feed upload")').html('<b style="color:red;">Method used for feed upload</b>');
  jQuery('.labelCol:contains("Reason for Updating Static Feed")').html('<b style="color:red;">Reason for Updating Static Feed</b>');
  jQuery('.labelCol:contains("Type of Policy violation")').html('<b style="color:red;">Type of Policy violation</b>');
  jQuery('.labelCol:contains("Reason for Not Implementing Microdata")').html('<b style="color:red;">Reason for Not Implementing Microdata</b>');
  jQuery('.labelCol:contains("Feed Optimized Using")').html('<b style="color:red;">Feed Optimized Using</b>');
}
if (jQuery('div#cas14_ileinner:contains("Tag")').is(":visible")) {
  jQuery('.labelCol:contains("Website Backup Taken?")').html('<b style="color:red;">Website Backup Taken?</b>');
  jQuery('.labelCol:contains("Number Of Codes")').html('<b style="color:red;">Number Of Codes</b>');
  jQuery('.labelCol:contains("Implemented Code is")').html('<b style="color:red;">Implemented Code is</b>');
jQuery('.labelCol:contains("TAG via GTM")').html('<b style="color:red;">TAG via GTM</b>');
jQuery('#head_01B3600000MJ4q4_ep:contains("Google Customer Satisfaction Survey")').html('<b style="color:red;">Google Customer Satisfaction Survey</b>');
}
});
};

if(jQuery('#00N3600000TQDNf_ileinner img[alt="Checked"]').length >=1){
jQuery('#00N3600000TQDNf_ileinner').append('<span id="GAMEmail"><button>Email GAM</button></span>')
}

var taskType = '';
var allTasks = '';

if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
var comma = ", "
jQuery('.headerRow:contains("Task Type")').parents('.list').find('tr td.dataCell:contains("Open")').each(function() {
  taskType = jQuery(this).parents('tr.dataRow').find('th.dataCell').text() + comma;
  allTasks = allTasks + taskType;
  console.log(taskType)
})
if(jQuery('#00N3600000QISD6_ileinner').text() != " "){
var appointmentTime = jQuery('#00N3600000QISAN_ileinner').text() + " " + jQuery('#00N3600000QISAO_ileinner').text() + " "+ jQuery('#00N3600000QISAa_ileinner').text().split(' ')[0]
}
if(jQuery('#00N3600000QISD6_ileinner').text() == " ") {
var appointmentTime = jQuery('#00N3600000QIS8F_ileinner').text() + " " + jQuery('#00N3600000QISAa_ileinner').text().split(' ')[0]
}
console.log(appointmentTime)

$('#GAMEmail').click(function(){
open('http://tagteamtools.regalix.com/GAMemail.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&tasktype=' + allTasks.slice(0, -2) + '&dates=' + appointmentTime + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText), '_blank', 'width=900,height=700,scrollbars=no')
})

$('body').append(` 
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm" role="document" style="top: 30%;">
<div class="modal-content">
  <div class="modal-header"  style="background-color: bisque;padding-left: 35%;">
    <h2 class="modal-title text-center" id="exampleModalLabel" style="font-size: large;">SELF-QC</h2>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <form>
      <div class="checkbox">
        <label><input type="checkbox" value=""> &nbsp;&nbsp; Recorded Line </label>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" value=""> &nbsp;&nbsp; Authorization Email </label>
      </div>
      <div class="checkbox ">
        <label><input type="checkbox" value="">  &nbsp;&nbsp;  Website Backup </label>
      </div>
      <div class="checkbox">
      <label><input type="checkbox" style="color: orange;" value=""> &nbsp;&nbsp; Calendar Invite to Googler </label>
      </div>
      <div class="checkbox">
      <label><input type="checkbox" value=""> &nbsp;&nbsp; GCSS Pitch </label>
      </div>
      <div class="checkbox">
      <label><input type="checkbox" value=""> &nbsp;&nbsp; Post Implementation Screenshot </label>
      </div>
      <div class="checkbox">
       <label><input type="checkbox" value=""> &nbsp;&nbsp; Detailed Case Comments </label>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary"  style="font-size: initial;margin-right: 30%;">Save changes</button>
  </div>
</div>
</div>
</div>`
)

}


}
// New set and Old Setup