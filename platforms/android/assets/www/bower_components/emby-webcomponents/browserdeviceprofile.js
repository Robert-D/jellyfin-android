define(["browser"],function(e){function o(){var e=document.createElement("video");return!(!e.canPlayType||!e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""))}function i(){return null==c&&(c=null!=document.createElement("video").textTracks),c}function n(){return null==d&&(d=a()||r()),d}function a(){var e=document.createElement("video");return e.canPlayType("application/x-mpegURL").replace(/no/,"")||e.canPlayType("application/vnd.apple.mpegURL").replace(/no/,"")?!0:!1}function r(){return null!=window.MediaSource?!0:!1}function t(o){var i;if("opus"==o){if(i='audio/ogg; codecs="opus"',document.createElement("audio").canPlayType(i).replace(/no/,""))return!0;if(e.chrome){var n=(e.version||"").toString().split(".")[0];try{if(n=parseInt(n),n>=48)return!0}catch(a){}}return!1}return i="webma"==o?"audio/webm":"audio/"+o,document.createElement("audio").canPlayType(i).replace(/no/,"")?!0:!1}var c,d;return function(){var a=1e8,r=document.createElement("video"),c=r.canPlayType("video/webm").replace(/no/,""),d=e.chrome,p={};p.MaxStreamingBitrate=a,p.MaxStaticBitrate=1e8,p.MusicStreamingTranscodingBitrate=Math.min(a,192e3),p.DirectPlayProfiles=[];var s=[],u=[],l=r.canPlayType('video/mp4; codecs="avc1.640029, mp4a.69"').replace(/no/,"")||r.canPlayType('video/mp4; codecs="avc1.640029, mp4a.6B"').replace(/no/,"");r.canPlayType('audio/mp4; codecs="ac-3"').replace(/no/,"")&&(e.safari||(s.push("ac3"),e.edge&&e.mobile||u.push("ac3"))),d&&l&&(s.push("mp3"),u.push("mp3")),r.canPlayType('video/mp4; codecs="avc1.640029, mp4a.40.2"').replace(/no/,"")&&(s.push("aac"),u.push("aac")),d||l&&(s.push("mp3"),u.push("mp3")),o()&&p.DirectPlayProfiles.push({Container:"mp4,m4v",Type:"Video",VideoCodec:"h264",AudioCodec:s.join(",")}),d&&p.DirectPlayProfiles.push({Container:"mkv,mov",Type:"Video",VideoCodec:"h264",AudioCodec:s.join(",")}),["opus","mp3","aac","flac","webma"].filter(t).forEach(function(e){p.DirectPlayProfiles.push({Container:"webma"==e?"webma,webm":e,Type:"Audio"}),"aac"==e&&p.DirectPlayProfiles.push({Container:"m4a",AudioCodec:e,Type:"Audio"})}),c&&p.DirectPlayProfiles.push({Container:"webm",Type:"Video"}),p.TranscodingProfiles=[],["opus","mp3","aac"].filter(t).forEach(function(e){p.TranscodingProfiles.push({Container:e,Type:"Audio",AudioCodec:e,Context:"Streaming",Protocol:"http"}),p.TranscodingProfiles.push({Container:e,Type:"Audio",AudioCodec:e,Context:"Static",Protocol:"http"})}),d&&!e.mobile&&p.TranscodingProfiles.push({Container:"mkv",Type:"Video",AudioCodec:s.join(","),VideoCodec:"h264",Context:"Streaming",CopyTimestamps:!0}),n()&&p.TranscodingProfiles.push({Container:"ts",Type:"Video",AudioCodec:u.join(","),VideoCodec:"h264",Context:"Streaming",Protocol:"hls"}),c&&p.TranscodingProfiles.push({Container:"webm",Type:"Video",AudioCodec:"vorbis",VideoCodec:"vpx",Context:"Streaming",Protocol:"http"}),p.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:s.join(","),VideoCodec:"h264",Context:"Streaming",Protocol:"http"}),p.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:s.join(","),VideoCodec:"h264",Context:"Static",Protocol:"http"}),p.ContainerProfiles=[],p.CodecProfiles=[],p.CodecProfiles.push({Type:"Audio",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:"2"}]});var m="6";return r.canPlayType('video/mp4; codecs="avc1.640029, mp4a.40.5"').replace(/no/,"")||p.CodecProfiles.push({Type:"VideoAudio",Codec:"aac",Conditions:[{Condition:"NotEquals",Property:"AudioProfile",Value:"HE-AAC"},{Condition:"LessThanEqual",Property:"AudioChannels",Value:m},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]}),p.CodecProfiles.push({Type:"VideoAudio",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:m},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]}),p.CodecProfiles.push({Type:"Video",Codec:"h264",Conditions:[{Condition:"NotEquals",Property:"IsAnamorphic",Value:"true",IsRequired:!1},{Condition:"EqualsAny",Property:"VideoProfile",Value:"high|main|baseline|constrained baseline"},{Condition:"LessThanEqual",Property:"VideoLevel",Value:"41"}]}),p.CodecProfiles.push({Type:"Video",Codec:"vpx",Conditions:[{Condition:"NotEquals",Property:"IsAnamorphic",Value:"true",IsRequired:!1}]}),p.SubtitleProfiles=[],i()&&p.SubtitleProfiles.push({Format:"vtt",Method:"External"}),p.ResponseProfiles=[],p.ResponseProfiles.push({Type:"Video",Container:"m4v",MimeType:"video/mp4"}),p.ResponseProfiles.push({Type:"Video",Container:"mov",MimeType:"video/webm"}),p}()});