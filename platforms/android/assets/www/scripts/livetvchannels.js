!function(e){function r(e){var r=n(e),t=u[r];return t||(t=u[r]={query:{StartIndex:0,EnableFavoriteSorting:!0,Limit:LibraryBrowser.getDefaultPageSize()}},LibraryBrowser.loadSavedQueryValues(r,t.query)),t}function t(e){return r(e).query}function n(e){return e.savedQueryKey||(e.savedQueryKey=LibraryBrowser.getSavedQueryKey("channels")),e.savedQueryKey}function i(e){return LibraryBrowser.getListViewHtml({items:e,smallIcon:!0})}function a(r,a){var u=t(r);e(".listTopPaging",r).html(LibraryBrowser.getQueryPagingHtml({startIndex:u.StartIndex,limit:u.Limit,totalRecordCount:a.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,filterButton:!0}));var l=i(a.Items),d=r.querySelector("#items");d.innerHTML=l,ImageLoader.lazyChildren(d),e(".btnNextPage",r).on("click",function(){u.StartIndex+=u.Limit,s(r)}),e(".btnPreviousPage",r).on("click",function(){u.StartIndex-=u.Limit,s(r)}),e(".btnFilter",r).on("click",function(){o(r)}),LibraryBrowser.saveQueryValues(n(r),u)}function o(e){require(["components/filterdialog/filterdialog"],function(r){var n=new r({query:t(e),mode:"livetvchannels"});Events.on(n,"filterchange",function(){s(e)}),n.show()})}function s(e){Dashboard.showLoadingMsg();var r=t(e);r.UserId=Dashboard.getCurrentUserId(),ApiClient.getLiveTvChannels(r).then(function(r){a(e,r),Dashboard.hideLoadingMsg(),LibraryBrowser.setLastRefreshed(e)})}var u={};window.LiveTvPage.renderChannelsTab=function(e,r){LibraryBrowser.needsRefresh(r)&&s(r)}}(jQuery,document);