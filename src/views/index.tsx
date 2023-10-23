import CardCustom from "../components/Card";
import LayoutCustom from "../layouts/LayoutCustom";

const animals = [
  {
    id: 1,
    title: "Iguana",
    description: "Es un reptil perteneciente a la familia Iguanidae, que se caracteriza por su cuerpo alargado, escamas duras, patas cortas y fuertes, así como una cresta dorsal espinosa. Son animales herbívoros y se encuentran principalmente en regiones cálidas de América Central y del Sur. Las iguanas son conocidas por su aspecto distintivo y su capacidad para cambiar de color, así como por su comportamiento tranquilo y su estilo de vida arborícola.",
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  },
  {
    id: 2,
    title: "Tucán",
    description: "Es un ave tropical caracterizada por su llamativo pico largo y colorido. Estos pájaros pertenecen a la familia Ramphastidae y se encuentran en América Central y del Sur. El pico del tucán es tan distintivo que a menudo se asocia con ellos. Utilizan su pico para atrapar frutas y otros alimentos, y a pesar de su apariencia grande, son aves relativamente livianas. Los tucanes suelen vivir en bosques tropicales y se destacan por su plumaje vibrante y sus llamadas vocales peculiares.",
    image: "https://media.istockphoto.com/id/504784032/es/foto/tuc%C3%A1n-p%C3%A1jaro-en-ex%C3%B3tico-entorno-natural-foz-do-iguaz%C3%BA-brasil.webp?b=1&s=612x612&w=0&k=20&c=uOh0v1ZyGREXx7O3HfRVqdp6GaC-CAUUwEUTZ7NQbXk=",
  },
  {
    id: 3,
    title: "Guacamayo amarillo",
    description: "El guacamayo amarillo, también conocido como guacamayo dorado o guacamayo de pecho amarillo, se refiere a una especie de guacamayo (Ara ararauna) que se caracteriza por su llamativo plumaje amarillo en la parte superior del cuerpo, la cabeza y la parte superior de las alas, con acentos verdes en las alas y una cola larga con tonos de azul y verde. Estos guacamayos son aves nativas de América del Sur, especialmente de regiones de la cuenca del Amazonas y partes de América Central.",
    image: "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg",
  },
  {
    id: 4,
    title: "Pavo real",
    description: "El pavo real es un ave majestuosa y llamativa conocida por su distintivo plumaje y su espectacular exhibición de colores y patrones durante el cortejo. Es originario de la India y otras partes del sur de Asia, y se ha introducido en varias partes del mundo debido a su belleza. Los pavos reales son aves grandes con cuerpos de colores suaves y cabezas adornadas con una cresta de plumas. Sin embargo, su característica más destacada es el abanico de plumas que forman su cola, que se despliega en un magnífico abanico con colores iridiscentes cuando están en pleno cortejo. Los machos suelen exhibir estas plumas para atraer a las hembras. Además de su apariencia impresionante, los pavos reales son aves omnívoras que se alimentan de una variedad de alimentos, incluyendo insectos, frutas y semillas. A menudo se los encuentra en áreas arboladas y bosques. Los pavos reales son símbolos de belleza y elegancia en muchas culturas y son apreciados por su gracia y esplendor.",
    image: "https://cdn.pixabay.com/photo/2017/04/04/14/23/peafowl-2201428_640.jpg",
  },
  {
    id: 5,
    title: "Flamenco",
    description: "El flamenco es un ave acuática grande y esbelta conocida por su distintiva coloración rosada y su largo cuello y patas. Los flamencos se encuentran en diversas partes del mundo, desde América del Norte y América del Sur hasta Europa, África y Asia. Su color rosa se debe a su dieta, que incluye crustáceos y otras pequeñas criaturas acuáticas que contienen pigmentos rojos. Estas aves suelen vivir en hábitats acuáticos, como lagunas salinas, estuarios y humedales. Son conocidas por su elegante postura en el agua, donde se alimentan con su pico curvado hacia abajo, filtrando pequeños organismos de los sedimentos. Los flamencos a menudo se reúnen en grandes colonias y son conocidos por sus elaboradas exhibiciones de cortejo que incluyen movimientos de cabeza y vocalizaciones. El flamenco es un símbolo de gracia y belleza en la naturaleza y es una de las aves más icónicas del mundo.",
    image: "https://cdn.pixabay.com/photo/2020/06/23/12/00/flamingo-5332314_640.jpg",
  },
  {
    id: 1,
    title: "Camaleon",
    description: `El camaleón es un tipo de lagarto conocido por su habilidad para cambiar el color de su piel, adaptándolo a su entorno y estados emocionales. Estos reptiles se caracterizan por sus ojos grandes y móviles que pueden mover de manera independiente, lo que les permite tener un amplio campo de visión. Los camaleones son nativos de regiones tropicales y subtropicales de África, Asia y partes de Europa.    Su adaptación al camuflaje y su capacidad para cambiar de color los ayudan a acechar a sus presas y a evitar a los depredadores. Además, tienen patas prensiles que les permiten agarrarse a las ramas y moverse con facilidad por los árboles.`,
    image: "https://cdn.pixabay.com/photo/2023/06/28/12/32/chameleon-8094345_640.jpg",
  }
]

export default function index() {
  return (
    <LayoutCustom>
      <div className="home">
        {animals.map((item) => (
          <CardCustom
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.image}
          />
        ))}
      </div>
    </LayoutCustom>
  )
}