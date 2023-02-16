<?php
$user = $_GET['user_id'];
$filter_url="http://localhost:8088/superset/dashboard/
		11/?standalone=true&native_filters=(NATIVE_FILTER-jdVc0VOqa:(__cache:(label:'ODISHA',validateStatus:!f,value:!('ODISHA')),extraFormData:(filters:!((col:'state',op:IN,val:!('ODISHA')))),filterState:(label:'ODISHA',validateStatus:!f,value:!('ODISHA')),id:NATIVE_FILTER-jdVc0VOqa,ownState:()))";
$filter_user=str_replace("user_id",$user,$filter_url);
echo '<iframe ...  overflow=hidden; height=100%; width=100%; position=absolute; src="'.$filter_user.'"></iframe>';
?>