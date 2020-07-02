/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

var specInfo = '';
var googlerInfo = '';
var ltcount = 0;
var MessageCount = 0;
var latest = '';
var cid;
var _gapi;
var contextsetting = {
  "Analytics":"we will help you implement Google Analytics on your website. This will help analyze in depth details about the visitors on your website." ,
  "Analytics Event Tracking":"we will help you implement Google Analytics Event tracking, which is a useful feature to record specific interactions on your website." ,
  "Google Analytics Remarketing":"we will help you implement Google Analytics remarketing, which will help you re-target the past visitors of your website by showing relevant ads." ,
  "Analytics Destination Tracking":" we will help you implement Google Analytics Destination tracking, which is a useful feature that allows you to track the specific pages visited on your website." ,
  "GA Smart Goals":"we will help you import 'Smart goal' from Google Analytics. This is useful to track conversions depending on the historical data of the user interaction on your website." ,
  "Cross Domain Tracking":"we will help you implement cross domain code on multiple domains. It will help in passing the cookie from the primary domain to the secondary domain resulting in unifying multiple sessions and providing the correct source-attribution. " ,
  "Analytics E-Commerce Tracking":"we will help you setup ecommerce tracking, which will help you understand the sales made and the revenue generated on the website from all traffic sources. " ,
  "Analytics Enhanced E-Commerce Tracking":"we will help you setup enhanced ecommerce, which will help you get better insights on Shopping and 'Checkout behaviour' of the users. You will also get access to reports such as purchases, checkout steps and product performance." ,
  "Google Analytics Dynamic Remarketing (Non-Retail)":"we will help you setup Google Ads Dynamic remarketing, with the help of which, you can retarget the past visitors specific to the interactions they have had in your website. This will help you to aim at better conversions." ,
  "Google Analytics Dynamic Remarketing (Retail)":"we will help you setup Google ads dynamic remarketing, which will enable you to retarget the past visitors based on the interaction they have had with the products on your website. This will help you to aim at better conversions." ,
  "Google Analytics Health Check":"we will check if Analytics and analytics based codes are implemented correctly, which will help you understand the user behaviour and other important conversions on Analytics." ,
  "Adwords Conversion Code":"we will help you implement Google Ads Conversion code on your website, which will provide insights into the performance of campaigns, ad groups, ads and keywords on your Google Ads account." ,
  "Adwords Event Tracking":"we will help you implement Ads conversion code at the backend of your website, which will provide insights regarding campaigns, ad groups and keywords that contribute more business to your Ads account." ,
  "Adwords Remarketing":"we will help you implement Ads remarketing code at the backend of your website. Post this, you can retarget the past visitors to aim at better conversion." ,
  "Website Call Conversion":"we will help you implement 'Website Call Conversion Code' at the backend of your website. This will help you see the number of people who have reached you over the phone by clicking on an ad. You will also be able to see which campaign, ad group and keywords are bringing in more business to your Ads account." ,
  "Dynamic Remarketing - X (Non-Retail)":"we will help you setup Ads dynamic remarketing. With this, you can retarget the past visitors on your website with product/service specific ads to aim at better conversion." ,
  "Dynamic Remarketing - Retail":"we will help you setup Ads dynamic remarketing. This will enable you to retarget the past visitors on your website with product specific ads to aim at better conversion." ,
  "Site Wide Tag - Conversion Tracking Fix":"we will help you replace the old conversion code (legacy code) with a new version of 'Ads conversion code', which will help you in tracking data accurately on browsers enabled with Intelligent tracking prevention." ,
  "Google Tag Manager Installation":"we will help you set up Google Tag Manager - a Tag Integration system that will help you add and manage all your codes. With successful implementation of GTM, you will be able to manage all of your tags efficiently." ,
  "Offline Conversion Tracking":"we will help you implement Offline conversion tracking. Offline conversion tracking will help you track an ad-click leading to a sale in the offline world - which is achieved by capturing the lead information either through a form submission or a phone call." 
};

casenumber = $('tr:contains("Case Number"):last td:eq(1)').text();
agentName = $('#userNavLabel').text().split('...')[0];
status = $('tr:contains("Status"):eq(3) td:eq(1)').text();

function authemail(){
  open('http://tagteamtools.regalix.com/authemail.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1100,height=1100,scrollbars=no')
}
function comments(){
  open('http://tagteamtools.regalix.com/comment.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText), '_blank', 'width=500,height=600')
}
function confirmation(){
  open('http://tagteamtools.regalix.com/confirmation-email.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1200,height=1000')
}
function inactive(){
  var taskTypes = '';
  var allTaskss = '';
  var comma = ", "
  jQuery('.headerRow:contains("Task Type")').parents('.list').find('tr td.dataCell:contains("Inactive")').each(function() {
    taskTypes = jQuery(this).parents('tr.dataRow').find('th.dataCell').text() + comma;
    allTaskss = allTaskss + taskTypes;
    console.log(taskTypes)
  })
  open('http://tagteamtools.regalix.com/inactive.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&tasktype=' + allTaskss.slice(0, -2) + '&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1000,height=800,scrollbars=no')
}

function Newconf(){
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
    
        open('http://tagteamtools.regalix.com/New_conf.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&name=' + encodeURIComponent(document.querySelector('[id="cas3_ileinner"]').innerText) + '&time=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS8F_ileinner"]').innerText) + '&timezone=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAa_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText) + '&codetype=' + encodeURIComponent(document.querySelector('th.dataCell').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&status=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAX_ileinner"]').innerText) + '&DOI=' + encodeURIComponent(dateOfInstallation) + '&NOC=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBg_ileinner"]').innerText) + '&subject=' + encodeURIComponent(document.querySelector('[id*=cas14_ileinner]').innerText) + '&aname=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText) + '&tasktype=' + encodeURIComponent(All_codes) +'&gCaseAlias=' + encodeURIComponent(document.querySelector('[id="00N3600000SvgFy_ileinner"]').innerText) +'&lang=' + encodeURIComponent(document.querySelector('[id="00N3600000QISBE_ileinner"]').innerText), '_blank', 'width=1000,height=800,scrollbars=no')
  
  }
}

function Faq(){
  open('https://docs.google.com/forms/d/e/1FAIpQLSf4Gyxlg3-dJjHMtU2uiOObAyAexj-VMZ9fbRabRiCjMtjBag/viewform?usp=pp_url&entry.1413885900=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&entry.1108683748=' + encodeURIComponent(document.querySelector('[id="cas2_ileinner"]').innerText) + '&entry.368446637=' + encodeURIComponent(document.querySelector('[id="cas1_ileinner"]').innerText.split("[Change]")[0]), '_blank', 'width=800,height=1000')
}

function GAMemail(){
  open('http://tagteamtools.regalix.com/GAMemail.html?cid=' + encodeURIComponent(document.querySelector('[id="00N3600000QIS9M_ileinner"]').innerText.split("g")[0].trim()) + '&tasktype=' + allTasks.slice(0, -2) + '&dates=' + appointmentTime + '&grep=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAD_ileinner"]').innerText) + '&grepemail=' + encodeURIComponent(document.querySelector('[id="00N3600000QISAq_ileinner"]').innerText) + '&url=' + encodeURIComponent(document.querySelector('td.dataCell').innerText), '_blank', 'width=900,height=700,scrollbars=no')
}

//

function trackuserReadStatus(a){
  var agent = JSON.parse($('script:contains("UserContext.initialize")').text().split('UserContext.initialize(')[1].split(');')[0]).userName;
  $.ajax({
    type: "POST",
    url: 'https://google-wfm.regalix.com/salesforcetool/readingstatus.php',
    data: {
      agent	: agent,
      message_id: a,
      rqtype: 'tracker'
    },
    success: function(data){
        //console.log(data);
        $('[name="inlineEditSave"]').click();
    }
  });
}

function calendar(){
  var agent = JSON.parse($('script:contains("UserContext.initialize")').text().split('UserContext.initialize(')[1].split(');')[0]).userName;
  var case_id = $('.pageDescription').text().trim();
  var link = window.location.pathname;

    //ajax send out value related to these mosquitoes
    $.ajax({
      type: "POST",
      url: 'https://google-wfm.regalix.com/salesforcetool/readingstatus.php',
      data: {
        agent	: agent,
        case_id:case_id,
        link:link,
        rqtype: 'calendar'
      },
      success: function(data){
          //console.log(data);
          $('[name="inlineEditSave"]').click();
      }
    });

    var advertiser_email1 = jQuery('#00N3600000QIS9t_ileinner').text();
    var webmaster_email = jQuery('td.dataCell a[href*="mailto"]')[0].innerText;
    var gCase_alias = jQuery('#00N3600000Svggu_ileinner').text();
    if (jQuery('td.dataCell a[href*="mailto"]').length > 0) {
      var advertiser_email = jQuery('td.dataCell a[href*="mailto"]').text();
      console.log(advertiser_email)
    
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
    console.log(inviteBody);
    open('https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE' + '&text=' + jQuery('th.dataCell:nth(0)').text() + ' Setup ' + '|' + ' Adwords CID - ' + jQuery('#00N3600000QIS9M_ileinner').text().split('g')[0].trim().split('-')[0] + "-" + jQuery('#00N3600000QIS9M_ileinner').text().split('g')[0].trim().split('-')[1] + "-" + "XXXX" + '&dates=' + fromUTC + '/' + toUTC + '&add=' + advertiser_email + '%0A' + advertiser_email1 + '%0A' + webmaster_email + '&details=' + inviteBody + '&sf=' + 'true' + '&output=' + 'xml' + '&trp=' + 'false', '_blank', 'width=1000,height=760')
    }
}


function warning(){

  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {

    $('.customnotabBlock:contains("Tags") tr.dataRow td.dataCell:nth-of-type(9)').each(function(){
      if($(this).text() !== " "){
        ltcount++; 
      }
    })

    if($('td:contains("Shopping Feed Optimization"):last').text() == 'Shopping Feed Optimization' || $('tr:contains("Existing Feed optimization"):last') == 'Existing Feed optimization' ) {
       if($('tr:contains("Region"):last').find('td:contains("EMEA")').length > 0){
          if($('.pbSubsection:contains("Team"):last').find('td:contains("Agency Builders AS")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("ETO")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("ETO : Agency")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("ETO Onboarding")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("GCE Kickstart Reactive")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("GCE Kickstart Scaled")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("GCE Pinnacle")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("GCE Pinnacle/HV/HV+ ONLY")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("GCE SRP - HV+/ (non-pinnacle)")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kickstart Connect")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kckstart Scaled")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kckstart X")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kckstart +")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kckstart + 1CRM")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Managed Agency Three AS")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("NBS")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("RCC non-olympus HV/HV+ Only")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("RCC Olympus")').length >0 ){
 
          } else {
            swal({
              title : "Special Case!", 
              html: 'Please check with your TL before proceeding with the case',
              type: "warning",
              button: {
                text: "Got it!",
              },
            })  
          }
        }
    }
    
    if($('.pbSubsection:contains("Region"):last').find('td:contains("Americas")').length > 0){
        if($('.pbSubsection:contains("Team"):last').find('td:contains("ETO Onboarding")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("ETO")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kickstart Connect")').length > 0 || $('.pbSubsection:contains("Team"):last').find('td:contains("Kickstart Scaled")').length > 0){
           if($('tr:contains("Attribution Model for the New Conversion"):last').find('td:contains("Attribution Model for the New Conversion")').next('td').val() == "" || $('tr:contains("Attribution Model for the New Conversion"):last').find('td:contains("Attribution Model for the New Conversion")').next('td').val() == "Last Click"){
              swal({
                title : "Warning!", 
                html: 'This is an America\'s lead with the attribution model set either to BLANK or LAST CLICK please ensure to change this to anything other than the Last click when you speak to the advertiser',
                type: "warning",
                button: {
                  text: "Got it!",
                },
              })  
           }
        }
    }


   if (ltcount != 0 ){
      // if($('.detailList tr:contains("Status"):first td:eq("1")').text() == "In Queue" || $('.detailList tr:contains("Status"):first td:eq("1")').text() == "In progress"){
          specInfo = '<br><br><b style="color:red"> Special Instructions:</b> You have ' + ltcount + ' Special Instructions Please read them before the call';
      // }
    }
   if($('tr:contains("Join implementation"):last img[title="Checked"]').is(':visible')){
         googlerInfo = "Googler has chosen to join the implementation. <b>Please block the Googler's calendar and send out an invitation.<b>";
        //googlerInfo = 'test';
    }
   // console.log(specInfo, googlerInfo);

    if($('tr:contains("Join implementation"):last img[title="Checked"]').is(':visible') || ltcount != 0){

        swal({
            title : "Attention", 
            html: googlerInfo + specInfo,
            type: "warning",
            button: {
              text: "Got it!",
            },
        }).then(function(){
          if($('tr:contains("Join implementation"):last img[title="Checked"]').is(':visible')){
            $.gritter.add({
              title: 'Attention',
              text: 'Set An Appointment with the googler'
            });
          }
          googleAnalyticTracker(casenumber,agentName,status)
          
        });
    }



    if($('td:contains("Market Served"):eq(1)').next('td').find('div').html() == 'China'){
      swal({
        title : "Huawei Affiliate Account", 
        html: '<p><b style="background-color:yellow;font-weight:700">Compliance Alert!</b><b style="font-weight:700;color:red"> Do NOT call advertiser.</b></p> <p> <b style="color:blue"> Contact your Manager before proceeding further.</b></p>',
        type: "error",
        button: {
          text: "Got it!",
        },
      }).then(function(){
        googleAnalyticTracker(casenumber,agentName,'huawei')
      });
    } 
    if($('td:contains("Market Served"):eq(0)').next('td').find('div').html() == 'China'){
      swal({
        title : "Huawei Affiliate Account", 
        html: '<p><b style="background-color:yellow;font-weight:700">Compliance Alert!</b><b style="font-weight:700;color:red"> Do NOT call advertiser.</b></p> <p> <b style="color:blue"> Contact your Manager before proceeding further.</b></p>',
        type: "error",
        button: {
          text: "Got it!",
        },
      }).then(function(){
        googleAnalyticTracker(casenumber,agentName,'huawei')
      });
    } 

  }

}

function actions(){
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix") {
    jQuery('.labelCol:contains("Subject")').attr('id', 'Compliance')
    //jQuery('#Compliance').append('<section><div class="outside"><div class="inside"><div><input id="aaaa" type="checkbox" value="AAAA"/><label for="aaaa">Recorded Line</label></div><div><input id="bbbb" type="checkbox" value="BBBB"/><label for="bbbb">Authorization Email</label></div><div><input id="cccc" type="checkbox" value="CCCC"/><label for="cccc">Website Backup</label></div><div><input id="dddd" type="checkbox" value="DDDD"/><label for="dddd">GCSS Pitch</label></div></div></div></section>');
    jQuery('body').append('<section><div class="outside" style="margin-bottom: 22px;margin-right: 0;"><div class="inside"><div><input id="aaaa" type="checkbox" value="AAAA"/><label for="aaaa">Recorded Line</label></div><div><input id="bbbb" type="checkbox" value="BBBB"/><label for="bbbb">Authorization Email</label></div><div><input id="cccc" type="checkbox" value="CCCC"/><label for="cccc">Website Backup</label></div><div><input id="dddd" type="checkbox" value="DDDD"/><label for="dddd">GCSS Pitch</label></div></div></div></section>');
    $('body').append(`<a href="javascript:;"  class="floatInfo" style="display:none" ><img src="http://prognosipos.com/en-global/img/message.png" style="height: 26px;margin-top: 17px;"></a>`);
  };
}

function DashStats(){
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
  $('body').append(`
  <div class="row dashboard-card">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card dashboard-card-content border-0" style="width: 16rem;">
        <div class="card-body" style="padding: 0 !important;background-color: antiquewhite !important;border: 1px solid antiquewhite !important;">
          <h5 class="card-title border-bottom" style="margin-left: 24%; font-size:20px;">DASHBOARD</h5>
          <p class="card-text">
            <ul class="list-group border-0" style="width: max-content;">
              <li class="list-group-item border-0" style="margin: 0 !important;background-color: whitesmoke;">
                <b style="color:orange; padding-left: 35%;">In Queue</b>
                <ul class="list-group border-0">
                  <li class="list-group-item" style="font-size: 16px;">
                    (w/appointment) <span id="inqueue" class="badge alert-success float-right">0</span>
                  </li>
                  <li class="list-group-item" style="font-size: 16px;">
                    (wo/appointment) <span id="inqueuewo" class="badge alert-success float-right">0</span>
                  </li>
                </ul>
              </li>
              <li class="list-group-item border-0" style="margin: 0 !important;background-color: whitesmoke;">
                <b style="color:dark-blue; padding-left: 35%;">Rework Required</b>
                <ul class="list-group border-0">
                  <li class="list-group-item" style="font-size: 16px;">
                    Total <span id="rrq" class="badge alert-success float-right">0</span>
                  </li>
                </ul>
              </li>
              <li class="list-group-item border-0" style="margin: 0 !important;background-color: whitesmoke;">
                <b style="color:purple; padding-left: 40%;">Ac</b>
                <ul class="list-group border-0">
                  <li class="list-group-item" style="font-size: 16px;">
                  Total <span id="atc" class="badge alert-success float-right">0</span>
                  </li>

                </ul>
              </li>
              <li class="list-group-item border-0" style="margin: 0 !important;background-color: whitesmoke;">
               <b style="color:red; padding-left: 40%;"> Ip </b>
                <ul class="list-group border-0">
                  <li class="list-group-item" style="font-size: 16px;">
                  Total <span id="inprogress" class="badge alert-success float-right">0</span>
                  </li>
                </ul>
              </li>
              </ul>
            </p>
          </div>
      </div>
    </div>
  </div>

  <div class="row dashboard-card">
    <div class="col">
      <div class="collapse" id="prechecks">
        <div class="card dashboard-card-content bg-transparent border-0" style="width: 38rem;background-color: #f0f8ffd6 !important;">
          <div class=" card-body">
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">Pre - Call Check</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_pre btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn  text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_pre"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">On call implementation (includes 1st call, follow ups, reschedules)</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_oncall btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn  text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_oncall"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">Case Documentation</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_case btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn  text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_case"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">Off Call SME/ Tech Assistance</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_offcall btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn  text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_offcall"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">Email communication with Advertiser/Other stakeholders</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_email btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn  text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_email"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">Sharing updates with seller (email / chat / call)</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_sharing btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn  text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_sharing"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">7th Day check </div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_7days btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_7days"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
                <div class="col-lg-6 text-dark">Post 7th day check follow up process</div>
                <div class="col-lg-2 text-center"> <button type="button" class=" starter_btn text-dark timer_followup btn btn-success">Start</button> </div>
                <div class="col-lg-2 text-center"> <button type="button" disabled class="stoper_btn text-dark btn btn-danger">Stop</button> </div>
                <div class="col-lg-2 text-center mx-auto" id="timer_followup"> <h3 class="text-dark"> 00:00:00 </h3> </div>
              </div>
              <div class="row p-2 border-bottom">
              <div class="col-lg-6 text-dark">TOTAL</div>
              <div class="col-lg-2 text-center">  </div>
              <div class="col-lg-2 text-center">  </div>
              <div class="col-lg-2 text-center mx-auto" id="timer_total"> <h3 class="text-success timer_total"> 00:00:00 </h3> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="row dashboard-card">
  <div class="col">
    <div class="collapse" id="multicheck">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#home"></a></li>
        <li><a data-toggle="tab" class="bg-primary text-white p-3" style="border-radius: 30px;" href="#menu1" >Precheck</a></li>
        <li><a data-toggle="tab" class="bg-primary text-white p-3" style="border-radius: 30px;" href="#menu2">Postcheck</a></li>
        <li class="active"><a data-toggle="tab" href="#last"></a></li>
      </ul>
      <div class="tab-content">
        <div id="home" class="tab-pane fade in ">
         
        </div>
        
        <div id="menu1" class="tab-pane fade active show">

          <div class="card dashboard-card-content bg-secondary border-0" style="width: 38rem;">
            <div class=" card-body">

                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Auth mail sent</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_pre"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="auth_mail_sent" id="auth_mail_sent1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="auth_mail_sent" id="auth_mail_sent2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="auth_mail_sent" id="auth_mail_sent3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Appointment Confirmed</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_oncall"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="appointment_confirmed" id="appointment_confirmed1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="appointment_confirmed" id="appointment_confirmed2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="appointment_confirmed" id="appointment_confirmed3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Correct phone number updated</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_case"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="correct_phone_number" id="correct_phone_number1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="correct_phone_number" id="correct_phone_number2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="correct_phone_number" id="correct_phone_number3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Hangout link sent</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_offcall"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="hangout_link" id="hangout_link1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="hangout_link" id="hangout_link2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="hangout_link" id="hangout_link3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Has googler asked to join</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_email"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="has_googler_join" id="has_googler_join1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="has_googler_join" id="has_googler_join2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="has_googler_join" id="has_googler_join3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">All tasks added on the case, Special Instructions or on emails addressed</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_sharing"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="all_tasks_added_precheck" id="all_tasks_added_precheck1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="all_tasks_added_precheck" id="all_tasks_added_precheck2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="all_tasks_added_precheck" id="all_tasks_added_precheck3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Has agent joined & started the call?</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_7days"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="has_agent_joined" id="has_agent_joined1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="has_agent_joined" id="has_agent_joined2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="has_agent_joined" id="has_agent_joined3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>

            </div>
          </div>

        </div>
        <div id="menu2" class="tab-pane fade">
          
          <div class="card dashboard-card-content bg-secondary border-0" style="width: 38rem;">
            <div class=" card-body">

                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Comments updated</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_pre"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="comments_updated" id="comments_updated1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="comments_updated" id="comments_updated2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="comments_updated" id="comments_updated3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Follow up email sent</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_oncall"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="follow_up_email_sent" id="follow_up_email_sent1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="follow_up_email_sent" id="follow_up_email_sent2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="follow_up_email_sent" id="follow_up_email_sent3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Informed GSR</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_case"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="informed_GSR" id="informed_GSR1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="informed_GSR" id="informed_GSR2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="informed_GSR" id="informed_GSR3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Mandatory fields updated</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_offcall"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="mandatory_fields_updated" id="mandatory_fields_updated1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="mandatory_fields_updated" id="mandatory_fields_updated2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="mandatory_fields_updated" id="mandatory_fields_updated3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Verified implementation (when applicable)</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_email"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="verified_implementation" id="verified_implementation1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="verified_implementation" id="verified_implementation2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="verified_implementation" id="verified_implementation3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Right CID worked on?</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_sharing"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="right_cid_worked_on" id="right_cid_worked_on1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="right_cid_worked_on" id="right_cid_worked_on2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="right_cid_worked_on" id="right_cid_worked_on3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">All tasks added on the case, Special Instructions or on emails addressed</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_7days"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="all_tasks_added_postcheck" id="all_tasks_added_postcheck1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="all_tasks_added_postcheck" id="all_tasks_added_postcheck2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="all_tasks_added_postcheck" id="all_tasks_added_postcheck3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>
                <div class="row p-2 border-bottom">
                  <div class="col-lg-6 text-white">Correct Status / Sub-status updated</div>
                  <div class="col-lg-2 text-center mx-auto" id="timer_followup"> 

                   <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="correct_status" id="correct_status1" autocomplete="off" value="No" checked> No
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="correct_status" id="correct_status2" autocomplete="off" value="Yes"> Yes
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="correct_status" id="correct_status3" autocomplete="off" value="Error"> Error
                    </label>
                  </div>
                   
                    
                  </div>
                </div>

            </div>
          </div>

        </div>


        <div id="last" class="tab-pane fade">
          
        </div>
      </div>
    </div>
  </div>
  </div>
  `)
  }
}

function Dashlive(){
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
      var d = new Date();
      var now = d.getFullYear() + '-0' + (d.getMonth()+1) + '-' + d.getDate()
      agentName = $('#cas1_ileinner').text().split('[')[0].trim();

      var urlstring = "https://tagteamdashboards.regalix.com//salesforceteamreport.php?region=&salesforce=salesforce&programme=tag&datarange="+
                      now+'/'+now +
                      "&base=programme&agent="+
                      agentName+
                      "&gr="
      $.ajax({url: urlstring, success: function(result){
        var set = JSON.parse(result);
        //console.log(set);
          $('#inqueue').text(set.fresh_wiappt);
          $('#inqueuewo').text(set.fresh_woappt);
          $('#usercr').text(set.cr);
          $('#rrq').text(set.rrq[0].fields.expr0);
          $('#inproress').text(set.ip[0].fields.expr0);
          $('#atc').text(set.ac[0].fields.expr0);
          //$('#usertotallead').text(set.total_leads);
      }});
  }
}

function exit( status ) {
  var i;

  if (typeof status === 'string') {
      alert(status);
  }

  window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

  var handlers = [
      'copy', 'cut', 'paste',
      'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
      'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
      'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
  ];

  function stopPropagation (e) {
      e.stopPropagation();
      // e.preventDefault(); // Stop for the form controls, etc., too?
  }
  for (i=0; i < handlers.length; i++) {
      window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
  }

  if (window.stop) {
      window.stop();
  }

  throw '';
}

function liveUpdate(){
  //$('#bodyTable tbody:first').prepend('<tr><td align="center" colspan="2"> <div class="liveupdate-container"> <marquee> BASIC INFO </marquee> </div></td> </tr>');
  //$('.metadata.topics').append(' <div class="liveupdate-container"> <marquee> BASIC INFO </marquee> </div>');
  //$("<div class='liveupdate-container'> <marquee> BASIC INFO </marquee> </div>").insertAfter('.bPageHeader');
  //$("<div class='liveupdate-container'> <marquee> BASIC INFO </marquee> </div>").insertAfter('.ptBody')
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
     //$('body').append("<div class='liveupdate-container'>  </div>");
     $('body').append(`
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"  data-interval="2000">
      <div class="carousel-inner">
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
     `);

  }
}

function LiveMessages(){
  
    $.ajax({

      url: "https://google-wfm.regalix.com/salesforcetool/fetchMessage.php",
      data: {
        qtype: 'getInfoSalesforce'
      },
      success: function(result) {
        $('div.carousel-inner').html('');
        var newres = JSON.parse(result);
        var ind = '';
        var color = '';
        //console.log($(newres).length);
        //console.log(MessageCount);
         if($(newres).length > MessageCount) {
           MessageCount = $(newres).length;
           $.cookie("MessageCount", MessageCount, { expires : 30 });
           $('.floatInfo').fadeIn();
         }
         
            $(newres).each(function(index) {
            // $('.liveupdate-container marquee').html( $(this)[0].message +'--'+ $(this)[0].date )
              var message = $(this)[0].message ;
              if(index == 0){
                ind = 'active';
                if($(newres)[0].message.length > 90){
                    latest = $(newres)[0].message.replace(/(\r\n|\n|\r)/gm, "");
                }
              } else {
                ind = '';
              } 
                if(message.length > 100){
                    message = $(this)[0].title + '<a href="javascript:;" id="showmore'+index+'" >...more </a>';
                }  
              //console.log('color', color);
              $('div.carousel-inner').append(`
                  <div class="carousel-item `+ind+`">
                    <div class="row text-center">
                        <div class="col-lg-1"> </div>
                        <div class="col-lg-8"> 
                        `+message+`
                        </div>
                        <div class="col-lg-1"> </div>
                    </div>
                  </div>
              `);

              $('#showmore'+index+'').popover({
                html: true,
                trigger:'click | hover',
                container: 'body',
                placement:'top',
                content: `<div class="container" style="width:auto">
                            <div class="row">
                              <b style="color:orange;"> Update! </b>
                              <a href="javascript:;" id="close-thikshow`+index+`" class="close-thik">x</a>
                            </div>
                          </div>
                          <div class="container" style="width:auto; color:green;">
                            <div class="row" id="current_message"><div class="col-lg-20">`+ $(this)[0].message +`</div></div>
                          </div>`
              }).on("mouseenter",function () {
                  var _this = this;
                  $('#close-thikshow'+index+'').click(function(){
                      $(_this).popover("hide");
                      trackuserReadStatus($(newres)[0].id);
                      
                  })
              })

              

            })
         }
    });
  

}

function toggle(){
  $('#carouselExampleControls').slideToggle();
  chrome.runtime.sendMessage({event: "popup"}, function(response) {
    console.log(response);
  });
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function googleAnalyticTracker(casenumber,agentName,status){
  console.log('google popup');
  if(status = "huawei"){
    var ec='huawei'
  } else {
    var ec='popup'
  }
  $.ajax({
    url: "https://www.google-analytics.com/collect",
    data: {
      v:'1',
      t:'event',
      tid:'UA-52560961-4',
      cid: cid,
      dp: window.location.pathname,
      dt: document.title,
      ec: ec,
      ea: casenumber,
      el: agentName,
      cd1: casenumber,
      cd2: agentName,
      cd3: status,
    },
    success: function(result) {
      // console.log(result, 'element registered')
    }
  });

}

function QtagModal(){
  $('body').append(` 
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm" role="document" style="top: 30%;">
  <div class="modal-content">
    <div class="modal-header"  style="background-color: bisque;padding-left: 35%;">
      <h2 class="modal-title text-center" id="exampleModalLabel" style="font-size: large;">SELF-QC</h2>
    </div>
    <div class="modal-body">
      <form>
        <div class="checkbox">
          <label><input type="checkbox" value="1" id="record_line"> &nbsp;&nbsp; Recorded Line </label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" value="1" id="authorization_email"> &nbsp;&nbsp; Authorization Email </label>
        </div>
        <div class="checkbox ">
          <label><input type="checkbox" value="1" id="website_backup">  &nbsp;&nbsp;  Website Backup </label>
        </div>
        <div class="checkbox">
        <label><input type="checkbox" style="color: orange;" value="1" id="calendar_invite"> &nbsp;&nbsp; Calendar Invite to Googler </label>
        </div>
        <div class="checkbox">
        <label><input type="checkbox" value="1" id="gss_pitch"> &nbsp;&nbsp; GCSS Pitch </label>
        </div>
        <div class="checkbox">
        <label><input type="checkbox" value="1" id="post_implementation_screenshot"> &nbsp;&nbsp; Post Implementation Screenshot </label>
        </div>
        <div class="checkbox">
        <label><input type="checkbox" value="1" id="detailed_case"> &nbsp;&nbsp; Detailed Case Comments </label>
        </div>
        <div class="checkbox">
        <label><input type="checkbox" value="1" id="g_case_finished"> &nbsp;&nbsp; G-cases Marked Finished </label>
        </div>
        <div class="checkbox">
        <label><input type="checkbox" value="1" id="zelda_populated"> &nbsp;&nbsp; Zelda Populated </label>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" id="saveCh" class="btn btn-secondary" style="font-size: initial;margin-right: 30%;">Save changes</button>
    </div>
  </div>
  </div>
  </div>`
)
$('#saveCh').click(function(){
 if($(this).parents('div.modal-content').find('input:checked').length > 0){
  $('#exampleModal').modal('hide');
  $('[name="inlineEditSave"]').removeAttr('disabled');
  $('[name="inlineEditSave"]').show();
  $('#btnpreview').hide();
  

  var d = new Date(),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();
  
  var dateOfInstallation = [year, month, day].join('-')

  var agent	= agentName;

  var appointment_date = $('tr:contains("Appointment Date/Time"):eq(2) td:eq(1)').text().split(' ')[0].replace(/[^a-zA-Z0-9]+/g, "-");
  var implementation_date = dateOfInstallation;
  var link = window.location.pathname;
  var case_id = $('.pageDescription').text().trim();
  var creation_date = $('.dataCell.DateElement:first').text();
  var webaddress = $('.actionLink:first').attr('title').split('-')[2];
  var business_name = $('tr:contains("Account Name"):last td:eq(1)').text();
  //  var phone_number = $('tr.dataRow.even.last.first:contains("Advertiser Contact") td:eq(2)').text();
 
  var record_line = $('#record_line:checked').val();
  var authorization_email = $('#authorization_email:checked').val();
  var calendar_invite = $('#calendar_invite:checked').val();
  var website_backup = $('#website_backup:checked').val();
  var gss_pitch = $('#gss_pitch:checked').val();
  var post_implementation_screenshot = $('#post_implementation_screenshot:checked').val();
  var detailed_case = $('#detailed_case:checked').val();
  var Detailed_Case_Comments = $('#detailed_case:checked').val(); 
  var G_cases_Marked_Finished = $('#g_case_finished:checked').val(); 
  var Zelda_Populated = $('#zelda_populated:checked').val();
  
  $.ajax({
    type: "POST",
    url: 'https://google-wfm.regalix.com/salesforcetool/selfqc.php',
    data: {
      agent	: agent,
      implementation_date:implementation_date,
      link:link,
      case_id:case_id,
      creation_date:creation_date,
      webaddress:webaddress,
      business_name:business_name,
      phone_number:'',
      appointment_date:appointment_date,
      record_line: record_line,
      authorization_email: authorization_email,
      calendar_invite: calendar_invite,
      website_backup: website_backup,
      gss_pitch: gss_pitch,
      post_implementation_screenshot: post_implementation_screenshot,
      detailed_case: detailed_case,
      Detailed_Case_Comments:  Detailed_Case_Comments,
      G_cases_Marked_Finished:  G_cases_Marked_Finished,
      Zelda_Populated: Zelda_Populated
    },
    success: function(data){
        //console.log(data);
        $('[name="inlineEditSave"]').click();
    }
  });

 } else {
   swal('Alert!','Please check at least one of these options!');
 }
})
}



function Questionnaire(){
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
    $('#btnpreview').click(function(ev){

      if($('#AppBodyHeader').length > 0){
          if($('td:contains("Status"):eq(1)').next('td').text() == "Pending qc - win / Implemented"){
                $('#exampleModal').modal({
                  backdrop: 'static',
                  keyboard: false,
                  show: true
                });
           //alert('test');
          }
        } else {
            if($('td:contains("Status"):eq(0)').next('td').text() == "Pending qc - win / Implemented"){
              $('#exampleModal').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
              });
            }
      }
        
    })
  
  }
    
}


function NewIconSet(){
  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){

   $('body').append(`<div class="icon-bar">
      <a class="google escape" data-toggle="collapse" href="#multicheck" role="button" aria-expanded="false" aria-controls="multicheck">
          <i class="fa fa-adjust"></i>
      </a> 
      <a class="facebook precheck " id="precheck" data-toggle="collapse" href="#prechecks" role="button" aria-expanded="false" aria-controls="prechecks">
          <i class="text-white fa fa-history" aria-hidden="true"></i>
      </a> 
      <a class="google escape" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
          <i class="fa fa-angle-double-left"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Send a Calendar invitation to the googler" id="calendar" class="facebook">
          <i class="fa fa-calendar"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Inactive Email" id="close" class="twitter">
          <i class="fa fa-times"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Confirmation Email" id="confirmation" class="google">
          <i class="fa fa-check"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Comments On case" id="comments" class="linkedin">
          <i class="fa fa-comments-o"></i>
      </a>
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Send an Email" id="emails" class="youtube">
          <i class="fa fa-envelope"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="FAQ " id="faq" class="google">
          <i class="fa fa-question-circle"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Confirmation Email Template" id="all-confirmation" class="youtube">
          <i class="fa fa-list-alt"></i>
      </a> 
      <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover"  data-content="Setting Expectations" id="settingex" class="special">
          <i class="fa fa-tasks" aria-hidden="true"></i>
      </a> 
 </div>`)

  $('#calendar').click(function(){
    calendar();
  })
  $('#settingex').click(function(){
    var template = '';
    $('div.listRelatedObject:contains("Tags")').find('th.dataCell').each(function(){
      var buildit = `<div class="col-lg-3">
              <h2>`+$(this).text()+`</h2>
            </div> 
            <div class="col-lg-6 mr-1 mb-2">
              `+contextsetting[$(this).text()]+`
            </div>`
      template = template+buildit;
      // console.log($(this).text())
    })
    
    swal({
      title: '<strong>Expectations</strong>',
      html: '<div class="row" style="font-size: 12px">'+
              template+
            '</div>'
    }) 
  })
  $('#close').click(function(){
    inactive();
  })
  $('#confirmation').click(function(){
    Newconf();
  })
  $('#comments').click(function(){
    comments();
  })
  $('#emails').click(function(){
    authemail();
  })
  $('#faq').click(function(){
    Faq();
  })
  $('#all-confirmation').click(function(){
    confirmation();
  })
  $('.icon-bar a:not(".escape,.precheck") ').popover({
    template: `<div class="popover iconpopover" style="width:150px !important; background-color:dark !important; color:white !important;" role="tooltip">
                <div class="arrow iconpopover-arrow"></div>
                  <h3 class="popover-header"></h3>
                <div class="popover-body iconpopover-body" style="width:150px !important;"></div>
              </div>`,
    content: function(){
      $(this).attr('data-content');
    }
  })
 }
}

function createButton(){

  $('#InlineEditDialog_buttons input[value="OK"]').click(function() {
    if ($(this).parents('.innerContent').find('select').val() == 'Pending qc - win / Implemented') {
      if ($('#btnpreview').length > 0) {
        $('#btnpreview').show();
        $('[name="inlineEditSave"]').attr('disabled','');
      } else {
        $('<input value="Preview" class="btn" id="btnpreview" style="display: inline;background-color:green;" title="preview" type="button">')
          .insertBefore('[name="inlineEditSave"]');
          $('[name="inlineEditSave"]').attr('disabled','');
          Questionnaire();
      }
    } else {
      if ($('#btnpreview').length > 0) {
        $('#btnpreview').hide();
        $('[name="inlineEditSave"]').removeAttr('disabled');
      }
    }
  
  })
  $('#InlineEditDialog_buttons input[value="Cancel"]').click(function(){
    $('#btnpreview').hide();
  })
  $('[name="inlineEditCancel"]').click(function(){
    $('#btnpreview').hide();
  })
  $('#InlineEditDialogX').click(function(){
    $('#btnpreview').hide();
  })
  
}


function launcher(){
    if($.cookie("cid") == undefined){
      cid = uuidv4();
      $.cookie("cid", uuidv4(), { expires : 30 });
    } else {
      cid = $.cookie("cid");
  }

  if($.cookie("MessageCount") == undefined){
      MessageCount = 0;
    $.cookie("MessageCount", MessageCount, { expires : 30 });
  } else {
      MessageCount = $.cookie("MessageCount");
  }

  var curr_lead_time_zone = $('tr:contains("Time Zone"):last td:eq(1)').text();
  var crTz =  timeZone(curr_lead_time_zone);
  var conv =  tzConversion(crTz);

  if( conv != undefined){
    var ct =  get_bs_time(conv).split(' ')[1];
    var bt = ct.split(':')[0]
    
     if(parseInt(bt) >= 9 && parseInt(bt) <= 19){
         console.log('you are within the time range')
     } else {
        $.gritter.add({
          title: 'BUSINESS TIME ZONE',
          text: 'you are currently operation outside the Advertiser Business Hours, please refer to the comments or Special instructions for any specific actions.',
          image: 'https://www.nationalgeographic.com/content/dam/science/2019/03/08/daylight-saving/dst5.gif',
          sticky: true,
          time: 8000,
          class_name: 'gt-color',
          time: ''
        });
     }
  } else {
      console.log('----')
  }


  //MainSetup();
  NewIconSet();
  warning();
  //actions();
  DashStats()
  liveUpdate();
  QtagModal();
  //Questionnaire();

  setTimeout(function(){
    LiveMessages();
    Dashlive();
  },5000)

  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
    if($('#AppBodyHeader').length > 0){

      $('td:contains("Status"):eq(1),td:contains("Sub Status"):eq(1),td:contains("Vendor Name"):eq(1),td:contains("Dead Case (Date)"):eq(1),td:contains("Shopping Code Type"):eq(1),td:contains("Website Backup Taken?"):eq(1),td:contains("Appointment Date/Time"):eq(1),td:contains("Appointment Date/Time (Advertiser)"):eq(1),td:contains("Rescheduled Appointment Date/Time"):eq(1),td:contains("Rescheduled Appointment Date(Advertiser)"):eq(1),td:contains("Rescheduled Appointment Time(Advertiser)"):eq(1),td:contains("Time Zone"):eq(1),td:contains("Customer ID"):eq(1),td:contains("Region"):eq(1),td:contains("Market Served"):eq(1),td:contains("Language"):eq(1),td:contains("MC-ID"):eq(1),td:contains("Campaign Created date"):eq(1),td:contains("Campaign ID"):eq(1),td:contains("SQO / STO Comments"):eq(1),td:contains("Number of Products uploaded"):eq(1),td:contains("Reason for Updating Static Feed"):eq(1),td:contains("Static Feeds - Others"):eq(1),td:contains("Type of Policy violation"):eq(1),td:contains("Method used for feed upload"):eq(1),td:contains("Authorization Email Sent"):eq(1),td:contains("Appointment Sub-Status"):eq(1),td:contains("CMS/Platform"):eq(1),td:contains("Other CMS"):eq(1),td:contains("Screenshare Scheduled"):eq(1),td:contains("gCases ID"):eq(1),td:contains("Mouse Control Taken"):eq(1),td:contains("Code Type"):eq(1),td:contains("Call Transferred to GCSS"):eq(1)').css('color','#c8161d');
      var cusid = $('td:contains("Customer ID"):eq(1)').next('td').find('div').html();
      $('td:contains("Customer ID"):eq(1)').next('td').find('div').html('<a href="https://awics.corp.google.com/ics/go?destPage=campaignSummary&convid='+ cusid +'" target="_blank" style="color: rgb(200, 22, 29);text-decoration: underline;">'+ cusid +'</a>      <a style="color: rgb(200, 22, 29);text-decoration: underline;" target="_blank" class="float-right" href="https://cases.corp.google.com/Client.html#cto+'+ cusid +'"> G-case </a>')
      var gca = $('td:contains("gCases ID"):eq(1)').next('td').find('div').html();
      $('td:contains("gCases ID"):eq(1)').next('td').find('div').html('<a href="https://cases.corp.google.com/Client.html#e'+ gca +'"  style="color: rgb(200, 22, 29);text-decoration: underline;"  target="_blank">'+ gca +'</a>')
      var mcid = $('td:contains("MC-ID"):eq(1)').next('td').find('div').html();
      $('td:contains("MC-ID"):eq(1)').next('td').find('div').html('<a href="https://mcn-ics.corp.google.com/mc/products/diagnostics?a='+mcid+'&tab" style="color: rgb(200, 22, 29);text-decoration: underline;"  target="_blank">'+mcid+' </a>');
    } else {

      $('td:contains("Status"):eq(0),td:contains("Sub Status"):eq(0),td:contains("Vendor Name"):eq(0),td:contains("Dead Case (Date)"):eq(0),td:contains("Shopping Code Type"):eq(0),td:contains("Website Backup Taken?"):eq(0),td:contains("Appointment Date/Time"):eq(0),td:contains("Appointment Date/Time (Advertiser)"):eq(0),td:contains("Rescheduled Appointment Date/Time"):eq(0),td:contains("Rescheduled Appointment Date(Advertiser)"):eq(0),td:contains("Rescheduled Appointment Time(Advertiser)"):eq(0),td:contains("Time Zone"):eq(0),td:contains("Customer ID"):eq(0),td:contains("Region"):eq(0),td:contains("Market Served"):eq(0),td:contains("Language"):eq(0),td:contains("MC-ID"):eq(0),td:contains("Campaign Created date"):eq(0),td:contains("Campaign ID"):eq(0),td:contains("SQO / STO Comments"):eq(0),td:contains("Number of Products uploaded"):eq(0),td:contains("Reason for Updating Static Feed"):eq(0),td:contains("Static Feeds - Others"):eq(0),td:contains("Type of Policy violation"):eq(0),td:contains("Method used for feed upload"):eq(0),td:contains("Authorization Email Sent"):eq(0),td:contains("Appointment Sub-Status"):eq(0),td:contains("CMS/Platform"):eq(0),td:contains("Other CMS"):eq(0),td:contains("Screenshare Scheduled"):eq(0),td:contains("gCases ID"):eq(0),td:contains("Mouse Control Taken"):eq(0),td:contains("Code Type"):eq(0),td:contains("Call Transferred to GCSS"):eq(0)').css('color','#c8161d');
      var cusid = $('td:contains("Customer ID"):eq(0)').next('td').find('div').html();
      $('td:contains("Customer ID"):eq(0)').next('td').find('div').html('<a href="https://awics.corp.google.com/ics/go?destPage=campaignSummary&convid='+ cusid +'" target="_blank" style="color: rgb(200, 22, 29);text-decoration: underline;">'+ cusid +'</a>      <a style="color: rgb(200, 22, 29);text-decoration: underline;" target="_blank" class="float-right" href="https://cases.corp.google.com/Client.html#cto+'+ cusid +'"> G-case </a>')
      var gca = $('td:contains("gCases ID"):eq(0)').next('td').find('div').html();
      $('td:contains("gCases ID"):eq(0)').next('td').find('div').html('<a href="https://cases.corp.google.com/Client.html#e'+ gca +'"   style="color: rgb(200, 22, 29);text-decoration: underline;" target="_blank">'+ gca +'</a>')
      var mcid = $('td:contains("MC-ID"):eq(0)').next('td').find('div').html();
      $('td:contains("MC-ID"):eq(0)').next('td').find('div').html('<a href="https://mcn-ics.corp.google.com/mc/products/diagnostics?a='+mcid+'&tab" style="color: rgb(200, 22, 29);text-decoration: underline;"  target="_blank">'+mcid+' </a>')
    }
  }

  $('.floatInfo').popover({
    html: true,
    trigger:'click',
    container: 'body',
    placement:'auto',
    // title: 'Popover Title<a class="close" href="#");">&times;</a>',
    content: `<div class="container" style="width:auto">
                <div class="row">
                  <b style="color:orange;"> New Update! </b>
                  <a href="javascript:;" id="close-thik" class="close-thik">x</a>
                </div>
              </div>
              <div class="container" style="width:auto; color:green;">
                <div class="row" id="update_content"><div class="col-lg-20">`+ latest +`</div></div>
              </div>`
  })

  $('.floatInfo').on('shown.bs.popover', function(){
    $('#update_content').html(latest.toLowerCase());
    $('#close-thik').click(function(){
      $('.floatInfo').popover('hide');
      $('.floatInfo').fadeOut();
    })
  })

  if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
    if($('#AppBodyHeader').length > 0){
      $('tr:contains("Status"):eq(1),tr:contains("Sub Status"):eq(1)').find('.dataCol.col02.inlineEditWrite').dblclick(function(){
        setTimeout(function(){
          createButton();
        },1000)
      })
    } else {
      $('tr:contains("Status"):eq(0),tr:contains("Sub Status"):eq(0)').find('.dataCol.col02.inlineEditWrite').dblclick(function(){
        setTimeout(function(){
          createButton();
        },1000)
      })
    }
  }

  $('#exampleModal').on('hidden.bs.modal', function (e) {
    $(this)
      .find("input,textarea,select")
        .val('')
        .end()
      .find("input[type=checkbox], input[type=radio]")
        .prop("checked", "")
        .end();
  })
    


  setInterval(function(){
    LiveMessages();
    //console.log('aaa')
  },100000)
}

function google_login(username){
  chrome.runtime.sendMessage({'request':'login', 'data':username}, function(response) {
    if(response.status == 'true'){
      $.cookie('RgxuserLoggedIn', true, {
        path: window.location.hostname,
        expires: 1
      })
      $.gritter.add({
        title: 'Welcome Back',
        text: username
      });
      $('#login_btn_buddy').hide();
      launcher()
    } else {
      swal({
        title : "LOGGIN ERROR YOU ID IS NOT VALID", 
        html: 'Please check with your TL',
        type: "warning",
        button: {
          text: "Got it!",
        },
      })  
    }
  })


}


function get_bs_time(a){
  var BusinessTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
  BusinessTime = new Date(BusinessTime);
  return BusinessTime.toLocaleString();
}

function timeZone(a){
  var aryIannaTimeZones =
  [{
      '0':'Europe/Andorra',
      'GMT (UTC +0:00)':'Asia/Dubai',
      '0':'Asia/Kabul',
      '0':'Europe/Tirane',
      '0':'Asia/Yerevan',
      '0':'Antarctica/Casey',
      '0':'Antarctica/Davis',
      '0':'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
      '0':'Antarctica/Mawson',
      '0':'Antarctica/Palmer',
      '0':'Antarctica/Rothera',
      '0':'Antarctica/Syowa',
      '0':'Antarctica/Troll',
      '0':'Antarctica/Vostok',
      '0':'America/Argentina/Buenos_Aires',
      '0':'America/Argentina/Cordoba',
      '0':'America/Argentina/Salta',
      '0':'America/Argentina/Jujuy',
      '0':'America/Argentina/Tucuman',
      '0':'America/Argentina/Catamarca',
      '0':'America/Argentina/La_Rioja',
      '0':'America/Argentina/San_Juan',
      '0':'America/Argentina/Mendoza',
      '0':'America/Argentina/San_Luis',
      '0':'America/Argentina/Rio_Gallegos',
      '0':'America/Argentina/Ushuaia',
      '0':'Pacific/Pago_Pago',
      '0':'Europe/Vienna',
      '0':'Australia/Lord_Howe',
      '0':'Antarctica/Macquarie',
      '0':'Australia/Hobart',
      '0':'Australia/Currie',
      '0':'Australia/Melbourne',
      '0':'Australia/Sydney',
      '0':'Australia/Broken_Hill',
      'AEST (UTC +10:00)':'Australia/Brisbane',
      '0':'Australia/Lindeman',
      '0':'Australia/Adelaide',
      'ACST (UTC +9:30)':'Australia/Darwin',
      'AWST (UTC +8:00)':'Australia/Perth',
      '0':'Australia/Eucla',
      '0':'Asia/Baku',
      '0':'America/Barbados',
      '0':'Asia/Dhaka',
      '0':'Europe/Brussels',
      '0':'Europe/Sofia',
      '0':'Atlantic/Bermuda',
      '0':'Asia/Brunei',
      '0':'America/La_Paz',
      '0':'America/Noronha',
      '0':'America/Belem',
      '0':'America/Fortaleza',
      '0':'America/Recife',
      '0':'America/Araguaina',
      '0':'America/Maceio',
      '0':'America/Bahia',
      '0':'America/Sao_Paulo',
      '0':'America/Campo_Grande',
      '0':'America/Cuiaba',
      '0':'America/Santarem',
      '0':'America/Porto_Velho',
      '0':'America/Boa_Vista',
      '0':'America/Manaus',
      '0':'America/Eirunepe',
      '0':'America/Rio_Branco',
      '0':'America/Nassau',
      '0':'Asia/Thimphu',
      '0':'Europe/Minsk',
      '0':'America/Belize',
      '0':'America/St_Johns',
      '0':'America/Halifax',
      '0':'America/Glace_Bay',
      '0':'America/Moncton',
      '0':'America/Goose_Bay',
      '0':'America/Blanc-Sablon',
      'EDT (UTC -4:00)':'America/Toronto',
      '0':'America/Nipigon',
      '0':'America/Thunder_Bay',
      '0':'America/Iqaluit',
      '0':'America/Pangnirtung',
      '0':'America/Atikokan',
      '0':'America/Winnipeg',
      '0':'America/Rainy_River',
      '0':'America/Resolute',
      '0':'America/Rankin_Inlet',
      '0':'America/Regina',
      '0':'America/Swift_Current',
      '0':'America/Edmonton',
      '0':'America/Cambridge_Bay',
      '0':'America/Yellowknife',
      '0':'America/Inuvik',
      '0':'America/Creston',
      '0':'America/Dawson_Creek',
      '0':'America/Fort_Nelson',
      '0':'America/Vancouver',
      '0':'America/Whitehorse',
      '0':'America/Dawson',
      '0':'Indian/Cocos',
      '0':'Europe/Zurich',
      '0':'Africa/Abidjan',
      '0':'Pacific/Rarotonga',
      '0':'America/Santiago',
      '0':'America/Punta_Arenas',
      '0':'Pacific/Easter',
      '0':'Asia/Shanghai',
      '0':'Asia/Urumqi',
      '0':'America/Bogota',
      '0':'America/Costa_Rica',
      '0':'America/Havana',
      '0':'Atlantic/Cape_Verde',
      '0':'America/Curacao',
      '0':'Indian/Christmas',
      '0':'Asia/Nicosia',
      '0':'Asia/Famagusta',
      '0':'Europe/Prague',
      '0':'Europe/Berlin',
      '0':'Europe/Copenhagen',
      '0':'America/Santo_Domingo',
      '0':'Africa/Algiers',
      '0':'America/Guayaquil',
      '0':'Pacific/Galapagos',
      '0':'Europe/Tallinn',
      '0':'Africa/Cairo',
      '0':'Africa/El_Aaiun',
      '0':'Europe/Madrid',
      '0':'Africa/Ceuta',
      '0':'Atlantic/Canary',
      '0':'Europe/Helsinki',
      '0':'Pacific/Fiji',
      '0':'Atlantic/Stanley',
      '0':'Pacific/Chuuk',
      '0':'Pacific/Pohnpei',
      '0':'Pacific/Kosrae',
      '0':'Atlantic/Faroe',
      '0':'Europe/Paris',
      'BST (UTC +1:00)':'Europe/London',
      '0':'Asia/Tbilisi',
      '0':'America/Cayenne',
      '0':'Africa/Accra',
      '0':'Europe/Gibraltar',
      '0':'America/Godthab',
      '0':'America/Danmarkshavn',
      '0':'America/Scoresbysund',
      '0':'America/Thule',
      '0':'Europe/Athens',
      '0':'Atlantic/South_Georgia',
      '0':'America/Guatemala',
      '0':'Pacific/Guam',
      '0':'Africa/Bissau',
      '0':'America/Guyana',
      'HKT (UTC +8:00)':'Asia/Hong_Kong',
      '0':'America/Tegucigalpa',
      '0':'America/Port-au-Prince',
      '0':'Europe/Budapest',
      '0':'Asia/Jakarta',
      '0':'Asia/Pontianak',
      '0':'Asia/Makassar',
      '0':'Asia/Jayapura',
      '0':'Europe/Dublin',
      '0':'Asia/Jerusalem',
      'IST (UTC +5:30)':'Asia/Kolkata',
      '0':'Indian/Chagos',
      '0':'Asia/Baghdad',
      '0':'Asia/Tehran',
      '0':'Atlantic/Reykjavik',
      '0':'Europe/Rome',
      '0':'America/Jamaica',
      '0':'Asia/Amman',
      '0':'Asia/Tokyo',
      '0':'Africa/Nairobi',
      '0':'Asia/Bishkek',
      '0':'Pacific/Tarawa',
      '0':'Pacific/Enderbury',
      '0':'Pacific/Kiritimati',
      '0':'Asia/Pyongyang',
      '0':'Asia/Seoul',
      '0':'Asia/Almaty',
      '0':'Asia/Qyzylorda',
      '0':'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
      '0':'Asia/Aqtobe',
      '0':'Asia/Aqtau',
      '0':'Asia/Atyrau',
      '0':'Asia/Oral',
      '0':'Asia/Beirut',
      '0':'Asia/Colombo',
      '0':'Africa/Monrovia',
      '0':'Europe/Vilnius',
      '0':'Europe/Luxembourg',
      '0':'Europe/Riga',
      '0':'Africa/Tripoli',
      '0':'Africa/Casablanca',
      '0':'Europe/Monaco',
      '0':'Europe/Chisinau',
      '0':'Pacific/Majuro',
      '0':'Pacific/Kwajalein',
      '0':'Asia/Yangon',
      '0':'Asia/Ulaanbaatar',
      '0':'Asia/Hovd',
      '0':'Asia/Choibalsan',
      '0':'Asia/Macau',
      '0':'America/Martinique',
      '0':'Europe/Malta',
      '0':'Indian/Mauritius',
      '0':'Indian/Maldives',
      '0':'America/Mexico_City',
      '0':'America/Cancun',
      '0':'America/Merida',
      '0':'America/Monterrey',
      '0':'America/Matamoros',
      '0':'America/Mazatlan',
      '0':'America/Chihuahua',
      '0':'America/Ojinaga',
      '0':'America/Hermosillo',
      '0':'America/Tijuana',
      '0':'America/Bahia_Banderas',
      '0':'Asia/Kuala_Lumpur',
      '0':'Asia/Kuching',
      '0':'Africa/Maputo',
      '0':'Africa/Windhoek',
      '0':'Pacific/Noumea',
      '0':'Pacific/Norfolk',
      '0':'Africa/Lagos',
      '0':'America/Managua',
      '0':'Europe/Amsterdam',
      '0':'Europe/Oslo',
      '0':'Asia/Kathmandu',
      '0':'Pacific/Nauru',
      '0':'Pacific/Niue',
      '0':'Pacific/Auckland',
      '0':'Pacific/Chatham',
      '0':'America/Panama',
      '0':'America/Lima',
      '0':'Pacific/Tahiti',
      '0':'Pacific/Marquesas',
      '0':'Pacific/Gambier',
      '0':'Pacific/Port_Moresby',
      '0':'Pacific/Bougainville',
      '0':'Asia/Manila',
      '0':'Asia/Karachi',
      '0':'Europe/Warsaw',
      '0':'America/Miquelon',
      '0':'Pacific/Pitcairn',
      '0':'America/Puerto_Rico',
      '0':'Asia/Gaza',
      '0':'Asia/Hebron',
      '0':'Europe/Lisbon',
      '0':'Atlantic/Madeira',
      '0':'Atlantic/Azores',
      '0':'Pacific/Palau',
      '0':'America/Asuncion',
      '0':'Asia/Qatar',
      '0':'Indian/Reunion',
      '0':'Europe/Bucharest',
      '0':'Europe/Belgrade',
      '0':'Europe/Kaliningrad',
      '0':'Europe/Moscow',
      '0':'Europe/Simferopol',
      '0':'Europe/Kirov',
      '0':'Europe/Astrakhan',
      '0':'Europe/Volgograd',
      '0':'Europe/Saratov',
      '0':'Europe/Ulyanovsk',
      '0':'Europe/Samara',
      '0':'Asia/Yekaterinburg',
      '0':'Asia/Omsk',
      '0':'Asia/Novosibirsk',
      '0':'Asia/Barnaul',
      '0':'Asia/Tomsk',
      '0':'Asia/Novokuznetsk',
      '0':'Asia/Krasnoyarsk',
      '0':'Asia/Irkutsk',
      '0':'Asia/Chita',
      '0':'Asia/Yakutsk',
      '0':'Asia/Khandyga',
      '0':'Asia/Vladivostok',
      '0':'Asia/Ust-Nera',
      '0':'Asia/Magadan',
      '0':'Asia/Sakhalin',
      '0':'Asia/Srednekolymsk',
      '0':'Asia/Kamchatka',
      '0':'Asia/Anadyr',
      '0':'Asia/Riyadh',
      '0':'Pacific/Guadalcanal',
      '0':'Indian/Mahe',
      '0':'Africa/Khartoum',
      '0':'Europe/Stockholm',
      'SGT (UTC +8:00)':'Asia/Singapore',
      '0':'America/Paramaribo',
      '0':'Africa/Juba',
      '0':'Africa/Sao_Tome',
      '0':'America/El_Salvador',
      '0':'Asia/Damascus',
      '0':'America/Grand_Turk',
      '0':'Africa/Ndjamena',
      '0':'Indian/Kerguelen',
      '0':'Asia/Bangkok',
      '0':'Asia/Dushanbe',
      '0':'Pacific/Fakaofo',
      '0':'Asia/Dili',
      '0':'Asia/Ashgabat',
      '0':'Africa/Tunis',
      '0':'Pacific/Tongatapu',
      '0':'Europe/Istanbul',
      '0':'America/Port_of_Spain',
      '0':'Pacific/Funafuti',
      '0':'Asia/Taipei',
      '0':'Europe/Kiev',
      '0':'Europe/Uzhgorod',
      '0':'Europe/Zaporozhye',
      '0':'Pacific/Wake',
      '0':'America/New_York',
      '0':'America/Detroit',
      'CDT (UTC -5:00)':'America/Kentucky/Louisville',
      '0':'America/Kentucky/Monticello',
      '0':'America/Indiana/Indianapolis',
      '0':'America/Indiana/Vincennes',
      '0':'America/Indiana/Winamac',
      '0':'America/Indiana/Marengo',
      '0':'America/Indiana/Petersburg',
      '0':'America/Indiana/Vevay',
      '0':'America/Chicago',
      '0':'America/Indiana/Tell_City',
      '0':'America/Indiana/Knox',
      '0':'America/Menominee',
      '0':'America/North_Dakota/Center',
      '0':'America/North_Dakota/New_Salem',
      '0':'America/North_Dakota/Beulah',
      'MDT (UTC -6:00)':'America/Denver',
      '0':'America/Boise',
      '0':'America/Phoenix',
      '0':'America/Los_Angeles',
      '0':'America/Anchorage',
      '0':'America/Juneau',
      '0':'America/Sitka',
      '0':'America/Metlakatla',
      '0':'America/Yakutat',
      '0':'America/Nome',
      'HST (UTC -10:00)':'America/Adak',
      '0':'Pacific/Honolulu',
      '0':'America/Montevideo',
      '0':'Asia/Samarkand',
      '0':'Asia/Tashkent',
      '0':'America/Caracas',
      '0':'Asia/Ho_Chi_Minh',
      '0':'Pacific/Efate',
      '0':'Pacific/Wallis',
      '0':'Pacific/Apia',
      'SAST (UTC +2:00)':'Africa/Johannesburg'
  }];
  var fn = aryIannaTimeZones[0][a];
  return fn;
}

function tzConversion(a){
  var day;
  switch (a) {
          case "Australia/Brisbane":
              day ="Australia/Brisbane";
              break;
          case "Australia/Darwin":
              day ="Australia/Darwin";
              break;
          case "Australia/Perth":
              day ="Australia/Perth";
              break;
          case "NZDT (UTC +13:00)":
              day ="NZDT (UTC +13:00)";
              break;
          case "MYT (UTC +8:00)":
              day ="MYT (UTC +8:00)";
              break;
          case "Asia/Singapore":
              day ="Asia/Singapore";
              break;
          case "Asia/Kolkata":
              day ="Asia/Kolkata";
              break;
          case "Asia/Hong_Kong":
              day ="Asia/Hong_Kong";
              break;
          case "Europe/London'":
              day ="Europe/London'";
              break;
          case "Africa/Johannesburg":
              day ="Africa/Johannesburg";
              break;
          case "IDT (UTC +3:00)":
              day ="IDT (UTC +3:00)";
              break;
          case "WET (UTC +0:00)":
              day ="WET (UTC +0:00)";
              break;
          case "Asia/Dubai":
              day ="Asia/Dubai";
              break;
          case "PDT (UTC -7:00)":
              day ="PDT (UTC -7:00)";
              break;
          case "America/Kentucky/Louisville":
              day ="America/Kentucky/Louisville";
              break;
          case "America/Toronto":
              day ="America/Toronto";
              break;
          case "America/Denver":
              day ="America/Denver";
              break;
          case "America/Adak":
              day ="America/Adak";
  }   
  return day;
}

function addTimes (startTime, endTime) {
  var times = [ 0, 0, 0 ]
  var max = times.length

  var a = (startTime || '').split(':')
  var b = (endTime || '').split(':')

  // normalize time values
  for (var i = 0; i < max; i++) {
    a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
    b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
  }

  // store time values
  for (var i = 0; i < max; i++) {
    times[i] = a[i] + b[i]
  }

  var hours = times[0]
  var minutes = times[1]
  var seconds = times[2]

  if (seconds >= 60) {
    var m = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    var h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}


window.addEventListener('load', function(){
    

    if (document.body.className.match(" detailPage ") && jQuery('div#00N3600000QISAd_ileinner').text() == "Regalix"){
        $(document).ready(function(){

          $('body').append(`<a type="button" id="login_btn_buddy" class="btn btn-outline-primary p-3 " style="position: fixed;right: 40px;bottom: 50px;border-radius: 70px; display:none"> 
              <img height="48" width="48" src="https://mom.regalix.com/assets/img/company-logo.png" />
            </a>`);

          var username = JSON.parse($('script:contains("UserContext.initialize")').text().split('UserContext.initialize(')[1].split(');')[0]).userName;
          username = username.split('.smb')[0];
        
          if($.cookie('RgxuserLoggedIn') != "true"){
            $('#login_btn_buddy').show();
            $('#login_btn_buddy').click(function(){
              google_login(username);
            })
          } else {
            launcher();
          }

          $.ajax({
            url: "https://google-wfm.regalix.com/salesforcetool/fetchMessage.php",
            data: {
              qtype: 'timerRetrieve',
              case_id : $('.pageDescription').text().trim(),
            },
            success: function(result) {
              var element = JSON.parse(result);
              $('#timer_pre h3').text(element[0]['precheck']),
              $('#timer_oncall h3').text(element[0]['oncall_imp']),
              $('#timer_case h3').text(element[0]['case_documentation']),
              $('#timer_offcall h3').text(element[0]['tech_assis']),
              $('#timer_email h3').text(element[0]['email_com']),
              $('#timer_sharing h3').text(element[0]['update_sharing']),
              $('#timer_7days h3').text(element[0]['days_check']),
              $('#timer_followup h3').text(element[0]['follow_up']),
              $('#timer_total h3').text(element[0]['timetotal'])

              console.log(element, element[0]['precheck']);
            }
            
          });

          $('.starter_btn').click(function(){
            $(this).parents('.row:first').find('h3').stopwatch({format: '{Minutes} and {s.}'}).stopwatch('start');
            $(this).attr('disabled','disabled');
            // console.log('asdasdas');
            $(this).parents('.row:first').find('.stoper_btn').removeAttr('disabled');
            $('#InlineEditDialog_buttons input:first').attr('disabled', 'disabled')
          })
          $('.stoper_btn').click(function(){
            $(this).parents('.row:first').find('h3').stopwatch().stopwatch('stop');
            $(this).attr('disabled','disabled');
            // console.log('qqwqwqw');
            $(this).parents('.row:first').find('.starter_btn').removeAttr('disabled');

            if($('.stoper_btn').length == 8){
              $('#InlineEditDialog_buttons input:first').removeAttr('disabled')
            }
           

              time1 = addTimes($('#timer_pre').text(),$('#timer_oncall').text() )
              time2 = addTimes($('#timer_case').text(),$('#timer_offcall').text())
              time3 = addTimes($('#timer_email').text(), $('#timer_sharing').text())
              time4 = addTimes($('#timer_7days').text(),$('#timer_followup').text())
              
              time5 = addTimes(time1,time2)
              time6 = addTimes(time3,time4)

              timetotal = addTimes(time5,time6)
              $('.timer_total').text(timetotal);

              $.ajax({
                url: "https://google-wfm.regalix.com/salesforcetool/fetchMessage.php",
                data: {
                  qtype: 'timer',
                  case_id : $('.pageDescription').text().trim(),
                  timer_pre: $('#timer_pre').text().trim(),
                  timer_oncall: $('#timer_oncall').text().trim(),
                  timer_case: $('#timer_case').text().trim(),
                  timer_offcall: $('#timer_offcall').text().trim(),
                  timer_email: $('#timer_email').text().trim(),
                  timer_sharing: $('#timer_sharing').text().trim(),
                  timer_7days: $('#timer_7days').text().trim(),
                  timer_followup: $('#timer_followup').text().trim(),
                  timetotal: timetotal
                },
                success: function(result) {
                  console.log(result)
                }
                
              });
          })

          var agentName = $('#cas1_ileinner').text().split('[')[0] || '';
          var casenumber = $('tr:contains("Case Number"):last td:eq(1)').text();
          var status = $('tr:contains("Status"):eq(3) td:eq(1)').text();
          var multicheckdata = {
            'agentName':agentName,
            'caseid': casenumber, 
            'status': status
          }
      
          chrome.runtime.sendMessage({'request':'multicheck', 'data':multicheckdata}, function(response) {
            if(response.status == 'true'){
               
            }
          })


      
          $('.btn-group-toggle input').click(function(){
            var value = 'no';
            
              value = $(this).val();
        
            var datatoUpdate = {
              'caseid': casenumber,
              'attribute': $(this).attr('name'),
              'value': value
            }
             chrome.runtime.sendMessage({'request':'multicheck-update', 'data':datatoUpdate}, function(response) {
                if(response.status == 'true'){
                  console.log('updated')
                }
              })
          })

        })
    }

    
    //console.log(agentName);
    chrome.runtime.sendMessage({'request':'livestatus', 'data':agentName}, function(response) {
      if(response.status == 'true'){
         
      }
    })


   

})











