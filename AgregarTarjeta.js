var numeros="0123456789";
var letras_minusculas="abcdefghijklmnñopqrstuvwxyz";
var letras_mayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

var numTarjeta;
var nombreTar;
var CodTarjeta;
var dia_Nacido;
var mes_Nacido;
var año_Nacido

var obtenido='lol0';

function verificarTarjeta()
{
    numTarjeta=document.getElementById("num_Tarjeta").value;
    ResulNumTarjeta=VerificarNumerico(numTarjeta) && VerificarLongitudNumTarjeta(numTarjeta) && !Vacio(numTarjeta);
    
    nombreTar=document.getElementById("nombre_Tarjeta").value;
    ResulNOmbreTar=VerificarAlfabetico(nombreTar) && !Vacio(nombreTar);
    
    CodTarjeta=document.getElementById("cod_Tarjeta").value;
    ResultCod_Tarjeta=VerificarLongCodigoSeguridad(CodTarjeta) && VerificarNumerico(CodTarjeta) && !Vacio(CodTarjeta);
    
    dia_Nacido=document.getElementById("Dia_Nacimiento").value;
    mes_Nacido=document.getElementById("Mes_Nacimiento").value;
    año_Nacido=document.getElementById("Año_Nacimiento").value;
    ResultNacimiento=VerificarDia(dia_Nacido) && VerificarMes(mes_Nacido) && VerificarAño(año_Nacido);
    
    if(ResulNumTarjeta && ResulNOmbreTar && ResultCod_Tarjeta && ResultNacimiento))
    {
        alert("Tarjeta Agregada Correctamente");
    }
    if(ResulNumTarjeta==false)
        alert("El campo numero de tarjeta no es correcto");
    if(ResulNOmbreTar ==false)
        alert("El campo nombre de tarjeta no es correcto");
    if(ResultCod_Tarjeta==false)
        alert("El campo codigo de tarjeta no es correcto");
    if(ResultNacimiento==false)
        alert("El año de nacimiento brindado no es correcto");
}

function VerificarAño(texto)
{
    if (texto<2022)
        return true;
    else
        return false;
}

function VerificarMes(texto)
{
    if(texto>0 && texto<=12)
        return true;
    else
        return false;
}

function VerificarDia(texto)
{

    if(texto<=31 && texto>0)
        return true;
    else
        return false;
}
function Vacio(texto)
{
    if(texto.length==0)
        return true;
    else
        return false;
}

function VerificarNumerico (texto)
{    
    for(i=0;i<texto.length;i++)
    {
        cont=0;
        for(j=0;j<numeros.length;j++)
        {
            if(texto.charAt(i)==numeros.charAt(j))
            {
                cont+=1;
            }
        }
        if(cont==0)
            return false;
    }
    return true;
}

function VerificarLongitudNumTarjeta(texto)
{
    if(texto.length==16)
        return true;
    else
        return false;
}

function VerificarAlfabetico(texto)
{
    for(i=0;i<texto.length;i++)
    {
        cont=0;
        for(j=0;j<letras_minusculas.length;j++)
        {
            if(texto.charAt(i)==letras_minusculas.charAt(j) || texto.charAt(i)==' ')
            {
                cont+=1;
            }
        }
        for(s=0;s<letras_mayusculas.length;s++)
        {
            if(texto.charAt(i)==letras_mayusculas.charAt(s)|| texto.charAt(i)==' ')
            {
                cont+=1;
            }
        }
        if(cont==0)
            return false;
    }
    return true;
}


function VerificarLongCodigoSeguridad(texto)
{
    if(texto.length==4)
        return true;
    else
        return false;
}
