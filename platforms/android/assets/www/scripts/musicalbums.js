!function(e){function t(e){var t=a(e),r=u[t];return r||(r=u[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"MusicAlbum",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,SyncInfo",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",Limit:LibraryBrowser.getDefaultPageSize()},view:LibraryBrowser.getSavedView(t)||LibraryBrowser.getDefaultItemsView("Poster","Poster")},r.query.ParentId=LibraryMenu.getTopParentId(),LibraryBrowser.loadSavedQueryValues(t,r.query)),r}function r(e){return t(e).query}function a(e){return e.savedQueryKey||(e.savedQueryKey=LibraryBrowser.getSavedQueryKey("albums")),e.savedQueryKey}function i(s){Dashboard.showLoadingMsg();var u=r(s);ApiClient.getItems(Dashboard.getCurrentUserId(),u).then(function(l){window.scrollTo(0,0);var m="",c=t(s).view,d=LibraryBrowser.getQueryPagingHtml({startIndex:u.StartIndex,limit:u.Limit,totalRecordCount:l.TotalRecordCount,showLimit:!1,sortButton:!0,addLayoutButton:!0,currentLayout:c,updatePageSizeSetting:!1,layouts:"List,Poster,PosterCard,Timeline",filterButton:!0});s.querySelector(".listTopPaging").innerHTML=d,o(s),"Poster"==c?m=LibraryBrowser.getPosterViewHtml({items:l.Items,shape:"square",context:"music",showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0}):"PosterCard"==c?m=LibraryBrowser.getPosterViewHtml({items:l.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,showParentTitle:!0,lazy:!0,cardLayout:!0}):"List"==c?m=LibraryBrowser.getListViewHtml({items:l.Items,context:"music",sortBy:u.SortBy}):"Timeline"==c&&(m=LibraryBrowser.getPosterViewHtml({items:l.Items,shape:"square",context:"music",showTitle:!0,showParentTitle:!0,timeline:!0,lazy:!0}));var y=s.querySelector("#items");y.innerHTML=m+d,ImageLoader.lazyChildren(y),e(".btnNextPage",s).on("click",function(){u.StartIndex+=u.Limit,i(s)}),e(".btnPreviousPage",s).on("click",function(){u.StartIndex-=u.Limit,i(s)}),e(".btnFilter",s).on("click",function(){n(s)}),e(".btnChangeLayout",s).on("layoutchange",function(e,n){"Timeline"==n&&(r(s).SortBy="ProductionYear,PremiereDate,SortName",r(s).SortOrder="Descending"),t(s).view=n,LibraryBrowser.saveViewSetting(a(s),n),i(s)}),e(".btnSort",s).on("click",function(){LibraryBrowser.showSortMenu({items:[{name:Globalize.translate("OptionNameSort"),id:"SortName"},{name:Globalize.translate("OptionAlbumArtist"),id:"AlbumArtist,SortName"},{name:Globalize.translate("OptionCommunityRating"),id:"CommunityRating,SortName"},{name:Globalize.translate("OptionCriticRating"),id:"CriticRating,SortName"},{name:Globalize.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:Globalize.translate("OptionReleaseDate"),id:"ProductionYear,PremiereDate,SortName"}],callback:function(){i(s)},query:u})}),LibraryBrowser.saveQueryValues(a(s),u),LibraryBrowser.setLastRefreshed(s),Dashboard.hideLoadingMsg()})}function n(e){require(["components/filterdialog/filterdialog"],function(t){var a=new t({query:r(e),mode:"albums"});Events.on(a,"filterchange",function(){i(e)}),a.show()})}function o(t){var a=r(t);e(".alphabetPicker",t).alphaValue(a.NameStartsWith)}function s(t){e(".alphabetPicker",t).on("alphaselect",function(e,a){var n=r(t);-1==n.SortBy.indexOf("AlbumArtist")?(n.NameStartsWithOrGreater=a,n.AlbumArtistStartsWithOrGreater=""):(n.AlbumArtistStartsWithOrGreater=a,n.NameStartsWithOrGreater=""),n.StartIndex=0,i(t)}).on("alphaclear",function(){var e=r(t);e.NameStartsWithOrGreater="",e.AlbumArtistStartsWithOrGreater="",i(t)})}var u={};window.MusicPage.initAlbumsTab=function(e,t){s(t)},window.MusicPage.renderAlbumsTab=function(e,t){LibraryBrowser.needsRefresh(t)&&i(t)}}(jQuery,document);