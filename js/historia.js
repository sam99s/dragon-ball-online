$(document).ready(function () {
    const db = $('#btndb');
    const dbz = $('#btndbz');
    const dbs = $('#btndbs');

    const historiaDB = $('.dragonBall');
    const historiaDBZ = $('.dragonBallZ');
    const historiaDBS = $('.dragonBallSuper');

    let contador = 0;

    /* Historia Dragon Ball */
    $(db).click(() => {
        if(contador === 0){
            $('.historia').remove();
            contador += 1;
        }
        $(historiaDBZ).hide();
        $(historiaDBS).hide();
        $(historiaDB).show();

        $(historiaDB).append(`
        <h2 class="col-12 text-center mt-5">Dragon Ball</h2>

        <h3 class="col-12 mt-5">Buscando las Esferas del Dragón</h3>

        <p class="col-12 mt-5">La historia comienza cuando Bulma llega donde Goku buscando las Esferas del Dragón, pero debido a que el joven no quiere entregarle el artefacto la ingeniosa joven lo convence para que la acompañe en el viaje para reunir las siete Esferas del Dragón. Bulma convenciendo a Goku de darle la suya de 4 estrellas. En el camino conoce a otros personajes como Oolong, Yamcha, Chi-Chi y Kame-Sen'nin, algunos de ellos se alían a Goku o tienen otro papel en el futuro de la serie. Goku y sus compañeros consiguen seis de las esferas, pero estas son robadas por Pilaf y sus secuaces, quienes tienen la séptima e invocan a Shen Long, pero Oolong se interpone y pide unas bragas. Pilaf furioso al ver sus planes frustrados, captura a Goku y a sus amigos dentro de una cúpula la cual refleja la luna llena con la intención de cocinarlos con los rayos del sol del desierto al día siguiente y en ese momento, Goku, sin quererlo, se transforma en Ōzaru destrozando el castillo y obligando a Pilaf a huir de su escondite. Yamcha ante la gravedad de la situación le pide a Puar que se convierta en unas tijeras para cortarle la cola a Goku y así éste regrese a la normalidad. A la mañana siguiente y con la primera aventura concluida, todos deciden separarse, por lo que Goku por su parte decide ir a entrenar con Kame Sen'nin.</p>

        <div id="eleccion" class="container mt-5 d-flex">
            <figure class="col-6">
                <img src="../assets/dbfondo.png" alt="Shen Long">
            </figure>

            <div class="col-6 align-self-center d-flex justify-content-around deseo">
                <a href="#btn1"><button type="button" id="d1" class="btn btn-primary deseo-elegido Goku">Goku</button><a>
                <a href="#btn1"><button type="button" id="d2" class="btn btn-primary deseo-elegido Anunciador">Anunciador</button><a>
                <a href="#btn1"><button type="button" id="d3" class="btn btn-primary deseo-elegido Bulma">Bulma</button><a>
            </div>

        </div>`)

        const deseo = $(".deseo");
        const deseoElegido = $(".deseo-elegido")

        $(deseoElegido).click((e) => {
            let character = e.target.classList[3];

            if(character === 'Goku'){
                msj = '¡Va a ser muy emocionante!';
            }

            if(character === 'Anunciador'){
                msj = '¿Me eligió antes que goku?';
            }

            if(character === 'Bulma'){
                msj = 'Vayamos a disfrutar de la historia';
            }


            $(deseoElegido).hide();
            $(deseo).append(`
                <figure class="col-6 d-block">
                    <h3 class="character-title">${character}</h3>
                    <img src="../assets/historia/db/gif${character}1.gif" alt="${character}">
                    <span>${msj}</span>
                </figure>
            `)

            $(historiaDB).append(`
                <div class="container d-flex">
                    <button type="button" id="btn1" class="btn btn-outline-primary col-3 d-grid gap-2 mx-auto mb-5">Empecemos</button>
                </div>
            `)

            $("#btn1").click(() => {
                $("#btn1").hide();
                $('#eleccion').remove();
                $(historiaDB).append(`
                    <div class="conatiner">
                        <h3 class="col-12 mt-5">Torneo de las artes marciales</h3>

                        <p class="col-12 mt-5">Kame Sen'nin se compromete a entrenar con Goku, sólo si éste le consigue una mujer bonita. Luego otro estudiante llamado Krilin, ayuda a Goku a cumplir la petición del maestro, solo que no era lo que esperaban ya que Lunch es una joven muy amable pero si ella llegase a estornudar, se convierte en una persona violenta y agresiva. Krilin es rival de Goku al principio, pero luego terminan siendo los mejores amigos tras el Torneo de las Artes Marciales. Luego de dos años de entrenamiento con él, en el torneo, se reunió con sus amigos Bulma, Yamcha, Oolong y Puar. Tras pasar con facilidad los preeliminares, clasifica para la ronda final junto a Krilin y Yamcha. Él pelea después, en cuartos de final, contra Giran, quien abandona tras ver la gran fuerza de Goku, y en las semifinales se enfrenta contra Nam, a quien vence tras una igualada pelea. En la batalla final lucha contra Jackie Chun, quien era en realidad su maestro disfrazado. La batalla fue muy reñida, terminando Jackie Chun como el ganador. Desde entonces Goku siempre demuestra tener un buen corazón y ser un ser muy diferente a todos los demás, ya que acepta su derrota pacíficamente.</p>

                        <hr>

                        <h3 class="col-12 mt-5">Listón Rojo</h3>

                        <p class="col-12 mt-5">Después del torneo mundial, se enfrenta al despiadado Ejército del Listón Rojo, que también busca las 7 esferas del dragón y no tienen escrúpulos en matar a cualquier persona, incluso a mujeres o niños que interfieran en su camino, aunque la mayoría puede ser porque son robots. En primer lugar, Goku derrota al Coronel Silver y termina viajando a la Aldea Jingle donde conoce a Suno. Goku pelea a través de la Torre Músculo a muchos de los esbirros del General White. Luego Goku se hace amigo de un defectuoso androide, el Androide Número 8 y derrotan al General White. Goku en la siguiente batalla derrota al General Blue, con la ayuda de Arale Norimaki. Viendo que sus mejores soldados han fracasado contra Goku, el Listón Rojo, contrató al asesino mas mortífero del mundo, Tao Pai Pai, para matarlo. Este viaja a la Tierra sagrada, donde se encontraba la torre de Karin y una bola del dragón, la cual Goku había recibido de Bora, el guardián de esta tierra, por salvar a su hijo Upa del ejército Listón Rojo. Tao Pai Pai asesina a Bora y derrota a Goku, dejándolo gravemente herido. El niño sube a la Torre de Karin, a beber el Agua ultrasagrada para volverse más fuerte y así derrotar a Tao Pai Pai, pero una vez arriba, se encuentra con el Maestro Karin, que le obligará a quitarle el agua sagrada para poder beberla. Tras tres días, Goku consigue beber el agua, la cual era agua corriente, pero el esfuerzo que supuso arrebatarle el agua al maestro Karin le sirvieron como entrenamiento y se hizo más fuerte, y a continuación, derrota a Tao Pai Pai. Luego Goku le promete a Upa que con las esferas del dragón reviviría a su padre Bora. A continuación, viaja a la Base general del ejército Listón Rojo para conseguir las 2 esferas del dragón que poseían, derrota a la mayoría de soldados y al general Black, (quien previamente había asesinado al líder de la Armada, el Comandante Red), acabando con el Listón Rojo y logra juntar al menos, seis esferas del dragón.</p>

                        <hr>

                        <h3 class="col-12 mt-5">Luchando con los guardianes de Uranai Baba</h3>

                        <p class="col-12 mt-5">Después de la victoria de Goku sobre el Listón Rojo, todavía falta una esfera más para que puedan revivir a Bora, pero Bulma con su radar del dragón no puede encontrarla. Uranai Baba resulta no ser tan generosa, obligándolos a luchar contra sus 5 luchadores más fuertes para obtener su solicitud. Los dos primeros luchan con los amigos de Goku (Krilin, Yamcha, Upa y Puar), pero Krilin pierde el primer asalto y Yamcha es derrotado por el tercer guerrero. Goku, el último guerrero, pelea y derrota al tercer guerrero, una momia y al cuarto Guerrero, el demonio Akkuman, después de eso, Goku pelea contra el quinto guerrero, quién, tras una intensa batalla, agarró a Goku de la cola, debilitándolo. Sin embargo, acaba cortándole la cola a Goku y se rinde, rebelándose como su Abuelo Gohan, que fue traído de vuelta del otro mundo por un día, y se mostró orgulloso con el progreso de Goku. Tras haber vencido a los 5 guerreros, Uranai Baba les muestra la localización de la última esfera, la cual estaba en manos de Pilaf. Goku se enfrenta a Pilaf en su nuevo robot gigante, junto con Shu y Mai. Goku los derrota fácilmente. Con todas las esferas del dragón reunidas, Goku pide un deseo a Shen Long y revive a Bora.</p>

                        <hr>

                        <h3 class="col-12 mt-5">Segundo Torneo de las Artes Marciales</h3>

                        <p class="col-12 mt-5">Goku pasa los tres próximos años formación por él mismo para luchar en el XXII Torneo Mundial de Artes Marciales. Por el momento en que se inicia el torneo, Goku tiene 15 años (aunque todavía se ve como un muchacho pre-adolescente). El más fuerte oponente de Goku es Tenshinhan, un guerrero entrenado por el némesis de Kame-Sen'nin, Tsuru Sen'nin (de la Escuela de la Grulla). Como Yamcha y Puar antes que ellos, Tenshinhan, junto con su mejor amigo Chaoz, se pasará finalmente a lado de Goku.
                        
                        <hr>

                        <p class="col-12 mt-5">En los preliminares, Goku se establece contra un campeón de un torneo mundial anterior, el Rey Chapa y pasa a las rondas finales con facilidad. En los cuartos de final se enfrenta a Panputt, una famosa estrella de cine a quien vence en tan solo tres segundos. En las semifinales Goku se establece con su mejor amigo Krilin y lo derrota después de una feroz batalla. Goku pasa a la lucha contra Ten y su estilo de la Escuela de la Grulla en la ronda final. Después de que Goku es liberado de telequinesis de Chaoz, el partido continúa con normalidad hasta que Ten decide utilizar el ataque del Kikoho para destruir la plataforma. En el aire, Goku golpea a Ten utilizando un Kamehameha para rápidamente propulsar a sí mismo en el estómago de Ten. Cayendo al mismo ritmo, Goku choca primero contra el suelo después de chocar contra una camioneta, dejando a Ten como el ganador del torneo. Finalmente Tenshinhan le dice que la mitad del premio le pertenece, sin embargo Goku le dice que no sabría que hacer con el dinero, aunque después van todos a comer y seguramente solo con la comida de Goku se gastaría casi la mitad o incluso más.</p>

                        <h3 class="col-12 mt-5">El regreso del Rey Demonio Piccolo</h3>

                        <p class="col-12 mt-5">Después de la final de la 22º edición del Torneo Mundial de Artes Marciales, Piccolo, la mitad malvada de Kami se separa y aparece en escena. Krilin es asesinado por Tambourine, uno de los hijos del Rey Demonio Piccolo. Goku se enfada y se pone a perseguir a Tambourine quien lo lleva a los cielos, luego Goku se encuentra con Tambourine y se ponen a pelear, pero Goku es derrotado debido a que estaba cansado por el torneo.

                        <br><br>

                        Al tratar de recuperarse en el desierto, Goku ve a un pez gigante y se lo come, el cual pertenecía a un Samurai llamado Yajirobe quien tenia un Esfera del Dragón. Cymbal, otro hijo de Piccolo, es enviado por su padre a obtener esa Esfera, pero es asesinado por Yajirobe con su Katana. Tras la muerte de Cymbal, Piccolo envía a Tambourine ya que es mas poderoso que Cymbal para destruir a su asesino pero Goku lo derrota con un Kamehameha.

                        <br><br>

                        Poco después de que Piccolo aparece y furioso por la muerte de sus hijos rápidamente derrota a Goku con su ataque de Masenko. Yajirobe lleva a Goku a la Torre de Karin para que le ayuden a recuperarse. Mientras tanto, el Maestro Roshi y Chaoz intentan detener a Piccolo para que no obtenga las Esferas del Dragón, pero cometen un error y mueren en el intento. Piccolo luego destruye a Shen Long y saca al Rey del Mundo del Palacio, en un intento de dominar el mundo.Una vez que se haya producido la curación de Goku él se dirige afuera en una búsqueda para encontrar el Agua Ultra divina, un líquido sagrado que desencadena poderes ocultos del bebedor si presentan alguno, o los mata. Goku bebe el agua y sobrevive, entonces se dirige al castillo del Rey del mundo donde encuentra al hijo más reciente del Rey Demonio Piccolo, Drum derrota hasta a Tien. Goku derrota a Drum y reta a Piccolo Daimaoh a una batalla. Hacia el final de la lucha Piccolo Daimaoh utiliza a Tien como rehén, intentando forzar a Goku a rendirse. Goku casi reanuda la lucha a pesar del hecho de que Tien morirá, pensando que podría revivir a Tien con las Esferas del Dragón, hasta que Piccolo le dice que había destruido a Shen Long. Esto deja Goku a merced de Piccolo. Goku termina con un brazo roto y dos piernas rotas. Como Piccolo lleva a Goku a los cielos para su ataque final, Goku, lleno de ira por el hecho de que Krilin y Kame-Sen'nin han desaparecido para siempre, se lanza plenamente a sí mismo con un Kamehameha en Piccolo, para perforar un agujero a través de su pecho y matarlo. Momentos antes de la muerte del Rey Demonio Piccolo, sin embargo, escupe a un huevo lejos en la distancia que contiene su hijo final y su reencarnación, Piccolo</p>

                        <hr>

                        <h3 class="col-12 mt-5">Adolescencia</h3>

                        <p class="col-12 mt-5">Goku entrena con Kami y luego de algunos años baja de la torre para participar en el 23º Torneo de las Artes Marciales. Allí hay un participante llamado Ma Junior, que luego resulta ser Piccolo, el hijo del Rey Demonio Piccolo. Es precisamente en este Torneo donde se reencuentra con la que será su esposa, la princesa Chi-Chi, después de haberse visto por última vez cuando aún eran niños. Al principio no la reconoce, ya que se ha convertido en una hermosa joven, lo que provoca el enfado de la chica, que culmina en una emotiva pelea entre ambos, en la que la revela a Goku la promesa que de niño le hiciera, que algún día la tomaría como esposa. Es así como un joven e inocente Goku toma la determinación de pedirle matrimonio a Chi-Chi, sin siquiera saber lo que es una esposa y menos aún, un matrimonio. Pero sin importar su juventud, se compromete con la que será su compañera para toda la vida, y la madre de sus dos hijos. Goku lucha contra Piccolo en la final del torneo, ambos tienen las mismas fuerzas, pero Piccolo está en ventaja, ya que Goku teme que al matar a Piccolo también muera Kami, tras luchar un rato, Piccolo vuela hacia el cielo y amenaza con matar a todos los espectadores del torneo con un ataque de energía, Piccolo lo lanza y Goku lo reflecta hacia Piccolo con un Super Kamehameha, Piccolo termina con la ropa destrozada y el público se da cuenta de que es el hijo del Rey Demonio Piccolo, lo que provoca que los espectadores huyan presos del terror y Piccolo se hace gigante, Goku entra en su interior, rescata a Kami y luego le ataca con mucha fuerza, se cree que Goku ha ganado, Piccolo se levanta y le atraviesa el pecho a Goku, luego le inmoviliza las extremidades, pero Goku cae del cielo y empuja a Piccolo con muchas fuerzas y lo saca fuera de la plataforma, ganando la lucha. Goku le perdona la vida y se convierte por primera vez en ganador del Torneo de las Artes Marciales. Después de esto se celebra su matrimonio con Chi-Chi y un año más tarde nacería su hijo primogénito, y lo acaban llamando Son Gohan en honor a su difunto abuelo.</p>
                    </div>                
                `)
            })

            

        
        })

    })


    /* Historia Dragon Ball Z*/
    $(dbz).click(() => {
        if(contador === 0){
            $('.historia').remove();
            contador += 1;
        }
        $(historiaDB).hide();
        $(historiaDBS).hide();
        $(historiaDBZ).show();

        $(historiaDBZ).append(`
        <h2 class="col-12 text-center mt-5">Dragon Ball Z</h2>

        <h3 class="col-12 mt-5">El ataque de los Saiyan</h3>

        <p class="col-12 mt-5">Después de salvar a Gohan de caer por una cascada, Goku llega a Kame House con su hijo, para presentarle a Bulma, Kame-Sen'nin y Krilin. Todo parece estar bien, pero de repente, Goku percibe un enorme poder acercándose. La nueva amenaza llega desde el espacio; se trata de Raditz, el hermano mayor de Goku. Raditz le revela a Goku que pertenece a la raza guerrera de los Saiyan, y le informa que fue enviado originalmente a la Tierra para destruir a los habitantes del planeta y prepararla para ser vendida, pero se había olvidado de ella debido a su golpe en la cabeza en su infancia. Cuando Goku se opone a llevar a cabo su misión olvidada, Raditz lo derrota con solo un golpe en el estomago de Goku, derribándole, y secuestra a Gohan, dándole a Goku un última opción: asesinar a un centenar de humanos dentro de las próximas veinticuatro horas, y dejarlos en la orilla de la playa, o sino mataría a Gohan.

        <br><br>

        Para derrotar a Raditz y salvar la Tierra, Krilin y Kame-Sen'nin se ofrecen a ayudar a enfrentarlo, pero Goku no acepta su ayuda, debido al hecho de que si mueren de nuevo, no podrán volver a la vida, ya que fueron asesinados. Piccolo, que había estado escuchando todo lo dicho por Raditz mientras estaba escondido detrás de Kame House, le ofrece a Goku realizar una alianza temporal para luchar contra el Saiyan, por lo que se unen. Cuando Piccolo y Goku aparecen ante Raditz con Gohan encerrado en su nave espacial, Goku le da a Raditz una última oportunidad para liberar a su hijo, pero Raditz se niega. Tanto Goku como Piccolo se quitan su ropa pesada para comenzar la pelea. Incluso con sus fuerzas combinadas, Raditz aún mantiene la ventaja. Con la ayuda de Gohan que desata su poder escondido para atacar a Raditz y debilitarlo, Goku y Piccolo son capaces de completar un plan para ganar.
        
        <br><br>

        Goku hace el último sacrificio sujetando a Raditz para que Piccolo acabara con ambos con su poderoso ataque Makankosappo, atravesando a ambos. Sin embargo, antes de morir, Raditz le revela a Piccolo y Goku que dos Saiyan aún más poderosos que él, Vegeta y Nappa, están en camino a la Tierra, y llegarán en un año. Con Krilin a su lado, Goku muere, y Kami lo lleva al otro mundo donde conoce a Enma Daio, quien le dice que puede atravesar el Camino de la Serpiente y así llegar al planeta de Kaio del Norte donde será entrenado por este para poder derrotar a los Saiyan. En su viaje, conoce y escapa de la Princesa Serpiente e incluso escapa del Infierno, tras caerse del camino, teniendo que comenzar de nuevo todo el recorrido (esto solo sucede en el anime).
        
        <br><br>

        Cuando Goku finalmente llega al planeta del Kaio del Norte, él lo confunde con un simio, Bubbles, y él imita las acciones del mono hasta que conoce al verdadero Kaio. Así tiene que superar desafíos ridículos antes de comenzar su entrenamiento, como contarle un chiste al Kaio, atrapar a Bubbles y golpear a su otro acompañante, Gregory, con un martillo en la cabeza. Debido a la gravedad aumentada del planeta, Goku tiene dificultad con los retos, pero con el tiempo logra completarlos. Después de eso, Goku aprende varias técnicas nuevas y aumenta su poder considerablemente. Sus amigos en la Tierra se las arreglan para volverlo a la vida usando las esferas del dragón, pero Kaio se olvidó tener en cuenta el tiempo que tardaría en volver. Así Goku se apresura en completar el Camino de la Serpiente, lo cual Kaio estima que ahora tardaría alrededor de dos días en recorrerlo y unirse a la pelea contra los Saiyan.
        
        <br><br>

        En el momento en que Goku llega, solamente Krilin y Gohan seguían vivos. Al llegar, salva a su hijo de ser aplastado por Nappa, y es informado que sus amigos murieron, enfureciéndose, sorprendiendo a Vegeta con su nuevo poder. Para sorpresa de todos, Goku se había vuelto lo suficientemente fuerte como para derrotar a Nappa sin mucha dificultad, evitando sus ataques, y por último, detener su ataque más poderoso sin ningún problema. Cuando Nappa se dirigía a matar a Krilin y Gohan, Goku rompe la espalda de Nappa con el Kaio-ken y lo deja en el suelo, pero es Vegeta quien lo mata al final. Cuando Goku comienza su pelea con Vegeta, incluso el Kaio-ken aumentado dos veces no funciona. Goku, en un intento desesperado, utiliza el Kaio-ken aumentado tres veces, y vence a Vegeta al ponerse a su nivel de fuerza por breves momentos. Furioso, Vegeta trata de destruir el planeta con su ataque Galick Ho, Goku le responde con un Kamehameha y, tras usar el Kaio-Ken aumentado cuatro veces, logra devolverle el ataque pero le ocasiona a su cuerpo mucho dolor.
        
        <br><br>
        
        Cuando Vegeta regresa, se transforma en Ōzaru usando una Luna Artificial, y Goku se da cuenta de que él mismo fue quien asesinó a su abuelo, y se disculpa por ello, con la esperanza de que lo perdonara. Tras una larga batalla, Vegeta es finalmente derrotado con la intervención oportuna de Krilin, Gohan y Yajirobe. Sin embargo Goku termino brutalmente lastimado, con sus piernas rotas por Vegeta en su forma de Ōzaru . Después de la pelea, Krilin intenta tomar la vida de Vegeta usando la espada de Yajirobe, pero es detenido por Goku, quien lo convence de que le perdonara la vida y prometiendo que sería él quien lo derrotara la próxima vez.</p>

        <h3 class="col-12 mt-5">Saga Freezer</h3>

        <p class="col-12 mt-5">Después de la batalla con Vegeta, Goku está gravemente herido, y Karin todavía no tiene Semillas del Ermitaño, por lo que Goku tiene que quedarse en el hospital mientras que Bulma, Gohan y Krilin se dirigen al planeta Namek para encontrar las esferas del dragón para revivir a sus amigos caídos. Después de unas semanas, Karin envía a Yajirobe a darle a Goku algunas semillas que acaban de crecer, que lo cura completamente. Goku, una vez recuperado y enterado de la crisis por la que atraviesa el Planeta Namek, entonces utiliza la nueva nave espacial que le pidió al Dr. Brief, que construyó a partir de la nave con la que Goku llego a la Tierra, y se dirige a Namek.
        
        <br><br>

        Durante su viaje a Namek, Goku entrena en diversos niveles de gravedad pero la máquina de gravedad artificial de la nave comienza a funcionar mal, haciendo que la aumente 100 veces, casi aplastando a Goku. Finalmente Goku es capaz de arreglar la gravedad con el control de la máquina, sin embargo, decide seguir entrenando en ese entorno para entrenar y poder hacer frente a Freezer. En un momento Kaio le aconseja alejarse de Freezer, llamándolo el ser más poderoso del universo, y que no tendría ninguna oportunidad contra él.

        <br><br>
        
        Al llegar a Namek, una vez más, Goku entra en una batalla, donde se encontraba luchando Gohan, Krilin y Vegeta contra Recoom, miembro de las Fuerzas Especiales Ginyu. Goku cura a los tres con Semillas del Ermitaño, y muestra su nuevo poder derrotando fácilmente a Recoom, y luego se enfrenta solo a Burter y Jeice. Goku los engaño haciéndolos pensar que su nivel de pelea era de 5.000, aumentando su nivel rápidamente para atacar. Después de esquivar varios ataques, Goku derrota a Burter y deja ir a Jeice, que rápidamente trae al capitán Ginyu, quien tiene la habilidad de cambiar de cuerpo con cualquier persona que crea conveniente.

        <br><br>
        
        Después de un pequeño calentamiento, Goku supera al capitán Ginyu, asustando con su nivel de pelea a Ginyu y Jeice, ya que era mucho más alto que el de ellos. Golpeándose a sí mismo antes, el capitán Ginyu intercambia cuerpos con el de Goku, pero no es capaz de controlar totalmente su nuevo cuerpo y su poder. Vegeta aprovecha esta oportunidad para humillar a Ginyu, hiriendo gravemente el cuerpo de Goku. Goku se las arregla para conseguir su cuerpo de regreso después de interceptar un rayo enviado por el capitán Ginyu que pensaba conseguir el cuerpo de Vegeta. El cuerpo de Goku queda muy lastimo, así que utilizan una máquina médica dentro de la nave espacial de Freezer que le sana aunque esto tarda un poco. 

        <br><br>
        
        Cuando sale, una vez más, se une a la batalla contra Freezer, donde Vegeta es torturado por Freezer. Goku escucha las últimas palabras de Vegeta, que le hablan sobre como Freezer utilizo y se deshizo de los Saiyan, hasta que muere y lo entierra pidiendo que le diera un poco de su orgullo Saiyan. Lleno de ira, declara que va a derrotar a Freezer en nombre de los Saiyan y namekianos que asesinó. La batalla comienza estando Goku confiado de sus habilidades, pero Freezer comienza a mostrar más de su poder superándolo fácilmente. Incluso con Freezer otorgándole ventaja (como no usar las manos), Goku todavía no puede igualar al tirano. Incluso la combinación del Kaio-ken x20 y su Kamehameha no tiene ningún efecto, Freezer comienza a golpear a Goku, entonces recuerda que todavía tiene la Genki-dama, y decide reunir la energía necesaria, quedándose de pie con los brazos levantados. Piccolo (que había sido resucitado y fue transportado a Namek para ayudar), Gohan y Krilin intentan distraer a Freezer de Goku para que pudiera reunir la energía. Por último, con todas sus fuerzas, Goku lanza el ataque, que impacta a un Freezer que pensaba destruir el planeta, y aparentemente desaparecer, junto con una buena porción de Namek en la devastadora explosión.

        <br><br>
        
        Cansado Goku comienza a reír, junto con sus amigos, que creen que Freezer finalmente fue derrotado. Pero incluso el ataque más poderoso de Goku, la gran Genki-dama, no pudo matar a Freezer. Por último, cuando Freezer asesina a Krilin y hiere de gravedad a Piccolo, Goku, con ira extrema, libera sus reservas de energía interna y se transforma en un Super Saiyan. El combate se reanuda, superando completamente a Freezer, incluso cuando utiliza el 100% de su poder. En su desesperación, Freezer lanza una ráfaga de energía contra el núcleo de Namek, causando una reacción en cadena que destruirá el planeta en cinco minutos dicho por el mismo Freezer. Durante la lucha siguiente, Freezer utiliza el ataque de platillos cortantes, creando dos discos rosados que siguen a su oponente. Goku se mueve demasiado rápido para ser alcanzado por el ataque y maniobra para que Freezer esté entre él y los discos. Goku grita advirtiendo a Freezer, pero Freezer es demasiado lento y es cortado por la mitad, perdiendo un brazo, sus piernas y parte de su cola. Estando débil él, ruega a Goku para que lo ayude. Goku, creyendo que Freezer no merecía ser perdonado, le da un poco de su energía como una muestra de misericordia. Amargo por su derrota, Freezer utiliza el poder prestado para lanzar por la espalda un poderoso ataque a Goku. Sin embargo, Goku se da cuenta del ataque y contraataca a Freezer, derrotándolo.

        <br><br>
        
        Goku vuela a la nave espacial de Freezer y presiona todos los botones para tratar de hacer que la nave despegara, sin embargo, no funciona y la nave espacial cae en la lava. Por suerte, logra escapar rápidamente de Namek usando una de las naves espaciales de las Fuerzas Especiales Ginyu. Las coordenadas llevan a Goku al Planeta Yardrat, que iba a ser el próximo objetivo de las Fuerzas Especiales Ginyu. Sus amigos, que fueron transportados a la Tierra por un deseo hecho con las Esferas del Dragón de Nameki, creen que él murió. Sin embargo, meses más tarde, cuando tratan de revivir a Goku y Krilin, se enteran de que Goku está vivo. Cuando deciden transportarlo de regreso a la Tierra, se niega, diciendo que él va a volver por sus propios medios. Mientras que en Yardrat, Goku aprende una nueva técnica llamada la teletransportación.</p>

        <h3 class="col-12 mt-5">Saga Androide</h3>

        <p class="col-12 mt-5">Dos años más tarde, Goku regresa a la Tierra, donde se enfrenta a Trunks, el hijo Saiyan de Vegeta y Bulma del futuro. El adolescente como un Super Saiyan acababa de matar tanto Freezer y a su padre el Rey Cold momentos antes de que llegara Goku. Trunks pone a prueba el poder de Goku en un pequeño enfrentamiento donde ataca con su espada, Goku se defiende a distancia solamente usando un dedo (con energía concentrada), alegando que sabía que Trunks no lo atacaría seriamente. Satisfecho, Trunks le da a Goku la medicina que curará le enfermedad al corazón que contraería en tres años, recomendándole que la tome cuando se comience a sentir mal. Trunks del Futuro también le advierte sobre dos androides que amenazaran a la Tierra en tres años. Goku, Gohan y Piccolo pasan los próximos tres años entrenando para enfrentar a esta nueva amenaza. Sin embargo, la visita de Trunks del Futuro altera de alguna manera la aparición de la enfermedad, por lo que no se manifiesta durante esos tres años, y por lo tanto Goku no toma la medicina.

        <br><br>

        Tres años más tarde, dos androides, el Dr. Gero (como el Androide Número 20) y el Androide Número 19, aparecen y atacan una ciudad. Los Guerreros Z los enfrentan, y Yamcha es el primero en ser atacado, al haber sido empalado por la mano del Dr. Gero y de haber sido robada su energía. Sin embargo, él es salvado por una Semilla del Ermitaño y los Guerreros Z llevan a las dos máquinas asesinar afuera de la ciudad para luchar. A pesar de ser un Super Saiyan, Goku es derrotado por Nº19 cuando comienza a debilitarse drásticamente por la enfermedad cardíaca que comienza a manifestarse durante la pelea.

        <br><br>
        
        Sin embargo, Vegeta, quien ahora es un Super Saiyan, logra salvar a Goku antes de que fuera derrotado por los androides, y después de jugar con él un poco, destruye al Androide Número 19 con facilidad, disfrutando de la batalla en gran medida. Yamcha lleva a Goku con Chi-Chi para obtener la medicina que salvaría su vida. Mientras tanto, el resto de los Guerreros Z se enteran por Trunks, que ha vuelto a ayudarles a luchar contra los androides, que la historia había sido alterado de alguna manera, y que los androides de su tiempo, osea Número 17 y Número 18, no eran con los que estaban luchando. Poco después, el Dr. Gero afirma que despertara a 17 y 18, y huye del campo de batalla. Los guerreros z tratan de detener al Dr. Gero de activar a los androides pero fallan. Sin embargo, una vez que el Dr. Gero activa a Nº17 y Nº18, se revelan contra él y lo asesinan, y activan a otro androide, el Androide Número 16, que fue creado exclusivamente para asesinar a Goku.

        <br><br>
        
        Mientras los Guerreros Z intentan detener a los androides, Piccolo (que se había fusionado recientemente con Kami) descubre una nueva amenaza llamada Cell, una forma de vida biológica creada por el Dr. Gero, hecho con el ADN extraído de Goku, sus amigos, y enemigos con los que lucharon en el pasado. Cell fue diseñado para absorber a los androides 17 y 18, con el fin de perfeccionar su cuerpo, acabar con Goku, y ser el más poderoso del universo. Cell logra encontrarse con los androides y absorbe al Androide Número 17, alcanzando su segunda etapa. Mientras tanto, Goku logra curarse de su enfermedad y junto a Gohan, Vegeta y Trunks deciden entrenar en la Habitación del Tiempo en el templo de Kami donde un día dentro equivale a un año, la gravedad es mayor y posee temperaturas volátiles.

        <br><br>
        
        Vegeta y Trunks entran primero y después se dirigen a enfrentar a Cell, mientras Goku y Gohan toman su turno para entrar a la habitación. Una vez dentro, Goku logra alcanzar hasta la forma del Super Saiyan de 3° Grado para alegría de Gohan, pero Goku le explica que no podrá vencer a Cell en ese estado debido a que su velocidad se disminuye y consume demasiado poder. Al darse cuenta que los Saiyans híbridos como Trunks del Futuro pueden convertirse en Super Saiyan, Goku entrena intensamente a Gohan y lo ayuda a convertirse en un Super Saiyan también. Durante este entrenamiento, Goku se da cuenta de que el potencial de Gohan puede superar fácilmente su propio poder, especialmente después de que Gohan logró alcanzar un nivel del Super Saiyan sin precedentes antes de perder la conciencia por el entrenamiento, y que, si no es capas de derrotar a Cell, Gohan podría.</p>

        <h3 class="col-12 mt-5">El torneo de Cell</h3>

        <p class="col-12 mt-5">Mientras Goku entrena, Cell absorbe a la Androide Número 18 y alcanza su forma perfecta, gracias a las acciones de Vegeta para luchar contra Cell en su forma perfecta. Vegeta fue derrotado fácilmente cuando desafió a Cell, al igual que Trunks, que fracasó debido a que la forma del Super Saiyan de Tercer Grado tenía mucha masa muscular y no podía golpear a Cell por su falta de velocidad, un defecto del cual Goku se dio cuenta. Después de que Goku y Gohan acabaran con su entrenamiento, Cell anuncia que realizara un Torneo en diez días con el fin de dar una oportunidad a cualquier persona que quiera desafiarlo. Durante diez días, Goku y Gohan lo dedican para entrenar y relajarse mientras siguen transformados en Super Saiyan todo el tiempo. Goku también utiliza este tiempo para viajar al Nuevo Planeta Namek para pedirle a Dende que sea el nuevo guardián de la Tierra, ya que Piccolo se había fusionado con Kami, en un intento de detener a Cell, y la fusión había hecho las esferas del dragón inútiles. Después de que Dende crea nuevas esferas del dragón utilizando la base de las antiguas, Goku realiza la búsqueda de las reactivadas esferas del dragón con el fin de utilizarlas después de derrotar a Cell para resucitar a quien haya asesinado el androide.

        <br><br>

        Después de haber pasado diez días, los Guerreros Z se dirigen al lugar donde se encuentra Cell. Después de que el supuesto campeón del mundo, Mr. Satán, fuera derrotado fácilmente, Goku se ofrece para ser el primero en luchar con Cell, creyendo que no era rival para el androide pero con el objetivo de ver sus capacidades. Goku está muy parejo con Cell aunque su oponente suprimía su poder, y parece que no puede ganar tras muchos intentos. Incluso después de atacar utilizando el Kamehameha y la tele-transportación para atacarlo de frente, que destruye la parte superior del cuerpo de Cell, viendo como horror como el androide se regenera con facilidad, gracias a las células que tiene en su cuerpo de Piccolo. Después de haberse cansado, Goku decide rendirse y elige como su remplazo a Gohan, quien está convencido que tiene el poder necesario para derrotar a Cell. Gohan piensa que su padre se había estado conteniendo, sólo para enterarse de que no era así, lo cual significaba que Gohan puede ser más fuerte que Goku, que estaba luchando seriamente.

        <br><br>
        
        Gohan decide luchar y expulsa su poder acercándose incluso al de su padre, y lucha contra Cell, pero sin entusiasmo alguno. Después de que Gohan le cuenta a Cell que cuando se enfada expulsa mucho más de su poder, el androide comienza a tener curiosidad y trata de hacer que expulse su verdadero poder haciendo que sus hijos, los Cell Jr, atacan a Goku y los demás. Todos los guerreros Z no pueden vencer a los Cell Jr, incluyendo a Goku, que estaba agotado por su batalla contra Cell. Después de que el Androide Número 16 intentó autodestruírse junto con Cell, lo cual no sucede y es destruido, 16 le pide a Mr. Satán que lo llevara ante Gohan, e intenta convencerlo de que a veces pelear es necesario. Cuando Cell destruye la cabeza de 16, esto provoca un cambio en Gohan, que alcanza la forma del Super Saiyan 2, destruyendo fácilmente a los Cell Jr y apalea a Cell sin problema alguno, haciendo que regurgitara a la Androide Número 18 debido a los daños sufridos.

        <br><br>
        
        Cuando Cell decide destruirse junto a la Tierra, como último recurso, Goku se ve obligado a sacrificarse con tan de evitarlo. Así se teletransporta al planeta del Kaio del Norte, donde muere por la explosión causada, junto a Kaio, Bubbles y Gregory. Sin embargo, Cell logra regenerarse en una forma Super Perfecta, y utiliza la recién aprendida tele-transportación para volver a la Tierra. En el choque entre el Kamehameha de Cell y Gohan, Goku motiva a su hijo desde el Otro Mundo, que después de una larga lucha, logra eliminar por completo al androide. Después de la derrota de Cell, Goku insiste en que permanecerá muerto, a pesar de que podría resucitar, porque piensa que es él quien atrae los problemas a la Tierra, como Freezer y los androides de la Patrulla Roja. Goku decide que será más seguro para la Tierra si no regresa, y la Tierra tiene a Gohan para protegerla si es necesario, diciéndole adiós a sus amigos.</p>

        <h3 class="col-12 mt-5">En el Otro Mundo</h3>

        <p class="col-12 mt-5">Tras la batalla con Cell, Goku se ve junto al Kaio del Norte, Bubbles y Gregory en el Camino de la Serpiente. De repente, Goku recuerda que Kaio le hablo sobre los guerreros del Otro Mundo, por lo que se dirigen al planeta del Gran Kaio. Al llegar, Kaio del Norte comienza a discutir con su rival el Kaio del Oeste, acompañado de su luchador más fuerte, Paikuhan.

        <br><br>

        Por petición del Gran Kaio, Paikuhan se dirige al Infierno a detener a un grupo de villanos que están haciendo estragos en el lugar, seguido de Goku. Al llegar, salva a un ogro de ser empalado y derrota sin problemas a las Fuerzas Especiales Ginyu. Preparándose para enfrentarse a Cell, observa como Paikuhan lo derrota con facilidad y acaba con Freezer y el Rey Cold de un golpe. Tras derrotarlos, Goku y Paikuhan se encuentran felices al conocer a alguien poderoso, tratándose del uno y del otro.

        <br><br>
        
        Al volver, Goku es bienvenido por Kaio y por un grupo de guerreros perteneciente a la Galaxia del Norte, conociendo a Olib, que en vida fue un héroe en la Tierra. Así todos se dirigen a la mansión del Gran Kaio, donde se realizaría un torneo en el cual el ganador sería entrenado personalmente por el mismo Gran Kaio. Durante el torneo, Goku avanza derrotando a Caterpy de la Galaxia del Sur, Arqua de la Galaxia Este, y Maraiko de la Galaxia Oeste. En la final Goku se enfrenta a Paikuhan, y después de una larga pelea, ambos son descalificados por tocar los límites de la habitación.

        <br><br>
        
        En los próximos siete años, mientras Goku entrena en otro mundo logra logra alcanzar el estado del Super Saiyan 2 y el Super Saiyan 3, siendo este último el cual aumenta su poder, incluso más allá de su ya poderoso Super Saiyan 2, pero consume una inconmensurable cantidad de ki.</p>

        <h3 class="col-12 mt-5">El malvado mago Babidi</h3>

        <p class="col-12 mt-5">Siete años más tarde, a Goku se le da un permiso especial para regresar a la Tierra por un día para participar en el 25° Torneo Mundial de Artes Marciales, donde asistirán Gohan, Goten, Vegeta y Trunks. En su regreso se encuentra con su segundo hijo, Goten, que había nacido después de su muerte, en los Juegos de Cell, y conoce a Videl, la amiga de Gohan de su escuela secundaria que es la hija de Mr. Satán, el farsante que recibió todo el crédito por salvar el mundo de Cell. Goku se enfrentaría a Vegeta en el sexto combate, pudiendo finalmente resolver su rivalidad, pero tuvo que ser pospuesta debido a que Videl fue gravemente golpeada por Spopovich, quien, junto a Yamu, es controlado por el malvado mago Babidi. Mientras Gohan debe enfrentarse a Kibito (el asistente del Kaio-shin, que también estaba en el torneo), Spopovich y Yamu roban la energía de Gohan Super Saiyan 2 y abandonan el torneo, mientras que todos los Guerreros Z hacen lo mismo para seguirlos hasta la guarida de Babidi.

        <br><br>

        El Kaio-shin y su asistente, Kibito, se presentan y les comunican a los Guerreros Z sobre los planes de Babidi que desea traer la destrucción y el terror a través de todo el universo liberando al temible Majin Boo. Una vez que llegan a la guarida, donde son emboscados por Dabra, el poderoso gobernante del mundo de los demonio, que mata a Kibito y convierte a Krilin y Piccolo en piedra. Goku, Gohan, Vegeta y Shin entran a la nave de Babidi y se turnan para derrotar a cada uno de sus soldados en cada habitación de la nave, impresionando con su poder al Kaio-shin. Goku lucha contra Yakon que absorbe su energía, pero Goku lo hace explotar. Mientras Gohan pelea contra Dabra, Vegeta se queja de que él puede hacerlo mejor. Cuando se entera de esto Babidi, posee a Vegeta a través de la maldad en su corazón y lo vuelve malvado de nuevo. Goku y Vegeta son transportados a un lugar deshabitado para que resuelvan su batalla, mientras que Gohan y el Kaio-shin siguen con el plan de detener Babidi.</p>

        <h3 class="col-12 mt-5">El antiguo demonio, Majin Boo</h3>

        <p class="col-12 mt-5">Goku y Vegeta tienen una batalla trascendental que da energía más que suficiente para el despertar de Majin Boo. A pesar de que están muy igualados como Super Saiyan 2, Goku decide detener la pelea cuando siente que Majin Boo ha sido liberado y le suplica a Vegeta para ayudarlo a derrotar a Majin Boo. En una falsa muestra de acuerdo, Vegeta golpea a Goku por la espalda mientras él toma la última Semilla Senzu de su bolsa. Tras comer la última semilla, Vegeta se dirige a enfrentarse a Majin Boo solo.

        <br><br>
        
        Al despertar, Goku no podía sentir a Vegeta o a Gohan en cualquier lugar y llega a la conclusión de que murieron peleando (cuando en realidad Gohan se salvó por el gravemente herido Kaio-shin, y sólo Vegeta había muerto en un vano intento de acabar con Majin Boo). Se dirige a la Atalaya de Kami y es curado por Dende, quien confirma que Vegeta se sacrificó en un intento de destruir a Majin Boo. Después de llevar a todos sus amigos al Palacio, les informa a todos de las malas noticias. Con el poco tiempo que le queda en la Tierra, con ayuda de Piccolo, decide enseñarle a Trunks y Goten la técnica de la fusión, que aprendió de unos guerreros Metamoranos mientras se encontraba en el otro mundo, por lo que podrían unirse en un ser con poderes inmensos que podría hacer frente a Majin Boo.
        
        <br><br>

        Después de enterarse de que el radar del dragón estaba en la Ciudad del Oeste y Majin Boo estaba a punto de causar más destrucción, Goku decide distraerlo mientras que Trunks recupera el radar del dragón antes de que sea destruido junto a la Capital del Oeste por Majin Boo, de lo contrario, nunca serían capaces de encontrar las esferas del dragón. Goku se teletransporta donde está Majin Boo, y todo el mundo (a través de la telepatía de Babidi) es testigo de como Goku alcanza la forma del Super Saiyan 3, cuyo poder podía ser detectado hasta el planeta Supremo. Sorprendentemente, Majin Boo tiene buen rato y disfruta de la pelea, incluso obligando a Goku a desviar una versión imitada de su propio Kamehameha, pero Goku regresa al Palacio ya que Trunks logró volver con el radar del dragón. Más tarde afirma que probablemente pudo haberle ganado, pero que quería dejarlo en manos de Gohan, Trunks y Goten porque él no estaría siempre, y que necesitan tener una oportunidad de salvar al universo en lugar de depender de alguien que ya estaba muerto. Desafortunadamente, el transformarse en Super Saiyan 3 acorta el tiempo límite que tenía Goku para permanecer en la Tierra y se ve obligado a volver al Otro Mundo.
        
        <br><br>

        Una vez que Goku regresa al otro mundo, se entera de que su hijo, Gohan, no está muerto, y que está entrenando en el planeta Supremo. Goku se teletransporta allí para ser casi rebanado por la legendaria Espada Z, y para pone a prueba su poder, el Kaio-shin invoca un bloque hecho con el material más duro del universo, como material de prueba. Goku lanza el cubo a Gohan, esperando que la Espada Z lo cortara fácilmente. En cambio, la Espada Z se parte en dos y de ella surge el Kaio-shin de hace 15 generaciones, quien liberaría todo el poder de Gohan con un ritual.</p>

        <h3 class="col-12 mt-5">El plan de la Fusión</h3>

        <p class="col-12 mt-5">A través de una bola de cristal, Goku observa la pelea entre Gotenks Super Saiyan 3 y Super Boo, sorprendido de que los dos niños por sí solos, pudieran acceder al estado de Super Saiyan y eran capaces de alcanzar la forma de Super Saiyan 3 tan rápido cuando se fusionan. Como Gotenks está a punto de terminar con Super Boo después de una larga batalla, él vuelve a su estado normal y rápidamente se separa. Gohan (después de que todo su poder fuera liberado) llega para luchar, golpeando sin esfuerzo a Boo con sus nuevos poderes, pero Super Boo logra escapar al autodestruírse hasta que Goten y Trunks pudieran fusionarse de nuevo una hora más tarde, así absorbe a Gotenks y Piccolo, ganando gran intelecto y poder.

        <br><br>

        Cuando Gohan es superado por Super Boo, el Kaio-shin Anciano le da su vida a Goku para que pueda regresar a la Tierra y ayudar a Gohan. También le entrega sus pendientes para que pueda fusionarse con Gohan con el fin de crear a un guerrero sin igual que fácilmente destruiría a Boo sin siquiera la necesidad de transformarse según las palabras del Kaio-shin Ancia. Cuando Goku llega al campo de batalla, para gran sorpresa de Gohan y Super Boo, corta a Super Boo por la mitad con un disco de energía y lanza uno de los pendientes a Gohan. que no logra agarrar a tiempo, y Goku le dice que se apresure en buscarlo. Mientras tanto pelea contra Super Boo como un Super Saiyan 3. Durante la pelea, Gotenks se separa en el interior de Super Boo, y su poder se reduce a casi un tercio de su poder original. Goku dice que no es una gran amenaza ahora, y se da cuenta de que pueden vencer a Super Boo fácilmente. Sin embargo, Gohan es absorbido cuando Super Boo lo encuentra con la guardia baja. En el momento de desesperación, el recién resucitado Vegeta aparece, y después de que Goku se teletransporta donde se encuentra el príncipe Saiyan. Tras una pequeña pelea contra Super Boo, Vegeta decide fusionarse, los dos Saiyans restantes más poderosos se fusionan formando a Vegetto

        <br><br>
        
        Vegetto supera fácilmente a Super Boo, incluso con Gohan absorbido. Super Boo utiliza todas las técnicas que ha conseguido contra el Saiyan fusionado, pero Vegetto logra esquivarlos sin muchos problemas. Después de una larga batalla, el poderoso Vegetto gana fácilmente. Sin embargo, supuestamente debido a la arrogancia de Vegeta en no terminar fácilmente con Boo, Vegetto es finalmente absorbido por Super Boo, el cual crea un escudo para protegerse. Sin embargo, se reveló más tarde que él decidió ser absorbido a propósito porque quería rescatar a sus amigos antes de acabar con Super Boo.

        <br><br>
        
        Dentro de Boo, Vegetto se separa automáticamente debido a las propiedades del sistema digestivo de Super Boo. Si bien en el estómago, Goku es atacado por las enzimas que cubren rápidamente todo su cuerpo, haciéndolo pegajosa y quemándolo. Mientras lucha por liberarse, Goku casi es comido por un gusano hasta que finalmente logra liberarse. Después de viajar a través del cuerpo de Super Boo, Goku y Vegeta alcanzan el cerebro de Super Boo donde encuentran a Gohan, Trunks, Goten y Piccolo inconscientes pero aún con vida. Después de que liberan a todos y tener que luchar contra Super Boo dentro de su propio cuerpo, Vegeta decide arrancar al inconsciente Majin Boo gordo del cuerpo de Super Boo. A pesar de las súplicas de Super Boo, Vegeta termina por arrancarlo y Super Boo sufre otra transformación. Goku y Vegeta logran escapar del cuerpo de Super Boo con los Guerreros Z recién rescatados. Así Super Boo vuelve a su forma original, Pequeño Boo.</p>

        <h3 class="col-12 mt-5">La batalla final</h3>

        <p class="col-12 mt-5">En el exterior, Goku rescata a Mr. Satan, su perro Bee, y Dende, pero no llega a llevarse consigo a Gohan, Goten, Trunks y Piccolo antes de que el recién transformado Pequeño Boo destruyera la Tierra en una demostración extrema de su poder (Vegeta lo detuvo antes de hacer esto con un ataque mucho más pequeño, pero después lanza una enorme bola de energía que no podían desviar). El Kaio-shin llega al lugar y se teletransporta con Vegeta, Goku, Dende, Bee y Mr. Satán trayéndolos al Planeta Sagrado. Después de regenerarse, Pequeño Boo comienza a buscar a Goku y Vegeta.

        <br><br>

        Cuando Pequeño Boo los encuentra, Vegeta y Goku juegan al piedra, papel o tijera para decidir quien luchaba primero. Goku gana y es quien peleará. En el anime, comienza como un Super Saiyan 2, pero con el tiempo se transforma en un Super Saiyan 3. Así logra pelear en iguales condiciones, teniendo ventaja en algunas ocasiones, pero no se da cuenta de los inconvenientes al tener un cuerpo vivo, y se agota. Trata de reunir energía, mientra Vegeta distrae a Pequeño Boo (siendo brutalmente golpeado en el proceso), pero su transformación como un Super Saiyjin 3 drena sus reservas de energía y pronto pierde la capacidad de mantener dicha forma. A sugerencia de Vegeta, Goku comienza a recolectar energía para formar una Genkidama y utilizar la energía de la Tierra y sus habitantes (los cuales fueron resucitado durante la pelea).

        <br><br>
        
        Usando la telepatía del Kaio del Norte, Vegeta habla con las personas y les pide a todos levantar sus manos para donar energía a la Genki-dama de Goku, pero no se atreven a hacerlo. Todo el mundo en Nuevo Namek y en el Otro Mundo dan de su energía para la Genki-dama, además de los amigos de Goku. Mientras tanto,el Majin Boo gordo, que trataba de entretener a Pequeño Boo, cae derrotando dejando a un lastimado Vegeta protegiendo a Goku mientras él termina de formar la Genki-dama. Finalmente, es Mr. Satán quien convence a todo el mundo en la Tierra de dar la energía necesaria a Goku para destruir a Pequeño Boo de una vez por todas. Con la contribución de la energía de la Tierra, Goku lanza la Genki-dama. Pero tan imposible como parece, Pequeño Boo logra detener el ataque y poco a poco comienza a empujarlo de vuelta hacia Goku. Vegeta se da cuenta de que Goku utilizó el resto de su poder para reunir la energía y formar la Genki-dama y no tiene la fuerza necesaria para derrotar a Boo.

        <br><br>
        
        Utilizando el último deseo de las esferas del dragón de Namek (los dos primeros se usaron para restaurar la Tierra a su estado normal y luego el segundo para revivir a todos aquellos que murieron desde la llegada de Babidi, exceptuando a los malvados), Dende desea que todo el poder que Goku había utilizado fuera restaurado. Una vez con su poder restaurado, Goku se transforma en Super Saiyan, y ejerce presión sobre la Genkidama. Después de recordar los diferentes combates que tuvieron contra Boo, Goku pide un último desea a sí mismo, el cual es que Boo renaciera como un buen tipo para que pudieran luchar de nuevo algún día. Con la bendición de los residentes de la Tierra, Goku destruye a Pequeño Boo.</p>

        `)
    })

    /* Historia Dragon Ball Super*/
    $(dbs).click(() => {
        if(contador === 0){
            $('.historia').remove();
            contador += 1;
        }
        $(historiaDB).hide();
        $(historiaDBZ).hide();
        $(historiaDBS).show();

        $(historiaDBS).append(`
        <h2 class="col-12 text-center mt-5">Dragon Ball Super</h2>

        <h3 class="col-12 mt-5">Tiempo de Paz</h3>

        <p class="col-12 mt-5">Algunos años luego de la derrota de Majin Boo, Goku empieza a trabajar como agricultor, plantando rábanos para ganar dinero, el cual reclama Chi-Chi. Mientras ara el campo, Goten aparece y le da el almuerzo a su padre. Luego de que termina de comer, Goku se transforma en Super Saiyan, haciendo que Goten caiga por la ladera de la montaña. Goku se da cuenta rápidamente y utiliza la Teletransportación para rescatar a su hijo y guardar el tractor. Luego le explica a su hijo que debe tener cuidado con lo que hace para así poder trabajar y luego entrenar por si las dudas aparece un enemigo más fuerte que Majin Boo.

        <br><br>

        Más tarde, Mr. Satán llega y le ofrece a Goku 100 millones de Zeni para darle las gracias por derrotar a Majin Boo. Goku primero se niega, sin entender que era una gran cantidad de dinero, pero luego Goten le dice a Goku que si le da todo ese dinero a Chi-Chi seguramente pueda ir a entrenar con el Kaio del Norte. Luego de aceptar y hablar con Chi-Chi, Goku usa la Teletransportación y va al Planeta Kaio para seguir con su entrenamiento.

        <br><br>
        
        Cuando Goku llega al planeta del Kaio del Norte, hace que este se choque contra su casa. Luego del accidente, el Kaio del Norte le da alimentos a Goku y hace que reconstruya su casa. Mientas reconstruye la casa, Goku le explica al Kaio del Norte que está allí para continuar con su entrenamiento aprovechando que en su planeta hay alta gravedad. Luego el Kaio del Norte le dice a Goku que él es una figura importante, y es el más importante entre todos los Kaios, pero que lo ve como un amigo. Luego Goku se cambia de ropa y comienza nuevamente su entrenamiento.<p>

        <h3 class="col-12 mt-5">La Batalla de los Dioses</h3>

        <p class="col-12 mt-5">Goku continúa entrenando, hasta que oye su nombre en una conversación entre el Kaio del Norte, Kibito-shin y el Kaio-shin Anciano, en donde decían de mantener lejos a Goku del Dios de la Destrucción, Beerus. Goku asusta al Kaio del Norte, este trata de distraer a Goku y para que no le pregunte de la conversación, por lo que le hace recordad de cuando llevó a Cell a su planeta y eso le causó la muerte. Luego Goku recuerda que era el cumpleaños de Bulma y se asusta pensando en lo que le iba a hacer si no iba. Luego Goku nota que el Kaio del Norte está actuando extraño y se pregunta por qué.

        <br><br>

        El Kaio del Norte le dice a Goku que vaya a la fiesta de cumpleaños de Bulma o sino perderá amigos, pero Goku se niega a ir y entrena un poco más. Luego Goku lanza un Kamehameha y el Kaio del Norte se asusta de que derriben su casa de nuevo. Frustrado, accidentalmente el Kaio del Norte nombra a Beerus, despertando el interés de Goku. El Kaio del Norte le explica a Goku quien era Beerus, haciendo que Goku se interese en conocer a Beerus. Luego el Kaio del Norte se da cuenta que Beerus se está acercando y le dice a Goku que no haga algo tonto mientras Beerus esté allí y que se esconda en su casa. Beerus llega finalmente, aterrorizando al Kaio del Norte, luego Beerus y Whis se dan cuenta que Goku está allí.

        <br><br>
        
        Beerus les pregunta si saben que es un Super Saiyan Dios (un personaje que había visto en sueños) a lo que Goku y Kaio del Norte responden que no. Entonces, Whis le dice a Beerus que hay algunos Saiyan en un planeta llamado Tierra, por lo que Beerus se prepara para irse con Whis. Sin embargo, Goku le pide a Beerus que pelee con él para saber cuán poderoso es. A pesar de que a Beerus le parece una tontería, él acepta, y Goku se transforma en Super Saiyan mientras Kaio del Norte y Whis observan la pelea. Goku se lanza a darle golpes a Beerus pero éste los esquiva tan solo con una mano. Goku, viendo lo poderoso que es, se transforma en Super Saiyan 2, y después en Super Saiyan 3, pero no consigue hacerle ni un rasguño. Desesperado, le lanza un Kamehameha con toda su fuerza, destruyendo una gran parte del planeta, pero si hacerle daño a Beerus. Este, cansado de jugar con Goku, le da un par de golpes y lo deja inconsciente en el suelo. Tras eso, se va a la Tierra junto con Whis.

        <br><br>
        
        En la Tierra, a pesar de las precauciones de Vegeta, Beerus se enoja y decide destruir el planeta. Los Guerreros Z intentan enfrentarse a él pero es inútil, ya que son vencidos muy fácilmente. Ni siquiera la rabia de Vegeta al ver a su esposa ser golpeada sirvió para ni siquiera hacerle ni siquiera algo de daño al Dios de la Destrucción. Entonces, cuando parece que Beerus va a destruir la Tierra, aparece Goku (ya recuperado) dispuesto a enfrentarse a él. Sus amigos le preguntan como podrá vencerlo, a lo que Goku les sugiere la idea de llamar a Shen Long y preguntarle quién es el Super Saiyan Dios. Cuando lo invocan, el Dios Dragón les explica que el Super Saiyan es una transformación por tiempo limitado que se consigue cuando 5 Saiyan de corazón puro le dan su energía a otro Super Saiyan puro. Tras eso, Shen Long se va y se dan cuenta de un problema: Les falta un Saiyan para poder hacer el ritual. Pero en ese momento, Videl aparece y anuncia que está embarazada de una niña, por lo que intentan hacer el ritual con ella.

        <br><br>
        
        Entonces, a medida que le van dando su energía a Goku, el cielo y el mar comienzan a temblar y a volverse de distintos colores, las leyes del tiempo y el espacio se alteran, y los auras de los Saiyan se vuelven azules. En ese instante, Goku comienza a cambiar su aspecto, y se transforma en un Super Saiyan Dios, que físicamente le ha cambiado en cuanto a color de cabello y ojos, los cuales se vuelven de color rojo, y también los músculos, ya que ahora Goku está mas delgado que nunca. Tras eso, y ante el asombro de todos, Goku y Beerus se preparan para la Batalla de los Dioses.

        <br><br>
        
        Goku, tras probar sus nuevos poderes de Dios, comienza a pelear contra Beerus. A pesar de que al principio la batalla está bastante igualada, poco a poco se comienza a notar la superioridad de Beerus. El Dios de la Destrucción comienza a hacerle de todo a Goku: desde llevarlo a cabezazos al espacio, atravesarle la barriga, o incluso tirarlo del espacio a la Tierra más de una vez. Goku, intentando resistir los ataques, comienza a darle golpes de puño con toda su fuerza. Pero Beerus, devolviéndole sus ataques con otros golpes de puño, provocan entre los dos grandes choques de puño que peligran la existencia del universo, por lo que Kibito-shin, desde su mundo, le exige a Goku que deje de utilizar ese ataque, a lo que el Saiyan acepta.

        <br><br>
        
        Poco después, Goku pierde la energía del Super Saiyan Dios debido a su límite de tiempo, y a pesar de que absorbe una gran parte de la energía del Super Saiyan Dios y hace todos los esfuerzos posibles por intentar ganar a Beerus, este consigue noquearle y ganar la pelea. Tras eso, Beerus le revela a Goku que están en el Universo 7 y que hay 12 universos en total. También le revela que su ayudante Whis es más fuerte que él. Después de aquello, Goku y Beerus aterrizan en la Tierra y los Guerreros Z se preparan para su inminente destrucción. Sin embargo, gracias a la actitud noble de Goku, Beerus se apiada de ellos y miente diciendo que se ha quedado sin energía para no destruir el planeta, por lo que él y Whis se van. Tras eso, deciden seguir con la fiesta de cumpleaños de Bulma.</p>
        

        <h3 class="col-12 mt-5">La Resurección de Freezer</h3>

        <p class="col-12 mt-5">Unos meses después de la batalla contra Beerus, Goku se entera de que Vegeta se fue a entrenar con Whis al planeta del Dios de la Destrucción, por lo que, tras estar un rato suplicándole a Whis que fuera también su alumno, este acepta y se lo lleva al planeta de Beerus. Ahí, comienza un duro entrenamiento con Vegeta para volverse más fuerte y poder controlar el poder de Dios que había conseguido en la pelea contra Beerus.

        <br><br>

        Mientras tanto, Sorbet y Tagoma, unos soldados del ya muerto Freezer, reúnen las Esferas del Dragón para resucitar a Freezer. Tras ser resucitado, Freezer se da cuenta de que su nivel de poder comparado con el de Goku está exageradamente muy por debajo, por lo que Freezer decide entrenar por primera vez en su vida durante 4 meses, y así consigue un poder increíble. Tras eso, reúne a todos sus soldados y llega a la Tierra, donde Gohan, Piccoro, Maestro Roshi, Krilin y Tenshinhan le estan esperando.
        
        <br><br>

        Tras vencer a los soldados pero ser derrotados por Freezer, los Guerreros Z pierden toda la esperanza de vencer a este nuevo Freezer. Pero en ese momento, Bulma consigue entrar en contacto con Whis y le explica todo lo que está pasando. Entonces, Goku se tele-transporta junto con Vegeta a la Tierra y descubren el gran incremento del poder de Freezer desde la última vez que se vieron. Freezer se convierte en su Forma Final y en ese instante comienza la pelea entre él y Goku.

        <br><br>
        
        Tras darse varios golpes y ondas de energía, se dan cuenta de que están muy igualados, por lo que Goku le pide a Freezer que los dos muestren todo su verdadero poder. Freezer acepta y Goku es el primero en mostrarlo, tranformándose en Super Saiyan Azul (una variación del Super Saiyan obtenida gracias al poder del Super Saiyan Dios), cambiando físicamente su pelo de color azul y con la misma forma que la de un Super Saiyan ordinario. Freezer, asombrado por su poder, le muestra su siguiente evolución: Freezer Dorado, la cuál le aumenta mucho su poder y físicamente le vuelve su piel de color dorada con unas partes moradas.

        <br><br>
        
        El combate se vuelve muy intenso y comienzan a darse ataques con todo su poder. Sin embargo, Freezer Dorado demuestra que él es más fuerte y comienza a ganar a Goku. Pero al cabo de un rato, la suerte se vuelve de parte de Goku debido a que la transformación Dorada tiene una gran desventaja: Consume demasiada energía, y al no haberse entrenado lo suficiente, Freezer comienza a perder poder, hasta que finalmente es derrotado por Goku. Este le dice que se vaya del planeta y que no vuelva nunca más, pero Freezer, con el orgullo entre los suelos, ejecuta con Torbet (el único soldado que le queda) un plan B que habían planeado por si estaba en apuros. El soldado, gracias a su anillo especial, le lanza un rayo a Goku que le atraviesa el estómago, dejándolo al borde de la muerte. Entonces, Freezer se levanta y comienza a golpear salvajemente a Goku.

        <br><br>
        
        Pero Vegeta interviene en el combate y Krilin le da una Semilla del Ermitaño a Goku. Entonces, Vegeta se transforma en Super Saiyan Dios Super Saiyan y comienza a derrotar a Freezer, provocando que pierda la fase Golden. Este, desesperado, destruye la Tierra tirando una onda de energía al centro de esta. Pero gracias a una habilidad especial de Whis, la cual consiste en retroceder en el tiempo, consigue retroceder junto a unos pocos supervivientes 5 minutos atrás en el tiempo, haciendo que Goku le pueda lanzar un Kamehameha con toda su energía a Freezer antes de que destruya la Tierra.

        <br><br>
        
        Tras la dura pelea, celebran la victoria en casa de Bulma, donde esta les prepara un banquete. Tras eso, Goku, Vegeta, Whis y Beerus vuelven al planeta del Dios de la Destrucción para seguir con el entrenamiento.</p>
        
        <h3 class="col-12 mt-5">El Torneo de la Asociación Universal</h3>

        <p class="col-12 mt-5">Tras la derrota de Freezer Dorado, Goku y Vegeta siguen entrenándose para volverse más fuertes. Pero un día llega Champa, el Dios de la Destrucción del universo 6 y Vados, su asistente, para hacer una competición contra Beerus sobre cual universo tiene la mejor comida. Beerus le enseña unos fideos de la Tierra, y Champa se queda asombrado de su buen sabor. Le pregunta a Vados si tienen una Tierra en suu universo, a lo cuál ella responde diciéndole que no. Entonces, Champa le propone a Beerus hacer un torneo de 5 luchadores del universo de Beerus y otros 5 del universo de Champa. Si gana Champa, él transportará la Tierra a su universo gracias a las Super Esferas del Dragón, que son capaces de conceder cualquier deseo. Pero si Beerus gana, podrá pedirle a las Superesferas del Dragón el deseo que quiera.

        <br><br>

        Tras eso, comienzan a elegir a los participantes. Eligen a Majin Boo, Piccolo y a un guerrero que luchó contra Beerus en el pasado: Monaka. Mientras tanto, Goku y Vegeta van al reconstruido Salón del Espíritu y Tiempo para entrenar tres días (que equivaldría a tres años dentro de la habitación).

        <br><br>
        
        3 días después, Goku y Vegeta salen de la sala y junto con sus amigos, se van a un planeta muy lejano en el cuál Champa está preparando el estadio del torneo. Al llegar, se encuentran a sus combatientes del Universo 6: Hit, Frost, Cabba, Botamo y Magetta. También, por petición de Vegeta, hacen un examen teórico. Si alguien lo suspende, estará descalificado del torneo. Todos aprueban excepto Boo, por lo cuál este ya no puede participar. Entonces, comienzan a decidir los turnos de combate. A Goku le toca luchar primero, por lo que se enfrenta a Botamo.

        <br><br>
        
        Al empezar el combate, todos los golpes que le da Goku a Botamo no le hacen ningún daño debido a su gran resistencia. Entonces a Goku se le ocurre una idea para poder ganarlo: Lo tira al suelo, y se lo lleva arrastrando hasta fuera del ring. Tras la victoria de Goku, su siguiente combatiente es Frost, un equivalente a Freezer del Universo 6, aunque este parece mucho más amigable.

        <br><br>
        
        Al principio, parece que la pelea está muy igualada, pero Goku le pide a Frost que saque todo su poder. Entonces, Frost se transforma en su tercera forma y comienza a tener algo de ventaja. Pero Goku se transforma en un Super Saiyan ordinario para ponerle en problemas a Frost y que pase a su verdadera Forma Final. Al transformarse, a pesar de su gran incremento de poder, no consigue ni igualar el poder de Goku en Super Saiyan. Por lo que Frost, desesperado, le lanza un golpe en la mano a Goku que provoca que este, misteriosamente, se quede inconsciente y caiga fuera del ring. Tras la derrota de Goku, le toca el turno a Piccoro, al cuál también derrotan de la misma forma misteriosa. Pero Jaco, se da cuenta que Frost tiene una pequeña aguja en su puño la cuál lleva una sustancia que deja inconsciente a la gente.

        <br><br>
        
        Después de eso, Vados revela que esa es la naturalidad de Frost, el hacer trampa a lo cual Frost explica su manejo comercial de los planetas, que el inicia las guerras para poder ganarlas y vender los planetas afectados a muy bajo precio, a lo cual todos en las gradas y principalmente Champa se enfurecen porque ha sido avergonzado, por lo cual decide destruir a Frost por hacerlo pasar tanta humillación, pero Vegeta proclama que no es necesario ni destruirlo ni descalificarlo, porque ahora es el turno de él. Vegeta se transforma en Super Saiyan y lo derrota de un golpe dejando inconsciente a Frost.
        
        <br><br>

        Mientras tanto, el presentador anuncia que Goku podrá volver a participar en el torneo debido a que perdió debido a las trampas de Frost. Tras eso, Vegeta derrota a Magetta y a Cabba, pero pierde ante Hit, un asesino del Universo 6 con la capacidad de parar el tiempo durante 0,1 segundos. Debido a la derrota de Vegeta, Goku vuelve a participar y empieza su combate contra Hit. Goku consigue anular el ataque de Hit, y la pelea se vuelve muy igualada. Pero Hit decide aumentar su ataque de salto de tiempo a 0,2 segundos, y mas adelante a 0,5 segundos, dándole varios golpes mortales a Goku. Pero él tiene un as en la manga.

        <br><br>
        
        Goku decide utilizar el ataque que estuvo practicando con el Super Saiyan Azul en el Salón del Tiempo: el Kaio-ken. Consigue darle unos cuantos golpes a Hit y tras eso le lanza un Kamehameha con toda su fuerza. Posteriormente le pide a los organizadores (Beerus y Champa) si se pueden cambiar las reglas del torneo,sabiendo que Hit no podría utilizar todo su poder y habilidades si no está permitido matar al rival.

        <br><br>
        
        Champa acepta pero Beerus no,ya que estaría en clara desventaja.Al ver esto Goku sale del ring perdiendo el combate y dejando a Monaca como último participante del equipo de Beerus. Monaca aparece de una forma ridícula en el ring,pero termina impresionando a Goku. Hit se da cuenta de la farsa de Monaca y se deja vencer luego de que el luchador del Universo 7 le diera un golpe en la pierna,sorprendiendo mucho a Goku por su "enorme poder".</p>

        <h3 class="col-12 mt-5">Después del torneo</h3>

        <p class="col-12 mt-5">Tras acabar el torneo, aparece en el ring el Rey de Todo, para decir que debido a lo mucho que le gustó el torneo, quiere hacer otro pero con todos los universos. Tras irse, los Guerreros Z invocan al Dragón Divino, y Beerus pide el deseo de hacer una Tierra para el Universo 6. Después, Goku le pide a Beerus poder pelear con Monaka, pero éste hace todo lo posible para impedirlo. A pesar de sus esfuerzos, durante una fiesta en casa de Bulma, Beerus se tiene que disfrazar de Monaca y pelear contra Goku para que éste no descubra la verdad. El combate acaba con un aviso de Whis diciendo que si siguen peleando, destruirán la Tierra.

        <br><br>

        Más tarde, debido a que Goku utilizó el Kaio-ken por 10, su cuerpo está teniendo un retraso de Ki, provocando que no controle su poder y sin querer destruya su casa. Kaio del Norte le recomienda que, mientras la enfermedad se pasa, cuide de su nieta Pan. Goku acepta y se va a casa de Gohan para jugar con Pan. Sin embargo, Pilaf y sus secuaces la secuestran, pero ella consigue escapar y volver a casa como si no hubiera pasado nada.

        <br><br>
        
        Goku se queda a entrenar en casa de Kaio, pero un día se entera que su hijo Goten, Trunks y Vegeta estan teniendo problemas en un planeta lejano llamado Pot-au-feu. Cuando llega ahí, descubre que un agua especial y muy poderosa ha creado a una copia de Vegeta con el mismo poder que el original. Y si no la vence en tres minutos, Vegeta desaparecerá. Goku pelea contra la copia, y al ver que están muy igualados, se transforma en Super Saiyan Azul. Finalmente consigue vencer a la copia con un Kamehameha y la ayuda de Monaka.</p>

        <h3 class="col-12 mt-5">El regreso de Trunks del Futuro</h3>

        <p class="col-12 mt-5">Un tiempo después, en el campo de cultivos de Goku, él y Piccolo están compitiendo sobre quién recoge más lechugas cuando el Saiyan se entera de que Vegeta ha vuelto al Templo de Beerus para volver a su entrenamiento con Whis. Goku se teletransporta allí, y se pone a entrenar junto con Vegeta. Tras eso, hacen una pausa y Whis le explica a Goku que antes habían 18 universos, pero Zeno destruyó 6 de ellos en un ataque de rabia, demostrando así su enorme capacidad de poder. Pero en ese instante, Bulma llama a Whis con un comunicador y el dice que Goku y Vegeta vengan rápido a la Tierra para un asunto importante.

        <br><br>

        Cuando llegan, descubren que Trunks del Futuro, aliado suyo durante la larga batalla con los androides. Trunks, al despertarse y ver a Goku, salta para intentar darle un puñetazo en la cara, pero Goku lo detiene con una mano y Trunks se disculpa ya que creía que era el enemigo que le había obligado que viajase en el tiempo. Vegeta le pregunta si se trataba de Majin Boo, pero Trunks dice que consiguió detener a Babidi y Dabra antes de que lo despertaran. Tras eso, cuenta que el verdadero enemigo es una especie de versión malvada de Goku, y explica como él destruyó ciudades enteras y como mató a su madre Bulma.

        <br><br>
        
        Tras eso, Goku y Trunks se ponen a pelear para que Goku sepa cuanto de poderoso es Trunks. Éste se transforma en Super Saiyan 2 pero es derrotado fácilmente por Goku en Super Saiyan 3. Inmediatamente después, se abre un portal en el cielo del que aparece Goku Black, gracias a un misterioso anillo que lleva. Trunks comienza a temblar pero Goku subestima el poder de Goku Black, provocando que tan solo se transforme en Super Saiyan 2. Ellos tienen una pelea muy reñida, hasta que el anillo de Black comienza a iluminarse y provoca que éste comience a desaparecer. Desesperado, destruye la Máquina del Tiempo de Trunks del Futuro, y tras eso desaparece completamente, volviendo al futuro.

        <br><br>
        
        Goku le pregunta a Beerus que ha pasado, y él le contesta diciendo que el anillo de Goku Black pertenece a los Kaio-shin, y que tienen el poder de viajar al futuro. Sin embargo, este tirano ha podido viajar al pasado gracias a la brecha que ha creado Trunks en su viaje. Pero cuando la brecha se ha cerrado, el anillo automáticamente le ha devuelto al futuro. Trunks se desespera ya que ahora no podrá volver al futuro y Black matará a los pocos humanos que faltan en su línea de tiempo. Sin embargo, en ese instante aparece Bulma con una solución: la máquina del tiempo con la que Cell había venido de una linea de tiempo alternativa. Bulma la tenía guardada en una cápsula y ahora la podrán utilizar.

        <br><br>
        
        Goku decidió entrenar mientras Bulma y los demás estaban reparando la máquina del tiempo, pero Whis y Kaio del Norte no querían entrenarlo por lo que Goku decide comer en su lugar y le sugiere a Trunks del futuro que debe relajarse un poco. Goku entonces va con Beerus y Whis al Universo 10 debido a que tienen una posible idea de la verdadera identidad de Goku Black.

        <br><br>
        
        Beerus, Whis y Goku siguen viajando hacia el Planeta Kai-shin del Universo 10. Goku, emocionado por conocer a Zamas, pregunta que clase de tipo es. Beerus, molesto por la actitud de Goku, le pide a Whis que él le explique. Whis le dice que Zamas es uno de los Kaios más fuerte del Universo 10 debido a su estilo de pelea. Mientras tanto, en el Planeta Kaio-shin del Universo 10. Goku llega al planeta sagrado del Universo 10 junto a Whis y Beerus, donde se encuentran con Zamas y su maestro Gowas, el último siendo el kaio-shin, Goku conoce toca del hombro a Zamas, a lo que le dicen que no lo toque con tanta confianza. Goku le pide a Zamas para que luche con él, es ahí donde Beerus lo toma de las oreja y lo lanza lejos de Zamas, luego de que Gowas le muestra el anillo del tiempo a Beerus y Whis, Goku le vuelve a insistir a Zamas que luchara contra él y Gowas le dice que acepte la lucha contra Goku y así probar si puede contenerse al luchar con un humano, también le resalta que se contenga, a lo que Goku dice que no, que luche con todo.

        <br><br>
        
        Beerus interviene y le dice que si se contiene, posiblemente muera, entonces Goku se transforma en Super Saiyan 2, Zamas y Gowas se ven sorprendido a lo que Beerus explica que es la transformación del Super Saiyan 2, Goku se lanza contra Zamas con un puñetazo, el kaio-shin lo evade y lo intenta golpear en el cuello para noquearlo, pero justo, Goku intercepta su golpe de espalda con una ráfaga de ki a lo que el kaio-shin y su maestro quedan sorprendido, y Zamas aumenta su ki y se ve su aura de color blanco, Goku notando que es el mismo ki que Black es ahí donde Goku comienza atacarlo rápidamente y le conecta un golpe en la cara, Zamas cae arrodillado al suelo, Goku detiene su golpe final y vuelve a su estado normal, le da la mano y le dice que es más fuerte que el kaio de su universo.

        <br><br>
        
        Zamas lo va atacar por sorpresa, pero su maestro le dice que se detenga, a lo que Zamas simplemente le da la mano. Ya al finalizar el combate Whis, Beerus y Goku se van del planeta, Whis le dice que el ki de Zamas es el mismo que el de Black, pero Goku le dice que no siente que sean el mismo ki, que hay una pequeña diferencia, y que es muy parecido como cuando luchó contra Beerus, pero éste se molesta porque lo compara con él.

        <br><br>
        
        Goku regresa al Universo 7, específicamente la Tierra, Whis pierde la estabilidad y esto produce que Goku y Beerus se estrellaran en el jardín de la Corporación Cápsula. En el almuerzo, Whis le explica a Trunks que Zamas y Black no son tan diferente como para decir que son los mismos aún así Beerus, explica que existía la probabilidad que Zamas se volviera maligno, a lo que Goku le responde que no le parecía malo, y que tenía técnicas interesantes. Goku siente el ki de Vegeta y Trunks entrenando, así que busca a Bulma, y con la Teletransportación llega al campo de batalla, en donde le dice a Bulma que sería bueno ver a Vegeta y a Trunks luchando, pero Bulma se asusta y le dice a Vegeta que se detenga, a lo que Goku la sostiene de los hombros y le dice que está bien y que así arreglan las cosas los Saiyan.

        <br><br>
        
        Después de eso, Beerus avisa a Goku ya que Zeno quiere verle. Al principio no quiere ir porque falta muy poco para que Bulma termine de arreglar la máquina del tiempo, pero acepta y van al planeta de Zeno gracias a la Teletransportación avanzada que tienen los Kaio-shin. Al llegar ahí, entran en el palacio de Zeno, donde se encuentran a él sentado en su trono. Este simplemente le pide a Goku que sea su amigo, y este acepta. Tras eso, Zeno le da un botón, y cuando lo presione, Zeno aparecerá en el lugar en el que esté Goku.</p>

        <h3 class="col-12 mt-5">Tres viajes al futuro</h3>

        <p class="col-12 mt-5">Cuando vuelven a la Tierra, Bulma ya ha reparado la máquina, por lo que Goku, Vegeta y Trunks viajan al futuro para derrotar a Goku Black. Al llegar, se encuentran con los pocos supervivientes que quedan (entre ellos Mai y Yajirobe), y gracias a una cápsula les dan de comer. Tras eso, salen a la superfície y llaman a Black. Cuando aparece, Goku y los demás notan que ha cambiado, y que se ha vuelto mucho mas poderoso que antes. Sin embargo, Vegeta se confía y se transforma en Super Saiyan Azul y tiene una pelea contra Goku Black, pero este lo acaba derrotando gracias a su nueva transformación: el Super Saiyan Rosado.

        <br><br>

        Goku comienza a combatir a Black, pero debido a la gran diferencia de poder entre los dos, el villano domina la pelea. Cuando Black va a lanzarle un Kamehameha, aparece Zamas desde el cielo, aterrizando al lado de Goku Black, diciendo que trabajan juntos. Goku comienza a pelear contra Zamas y nota que este ha aumentado mucho su nivel de poder. Tras eso, Black y Zamas comienzan a combatir contra Goku, pero llega a Trunks y se convierte en una pelea de 2 vs 2.

        <br><br>
        
        Goku consigue noquear por unos momentos a Black, y llega hacia donde está Trunks para ayudarlo a combatir a Zamas. Pero ahí descubren algo impactante: Zamas se ha vuelto inmortal de algún modo. Después de eso, Goku Black comienza a cargar energías para lanzarle un Kamehameha a Goku y Trunks, y cuando estos va a escapar, Zamas los retiene y el Kamehameha les da directos, provocando que acaben magullados en el suelo, pero Zamas intacto gracias a su inmortalidad.

        <br><br>
        
        Los dos están a punto de morir, pero son salvados por Vegeta, que despierta momentáneamente para interceptar el ataque disparado contra ellos. En la confusión, Goku y Trunks son salvados por Yajirobe, mientras Vegeta fue salvado por Mai. Mai envía a los tres Saiyans, golpeados e inconscientes, de vuelta al pasado en la máquina del tiempo. Después de aterrizar en frente de la Corporación Capsula, los tres heridos Saiyans rápidamente comen una Semilla Senzu por Bulma (ya que Goku accidentalmente las dejó en el baño antes de ir al futuro). Goku va con Bills, Whis y el Kaio-Shin del Este al Universo 10, descubriendo que Zamas mata a Gowas. Al llegar ven que que Gowas todavía está vivo, pero de lejos, espían a los dos, y eventualmente testifican Zamas termina matando a Gowas. Whis entonces realiza un retroceso temporal y rebobina el tiempo, bloqueando el ataque de Zamas con un guante. Zamas, acorralado y expuesto, se prepara para luchar contra Goku, pero es interceptado y fácilmente destruido por Bills. Con Bills insistiendo en que el futuro está a salvo, Trunks decide ir a comprobarlo con Goku,Vegeta y Bulma.

        <br><br>
        
        Al regresar se dan cuenta de que el futuro permaneció sin cambios, y mientras Bulma se queda con Mai, el trío de Saiyan se prepara para luchar contra Goku Black y Zamas del Futuro nuevamente. Goku Black revela su verdadera identidad; Él es Zamas de otra línea de tiempo que usó las Super Esferas del Dragon para cambiar cuerpos con Goku, luego matarlo y usar el Anillo del Tiempo para viajar a diferentes líneas de tiempo. Luego se alió con Zamas del Futuro, mató a Gowas del Futuro, y usó las Super Esferas del Dragon esta vez para hacer a Zamas inmortal y luego destruirlas. También dice que mató a todos los supremos Kaio-shin, ya su vez mató a todos los Dioses de la Destrucción, ya que las dos posiciones están vinculadas a la vida.

        <br><br>
        
        Los dos equipos pelean cara a cara nuevamente, y Goku impactado al saber que Black también mató a Goten y Chi-Chi de esa línea de tiempo, enfurecido se dispone a enfrentarse a ambos a la vez logrando dejar fuera de combate momentáneamente a Zamas del Futuro. Pero Goku Black incremento aún más su poder desde su primer lucha con Goku y utilizó su mayor fuerza para derrotar a Goku. Trunks, enojado con el par corrupto por culparlo por todo, asumió una nueva transformación y ganó el poder para luchar ambos al mismo tiempo, mientras que Goku, Vegeta y Bulma regresan al presente para elaborar un plan.

        <br><br>
        
        Goku es sugerido por Piccolo utilizar el Mafuba, y se teletransporta a Kame House donde el Maestro Roshi le enseña la técnica, practicándola en Umigame. Después de aprender la técnica, Kame-Sen'nin le da un talismán para usarla, entonces él, Vegeta (después de entrenar en el Salón del Espíritu y Tiempo) y Bulma regresan al futuro. Como la nueva fuerza de Vegeta le permitió poner en serios aprietos a Goku Black, Goku luchó contra Zamas del Futuro para evitar que ayudara a su compañero.

        <br><br>
        
        Black rodea Goku y Vegeta con sus clones creados a través de una grieta con su guadaña que bloquea el uso de Goku de la teletransportación, así impidiendo perseguir a Zamas que fue hacia donde están Trunks, Bulma y Mai. Eventualmente Black siente que el ki de Zamas se está debilitando debido a que casi está siendo sellado con el Mafuba, Black usa inmediatamente se teletransporta a Zamas con Goku haciendo lo mismo llevando a Vegeta donde Trunks y los demas están. Goku y sus amigos son testigos de la fusión Pothara de Black y Zamas para crear a Zamas Fusión.</p>

        <h3 class="col-12 mt-5">El poder invencible de la fusión</h3>

        <p class="col-12 mt-5">Goku y Vegeta inmediatamente se involucran con Zamas en una batalla, pero son rápidamente abrumados por el poder de este último. Después de que Trunks y Vegeta sobrepasen con éxito la Ira divina de Zamas Fusion con un Cañon Galick Padre-Hijo, Zamas en un intento de asesinar a Trunks, acaba casi matando a Vegeta quien se interpuso recibiendo de lleno el ataque. Goku usa a su Kamehameha contra Zamas cuyos sus respectivos ataques causan el resultado de una gran explosión.

        <br><br>

        Goku utiliza todo su poder para empujar la Ira Divina de Zamas Fusion con su Kamehameha, esforzándose hasta el punto de que romperse sus brazos. A pesar de todo, Goku ataca con un aluvión de patadas, y cuando Zamas quebró su pierna izquierda, usa su pierna derecha junto con el Kaio-ken para propinarle un golpe enorme, pero Goku se queda sin poder y cae a la Tierra agotado e indefenso. Al ver el cuerpo de Zamas Fusion mutando y enfurecido, Goku sugiere que él y Vegeta se fusionan.

        <br><br>
        
        Gowas explica que mientras él y Vegeta no sean Kaio-shin, la fusión de Pothala duraría como mínimo una hora. Mientras convence a Vegeta, Goku come una Semilla Senzu para luego junto a Vegeta usar los pendientes para fusionarse en Vegetto, dando inicio a una batalla decisiva contra Zamas Fusion. Debido al inmenso poder de Vegetto, la fusión de Pothala termina prematuramente, y Goku y Vegeta son derribados. Goku y Vegeta son testigos de que Trunks obtiene un poder masivo de todos a su alrededor, y le dan a Trunks del Futuro su poder restante, viéndolo cortar a Zamas Fusión en dos con su nueva espada de ki.

        <br><br>
        
        Sin embargo, la esencia de Zamas y el estado sin cuerpo se funden con el universo matando a los mortales restantes en la tierra con la excepción de Goku, Vegeta, Trunks, Bulma y Mai. Como último recurso, Goku convoca a Rey de Todo con el botón que le dio durante su última reunión y eventualmente aparece Rey de Todo del Futuro Alternativo que borra instantáneamente Zamas y todos los universos de su existencia, mientras que Goku y los demás regresan al pasado.

        <br><br>
        
        Goku regresa con Trunks al futuro al futuro extinto y llevan a Rey de Todo al pasado. Después, Goku lo lleva al palacio de su actual contraparte, pidiendo a los dos Rey de Todo que sean amigos unos con otros cumpliendo la promesa de traerle un amigo. Al día siguiente, Goku y los demás se despiden de Trunks del Futuro y Mai mientras se dirigen a una nueva línea de tiempo creada por las alteraciones de Whis con Goku creyendo que Trunks es lo suficientemente fuerte como para derrotar a cualquier amenaza.</p>

        <h3 class="col-12 mt-5">Preparándose para el torneo</h3>

        <p class="col-12 mt-5"> Más tarde ese año, Goku comienza a actuar extraño y sentir todo a su alrededor, dandose cuenta de que alguien esta tras su vida y que ese alguien es Hit. Cuando se da cuenta de que Hit llega a la Tierra, Goku sale para enfrentarse a él. Hit aparece detrás de Goku y le dice que fue contratado para matarlo. Hit mostrando gran respeto a Goku ofrece para salvar la vida de Goku si desaparece este alegará que lo mató, pero Goku rechaza la oferta. Hit sabiendo que Goku no aceptaria su oferta le pide a Goku que se dé la vuelta, diciendo que sólo mata desde el frente y nunca lo matará por detrás.

        <br><br>

        Goku se transforma en un Super Saiyan Azul y se voltea preparado para luchar, recordando a Hit que su Salto Temporal no funcionará con él. Goku ataca pero advierte que sus ataques están pasando por Hit. Goku retrocede asumiendo que Hit es incapaz de golpearlo a distancia, pero estaba equivocado e intenta matar Hit con una explosión de ki pero es detenido por Hit y asesina con éxito a Goku con un solo golpe de ki al corazón, con Goku muriendo antes de que su cuerpo golpee el suelo. Piccolo, Gohan y Goten llegan momentos después de que Goku es asesinado por Hit y descubren su cadáver.

        <br><br>
        
        Piccolo consuela el llanto de Goten y comienza a realizar un RCP pero Gohan detecta algo y mira hacia arriba y nota una explosión masiva del ki que cae de nuevo sobre Goku y cada uno tiene que moverse. La explosión golpea a Goku en el corazón, reviviendo al supuesto Saiyan muerto, quien les dice que salgan de aquí porque Hit está fuera para matarlo. Goku y Hit continúan su batalla, con Goku empezando a ver cómo funcionan los nuevos movimientos de Hit y los descubre en el tercer intento. Champa, Vados, Beerus, Whis y Vegeta todos llegan diciéndoles que continúen y se unen para mirar. Vados señala que Hit ya no es el asesino Hit, sino más bien un artista marcial.

        <br><br>
        
        Champa menciona que Hit tiene que matar a Goku ya que Goku es una amenaza importante en el próximo torneo del Rey de Todo, pero Vados dice que sólo contrató a Hit pero hay alguien que quiere a Goku muerto. Vados también explica los poderes del salto de Hit en el tiempo, ya que ahora puede crear espacios enteros de tiempo y puede usarlo para hacer que su energía aparezca en varios lugares a la vez. Goku habiendo calculado esto en sus propias energías hasta la potencia máxima y rompe esta dimensión del tiempo y lo derrota con un Kamehameha. Después de la pelea todos saludan a la pareja con Vegeta molesto con Goku por disfrutar de la lucha con Hit más de sí mismo y enojado porque alguien quería ver muerto a Goku y exige unas explicaciones a Hit pero este se niega a dárselas. Beerus acusa a Vegeta, pero Vegeta sin pensar le dice a Beerus que se calle pero luego le pide disculpas.

        <br><br>
        
        De repente Vegeta se da cuenta de quien contrató a Hit y acusa a Goku quin este ultimo confiesa contratar a Hit por Vados. Whis explica que Goku se acercó a él con la idea y acordó por lo que Goku se contacto con Vados para ofrecer un contrató a Hit para él. Cuando Beerus preguntó por qué haría Whis hacer algo tan imprudente Whis dijo que Goku necesita entrenar y Hit es perfecto para él. Hit perplejo y orgulloso de Goku admite que Goku es muy complejo para su comprensión y sonríe a su objetivo. Hit le pregunta a Goku si hay un límite de tiempo en su misión y Goku dice que no. A lo que Hit responde que lo matará más tarde, sonríe a Goku y se va.

        <br><br>
        
        Una vez que la paz ha vuelto después de la derrota de Zamas Fusión, Goku comienza a cultivar de nuevo, y lleva su última cosecha a un comerciante, que afirma que las cosechas de Goku son muy populares. Emocionado de que ganó mucho dinero debido a su cultivo, Goku se siente aliviado de que no tendrá que oír a Chi-Chi sermoneándole más, y él puede centrarse en su entrenamiento. Mientras se aleja del mercado del agricultor en un camión de la Corporación Cápsula., Goku se percata de que otra persona está varada en el camino. Goku acepta ayudar, pero siente un arma apuntada en su espalda. Descubriendo que fue engañado por una banda de ladrones, Goku se niega a darles su camión, y utiliza su velocidad para engañar a los asaltantes cuando comienzan a disparar sus armas contra él. Goku hace que todos los ladrones, menos uno, estén inconscientes. El último bandido dispara una bala en Goku, logra rasgarlo. Después de noquear al último ladrón, Goku mira su rasguño y llega a la conclusión que él se esta quedando oxidado.

        <br><br>
        
        Goku luego llama a Krilin para preguntar si quiere entrenar con él, pero este está demasiado ocupado en una misión policial. En su lugar, Goku llama a Whis y acepta unos daifuku de fréjoles para entrenarlo. Dado un límite de hora de una hora para obtener el daifuku y llegar a la Corporación Capsula, Goku corre a casa y se pone en su dogi. En casa, Goten descubre que Goku va a entrenar con Whis y desea venir también. Chi-Chi prohíbe esto, pero los dos se escapan cuando está distraída. Goku y Goten se dirigen a la Corporación Capsula después de recoger el daifuku. Una vez allí, las dos miran con asombro el gran vientre de Bulma, y ​​Goku llega a la conclusión de que ha estado comiendo demasiado, y se sorprende al saber que está embarazada de nuevo. Goku entonces decide dar el daifuku a Bulma, pero es recordado por Goten que es para Whis. Bulma entiende cuanto Goku desea dar la comida a Whis para que pueda entrenar más y le permite quedarse con la comida.

        <br><br>
        
        Después de encontrar a Vegeta, Goku le pide que venga y entrene con él y Whis. Vegeta rechaza la oferta ya que Bulma va a dar a luz muy pronto. Una vez que Whis llega, se dirige con Goku al planeta de Beerus para entrenar. Mientras en el entrenamiento contra Whis, Beerus señala cómo Goku está perdiendo el toque. Para luchar contra oponentes más fuertes una vez más, Goku pregunta a Beerus qué pasó con el torneo que el Rey de Todo estaba planeando, pero inmediatamente es reprendido por Beerus no involucrarse con los asuntos del Rey. No escuchando a Beerus, Goku viaja al palacio del Rey de Todo y le pregunta sobre el torneo. Este revela que lo había olvidado. El Rey de Todo del Futuro se entusiasma con la idea de un torneo después de enterarse de lo que es, y el Gran Sacerdote le dice a Goku que le informará de los detalles cuando estén disponibles. Beerus castiga a Goku cuando regresa, y Whis los lleva al Planeta Sagrado a petición de Goku.

        <br><br>
        
        En el Planeta Sagrado, el Gran Sacerdote llega y le cuenta a todos los detalles del Torneo de la Fuerza. Después de aprender la información, Goku y los demás se sorprenden por el hecho de que cada universo perdedor será borrado de la existencia. El Gran Sacerdote informa a Goku que habrá un encuentro de exhibición celebrado antes del torneo, con fin de que El Rey de Todo del Futuro pueda ver peleas por primera vez. Goku es instruido para encontrar a otros dos combatientes en la próxima hora para unirse a él en la lucha junto a tres luchadores del Universo 9 en el encuentro de exhibición. Después de que el Gran Sacerdote se vaya, Beerus está furioso por las acciones de Goku. Goku le dice a todos que puede pedirle al Rey de Todo personalmente que revogue la regla de que todos los universos perdedores sean destruidos, pero Whis le dice que no es una decisión sabia ya que el Rey de Todo ya se decidió.

        <br><br>
        
        Volviendo a la Tierra, Goku le pregunta a Vegeta, pero se niega a ir para que pueda estar al lado de Bulma. Goku llega a la conclusión de que Goten y Trunks aun son demasiado jóvenes para competir en el combate, por lo que se dirige a Gohan. Mientras se muestra vacilante al principio, Goku le dice a su hijo acerca de la estipulación extrema sobre la exterminación de los universos que pierdan, también diciéndole que lo mantenga en secreto para sí mismo. Goku y Gohan acuerdan mantener la regla para evitar un pánico mundial. Cuando Gohan está de acuerdo en luchar para proteger a su familia, Goku también recurre a Majin Boo para que se una a la pelea.

        <br><br>
        
        Goku va directamente a Boo y le pide que pelee junto a ellos, Boo está de acuerdo y él, junto con Goku, Mr. Satán y Gohan regresan al Planeta Sagrado. Goku informa a Beerus que solo él y Gohan saben sobre la estipulación para prevenir el pánico mundial. Shin lleva a todo el mundo al Palacete del Rey de Todo, donde el Gran Sacerdote los lleva al Encuentro de Exhibición de Todo, donde montó una plataforma similar a la del Torneo Mundial de la Artes Marciales con asientos para espectadores. El Gran Sacerdote le dice a Goku que guarde silencio, mientras que introduce la ceremonia de exhibición. Cuando el Gran Sacerdote introduce los Reyes de Todo, Goku vuela para saludarlos, lo que hace que los representantes de cada universo crean que es un irrespetuoso. Goku entonces agradece por dejarlos pelear primero, y acepta darles una gran lucha para ver. Después de que el Gran Sacerdote explique las reglas, Majin Boo y Gohan se enfrentan a Basil y Lavander del Universo 9, llevándose la victoria y un empate respectivamente. Ahora a Goku le toca pelear con Bergamo, quien difama a Goku por sugerir el torneo y poner en peligro a todos los universos. Bergamo le permite a Goku golpearlo para que pueda aumentar su tamaño, pero esto lo deja vulnerable a sus puntos ciegos y Goku es capaz de ganarle, pero Toppo del Universo 11 desafía a Goku a una pelea, furioso con el Saiyan por haber puesto en riesgo la existencia de los universos. Ambos destruyen la arena y casi usan sus técnicas más poderosas antes de que el Gran Sacerdote interrumpa a la batalla e instruya a todos a reunir a diez guerreros de cada universo en las próximas 40 horas. Goku está más entusiasmado con el torneo que con la posibilidad de que el Universo 7 pierda, lo que hace que Beerus le regañe por ser tan despreocupado.

        <br><br>
        
        Luego se teletransportan devuelta a la Corporación Cápsula para reunir a los miembros del equipo. Goku sugiere a Monaka pero Beerus miente diciendo que no se encuentra está bien. Goku se niega a considerar a Trunks y Goten, yaque su rivalidad e inexperiencia sería un problema. Goku está de acuerdo en Krilin, Kame-Sen'nin, Número 18 y Número 17. Él y Gohan entonces le preguntan a Vegeta, que nuevamente se niega porque quiere ver el nacimiento de su próximo bebe y se pregunta por qué Goku esta tan interesado en que el participe. Después de que Whis usa su habilidad para controlar el tiempo para acelerar el nacimiento de la hija de Vegeta, Bra, Goku felicita a Vegeta y sostiene al bebé mientras remarca que ella no se parece en nada a él. Goku luego va a casa de Krilin y 18 para reclutarlos. Ambos se niegan hasta que Goku miente sobre una recompensa de diez millones zeni, aunque 18 comienza sospechar cuando Goku se confunde y mezcla el número. A pesar de eso, Goku tiene una sesión de entrenamiento con Krillin para probar su fuerza y ​​le dice a Krilin que no es sólo su mejor amigo, sino un guerrero muy fuerte. Él entonces va con Tenshinhan, que también se niega porque puede dejar a sus estudiantes del dojo. Sin embargo, Ten cambia de opinión y decide usar el premio falso para su dojo. Goku se encuentra con Piccolo, que sabe toda la verdad sobre el torneo y sobre que el universo podría ser borrado si pierden. Piccolo está de acuerdo en participar y entrena a Gohan a petición del ex discípulo para ayudarlo a despertar todo su potencial, cosa que fue capaz de hacer, pero lucha por mantenerse firme contra Goku y Piccolo, y le pide a su padre que pelee contra el con todas sus fuerzas. Goku está de acuerdo y lucha con Gohan como Super Saiyan Azul impulsado con el Kaio-ken y con algo de esfuerzo consigue vencerlo, pero declara que está impresionado y nomina a su hijo Gohan como el líder del Equipo Universo 7.

        <br><br>
        
        A su regreso para desarrollar una estrategia, Goku consigue un entrenamiento rápido con Whis. Bulma les dice que Majin Boo se ha quedado dormido y no participará. Goku corre a casa de Mr. Satán para tratar de despertarlo pero no tiene éxito. Cuando regresa a la Corporación Cápsula, se enfrenta a sus amigos por mentirles acerca de la recompensa y la verdad detrás el torneo. Goku se disculpa pero Beerus les recuerda a todos que aun falta un miembro del equipo, y Goku sugiere que recluten a Freezer para que participe como reemplazo de Majin Boo, para gran sorpresa de todos. Goku explica su plan para pedirle a Uranai Baba que traiga a Freezer de vuelta por 24 horas, pero todo el mundo, especialmente Vegeta, se opone a esto. Goku sin embargo va con Enma Daio para obtener permiso para hablar con Freezer en el infierno. Cuando encuentra a Freezer, Goku explica la situación, pero este sólo estará de acuerdo si Goku usa las Esferas del Dragón para resucitarlo si el Universo 7 gana. Goku se niega a ceder, pero dada la importancia del asunto finge estar de acuerdo con los términos de Freezer.

        <br><br>
        
        Después de deshacerse de los asesinos del Universo 9 y sobrevivir al arma secreta de Sidra (lanzada por Freezer) gracias a la intervención de Beerus, Freezer se unió al equipo y todos juntos viajan al Mundo de la Nada. Después de reunirse con viejos contrincantes y conocer a otros nuevos, el Gran Sacerdote explico las reglas para el torneo, pero una vez más y como de costumbre Goku se dejo llevar por la emoción. Gohan idea un plan con el equipo pero no tardo demasiado para que Goku se cruce con Toppo una vez más y no mucho después de eso, el torneo que Goku sugirió finalmente dio comienzo.</p>

        <h3 class="col-12 mt-5">El Torneo de la Fuerza</h3>

        <p class="col-12 mt-5">Goku comenzó por quedarse con el equipo antes de que fuera a buscar a Toppo, pero antes de que pudiera dar con el fue confrontado por Ganos. Goku golpeó a Ganos y lo derribo. A continuación, se enteró de que si es expulsado fuera de la arena seria enviado a las gradas. Goku entonces lanzó un fuerte golpe alto en Ganos y más tarde, desvió una gran cantidad de bala de energía continua de él. Ganos luego se aparto para esquivar un Justice Flash de Toppo y este último momento finalmente reconoció a Goku desde la última vez que se encontraron, pero fue golpeado en la cara por Murichim. Goku finalmente se encontró con Jiren, pero antes de que puedan pelear, Nink le atrapó y trató de sacrificarse para sacar a Goku, incluso después de haber sido golpeado en la cara repetidamente por él, Goku opta por transformarse en Super Saiyan Azul en el último minuto para salvarse de la eliminación. A continuación, se enfrentó a los guerreros del Equipo Universo 9, lo que lo entusiasmó. Goku comienza a defenderse del Universo 9 solo, pero pronto Vegeta se une a la pelea para ayudar a Goku sabiendo que tienen cosas más importantes que hacer. Juntos Goku y Vegeta se transforman en Super Saiyan y luchar como uno para derrotar al Universo 9 dejando al Trío del Peligro para el final. Haciendo su ultimo esfuerzo el trío disparó su ataque más poderoso en contra de Goku y Vegeta, pero los Saiyan respondieron transformándose en Super Saiyan Azul y crearon un ataque de doble equipo de por su propia cuenta, el Kamehameha Final; Goku disparando su Kamehameha a través de Destello Final de Vegeta entrelazando las explosiones en una super explosión gigante lo suficientemente poderoso para hacer que cada combatiente deje de luchar para ver como el Universo 9 es destruido.

        <br><br>

        Mas adelante, Goku lucha en Super Saiyan contra Jimizu del Universo 2, que fue visto teletransportándose a su alrededor mientras comienza a jactarse de sus habilidades. El Yardratiano se prepara para atacar a Goku, pero Caulifla lo intercepta y lo manda a volar. Caulifla desafía a Goku, mostrando interés en la transformación del Super Saiyan Azul. Pero Goku dice que ella no está preparada para aprender esa transformación, Caulifla trata de impresionarle convirtiéndose en un Super Saiyan Tercer Grado, sin saber que Goku ya sabe sobre la forma. Una vez que ella es fácilmente derribada, Goku le enseña los inconvenientes de tal estado, y que en cambio debería aspirar convertirse en Super Saiyan 2,ascendiendo a dicha fase, pero Caulifla le dice que ella ha alcanzado esa forma pero no ha logrado repetirla desde su primera vez. Caulifla logra transformarse mientras que Goku, impresionado por el talento de la joven Saiyan, dice que podría lograr el Super Saiyan 3 en su lucha. Caulifla está sorprendida y eufórica al oír que había otra forma de Super Saiyan. Caulifla y Goku luchan en sus formas Super Saiyan 2, ignorando Kale mientras ellos se divierten. Cuando Kale intenta apoyar a Caulifla disparando una ráfaga de ki hacia Goku, Goku fácilmente la desvía y le pide que no interfiera en su combate.

        <br><br>    
        
        Kale, pensando que es un estorbo, se muestra celosa hacia Goku, pensando que quiere quitarle a su "hermana" y se transforma en Berserker ganando un gran odio hacia Goku, tan intenso que su ataque inicial no le importo haber lastimado a Caulifla. Ella entonces lucha personalmente Goku, siendo fácilmente capaz de resistir sus ataques y hacer retroceder al Saiyan con su fuerza. Incluso cuando Goku se convierte en Super Saiyan Azul, Kale aún tiene la ventaja, caminando a través del Kamehameha sin recibir daño alguno. Después de que Kale perdió todo razonamiento en una rabia cegadora y causó caos en todo el campo de batalla, agarró a Goku por el rostro, pero manteniendo un poco de compostura, en lugar de matarlo, lo lanza hacia un costado. Más tarde, después de que Jiren derrotara fácilmente a Kale, Goku enfrentó a Jiren y este decidió finalmente luchar contra él. Sin embargo, antes de que siquiera pudiera hacer algo, Toppo lo atacó por la espalda con un Justice Flash. Después de que emergió desde los escombros, se encuentra con Kale y Caulifla, quien esta ultima lo acusa de tratar de atacar a Kale mientras se encuentra debilitada, pero Goku inmediatamente niega estas acusaciones. Más tarde, pelea junto a Número 17, Número 18, Kale y Caulifla (aunque indirectamente) contra Casseral, Zoirei, Kettle, Tupper y Cocotte, siendo testigo como Caulifla y Kale eliminan a estos tres primeros y como 18 elimina a Tupper y Cocotte.</p>
        `)
    })
})