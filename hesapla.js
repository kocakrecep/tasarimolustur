function temizle()
{
    document.getElementById("fiyat").value="";
    document.getElementById('amavi').innerHTML="";
	document.getElementById('akirmizi').innerHTML="";
	document.getElementById('ayesil').innerHTML="";
	document.getElementById('asari').innerHTML="";
	document.getElementById('apembe').innerHTML="";
    document.getElementById('abeyaz').innerHTML = "";
    document.getElementById("boyutGoster").value = "";
    document.getElementById('pmavi').setAttribute("style", "");
    document.getElementById('pkirmizi').setAttribute("style", "");
    document.getElementById('pyesil').setAttribute("style", "");
    document.getElementById('psari').setAttribute("style", "");
    document.getElementById('ppembe').setAttribute("style", "");
    document.getElementById('pbeyaz').setAttribute("style", "");
}

function degis(){
	var cizgi=document.getElementById("cizgi").checked;
	var ovalcizgi=document.getElementById("ovalcizgi").checked;
	var ustcizgi=document.getElementById("ustcizgi").checked;
	var ustovalcizgi=document.getElementById("ustovalcizgi").checked;
	if(cizgi==true || ustcizgi==true){
		document.getElementById("ovalcizgi").disabled = true;
		document.getElementById("ovalcizgi").checked=false;
		document.getElementById("ustovalcizgi").disabled = true;
		document.getElementById("ustovalcizgi").checked=false;
	}
	else if(cizgi==false && ustcizgi==false){
		document.getElementById("ovalcizgi").disabled = false;
		document.getElementById("ustovalcizgi").disabled = false;
	}
	if(ovalcizgi==true || ustovalcizgi==true){
		document.getElementById("cizgi").disabled = true;
		document.getElementById("cizgi").checked=false;
		document.getElementById("ustcizgi").disabled = true;
		document.getElementById("ustcizgi").checked=false;
	}
	else if(ovalcizgi==false && ustovalcizgi==false){
		document.getElementById("cizgi").disabled = false;
		document.getElementById("ustcizgi").disabled = false;
	}
}
function buyukKucuk(sayi){
	if(sayi==7){
		document.getElementById("harfSayi").setAttribute("style", "text-transform: uppercase;");
		temizle();
	}
	else if(sayi==10){
		document.getElementById("harfSayi").setAttribute("style", "text-transform: uppercase;");
		temizle();
	}
	else if(sayi==15){
		document.getElementById("harfSayi").setAttribute("style", "text-transform: uppercase;");
		temizle();
	}
	else if(sayi==30)
	{
		document.getElementById("harfSayi").value="";
		document.getElementById("harfSayi").setAttribute("style", "text-transform:none;");
		temizle();
	}
}


function Olustur(){
	document.getElementById("harfOnizleme").innerHTML=document.getElementById("harfSayi").value;
}


function fiyatHesapla()
{
    temizle();
	var font=120;
	var boyut=$( "#boyut" ).val();;
	var renk =$( "#renk" ).val();
	//var renk=document.getElementById("renk").value;
	var sayi=parseInt(boyut);
	console.log(sayi);
	var yazi=document.getElementById("harfSayi").value;
	var yaziSon= yazi.split(' ').join('');
	var harfSayi=yaziSon.length;
	var harf=parseInt(harfSayi);
	var cizgi=document.getElementById("cizgi").checked;
	var ovalcizgi=document.getElementById("ovalcizgi").checked;
	var ustcizgi=document.getElementById("ustcizgi").checked;
	var ustovalcizgi=document.getElementById("ustovalcizgi").checked;
    var fiyat = 0;

	if(sayi==7){
		fiyat=harf*5.5;
		font=182;
		document.getElementById('amavi').setAttribute("style", "text-transform:uppercase;font-family:neon_80sregular;");
		document.getElementById('akirmizi').setAttribute("style", "text-transform:uppercase;font-family:neon_80sregular;");
		document.getElementById('ayesil').setAttribute("style", "text-transform:uppercase;font-family:neon_80sregular;");
		document.getElementById('asari').setAttribute("style", "text-transform:uppercase;font-family:neon_80sregular;");
		document.getElementById('apembe').setAttribute("style", "text-transform:uppercase;font-family:neon_80sregular;");
		document.getElementById('abeyaz').setAttribute("style", "text-transform:uppercase;font-family:neon_80sregular;");	
	}
	else if(sayi==10){
		fiyat=harf*6.4;
		font=150;
		document.getElementById('amavi').setAttribute("style", "text-transform:uppercase;font-family:arial_rounded_mt_boldbold;");
		document.getElementById('akirmizi').setAttribute("style", "text-transform:uppercase;font-family:arial_rounded_mt_boldbold;");
		document.getElementById('ayesil').setAttribute("style", "text-transform:uppercase;font-family:arial_rounded_mt_boldbold;");
		document.getElementById('asari').setAttribute("style", "text-transform:uppercase;font-family:arial_rounded_mt_boldbold;");
		document.getElementById('apembe').setAttribute("style", "text-transform:uppercase;font-family:arial_rounded_mt_boldbold;");
		document.getElementById('abeyaz').setAttribute("style", "text-transform:uppercase;font-family:arial_rounded_mt_boldbold;");	
	}
	else if(sayi==15){
		fiyat=harf*10.30;
		font=150
		document.getElementById('amavi').setAttribute("style", "text-transform:uppercase;font-family:webfontregular;");
		document.getElementById('akirmizi').setAttribute("style", "text-transform:uppercase;font-family:webfontregular;");	
		document.getElementById('ayesil').setAttribute("style", "text-transform:uppercase;font-family:webfontregular;");	
		document.getElementById('asari').setAttribute("style", "text-transform:uppercase;font-family:webfontregular;");	
		document.getElementById('apembe').setAttribute("style", "text-transform:uppercase;font-family:webfontregular;");	
		document.getElementById('abeyaz').setAttribute("style", "text-transform:uppercase;font-family:webfontregular;");	
	}
	else if(sayi==30){
		var kucuk=0;
		var buyuk=0;
		font=200;
		var kucukHarfFiyat=0;
		var buyukHarfFiyat=0;
		document.getElementById('amavi').setAttribute("style", "font-family:Freestyle Script;");
		document.getElementById('akirmizi').setAttribute("style", "font-family:Freestyle Script;");
		document.getElementById('ayesil').setAttribute("style", "font-family:Freestyle Script;");
		document.getElementById('asari').setAttribute("style", "font-family:Freestyle Script;");
		document.getElementById('apembe').setAttribute("style", "font-family:Freestyle Script;");
		document.getElementById('abeyaz').setAttribute("style", "font-family:Freestyle Script;");
		for(var i=0;i<harf;i++){
			if(yaziSon.charCodeAt(i)>64&&yaziSon.charCodeAt(i)<91){
				buyuk=buyuk+1;
			}
			else if(yaziSon.charCodeAt(i)==199 || yaziSon.charCodeAt(i)==304 || yaziSon.charCodeAt(i)==208 || yaziSon.charCodeAt(i)==214 || yaziSon.charCodeAt(i)==350 || yaziSon.charCodeAt(i)==220){
				buyuk=buyuk+1;
			}
			else if(yaziSon.charCodeAt(i)>96&&yaziSon.charCodeAt(i)<123){
				kucuk=kucuk+1;
			}
			else if(yaziSon.charCodeAt(i)==231 || yaziSon.charCodeAt(i)==305 || yaziSon.charCodeAt(i)==287 || yaziSon.charCodeAt(i)==246 || yaziSon.charCodeAt(i)==351 || yaziSon.charCodeAt(i)==252){
				kucuk=kucuk+1;
			}
		}
		if(kucuk>0){
			kucukHarfFiyat=kucuk*10.30;
		}
		if(buyuk>0){
			buyukHarfFiyat=buyuk*20;
		}
		fiyat=kucukHarfFiyat+buyukHarfFiyat;
	}
	if(cizgi==true || ovalcizgi==true){
		fiyat=fiyat+6.4;
		if(ustcizgi==true || ustovalcizgi==true){
			fiyat=fiyat+6.4;
		}
	}

	if(cizgi==true){
		if(ustcizgi==true){
			if(sayi==7)
			{
				document.getElementById('pmavi').setAttribute("style", "text-decoration:overline underline");
				document.getElementById('pkirmizi').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pyesil').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('psari').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('ppembe').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "text-decoration:overline underline;");	
			}
			else if(sayi==10)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline underline");
				document.getElementById('pkirmizi').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pyesil').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('psari').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('ppembe').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "text-decoration:overline underline;");
			}
			else if(sayi==15)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline underline");
				document.getElementById('pkirmizi').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pyesil').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('psari').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('ppembe').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "text-decoration:overline underline;");	
			}
			else if(sayi==30)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline underline");
				document.getElementById('pkirmizi').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pyesil').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('psari').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('ppembe').setAttribute("style", "text-decoration:overline underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "text-decoration:overline underline;");	
			}
		
		}
		else{
			if(sayi==7)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:underline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('psari').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "  text-decoration:underline;");
			}
			else if(sayi==10)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:underline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('psari').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "  text-decoration:underline;");
			}
			else if(sayi==15)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:underline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('psari').setAttribute("style", " text-decoration:underline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pbeyaz').setAttribute("style", "  text-decoration:underline;");
			}
			else if(sayi==30)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:underline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('psari').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:underline;");	
				document.getElementById('pbeyaz').setAttribute("style", " text-decoration:underline;");
			}
		}
		
	}
	else if(ustcizgi==true){
		if(sayi==7)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline;");
				document.getElementById('pkirmizi').setAttribute("style", " text-decoration:overline;");	
				document.getElementById('pyesil').setAttribute("style", " text-decoration:overline;");	
				document.getElementById('psari').setAttribute("style", " text-decoration:overline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pbeyaz').setAttribute("style", "  text-decoration:overline;");
			}
			else if(sayi==10)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('psari').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pbeyaz').setAttribute("style", " text-decoration:overline;");
			}
			else if(sayi==15)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('psari').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pbeyaz').setAttribute("style", "  text-decoration:overline;");
			}
			else if(sayi==30)
			{
				document.getElementById('pmavi').setAttribute("style", "  text-decoration:overline;");
				document.getElementById('pkirmizi').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pyesil').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('psari').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('ppembe').setAttribute("style", "  text-decoration:overline;");	
				document.getElementById('pbeyaz').setAttribute("style", "  text-decoration:overline;");
			}
	}
	if(ovalcizgi==true){
		
	}
	else if(ustovalcizgi==true){
		
	}
	if(renk=="mavi"){
		document.getElementById('amavi').innerHTML=yazi;
	}
	else if(renk=="kirmizi"){
		document.getElementById('akirmizi').innerHTML=yazi;
	}
	else if(renk=="beyaz"){
		document.getElementById('abeyaz').innerHTML=yazi;
	}
	else if(renk=="sari"){
		document.getElementById('asari').innerHTML=yazi;
	}
	else if(renk=="yesil"){
		document.getElementById('ayesil').innerHTML=yazi;
	}
	else if(renk=="pembe"){
		document.getElementById('apembe').innerHTML=yazi;
	}
    sayiyaz(fiyat, renk, sayi, cizgi, ovalcizgi, ustcizgi, ustovalcizgi);
} 
 
function sayiyaz(sonuc, renk, sayi, cizgi, ovalcizgi, ustcizgi, ustovalcizgi)
{
    document.getElementById("fiyat").value = sonuc + " $ + KDV";
    
    if (renk == "mavi") {
        var Genislik = $('#amavi').width();
        var Yukseklik = $('#amavi').height();
    }

    else if (renk == "kirmizi") {
        var Genislik = $('#akirmizi').width();
        var Yukseklik = $('#akirmizi').height();
    }
    else if (renk == "beyaz") {
        var Genislik = $('#abeyaz').width();
        var Yukseklik = $('#abeyaz').height();
    }
    else if (renk == "sari") {
        var Genislik = $('#asari').width();
        var Yukseklik = $('#asari').height();
    }
    else if (renk == "yesil") {
        var Genislik = $('#ayesil').width();
        var Yukseklik = $('#ayesil').height();
    }
    else if (renk == "pembe") {
        var Genislik = $('#apembe').width();
        var Yukseklik = $('#apembe').height();
    }
    if (cizgi==true || ovalcizgi==true || ustcizgi==true || ustovalcizgi==true) {
        document.getElementById("boyutGoster").value = "Hesap yapilamiyor.";
    }
    else {
        if (sayi == 7) {
            Genislik = (Genislik * 3.9) / 37.83;
            Yukseklik = (Yukseklik * 2.7) / 37.83;
        }
        else if (sayi == 10) {
            Genislik = (Genislik * 4.2) / 37.83;
            Yukseklik = (Yukseklik * 3.5) / 37.83;
        }
        else if (sayi == 15) {
            Genislik = (Genislik * 5.9) / 37.83;
            Yukseklik = (Yukseklik * 4.3) / 37.83;
        }
        else if (sayi == 30) {
            Genislik = (Genislik * 15.5) / 37.83;
            Yukseklik = (Yukseklik * 9.1) / 37.83;
        }
        document.getElementById("boyutGoster").value = Math.round(Genislik) + "X" + Math.round(Yukseklik) + " CM";
    }
    
    
}


