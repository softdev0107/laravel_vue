let menuList=[
    {menu:'Dashboard', id:'dashboard', tk:'mu_dash', submenus:[]},

    {menu:'Webs',id:'webs', tk:'mu_webs', submenus:[]},

    {menu:'Users', id:'users', tk:'mu_users', submenus:[
        {menu:'User List',id:'company-users-userlist', tk:'musu_company_users_userlist', submenus:[]}
    ]},

    {menu:'Setting', id:'company_setting', tk:'mu_setting', submenus:[
        {menu:'Account',id:'company-setting-account', tk:'musu_company_setting_account', submenus:[]},
        {menu:'Information',id:'company-setting-information', tk:'musu_company_setting_information', submenus:[]}
    ]},

];


function submenuDropdown(pid, depth) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];
    if(depth==1)
    {
       // console.log("m_mu="+m_mu+"  s_mu="+s_mu);
        $('ul#'+m_mu+'_ul a[id^="' + m_mu +'-"]').attr('class','');
        $('ul#'+m_mu+'_ul a[id^="' + m_mu +'-"]  > i').removeClass('rotate-in');
        $('ul#'+m_mu+'_ul ul[id^="' + m_mu +'-"]').hide(500);

        if ($('ul[id="' + pid + '-container"]').is(":visible"))
        {
            $('a#'+pid).attr('class','active');
            $('a#' + pid + ' > i').removeClass('rotate-in');
            $('ul[id="' + pid +'-container"]').hide(500);
            $('ul[id="' + pid +'-container"] a').removeClass('active');
        }
        else
        {
            $('a#'+pid).attr('class','active');
            $('a#'+pid+' > i').addClass('rotate-in');
            $('ul[id="' + pid +'-container"]').show(500);
            $('ul[id="' + pid +'-container"] a').removeClass('active');
        }

    }
    else
    if(depth==2)
     {
            let ss_mu=pid.split('-')[2];
            let ms_id=m_mu + "-" + s_mu;
            let mss_id=m_mu + "-" + s_mu + "-" + ss_mu;
            $('ul[id="' + ms_id +'-container"] a[id^="' + ms_id +'-"]').attr('class','');
            $('ul[id="' + ms_id +'-container"] a[id^="' + ms_id +'-"]  > i').removeClass('rotate-in');
            $('ul[id="' + ms_id +'-container"] ul[id^="' + ms_id +'-"]').hide(500);

            if ($('ul[id="' + pid + '-container"]').is(":visible"))
            {
                $('a#'+ms_id).attr('class','active');
                $('a#'+pid).attr('class','active');
                $('a#' + pid + ' > i').removeClass('rotate-in');
                $('ul[id="' + pid +'-container"]').hide(500);
                $('ul[id="' + pid +'-container"] a').removeClass('active');
            }
            else
            {
                $('a#'+ms_id).attr('class','active');
                $('a#'+pid).attr('class','active');

                $('a#'+pid+' > i').addClass('rotate-in');
                $('ul[id="' + pid +'-container"]').show(500);
            }

     }
    else if(depth==3)
    {
        let ss_mu=pid.split('-')[2];
        let sss_mu=pid.split('-')[3];

        let ms_id=m_mu + "-" + s_mu;
        let mss_id=m_mu + "-" + s_mu + "-" + ss_mu;
        let msss_id=m_mu + "-" + s_mu + "-" + ss_mu + "-" + sss_mu;
        $('ul[id="' + mss_id +'-container"] a[id^="' + mss_id +'-"]').attr('class','');
        $('ul[id="' + mss_id +'-container"] a[id^="' + mss_id +'-"]  > i').removeClass('rotate-in');
        $('ul[id="' + mss_id +'-container"] ul[id^="' + mss_id +'-"]').hide(500);

        //system-suser-management-users
        $('a#'+ms_id).attr('class','active');
        $('a#'+mss_id).attr('class','active');
        $('a#'+pid).attr('class','active');
        //$('a#'+pid+' > i').addClass('rotate-in');
        //$('ul[id="' + pid +'-container"]').show(500);
    }

}

function  menuChange(strval)
{
    //$('a').attr('data-menu-target')
    $("a[data-menu-target!='#"+strval+"']").removeClass('active');
    $("a[data-menu-target='#"+strval+"']").addClass('active');
    $(".navigation-menu-body > ul[id!='"+strval+"']").css('display','none');
    $(".navigation-menu-body > ul[id='"+strval+"']").css('display','block');
    //$(".navigation-menu-body > ul[id='"+strval+"'] > li:nth-child(2) > a").addClass('active');
}

function submenuChange(pid, chindcnt) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];
    $('a[id^="'+m_mu+'-"]').attr('class','');
    $('a[id^="'+m_mu+'-"] > i').removeClass('rotate-in');
    $('ul[id^="'+m_mu+'-"]').hide(500);
    $("a#"+pid).attr('class','active');
}

function subsubmenuChange(pid, chindcnt) {
   // console.log(pid);
    var m_mu=pid.split('-')[0];
    var s_mu=pid.split('-')[1];
    var container_ul = m_mu+'-'+s_mu+'-container';
    $("ul#"+container_ul+" li a ").attr('class','');
    $("a#"+pid).attr('class','active');
    var dli = $("a#"+pid).attr('data-list');

    if(dli==undefined){
        $("ul#"+container_ul+" li > a > i").removeClass('rotate-in');
        $("ul#"+container_ul+" li > ul ").hide(500);
    }
}
function subsubsubmenuChange(pid, chindcnt) {
    // console.log(pid);webs-wesglobal-media-video
    var m_mu=pid.split('-')[0];
    var s_mu=pid.split('-')[1];
    var ss_mu=pid.split('-')[2];
    var group_id=m_mu+'-'+s_mu+'-'+ss_mu;
    $('a[id^="' + group_id +'-"]').attr('class','');
    $('#'+pid).attr('class','active');
}
/* ex:system-suser; */
function exstingChildMenu(pid, plist) {
    let result={childcnt:0,fid:0};
    let mulist=(plist!=='') ? plist : menuList;
    for (let i = 0; i < mulist.length; i++)
    {
        let menuobj = mulist[i];
        let menu = menuobj.menu;
        let id = menuobj.id;
        if(pid===id)
        {
            result.childcnt=menuobj.submenus.length;
            result.fid=1;
            break;
        }
        else
        {
            if(menuobj.submenus.length > 0){
               let tresult = exstingChildMenu(pid, menuobj.submenus);
                result.childcnt = tresult.childcnt;
                result.fid=tresult.fid;
                if(result.fid===1)
                    break;
            }
        }
    }

    return result;
}

function exstingChildMenu_org(pid, depth) {
    if(depth ==0)
        return {smenu:0,ssmenu:0};

    let mcnt=pid.split('-').length;
    let _mus=pid.split('-');
    let sNum=0;
    let ssNum=0;

    // let result={'smenu':sNum,'ssmenu':ssNum};
    for (let i = 0; i < menuList.length; i++)
    {
        let menuobj = menuList[i];
        let ms=menuobj.menu;
        ms = ms.toLowerCase();
        ms = ms.replace(/ /g,"");
        if(ms==_mus[0])//dashborad,apps,users,webs,others,system
        {
            let num = menuobj.submenus.length;
            //alert(num);
            for(let j = 0; j < num; j++)
            {
                let submenuobj = menuobj.submenus[j];
                let mss=submenuobj.menu;
                mss = mss.toLowerCase();
                mss = mss.replace(/ /g,"");
                if(mcnt > 0 && mss==_mus[1]) //suser
                {
                    sNum = submenuobj.submenus.length;
                    if(depth ==1)
                        break;
                    else
                    {
                        for(let k = 0; k <sNum; k++)
                        {
                            let msss=submenuobj.submenus[k].menu;//profile,page,management
                            msss = msss.toLowerCase();
                            msss = msss.replace(/ /g,"");
                            if(mcnt > 1 && msss == _mus[2])
                            {
                                let sssmenulen=submenuobj.submenus[k].submenus.length;
                                ssNum = sssmenulen;
                                if(depth ==2)
                                    break;
                                else
                                {
                                    for(let m = 0; m <sssmenulen; m++)
                                    {
                                        let mssss=submenuobj.submenus[k].submenus[m].menu;//Users,Roles,Permissions
                                        mssss = mssss.toLowerCase();
                                        mssss = mssss.replace(/ /g,"");

                                        if(mcnt > 2 && mssss == _mus[3])
                                        {
                                            let ssssmenulen=submenuobj.submenus[k].submenus[m].submenus.length;
                                            ssNum = ssssmenulen;
                                            if(depth ==3)
                                                break;
                                            else
                                            {
                                                for(let mm = 0; mm <ssssmenulen; mm++)
                                                {
                                                    let msssss=submenuobj.submenus[k].submenus[m].submenus[mm].menu;//Users,Roles,Permissions
                                                    msssss = msssss.toLowerCase();
                                                    msssss = msssss.replace(/ /g,"");
                                                    if(mcnt > 3 && msssss == _mus[4]){
                                                        let sssssmenulen=submenuobj.submenus[k].submenus[m].submenus[mm].submenus.length;
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }


                }
            }

            break;
        }
    }

    let result={smenu:sNum,ssmenu:ssNum};
    return result;
}
var c=0;
var wideControllerNavBar =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'370px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'width':'50px','margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'65%','padding':'5px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'20px','height':'2px'});

}

var wideControllerNavBarsecond =  function(){
    //var aaa =$('body').attr('class');
    //console.log("bodyclass" + aaa);
    $('body:not(.small-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body:not(.small-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body:not(.small-navigation) .navigation .navigation-menu-tab').css({'width':'90px','margin-right':'30px'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body:not(.small-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body:not(.small-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});
}

var wideControllerNavBarfirst =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});

}

var wideControllerNavBar_pre =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});

}


var shrinkControllerNavBar = function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'80px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'none'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'0px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'none','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'65%','padding':'5px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'none'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'20px','height':'2px'});
}


var jsonparse =function(str){
    if(str == undefined)
        return '';
    var pos = str.indexOf('&quot;');
    if(pos < 0) return str;
    var searchRegExp = /&quot;/gi;
    var replaceWith = '"';
    var rstr = str.replace(searchRegExp,replaceWith);
    rstr = JSON.parse(rstr);
    return rstr;
}

var jsonparse_one =function(str){
    var pos = str.indexOf('"');
    if(pos < 0) return str;
    var searchRegExp = /"/gi;
    var replaceWith = '';
    var rstr = str.replace(searchRegExp,replaceWith);
    return rstr;
}


function callAllmenu(lists, _temp_list, plevel, pid)
{
    for(var i = 0; i < lists.length; i++)
    {
        var obj = lists[i];
        var name = obj.menu;
        var level = plevel + 1;
        var id = 0;
        if(pid===0)
            id = ''+(i+1)+'';
        else
            id = pid+'-'+(i+1);

        var p_id=''+pid+'';
        var tran_key=obj.tk;
        var childcnt = obj.submenus.length;
        var have_page = childcnt > 0 ? 0: 1;
        var rid=obj.id;
        var item = {
            menu_id: id, read: 0, write: 0,
            create: 0, delete: 0, p_id: p_id,
            have_page: have_page, level:level,
            name: name, id:rid, tran_key: tran_key
        };

        _temp_list.push(item);
        //console.log(item);

        if(childcnt > 0){
            callAllmenu(obj.submenus, _temp_list, level, id);
        }

    }//level 1 for
}

var getDashboardMenuList = function ()
{
    var _temp_list = new Array();
    callAllmenu(menuList, _temp_list, 0, 0);
    return _temp_list;
}

var getPagePermission = function (permissionlist, pageid)
{
    var pgobj={
        read:0,
        write:0,
        create:0,
        delete:0
    };

    var manager = jsonparse(window.Laravel.userinfo).manager;
    manager = manager.toLowerCase();
    if(manager === "administrater"){
        pgobj.read=1;
        pgobj.write=1;
        pgobj.create=1
        pgobj.delete=1;

        return pgobj;
    }

    if(pageid===undefined || pageid===null || pageid === '')
        return pgobj;

   var tpageid = pageid.replace("-fav","");
   for(var i=0; i < permissionlist.length; i++){
       var obj = permissionlist[i];
       if(obj.id==tpageid)
       {
           pgobj.read=obj.read;
           pgobj.write=obj.write;
           pgobj.create=obj.create
           pgobj.delete=obj.delete;
       }
   }

   return pgobj;
}


export default {
    data:{
        menuChange,
        submenuChange,
        subsubmenuChange,
        subsubsubmenuChange,
        exstingChildMenu,
        submenuDropdown,
        wideControllerNavBar,
        wideControllerNavBarfirst,
        wideControllerNavBarsecond,
        shrinkControllerNavBar,
        jsonparse,
		jsonparse_one,
        getDashboardMenuList,
        getPagePermission
    }
}
