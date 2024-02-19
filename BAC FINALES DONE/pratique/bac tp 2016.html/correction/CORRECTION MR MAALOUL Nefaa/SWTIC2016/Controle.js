function annee(){
var dt=new Date();
f.dtaa.value=dt.getFullYear();;
}
function verif(){
if(f.IdPiece.selectedIndex==0){
    alert ("Vous devez choisir une pièce");
	return false;
	}
if(f.IdSalle.selectedIndex==0){
    alert ("Vous devez choisir une Salle");
	return false;
	}
if(f.dtjj.value==""){
alert ("Vous devez saisir un jour");
	return false;
	}
if(f.dtmm.value==""){
alert ("Vous devez saisir un mois");
	return false;
	}
jj=Number(f.dtjj.value);
mm=Number(f.dtmm.value);
aa=Number(f.dtaa.value);
if((mm<1) || (mm>12)){
	alert("mois incorrect...");
	return false;
	}
if((mm==1) ||(mm==3) ||(mm==5) ||(mm==7) ||(mm==8) ||(mm==10) ||(mm==12)){
		if((jj<=0) || (jj>31)){
			alert("Erreur de jour");
			return false;
			}
		}
if((mm==4) ||(mm==6) ||(mm==9) ||(mm==11)){
		if((jj<=0) || (jj>30)){
			alert("Erreur de jour");
			return false;
			}
	}
if((mm==2) && ((aa%4)==0)){
   	if( (jj<=0) || (jj>29) ){
		alert("Date incorrecte");
		return false;
		}
	}
if((mm==2) && ((aa%4)>0)){
		if((jj<=0) || (jj>28)){
		    alert("Date incorrecte");
			return false;
		}
	}
}



