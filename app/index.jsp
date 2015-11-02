<%@page import="java.util.Date"%>
<%@page import="th.co.truecorp.ads.smartui.utils.DateUtil"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html>

<c:set var="webContext" value="${pageContext.request.contextPath}" />
<c:if test="${jsParam == null}">
	<c:set var="jsParam" value="<%=DateUtil.toStringEngDateBySimpleFormat(new Date(),
						DateUtil.DEFAULT_DATETIME_NO_SEC_PATTERN)%>" scope="application" />
</c:if>

<head>
<meta charset="utf-8">
<title>Sale</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="">
<meta name="viewport" content="width=device-width">
<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
<!-- build:css(.) styles/vendor.css -->
<!-- bower:css -->
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
<!-- endbower -->
<!-- endbuild -->
<!-- build:css(.tmp) styles/main.css -->
<link rel="stylesheet" href="styles/main.css">
<!-- endbuild -->

<script language="javascript">
	function quitBox(cmd) {
		if (cmd == 'quit') {
			open(location, '_self').close();
		}
		return false;
	}
</script>
</head>

<body ng-app="fec3App">
	<input type="hidden" id="contextPath" value="${pageContext.request.contextPath}" />

		<!-- Add your site or application content here -->
	<div ng-view=""></div>
	 <!-- Read Card USB -->
    <object id="card" classid="CLSID:D6083DBA-4351-4DA9-85D5-9069544998F1" style="width:0px;height:0px;"></object>
    <script for="card" event="CardChange(state,args)">
    function card::CardChange(state, args) {
        var scope = angular.element(document.getElementById("custGet")).scope();
        
        if (state == 'ReadSuccess') {
            scope.SetCardValue(args);
        }
        if (state == 'Error') {
            scope.readCardError(args);
        }

    }
    </script>
    <script>
    function ReadCard(Method) {
        var scope = angular.element($("#custGet")).scope();
        scope.onReadcard();
        if (navigator.userAgent.indexOf('Chrome') > 0) {
            try {
                var str = document.getElementById('card').Run(Method.replace('Read', 'ReadWait'));
                ShowData(str);
            } catch (err) {


                scope.readCardError("Chrome : ไม่พบเครื่องอ่านบัตร");
            }

        } else {
            document.getElementById('card').Run(Method);
        }
    }

    function ShowData(str) {
        var obj = eval(str);
        //alert(str);
    }
    </script>
    <!-- end read card usb -->
	<script src="${pageContext.request.contextPath}/js/utils.js"></script>

	<!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-animate/angular-animate.js"></script>
    <script src="bower_components/angular-cookies/angular-cookies.js"></script>
    <script src="bower_components/angular-linq/angular-linq.js"></script>
    <script src="bower_components/angular-resource/angular-resource.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
    <script src="bower_components/angular-touch/angular-touch.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/bootbox/bootbox.js"></script>
    <script src="bower_components/ngBootbox/dist/ngBootbox.js"></script>
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:js({.tmp,app}) scripts/scripts.js -->
    <script src="scripts/app.js"></script>
    <script src="scripts/utils.js"></script>
    <!-- build:js controllers -->
    <script src="scripts/controllers/main.js"></script>
    <script src="scripts/controllers/about.js"></script>
    <script src="scripts/controllers/aftersale.js"></script>
    <script src="scripts/controllers/landingpage.js"></script>
    <script src="scripts/controllers/orderDevice.js"></script>
    <script src="scripts/controllers/allproducts.js"></script>
    <script src="scripts/controllers/products.js"></script>
    <script src="scripts/controllers/promotion.js"></script>
    <script src="scripts/controllers/promotionDevice.js"></script>
    <script src="scripts/controllers/saleiphone.js"></script>
    <script src="scripts/controllers/selectshop.js"></script>
    <script src="scripts/controllers/existingcustomer.js"></script>
    <script src="scripts/controllers/listpayment.js"></script>
    <script src="scripts/controllers/listpayment2.js"></script>
    <script src="scripts/controllers/pricePlan.js"></script>
    <script src="scripts/controllers/stockissue.js"></script>
    <script src="scripts/controllers/orderCapture.js"></script>
    <script src="scripts/controllers/orderCapture2.js"></script>
    <script src="scripts/controllers/golive.js"></script>
    <script src="scripts/controllers/payment.js"></script>
    <script src="scripts/controllers/payment2.js"></script>
    <script src="scripts/controllers/payment3.js"></script>
    <script src="scripts/controllers/payment4.js"></script>
    <script src="scripts/controllers/payment5.js"></script>
    <script src="scripts/controllers/payment6.js"></script>
    <script src="scripts/controllers/appleCare.js"></script>
    <script src="scripts/controllers/ordermonitor.js"></script>
    <script src="scripts/controllers/priceplanexisting.js"></script>
    <script src="scripts/controllers/ordercaptureexisting.js"></script>
    <script src="scripts/controllers/welcome.js"></script>
    <script src="scripts/controllers/header.js"></script>
    <script src="scripts/controllers/alert.js"></script>
    <!-- build:js services -->
    <script src="scripts/services/dal.js"></script>
    <script src="scripts/services/user.js"></script>
    <script src="scripts/services/customer.js"></script>
    <script src="scripts/services/booking.js"></script>
    <script src="scripts/services/product.js"></script>
    <!-- build:js directives -->
    <script src="scripts/directives/directives.js"></script>
    <!-- build:js factories -->
    <script src="scripts/factories/factories.js"></script>
    <!-- endbuild -->
</body>

</html>
