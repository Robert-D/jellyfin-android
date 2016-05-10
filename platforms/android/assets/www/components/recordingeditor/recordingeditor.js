define(["dialogHelper","loading","jQuery","paper-checkbox","paper-input","emby-collapsible","paper-button","paper-icon-button-light"],function(e,t,i){function n(e,n){var r=n.ProgramInfo||{};if(i(".itemName",e).html(n.Name),i(".itemEpisodeName",e).html(r.EpisodeTitle||""),i(".itemCommunityRating",e).html(LibraryBrowser.getRatingHtml(r)),LibraryBrowser.renderGenres(i(".itemGenres",e),r),LibraryBrowser.renderOverview(e.querySelectorAll(".itemOverview"),r),r.ImageTags&&r.ImageTags.Primary){var a=ApiClient.getScaledImageUrl(r.Id,{maxWidth:200,maxHeight:200,tag:r.ImageTags.Primary,type:"Primary"});i(".timerPageImageContainer",e).css("display","inline-block").html('<img src="'+a+'" style="max-width:200px;max-height:200px;" />')}else i(".timerPageImageContainer",e).hide();i(".itemMiscInfo",e).html(LibraryBrowser.getMiscInfoHtml(r)),i("#txtPrePaddingMinutes",e).val(n.PrePaddingSeconds/60),i("#txtPostPaddingMinutes",e).val(n.PostPaddingSeconds/60),"New"==n.Status?i(".timerStatus",e).hide():i(".timerStatus",e).show().html("Status:&nbsp;&nbsp;&nbsp;"+n.Status),t.hide()}function r(t){m=t,e.close(l)}function a(e){t.show();var n=this;return ApiClient.getLiveTvTimer(c).then(function(e){e.PrePaddingSeconds=60*i("#txtPrePaddingMinutes",n).val(),e.PostPaddingSeconds=60*i("#txtPostPaddingMinutes",n).val(),ApiClient.updateLiveTvTimer(e).then(function(){t.hide(),require(["toast"],function(e){e(Globalize.translate("MessageRecordingSaved")),r(!0)})})}),e.preventDefault(),!1}function o(e){e.querySelector(".btnCancel").addEventListener("click",function(){r(!1)}),e.querySelector("form").addEventListener("submit",a),e.querySelector(".btnHeaderSave").addEventListener("click",function(){e.querySelector(".btnSave").click()})}function s(e,i){t.show(),c=i,ApiClient.getLiveTvTimer(i).then(function(i){n(e,i),t.hide()})}function d(i){return new Promise(function(n,r){m=!1,t.show();var a=new XMLHttpRequest;a.open("GET","components/recordingeditor/recordingeditor.template.html",!0),a.onload=function(){var t=this.response,a=e.createDialog({removeOnClose:!0,size:"small"});a.classList.add("ui-body-b"),a.classList.add("background-theme-b"),a.classList.add("formDialog");var d="";d+=Globalize.translateDocument(t),a.innerHTML=d,document.body.appendChild(a),e.open(a),l=a,a.addEventListener("close",function(){m?n():r()}),o(a),s(a,i)},a.send()})}var l,c,m=!1;return{show:d}});