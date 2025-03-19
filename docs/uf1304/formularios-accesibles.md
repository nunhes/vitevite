---
title: Creación de formularios accesibles 
description: Asegúrate de que os teus formularios sexan lóxicos e fáciles de usar
lastUpdated: true
---

# {{ $frontmatter.title }}

**Asegúrate de que os teus formularios sexan lóxicos e fáciles de usar**

Os formularios accesibles son fáciles de entender, completar e enviar. As instrucións, as indicacións, os eidos de formulario obrigatorios e os requisitos de formato dos eidos deben estar claramente identificados para os usuarios. A recuperación de erros debe ser intuitiva e descritiva.

Asegúrate de que a orde de lectura e navegación sexa lóxica e intuitiva. Isto pode ser problemático se se empregan [táboas](https://webaim.org/techniques/tables/#uses) para crear "columnas" visuais. Para comprobar a orde linealizada dos elementos na páxina, proba a navegar polo formulario só coa tecla Tab.

**Asegúrate de que os formularios sexan accesibles mediante o teclado**

Os usuarios que non poden usar o rato navegan polas páxinas web co teclado. Os formularios que usan JavaScript para manipular datos de formulario, establecer o foco, cambiar elementos de formulario ou enviar formularios poden crear interaccións que só funcionan cun rato. Asegúrate de que os formularios do teu sitio web se poidan entender e manexar só co teclado.

**Asociar etiquetas de formularios  -`<label>`- con controis**

Unha etiqueta describe a función dun control de formulario (é dicir, área de texto, caixa de verificación, botón de opción, menú, etc.), e xeralmente aparece xunto a el. Os usuarios videntes fan a conexión visualmente, pero outros non poden. O elemento `<label>` asocia mediante programación unha etiqueta de texto a un control de formulario, creando unha conexión no código que non depende da visión. As etiquetas ARIA ( `aria-labelledby` e `aria-label`) pódense usar cando non sexa posible `<label>`. Isto fai que un lector de pantalla anuncie a etiqueta de texto cando o usuario navega ata o control do formulario.

**Importante**

Os usuarios do lector de pantalla navegan usando a tecla  Tab. Aínda que as etiquetas se anuncian cando as entradas do formulario reciben o foco do teclado, adoita omitirse outro texto entre os controis do formulario. Asegúrate de incluír as instrucións ao principio do formulario ou asocialas con eidos específicos mediante [`aria-describedby`](https://webaim.org/techniques/forms/advanced#describedby).

Os grupos de controis de formulario, como caixas de verificación e botóns de opción, ás veces requiren unha etiqueta de nivel superior (como "Método de envío" para un grupo de opcións de envío). Esta información pódese asociar ao grupo de controis de formulario usando [``e``](https://webaim.org/techniques/forms/controls#checkbox) . O `<fieldset>` define o grupo e o `<legend>` contén a descrición. Os lectores de pantalla anuncian `<legend>` cando os usuarios navegan no grupo.

## **Controis de formularios accesibles**

### Entradas de texto

```html
<label for="nome" >Nome:</label>
<input id="nome" type="text" autocomplete="name">
```

A correspondencia dos valores `for` e `id` asocian a etiqueta co seu control de formulario. Dado que os valores dos atributos `id` deben ser únicos en cada páxina, un control de formulario só pode ter un  `<label>` asociado.

Tamén se pode crear a asociación colocando o texto da etiqueta e a entrada dentro do elemento `<label>`(e sen usar `for` e `id`).

```html
<label>Nome: <input type="text" autocomplete="name"></label>
```

:notebook: **Nota**

Outra vantaxe das etiquetas é que o usuario pode facer clic na etiqueta para fixar o foco no control do formulario. Isto é útil en pantallas pequenas e para algunhas persoas con discapacidade motora, especialmente cando se seleccionan pequenas caixas de verificación e botóns de opción.

Facer clic nas etiquetas tamén é un xeito sinxelo de comprobar a correcta etiquetaxe do formulario. Se ao facer clic na etiqueta se activa o control do formulario, esa etiqueta está asociada mediante programación.

### Áreas de texto

```html
<label for="address">Introduce o teu enderezo:</label><br>
<textarea id="address" autocomplete="street-address"></textarea>
```

### Casillas de verificación

```html
<fieldset>
<legend>Selecciona os ingredientes para túa pizza:</legend>
<input id="xamon" type="checkbox" name="toppings" value="xamon">
<label for="xamon">Xamón</label><br>
<input id="pepperoni" type="checkbox" name="toppings" value="pepperoni">
<label for="pepperoni">Pepperoni</label><br>
<input id="cogumelos" type="checkbox" name="toppings" value="cogumelos">
<label for="cogumelos">Cogumelos</label><br>
<input id="olivas" type="checkbox" name="toppings" value="olivas">
<label for="olivas">Olivas</label>
</fieldset>
```

`<fieldset>` contén o grupo de caixas de verificación e `<legend>` a etiqueta do grupo. Os lectores de pantalla poden repetir a lenda para cada control do grupo, polo que o texto da lenda debe ser breve e descritivo.

### Botóns de radio

```html
<fieldset>
<legend>Escolle un método de envío:</legend>
<input id="polanoite" type="radio" name="shipping" value="polanoite">
<label for="polanoite">Pola noite</label><br>
<input id="dousdias" type="radio" name="shipping" value="dousdias">
<label for="dousdias">En dous días</label><br>
<input id="convencional" type="radio" name="shipping" value="convencional">
<label for="convencional">Convencional</label>
</fieldset>
```
:notebook: **Nota**

O conxunto de eidos e a lenda só deben usarse cando é necesaria unha etiqueta de nivel superior. As caixas de verificación individuais ou os botóns de opción básicos que só teñen sentido a partir das súas etiquetas non requiren un conxunto de eidos e unha lenda.

Os conxuntos de eidos aniñados poden provocar un comportamento estraño do lector de pantalla e deben evitarse.

### Outros tipos de entrada

Outros  tipos de `<input>` – `password`, `file`, `date` ou `time`(e as variantes de datos/tempo), `email`, `tel`, `url`, `number`, `color` e `range`– tamén deben ter asociado texto descritivo mediante elementos `<label>`.

### Menús de selección

```html
<label for="favcity">Cal é a túa cidade favorita?</label>
<select id="favcity" name="select">
<option value="1">Amsterdam</option>
<option value="2">Bos Aires</option>
<option value="3">Delhi</option>
<option value="4">Hong Kong</option>
<option value="5">London</option>
<option value="6">Os Anxos</option>
<option value="7">Moscú</option>
<option value="8">Mumbai</option>
<option value="9">Nova Iork</option>
<option value="10">São Paulo</option>
<option value="11">Tokyo</option>
</select>
```

#### Opcións de agrupación

As longas listas de opcións pódense agrupar con `<optgroup>`. Non obstante, xa que [*ás veces este se ignora na entorna do lector de pantalla*](https://a11ysupport.io/tech/html/optgroup_element) , non confíes nesta técnica para transmitir un contexto clave.

```html
<label for="favcity2">Cal é a túa cidade favorita?</label>
<select id="favcity2" name="favcity2">
<optgroup label="Asia">
<option value="3">Delhi</option>
<option value="4">Hong Kong</option>
<option value="8">Mumbai</option>
<option value="11">Tokyo</option>
</optgroup>
<optgroup label="Europa">
<option value="1">Amsterdam</option>
<option value="5">Londres</option>
<option value="7">Moscú</option>
</optgroup>
<optgroup label="Norte America">
<option value="6">Os Anxos</option>
<option value="9">Nova Iork</option>
</optgroup>
<optgroup label="Sur America">
<option value="2">Bos Aires</option>
<option value="10">São Paulo</option>
</optgroup>
</select>
```

#### Menús de selección múltiple

Os menús de selección múltiple permiten ao usuario escoller máis dunha opción.

```html
<label for="favcities">What are your three favorite cities?</label><br>
<select id="favcities" multiple="">
<option value="1">Amsterdam</option>
<option value="2">Buenos Aires</option>
<option value="3">Delhi</option>
<option value="4">Hong Kong</option>
<option value="5">London</option>
<option value="6">Los Angeles</option>
<option value="7">Moscow</option>
<option value="8">Mumbai</option>
<option value="9">New York</option>
<option value="10">São Paulo</option>
<option value="11">Tokyo</option>
</select>
```

:notebook: **Nota**

**Evita usar menús de selección múltiple.** Non todos os navegadores ofrecen unha navegación intuitiva do teclado para eles. Moitos usuarios non saben usar Control/Comando ou Maiús + clic para seleccionar varios elementos. Un grupo de caixas de verificación ofrece unha funcionalidade similar dun xeito máis accesible.

## Botóns

Os lectores de pantalla anuncian o texto aniñado para os elementos  `<button>` e o atributo  `value` para os botóns de entrada. Os botóns do formulario nunca deben estar baleiros.

```html
<input type="submit" name="submit" value="Submit Search">
<input type="reset" name="reset" value="Reset">
<button>Activate</button>
```

[Os botóns de reinicio non deben usarse](https://www.nngroup.com/articles/reset-and-cancel-buttons/) a non ser que sexan especificamente necesarios, porque son fáciles de premer por erro.

### Botóns de imaxe

Os botóns de imaxe ( `<input type="image">`) deben ter o texto alternativo co atributo `alt`. No caso contrario, os usuarios do lector de pantalla só escoitarán "botón", sen indicar o que fai o botón.

```html
<input type="image" name="submitbutton" **alt="buscar"** src="submit.png">
```

## Menús de salto de JavaScript

Un menú de salto é un `<select>`(ou un widget personalizado que se comporta como tal) que activa cambios de páxina ou navegación cando un usuario fai clic nunha opción co rato.

Cando se navega cun teclado, só *navegar* polas opcións coas teclas de frecha pode activar o cambio. Esta navegación inesperada pode confundir e desorientar aos usuarios do teclado e dos lectores de pantalla. Un menú de salto debe ser substituído por un menú estándar e un botón `<select>`, co botón actuando como disparador. O comportamento exacto varía segundo os navegadores e sistemas operativos.

### Mal exemplo

Este é un exemplo típico do problema. Nalgúns navegadores, a navegación ata a primeira opción activarase de forma espontánea cando o usuario intente explorar as opcións.

```html
<label for="goto">Ir ao sitio web:</label>
<select id="goto">
<option selected="selected">Selecciona...</option>
<option value="//webaim.org/">WebAIM</option>
<option value="//www.google.com/">Google</option>
<option value="//www.yahoo.com/">Yahoo</option>
<option value="//www.microsoft.com/">Microsoft</option>
</select>
```
### Bo exemplo

A activación desde un botón de envío admite a accesibilidade do teclado en todos os navegadores. Os usuarios poden explorar as opcións usando as teclas de frecha arriba/abaixo e, a continuación, facer clic no botón Enviar.

```html
<label for="goto2">Ir ao sitio web:</label>
<select id="goto2">
<option selected="selected">Selecciona un sitio</option>
<option value="//webaim.org/">WebAIM</option>
<option value="//www.google.com/">Google</option>
<option value="//www.yahoo.com/">Yahoo</option>
<option value="//www.microsoft.com/">Microsoft</option>
</select> 
<button id="goto2Btn">Enviar</button>
```

## Atributos importantes

### `autocomplete`

Os eidos de formulario que recollen [certos tipos de información específica do usuario](https://www.w3.org/TR/WCAG21/#input-purposes) necesitan atributos  `autocomplete` axeitados para identificar o propósito da entrada. Os usuarios poden beneficiarse cando os tipos de eido comúns (nome, enderezo, data de nacemento, etc.) están representados de forma coherente na web. A capacidade de determinar mediante programación o propósito de cada eido facilita o enchemento de formularios, especialmente para as persoas con discapacidade cognitiva.

```html
<label for="name2">Name:</label>
<input id="name2" type="text" autocomplete="name">
```

### Eidos requiridos ou obrigatorios

Aínda que os eidos obrigatorios adoitan identificarse cun asterisco, os usuarios poden non entender esta convención. Ademais, é posible que os lectores de pantalla non sempre anuncien este caracter.

#### `aria-required`

Se a indicación de que se require un eido se presenta fóra da etiqueta de entrada, a aplicación do atributo `aria-required="true"` fará que os lectores de pantalla anuncien "obrigatorio" xunto co texto da etiqueta. Este atributo non inclúe ningún mecanismo de validación ou "aplicación" e non ten impacto visual.

```html
<p>Todos os seguintes campos son obrigatorios.</p>
<label for="name3">Nome:</label>
<input id="name3" type="text" autocomplete="name" aria-required="true"> <button>Enviar</button>
```

#### `required`

O atributo HTML `required` tamén fai que os lectores de pantalla anuncien "obrigatorio" e tamén activa o navegador para avisar ao usuario se o usuario deixa o eido en branco.

```html
<label for="name4">Nome*:</label>
<input id="name4" type="text" autocomplete="name" required="">
<button>Enviar</button>
```

### Eidos non válidos

Ao realizar a validación do formulario, aplicar o atributo `aria-invalid="true"` a un control de formulario fará que o lector de pantalla anuncie "inválido" cando ese control se enfoca, e iso é todo. Non hai impacto visual. Podes aplicar isto aos eidos obrigatorios que o usuario deixou en branco ou aos eidos nos que fallou a validación doutro xeito. Isto é útil para os usuarios que non poden ver as iconas e os cambios de cor que normalmente se usan para marcar os erros visualmente.

```html
<input id="name5" type="text" autocomplete="name" aria-invalid="true">
```
## Etiquetado avanzado de formularios

A etiqueta `<label>` ten limitacións. Non se poden proporcionar varias etiquetas para un só control de formulario nin asociar unha única etiqueta con varios controis de formulario. Ás veces, non hai unha etiqueta de texto visible para asociar cun control de formulario.

A maioría destas limitacións de etiquetaxe pódense superar con tres propiedades ARIA:

- `aria-labelledby`
- `aria-describedby`
- `aria-label`

### `aria-labelledby`

A etiqueta `<label>` declara: `"Son unha etiqueta para este control de formulario"` facendo referencia ao valor do atributo `id` do control de formulario:

```html
<label for="fname">
```



Con `aria-labelledby`, o campo do formulario fai referencia ao atributo `id` do texto que actúa como a súa etiqueta:

```html
<input aria-labelledby="fnamelabel">
```

O control do formulario declara: `"Son un control etiquetado por este elemento"`.

### Manexo de varias etiquetas

Como o atributo `id` de cada control de formulario debe ser único, a `<label>` só pode apuntar a un control de formulario. Con `aria-labelledby`, un elemento pode etiquetar varios controis de formulario e un control de formulario pode ser etiquetado por varios elementos.

O seguinte é un exemplo simplificado dunha táboa que se pode usar para introducir datos. Cada cela de cabeceira ( `<th>`) funciona como unha etiqueta visual para todos os controis de formulario na columna debaixo dela. As entradas de texto úsanse `aria-labelledby` para facer referencia ao texto da cela da cabeceira.

```html
<table>
  <tbody>
    <tr>
      <th id="namelabel" scope="col">Nome</th>
      <th id="agelabel" scope="col">Idade</th>
      <th id="weightlabel" scope="col">Peso</th>
    </tr>
    <tr>
      <td><input type="text" name="name1" aria-labelledby="namelabel"></td>
      <td><input type="text" size="3" name="age1" aria-labelledby="agelabel"></td>
      <td><input type="text" size="4" name="weight1" aria-labelledby="weightlabel"></td>
	</tr>
	<tr>
      <td><input type="text" name="name2" aria-labelledby="namelabel"></td>
      <td><input type="text" size="3" name="age2" aria-labelledby="agelabel"></td>
      <td><input type="text" size="4" name="weight2" aria-labelledby="weightlabel"></td>
	 </tr>
	 <tr>
       <td><input type="text" name="name2" aria-labelledby="namelabel"></td>
       <td><input type="text" size="3" name="age2" aria-labelledby="agelabel"></td>
       <td><input type="text" size="4" name="weight2" aria-labelledby="weightlabel"></td>
	  </tr>
 </tbody>
</table>
```

HTML para a primeira cabeceira ("Nome"):

`<th id="namelabel" scope="col">Nome</th>`

HTML para a primeira entrada de texto:

`<input type="text" name="name1" aria-labelledby="namelabel">`

Isto etiqueta a entrada de texto co texto "Nome" na cela da cabeceira da táboa. Este atributo `aria-labelledby` engadiríase aos tres campos Nome, co que se etiquetarían correctamente todos cun nodo de texto.

Partindo deste exemplo, a seguinte táboa ten etiquetas visuais na parte superior e no lateral: varias etiquetas visuais para cada entrada.

```html
<table>	
	<tbody>
	    <tr>
		<th scope="col">Name</th>
		<th id="officenum" scope="col">Office Number</th>
		<th id="phonelabel" scope="col">Phone</th>
		</tr>
		<tr>
		<th id="cyndi" scope="row">Cyndi</th>
		<td><input type="text" size="4" name="office1" aria-labelledby="cyndi officenum"></td>
		<td><input type="text" size="12" name="phone1" aria-labelledby="cyndi phonelabel"></td>
		</tr>
		<tr>
		<th id="jared" scope="row">Jared</th>
		<td><input type="text" size="4" name="office2" aria-labelledby="jared officenum"></td>
		<td><input type="text" size="12" name="phone2" aria-labelledby="jared phonelabel"></td>
		</tr>
		<tr>
		<th id="jon" scope="row">Jonathan</th>
		<td><input type="text" size="4" name="office3" aria-labelledby="jon officenum"></td>
		<td><input type="text" size="12" name="phone3" aria-labelledby="jon phonelabel"></td>
		</tr>
	</tbody>
</table>
```

HTML para o primeiro campo:

```html
<input type="text" name="office1" aria-labelledby="cyndi officenum">
```

Os valores `cyndi officenum` fan referencia aos valores dos atributos das celas da táboa "Cyndi" e "Número de oficina". Un lector de pantalla lerá "Número de oficina de Cyndi" ao navegar neste campo. A orde de lectura de varias etiquetas baséase na orde na que se especifican estes valores `id`.

:notebook: **Nota**

Como regra xeral, se hai unha única etiqueta presente para un só control, o elemento `<label>` debería utilizarse para referencialo. Estas etiquetas proporcionan unha funcionalidade adicional: ao facer clic nelas, fíxase ou actívase o control. Esta funcionalidade non está dispoñible cando se usa `aria-labelledby`.

**Importante!**

Se un control ten tanto `<label>` coma `aria-labelledby`, os lectores de pantalla anunciarán o texto `aria-labelledby` *en lugar* do `<label>` asociado. Os usuarios do lector de pantalla nunca escoitarán o texto  `<label>`.

### `aria-describedby`

Para asociar texto descritivo cun control de formulario, usaremos `aria-describedby`. Por exemplo:

```html
<label for="resetpass">Restablecer contrasinal:</label>
	<input type="password" id="resetpass" aria-describedby="pwnote"><br>
	<span id="pwnote">O novo contrasinal debe ter entre 8 e 15 caracteres e incluír letras e números.</span>S
```



:notebook: Nota

- Porque hai unha única etiqueta, `<label>` úsase en lugar de  `aria-labelledby`.
- O atributo  `aria-describedby` apunta ao elemento `id` que contén os requisitos do contrasinal. Os lectores de pantalla adoitan ler a etiqueta, despois len o tipo de entrada (caixa de texto, caixa de verificación, etc., ademais das propiedades necesarias, como se o campo é necesario) e despois len a descrición. Pódense facer referencia a varios elementos mediante `aria-describedby`. Simplemente separa os valores `id` referenciados con espazos.
- Os lectores de pantalla anuncian o contido `aria-describedby` *ademais* dunha etiqueta (por exemplo, `<label>` ou `<input aria-labelledby>`). Non é un substituto dunha etiqueta: todas as entradas deben ter unha etiqueta.
- O atributo `aria-describedby` tamén se pode usar para facer referencia a descricións que aparecen como "suxestións". As informacións sobre ferramentas deben facerse visibles para os usuarios de teclado videntes cando o control teña o foco do teclado, non só cando o usuario pasa o rato ou fai clic co rato.

### Etiquetas invisibles

Algúns controis de formulario non necesitan etiquetas de texto visibles. Por exemplo, unha entrada de texto adxacente a un botón ''Buscar'' deixa claro o seu propósito para os usuarios videntes. Unha etiqueta de texto visual adicional sería redundante. Nestes casos, debe utilizarse unha das tres seguintes técnicas:

#### `<label>` oculto

Oculta o elemento `<label>` fóra da pantalla usando CSS. A etiqueta non aparecerá visualmente, pero os lectores de pantalla aínda o anunciarán. O conxunto de regras CSS aparece no artigo sobre [contido invisible para lectores de pantalla](https://webaim.org/techniques/css/invisiblecontent/) .

```html
<label class="hidden" for="s">Search Terms</label>
<input id="s" type="text">
<button>Search</button>
```



#### atributo `title`

Se un campo de formulario ten un atributo `title` pero non `<label>`, os lectores de pantalla tratarán o `title` como unha etiqueta. Isto tamén xerará unha información sobre ferramentas ao pasar o cursor do rato, que pode ser útil ou distraer.

```html
<input id="s-2" type="text" title="Search Terms">
<button>Search</button>
```



#### `aria-label`

Tamén se pode usar o atributo `aria-label`. Como `aria-labelledby`, [`aria-label`](https://webaim.org/articles/label-name/#ariaLabels) anula`<label>` .

```html
<input id="s-3" type="text" aria-label="Search Terms">
<button>Search</button>
```

**Importante!**

Só  debería aplicarse unha destas recomendacións. Usar dúas ou máis xuntas (por exemplo, un atributo oculto `<label>` e un atributo `title`) pode facer que a información sexa repetida por un lector de pantalla.

#### `placeholder`

O atributo `placeholder` non ocupa o lugar dun `<label>`. Unha limitación do `placeholder` é que desaparece unha vez que se introduce a información no campo, o que dificulta que os usuarios realicen correccións. Pola contra, recomendamos as estratexias de etiquetaxe anteriores.

##### Mal exemplo

Confía en `placeholder`.

```html
<fieldset>
   <legend>Teu nome:</legend>
   <input type="text" name="last" placeholder="Last">
   <input type="text" name="first" placeholder="First">
   <input type="text" name="middle" placeholder="Middle">
</fieldset>
```

##### Bo exemplo

Substitúe `placeholder`por `<label>`, e engade `autocomplete`, que estaba ausente no mal exemplo.

```html
<fieldset>
   <legend>Teu nome:</legend>
   <label>Apelido<input type="text" name="last" autocomplete="family-name"></label>
   <label>Nome<input type="text" name="first" autocomplete="given-name"></label>
   <label>Apodo<input type="text" name="middle" autocomplete="additional-name"></label>
</fieldset>
```



## Recapitulación

- Usar `<label>` sempre que sexa posible. Ten compatibilidade universal con navegador e lector de pantalla, e os usuarios do rato poden facer clic na etiqueta para centrarse no control de formulario.
- Usar `aria-labelledby` para superar as limitacións 1:1 de `<label>`.
- Usar `aria-describedby` (ademais dunha etiqueta) para asociar texto descritivo ao control do formulario.
- Usar un atributo oculto `<label>`, ou  `title` ou `aria-label` cando non sexa necesaria unha etiqueta de texto visible.
- O texto do marcador de posición (por exemplo, ) non é un substituto dunha etiqueta.`<input type="text" placeholder="Search WebAIM">`

---

ref: 

- https://webaim.org/techniques/forms/
- https://webaim.org/techniques/formvalidation/

---

DAW🧊2025