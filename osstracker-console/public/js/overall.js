$(document).ready(function(){
  $.get('/repos/overview', function(data) {
    $('#avgStarsText').text(data.avgStars);
    $('#avgForksText').text(data.avgForks);
    $('#avgOpenIssuesCountText').text(data.issues.avgOpenCount);
    $('#avgClosedIssuesCountText').text(data.issues.avgClosedCount);
    $('#totalOpenIssuesCountText').text(data.issues.totalOpenCount);
    $('#totalClosedIssuesCountText').text(data.issues.totalClosedCount);
    $('#avgOpenPRsCountText').text(data.pullRequests.avgOpenCount);
    $('#avgClosedPRsCountText').text(data.pullRequests.avgClosedCount);
    $('#totalOpenPRsCountText').text(data.pullRequests.totalOpenCount);
    $('#totalClosedPRsCountText').text(data.pullRequests.totalClosedCount);
  });
  $.get('/hosts/eshost', function(data) {
      var hrefLink = 'http://' + data + ':7103/#/dashboard/OSSTracker-Overall-Stats?_g=(refreshInterval:(display:Off,pause:!f,section:0,value:0),time:(from:now-7d,mode:quick,to:now))'
      $("a[href='http://replaceme']").attr('href', hrefLink)
  });
});
