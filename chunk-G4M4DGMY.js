import{a as Y}from"./chunk-IW6LIIF2.js";import{b as k,d as v,f as N,g as R,h as B,l as q,m as A,p as G,q as $,r as j,s as L,t as z,v as H,w as Z,x as K}from"./chunk-KENTO3B6.js";import{b as O,j as Q}from"./chunk-4PLDF3SR.js";import{Ab as I,Cc as M,Eb as F,Hb as h,Jb as f,Sb as i,Tb as g,Ub as y,Xa as a,Ya as _,_b as w,ba as E,e as S,ea as b,fa as x,mb as m,nb as P,ob as d,tb as C,wb as T,xb as V,yb as t,yc as U,zb as e,zc as D}from"./chunk-2D7E5OV6.js";var J=(r,s)=>s._id;function W(r,s){if(r&1&&(t(0,"option",45),i(1),e()),r&2){let n=s.$implicit;d("value",n._id),P("data-value",n.countryid.cname),a(),g(n.countryid.cname)}}function X(r,s){r&1&&(t(0,"div",46),i(1," Please select a country. "),e())}function ee(r,s){if(r&1&&(t(0,"option",45),i(1),e()),r&2){let n=s.$implicit;d("value",n._id),P("data-value",n.city),a(),y("",n.city," ")}}function te(r,s){r&1&&(t(0,"div",46),i(1," Please select a city. "),e())}function ie(r,s){if(r&1&&(t(0,"option",45),i(1),e()),r&2){let n=s.$implicit;d("value",n._id),P("data-value",n.vname),a(),g(n.vname)}}function re(r,s){r&1&&(t(0,"div",46),i(1," Please select a vehicle type. "),e())}function ne(r,s){r&1&&(t(0,"div"),i(1," Profit is required. "),e())}function oe(r,s){r&1&&(t(0,"div"),i(1," Please enter a number between 0 and 100 with up to two decimal places. "),e())}function ce(r,s){r&1&&(t(0,"div"),i(1," Number must be between 1 and 100. "),e())}function le(r,s){if(r&1&&(t(0,"div",47),i(1," This is Invalid bro "),m(2,ne,2,0,"div",48)(3,oe,2,0,"div",48)(4,ce,2,0,"div",48),e()),r&2){let n=f();a(2),d("ngIf",n.pricingForm.get("driverProfit").errors==null?null:n.pricingForm.get("driverProfit").errors.required),a(),d("ngIf",(n.pricingForm.get("driverProfit").errors==null?null:n.pricingForm.get("driverProfit").errors.numeric)&&!(n.pricingForm.get("driverProfit").errors!=null&&n.pricingForm.get("driverProfit").errors.required)),a(),d("ngIf",n.pricingForm.get("driverProfit").errors==null?null:n.pricingForm.get("driverProfit").errors.invalidNumber)}}function ae(r,s){r&1&&(t(0,"div"),i(1," Min. Fare is required. "),e())}function se(r,s){r&1&&(t(0,"div"),i(1," Please enter a number between 0 and 100 with up to two decimal places. "),e())}function de(r,s){r&1&&(t(0,"div"),i(1," Number must be between 1 and 100. "),e())}function me(r,s){if(r&1&&(t(0,"div",46),m(1,ae,2,0,"div",48)(2,se,2,0,"div",48)(3,de,2,0,"div",48),e()),r&2){let n=f();a(),d("ngIf",n.pricingForm.get("minFare").errors==null?null:n.pricingForm.get("minFare").errors.required),a(),d("ngIf",(n.pricingForm.get("minFare").errors==null?null:n.pricingForm.get("minFare").errors.numeric)&&!(n.pricingForm.get("minFare").errors!=null&&n.pricingForm.get("minFare").errors.required)),a(),d("ngIf",n.pricingForm.get("minFare").errors==null?null:n.pricingForm.get("minFare").errors.invalidNumber)}}function pe(r,s){r&1&&(t(0,"div",46),i(1," Distance for base price is required. "),e())}function ue(r,s){r&1&&(t(0,"div"),i(1," Base Price is required. "),e())}function ge(r,s){r&1&&(t(0,"div"),i(1," Please enter a number between 0 and 100 with up to two decimal places. "),e())}function he(r,s){r&1&&(t(0,"div"),i(1," Number must be between 1 and 100. "),e())}function ve(r,s){if(r&1&&(t(0,"div",46),m(1,ue,2,0,"div",48)(2,ge,2,0,"div",48)(3,he,2,0,"div",48),e()),r&2){let n=f();a(),d("ngIf",n.pricingForm.get("basePrice").errors==null?null:n.pricingForm.get("basePrice").errors.required),a(),d("ngIf",(n.pricingForm.get("basePrice").errors==null?null:n.pricingForm.get("basePrice").errors.numeric)&&!(n.pricingForm.get("basePrice").errors!=null&&n.pricingForm.get("basePrice").errors.required)),a(),d("ngIf",n.pricingForm.get("basePrice").errors==null?null:n.pricingForm.get("basePrice").errors.invalidNumber)}}function fe(r,s){r&1&&(t(0,"div"),i(1," Price Per Unit Distance is required. "),e())}function _e(r,s){r&1&&(t(0,"div"),i(1," Please enter a number between 0 and 100 with up to two decimal places. "),e())}function Pe(r,s){r&1&&(t(0,"div"),i(1," Number must be between 1 and 100. "),e())}function ye(r,s){if(r&1&&(t(0,"div",46),m(1,fe,2,0,"div",48)(2,_e,2,0,"div",48)(3,Pe,2,0,"div",48),e()),r&2){let n=f();a(),d("ngIf",n.pricingForm.get("pricePerUnitDistance").errors==null?null:n.pricingForm.get("pricePerUnitDistance").errors.required),a(),d("ngIf",(n.pricingForm.get("pricePerUnitDistance").errors==null?null:n.pricingForm.get("pricePerUnitDistance").errors.numeric)&&!(n.pricingForm.get("pricePerUnitDistance").errors!=null&&n.pricingForm.get("pricePerUnitDistance").errors.required)),a(),d("ngIf",n.pricingForm.get("pricePerUnitDistance").errors==null?null:n.pricingForm.get("pricePerUnitDistance").errors.invalidNumber)}}function be(r,s){r&1&&(t(0,"div",46),i(1," Price per Unit Time is required. "),e())}function xe(r,s){r&1&&(t(0,"div",46),i(1," Max Space is required. "),e())}function Fe(r,s){if(r&1){let n=F();t(0,"button",49),h("click",function(){b(n);let o=f();return x(o.update())}),i(1,"Update"),e()}}function Se(r,s){r&1&&(t(0,"button",50),i(1,"Submit"),e())}function Ee(r,s){if(r&1){let n=F();t(0,"tr")(1,"td"),i(2),e(),t(3,"td"),i(4),e(),t(5,"td"),i(6),e(),t(7,"td"),i(8),e(),t(9,"td"),i(10),e(),t(11,"td"),i(12),e(),t(13,"td"),i(14),e(),t(15,"td"),i(16),e(),t(17,"td"),i(18),e(),t(19,"td"),i(20),e(),t(21,"td")(22,"button",51),h("click",function(){let l=b(n).$implicit,u=f();return x(u.editpricing(l))}),i(23,"Edit"),e()()()}if(r&2){let n=s.$implicit;P("id",n._id),a(2),g(n.countryid),a(2),g(n.cityid),a(2),g(n.vehicleid),a(2),g(n.driverProfit),a(2),g(n.distanceBasePrice),a(2),g(n.basePrice),a(2),g(n.minFare),a(2),y("",n.pricePerUnitDistance," "),a(2),y("",n.pricePerUnitTime," "),a(2),g(n.maxSpace)}}var Oe=(()=>{let s=class s{constructor(c,o,l,u){this.formBuilder=c,this.http=o,this.toaster=l,this.getservice=u,this.allcities=[],this.updateBtnStatus=!1,this.defaultcountry="Select Country",this.defaultcity="Select City",this.defaultvehicle="Select Vehicle",this.editcountry="Kuchbhi"}ngOnInit(){this.pricingForm=this.formBuilder.group({countryid:["",v.required],cityid:["",v.required],vehicleid:["",v.required],driverProfit:["",[v.required,v.pattern("^(0?[1-9]|[1-9][0-9])$"),this.combineValidators()]],minFare:["",v.required],distanceBasePrice:["",v.required],basePrice:["",v.required],pricePerUnitDistance:["",v.required],pricePerUnitTime:["",v.required],maxSpace:["2",v.required]}),this.fetchCountries(),this.get_pricing_table()}isValidInput(c){let o=c.target.value;return c.key==="."&&o.includes(".")?(c.preventDefault(),!1):c.key>="0"&&c.key<="9"||c.key==="."}fetchCountries(){this.getservice.getZonedCountries().subscribe({next:c=>{let o=c.data;console.warn(o),this.countries=o,this.toaster.success("Received all countries","All_Countries")},error:c=>{c.status===400&&(console.log("400 Error",c),this.toaster.warning(c.error.message,c.error)),this.toaster.error(c.error.message,"Error")},complete:()=>{console.log("COMPLETED FETCH SELECTED COUNTRIES")}})}combineValidators(){return c=>{let o=c.value;if(!/^\d+(\.\d{1,2})?$/.test(o))return{numeric:!0};let l=parseFloat(o);return isNaN(l)||l<0||l>100?{invalidNumber:!0}:null}}onCountrySelect(){if(!this.pricingForm.get("countryid").valid){this.toaster.warning("Please select appropriate Input option");return}this.pricingForm.get("cityid").setValue(""),this.pricingForm.get("vehicleid").setValue("");let c=this.pricingForm.get("countryid").value;console.warn("selectedcountryid is ",c),this.get_selected_cities(c)}get_selected_cities(c){this.getservice.get_cities(c).subscribe({next:o=>{if(o.success===!0)if(console.log("get_selected_cities RES ",o),o.data.length!==0){this.allcities=o.data,this.toaster.success("Received all filtered Cites","All cities");return}else{this.allcities=[],this.toaster.error("No Zone created in this country","! Select other country"),this.pricingForm.get("countryid").setValue(""),this.defaultcountry="Select Country";return}this.toaster.error("Server City get Error","Server Error")},error:o=>{console.log("get_selected_cities Error",o),this.toaster.error(o.error,"Error")},complete:()=>{}})}onCitySelect(){if(!this.pricingForm.get("cityid").valid){this.toaster.warning("Please select appropriate Input option");return}console.log("oncity select"),this.pricingForm.get("vehicleid").setValue(""),this.selected_cityid=this.pricingForm.get("cityid").value,console.log("this.selected_cityid",this.selected_cityid),this.get_remaining_vehicles(this.pricingForm.get("cityid").value)}onVehicleSelect(){if(!this.pricingForm.get("vehicleid").valid){this.toaster.warning("Please select appropriate Input option");return}}get_remaining_vehicles(c){console.log("get_remaining_vehicles() is called");let o=this.pricingForm.get("cityid").value,l=this.pricingForm.get("countryid").value,u={cityid:o};this.getservice.getRemainingVehiclesforPricing(c).subscribe({next:p=>{if(p.success===!0){if(p.data.length==0){this.toaster.success("This city has already added all vehicles","No vehicles");return}console.log(p),this.allvehicles=p.data,console.log("Received remaining vehicles","get_remaining_vehicles"),this.toaster.success("Received remaining vehicles","Vehicles");return}else{this.toaster.error("get_remaining_vehicles","Server Error");return}},error:p=>{console.log("get_remain_vehicl ",p),this.toaster.error("get_remaining_vehicles","SERVER ERROR")},complete:()=>{}})}onSubmit(){if(this.current_country=document.getElementById("country").selectedOptions[0].getAttribute("data-value"),this.current_city=document.getElementById("city").selectedOptions[0].getAttribute("data-value"),this.current_vehicle=document.getElementById("vehicletype").selectedOptions[0].getAttribute("data-value"),console.log("this.pricingForm-->>>",this.pricingForm.value),this.pricingForm.invalid){this.pricingForm.markAllAsTouched(),this.pricingForm.markAsDirty(),this.toaster.error("Please complete the all form fields","Incomplete Form");return}console.warn("PRICING FORM",this.pricingForm.value),this.send_data_to_server(this.pricingForm.value)}get_pricing_table(){this.getservice.getAllreadyAddedPricingTable().subscribe({next:c=>{if(console.log("Response oaftern SUBMIT",c),console.log(c),c.success===!0){this.alldata=c.alldata;return}},error:c=>{console.error("Get Pricing Table Errpr",c)},complete:()=>{console.log("COMPLETED SENDING FORM DATA")}})}send_data_to_server(c){this.getservice.saveNewVehiclePricing(c).subscribe({next:o=>{if(console.log("Response oaftern SUBMIT",o),console.log(o),o.success===!0){let l=o._id;this.add_current_formdata(l,!1),this.toaster.success("Vehicle saved successfully","Submit success"),this.Resetform();return}},error:o=>{if(o.status===401){this.toaster.error(o.error.message,"Duplicate");return}console.error("Error ONSUBMIT data:",o),this.toaster.error("Error saving vehicle","Submit error")},complete:()=>{console.log("COMPLETED SENDING FORM DATA")}})}markFormGroupTouched(c){Object.values(c.controls).forEach(o=>{o.markAsTouched(),o instanceof B&&this.markFormGroupTouched(o)})}Resetform(){this.pricingForm.reset({countryid:"",cityid:"",vehicleid:""}),this.allcities=[],this.allvehicles=[]}add_current_formdata(c,o){return S(this,null,function*(){let l={_id:c,driverProfit:this.pricingForm.get("driverProfit").value,minFare:this.pricingForm.get("minFare").value,distanceBasePrice:this.pricingForm.get("distanceBasePrice").value,basePrice:this.pricingForm.get("basePrice").value,pricePerUnitDistance:this.pricingForm.get("pricePerUnitDistance").value,pricePerUnitTime:this.pricingForm.get("pricePerUnitTime").value,maxSpace:this.pricingForm.get("maxSpace").value,countryid:this.current_country,cityid:this.current_city,vehicleid:this.current_vehicle};console.warn("addcurrentdata",l),yield this.alldata.push(l)})}editpricing(c){this.updateBtnStatus=!0,this.selectedRow=c,console.log("Edit pricing is clicked here"),this.pricingForm.get("countryid")?.disable(),this.pricingForm.get("cityid")?.disable(),this.pricingForm.get("vehicleid")?.disable(),this.defaultcountry=this.selectedRow.countryid,this.defaultcity=this.selectedRow.cityid,this.defaultvehicle=this.selectedRow.vehicleid,this.pricingForm.patchValue({driverProfit:this.selectedRow.driverProfit,minFare:this.selectedRow.minFare,distanceBasePrice:this.selectedRow.distanceBasePrice,basePrice:this.selectedRow.basePrice,pricePerUnitDistance:this.selectedRow.pricePerUnitDistance,pricePerUnitTime:this.selectedRow.pricePerUnitTime,maxSpace:this.selectedRow.maxSpace}),this.index=this.alldata.findIndex(o=>o._id===c._id),console.warn("_id us ",this.selectedRow._id),console.warn("index->",this.index)}update(){let c={_id:this.selectedRow._id,driverProfit:this.pricingForm.get("driverProfit").value,minFare:this.pricingForm.get("minFare").value,distanceBasePrice:this.pricingForm.get("distanceBasePrice").value,basePrice:this.pricingForm.get("basePrice").value,pricePerUnitDistance:this.pricingForm.get("pricePerUnitDistance").value,pricePerUnitTime:this.pricingForm.get("pricePerUnitTime").value,maxSpace:this.pricingForm.get("maxSpace").value};console.warn("updateddata",c),this.getservice.updateVehiclePricing(c).subscribe({next:o=>{if(console.log(o),o.success==="updated"){this.toaster.success("Pricing Updated Successfully","Success"),this.updateBtnStatus=!1,this.pricingForm.get("countryid").enable(),this.pricingForm.get("cityid").enable(),this.pricingForm.get("vehicleid").enable(),this.defaultcountry="Select Country",this.defaultcity="Select City",this.defaultvehicle="Select Vehicle",this.pricingForm.reset({countryid:"",cityid:"",vehicleid:""}),this.update_table_data(o.updateddata);return}else{this.toaster.error("Failed to update data","Error");return}},error:o=>{console.log("update pricing error",o),this.toaster.error("Failed to update data","Error")},complete:()=>{console.log("COMPLETED UPDATE DATA REQUEST")}})}update_table_data(c){let o=this.alldata[this.index];o.driverProfit=c.driverProfit,o.minFare=c.minFare,o.distanceBasePrice=c.distanceBasePrice,o.basePrice=c.basePrice,o.pricePerUnitDistance=c.pricePerUnitDistance,o.pricePerUnitTime=c.pricePerUnitTime,o.maxSpace=c.maxSpace}};s.\u0275fac=function(o){return new(o||s)(_(H),_(O),_(Q),_(Y))},s.\u0275cmp=E({type:s,selectors:[["app-vehicle-pricing"]],standalone:!0,features:[w],decls:132,vars:21,consts:[[1,"form-container"],[3,"formGroup","ngSubmit"],["id","label-table"],["for","country",1,""],["colspan","3"],["formControlName","countryid","id","country",1,"form-select",3,"change"],["value","",3,"disabled"],[3,"value",4,"ngFor","ngForOf"],["class","error-message text-danger",4,"ngIf"],["for","city",1,""],["formControlName","cityid","id","city",1,"form-select",3,"change"],["for","type",1,""],["formControlName","vehicleid","id","vehicletype",1,"form-select",3,"change"],["for","driverProfit",1,""],[1,"input-group"],["type","number","formControlName","driverProfit",1,"form-control",3,"keypress"],[1,"input-group-append"],[1,"centered-container","input-group-text","text-secondary","bg-secondary-50","border-rounded","border"],[1,"tooltip-container"],[1,"tooltip-text"],["class","text-danger",4,"ngIf"],["for","minFare",1,""],["type","number","formControlName","minFare",1,"form-control",3,"keypress"],["for","distanceBasePrice",1,""],["type","number","formControlName","distanceBasePrice","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control"],["for","basePrice",1,""],["type","number","formControlName","basePrice",1,"form-control",3,"keypress"],["for","pricePerUnitDistance",1,""],["type","number","formControlName","pricePerUnitDistance",1,"form-control",3,"keypress"],["for","pricePerUnitTime",1,""],["type","number","formControlName","pricePerUnitTime",1,"form-control",3,"keypress"],["for","maxSpace",1,""],["formControlName","maxSpace",1,"form-control"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["type","button","class","btn btn-success form-control"],["type","button",1,"btn","btn-dark","form-control","mt-2",3,"click"],[1,"container-fluid","mt-3"],[1,"table","table-bordered","table-hover","align-middle",2,"text-align","center"],[1,"thead-dark"],["scope","col"],[3,"value"],[1,"error-message","text-danger"],[1,"text-danger"],[4,"ngIf"],["type","button",1,"btn","btn-success","form-control",3,"click"],["type","submit",1,"btn","btn-primary","form-control"],[1,"btn","btn-primary",3,"click"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"form",1),h("ngSubmit",function(){return l.onSubmit()}),t(2,"table")(3,"tbody",2)(4,"tr")(5,"td")(6,"label",3),i(7,"Country :"),e()(),t(8,"td",4)(9,"select",5),h("change",function(){return l.onCountrySelect()}),t(10,"option",6),i(11),e(),m(12,W,2,3,"option",7),e(),m(13,X,2,0,"div",8),e()(),t(14,"tr")(15,"td")(16,"label",9),i(17,"City :"),e()(),t(18,"td",4)(19,"select",10),h("change",function(){return l.onCitySelect()}),t(20,"option",6),i(21),e(),m(22,ee,2,3,"option",7),e(),m(23,te,2,0,"div",8),e()(),t(24,"tr")(25,"td")(26,"label",11),i(27,"Vehicle Type :"),e()(),t(28,"td",4)(29,"select",12),h("change",function(){return l.onVehicleSelect()}),t(30,"option",6),i(31),e(),m(32,ie,2,3,"option",7),e(),m(33,re,2,0,"div",8),e()(),t(34,"tr")(35,"td")(36,"label",13),i(37,"Driver Profit :"),e()(),t(38,"td")(39,"div",14)(40,"input",15),h("keypress",function(p){return l.isValidInput(p)}),e(),t(41,"div",16)(42,"div",17),i(43," ? "),t(44,"div",18)(45,"div",19),i(46,"The driver profit is the amount of money that a driver earns from their gross earnings"),e()()()()(),m(47,le,5,3,"div",20),e(),t(48,"td")(49,"label",21),i(50,"Min. Fare :"),e()(),t(51,"td")(52,"input",22),h("keypress",function(p){return l.isValidInput(p)}),e(),m(53,me,4,3,"div",8),e()(),t(54,"tr")(55,"td")(56,"label",23),i(57,"Distance for base price :"),e()(),t(58,"td"),I(59,"input",24),m(60,pe,2,0,"div",8),e(),t(61,"td")(62,"label",25),i(63,"Base Price :"),e()(),t(64,"td")(65,"input",26),h("keypress",function(p){return l.isValidInput(p)}),e(),m(66,ve,4,3,"div",8),e()(),t(67,"tr")(68,"td")(69,"label",27),i(70,"Price Per Unit Distance :"),e()(),t(71,"td")(72,"input",28),h("keypress",function(p){return l.isValidInput(p)}),e(),m(73,ye,4,3,"div",8),e(),t(74,"td")(75,"label",29),i(76,"Price per Unit Time (min) :"),e()(),t(77,"td")(78,"input",30),h("keypress",function(p){return l.isValidInput(p)}),e(),m(79,be,2,0,"div",8),e()(),t(80,"tr")(81,"td")(82,"label",31),i(83,"Max Space :"),e()(),t(84,"td",4)(85,"select",32)(86,"option",33),i(87," 1"),e(),t(88,"option",34),i(89," 2"),e(),t(90,"option",35),i(91," 3"),e(),t(92,"option",36),i(93," 4"),e(),t(94,"option",37),i(95," 5"),e(),t(96,"option",38),i(97," 6"),e()(),m(98,xe,2,0,"div",8),e()()()(),m(99,Fe,2,0,"button",39)(100,Se,2,0),t(101,"button",40),h("click",function(){return l.Resetform()}),i(102,"Clear"),e()()(),t(103,"div",41)(104,"table",42)(105,"thead",43)(106,"tr")(107,"th",44),i(108,"Country"),e(),t(109,"th",44),i(110,"City"),e(),t(111,"th",44),i(112,"Vehicle"),e(),t(113,"th",44),i(114,"Driver Profit"),e(),t(115,"th",44),i(116,"Distance for Base Price"),e(),t(117,"th",44),i(118,"Base Price"),e(),t(119,"th",44),i(120,"Min Fare"),e(),t(121,"th",44),i(122,"Price per Unit Distance"),e(),t(123,"th",44),i(124,"Price per Unit Time (min)"),e(),t(125,"th",44),i(126,"Max Space"),e(),t(127,"th",44),i(128,"Action"),e()()(),t(129,"tbody"),T(130,Ee,24,11,"tr",null,J),e()()()),o&2&&(a(),d("formGroup",l.pricingForm),a(9),d("disabled",!0),a(),g(l.defaultcountry),a(),d("ngForOf",l.countries),a(),d("ngIf",l.pricingForm.get("countryid").invalid&&l.pricingForm.get("countryid").touched),a(7),d("disabled",!0),a(),g(l.defaultcity),a(),d("ngForOf",l.allcities),a(),d("ngIf",l.pricingForm.get("cityid").invalid&&l.pricingForm.get("cityid").touched),a(7),d("disabled",1),a(),g(l.defaultvehicle),a(),d("ngForOf",l.allvehicles),a(),d("ngIf",l.pricingForm.get("vehicleid").invalid&&l.pricingForm.get("vehicleid").touched),a(14),d("ngIf",l.pricingForm.get("driverProfit").invalid&&(l.pricingForm.get("driverProfit").dirty||l.pricingForm.get("driverProfit").touched)),a(6),d("ngIf",l.pricingForm.get("minFare").invalid&&l.pricingForm.get("minFare").touched),a(7),d("ngIf",l.pricingForm.get("distanceBasePrice").invalid&&l.pricingForm.get("distanceBasePrice").touched),a(6),d("ngIf",l.pricingForm.get("basePrice").invalid&&l.pricingForm.get("basePrice").touched),a(7),d("ngIf",l.pricingForm.get("pricePerUnitDistance").invalid&&l.pricingForm.get("pricePerUnitDistance").touched),a(6),d("ngIf",l.pricingForm.get("pricePerUnitTime").invalid&&l.pricingForm.get("pricePerUnitTime").touched),a(19),d("ngIf",l.pricingForm.get("maxSpace").invalid&&l.pricingForm.get("maxSpace").touched),a(),C(99,l.updateBtnStatus?99:100),a(31),V(l.alldata))},dependencies:[K,q,L,z,k,A,j,N,R,G,$,M,U,D,Z],styles:['.form-select[_ngcontent-%COMP%]{appearance:none;background-color:#f8f9fa;border:1px solid #ced4da;border-radius:.25rem;padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;line-height:1.5;width:100%}.form-select[_ngcontent-%COMP%]:hover, .form-select[_ngcontent-%COMP%]:focus{border-color:#b8daff}.form-select[_ngcontent-%COMP%]:disabled{background-color:#e9ecef;opacity:.65}.form-select[_ngcontent-%COMP%]:after{content:"\\25bc";position:absolute;top:50%;right:.75rem;transform:translateY(-50%);pointer-events:none}.form-select[_ngcontent-%COMP%]{transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#label-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px;text-align:left}#label-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(odd){padding-left:2rem;min-width:240px}.form-control[_ngcontent-%COMP%]{min-width:240px}label[_ngcontent-%COMP%]{font-size:18px;font-weight:700}#label-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2n){width:28vw}.centered-container[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer}.tooltip-container[_ngcontent-%COMP%]{position:absolute;bottom:125%;left:50%;transform:translate(-50%)}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{vertical-align:middle;align-items:center}.tooltip-text[_ngcontent-%COMP%]{display:flex;height:max-content;flex-direction:column;font-size:12px;background-color:#000;color:#fff;padding:5px;border-radius:4px;max-width:40vw;z-index:1;opacity:0;transition:opacity .3s ease-in-out}.centered-container[_ngcontent-%COMP%]:hover   .tooltip-text[_ngcontent-%COMP%]{display:block;opacity:1}.tooltip-text[_ngcontent-%COMP%]:before{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent}']});let r=s;return r})();export{Oe as VehiclePricingComponent};
