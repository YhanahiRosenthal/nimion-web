import { useState } from "react";
const Arrow = "../images/arrow.png";

const Cuestions = () => {
    const faqs = [
        {
            Qtn: '¿Que vino primero: el huevo o la gallina?',
            answ: 'Si consideramos "huevo" en términos generales, las especies que existían antes de las gallinas también ponían huevos, y estas criaturas evolucionaron gradualmente en lo que finalmente se convertiría en gallinas.'
        },
        {
            Qtn: '¿Por qué no hemos detectado ninguna señal de vida extraterrestre?',
            answ: 'El universo es inmensamente grande, con billones de estrellas y planetas potencialmente habitables. Sin embargo, las distancias astronómicas son tan vastas que incluso si hay muchas civilizaciones extraterrestres, las probabilidades de que estén lo suficientemente cerca como para detectar sus señales son bastante bajas.'
        },
        {
            Qtn: 'Si se encontrara una forma de detener el envejecimiento y prolongar la vida indefinidamente, ¿sería ético hacerlo?',
            answ: 'La cuestión de si detener el envejecimiento y prolongar la vida indefinidamente sería ético es un tema complejo y debatido en la ética, la filosofía y la sociedad en general.'
        },
        {
            Qtn: ' ¿Cómo se determina lo que es moralmente correcto en diferentes contextos?',
            answ: 'Dependiendo del tipo de moralidad podemos llegar a una respuesta. En última instancia, la cuestión de si la moralidad es relativa a la cultura o si existen normas morales absolutas sigue siendo objeto de debate. Las opiniones varían según las perspectivas filosóficas y las creencias individuales.'
        },
        {
            Qtn: ' ¿Cómo puedes estar seguro de que lo que percibes como realidad no es solo una ilusión o un sueño?',
            answ: 'La pregunta sobre la naturaleza de la realidad y cómo podemos estar seguros de que lo que percibimos no es una ilusión o un sueño es un tema recurrente en la filosofía y la reflexión existencial. Esta cuestión ha sido explorada a lo largo de la historia por filósofos y pensadores de diversas tradiciones. Podemos decir que no hay una respuesta definitiva.'
        },
    ]

    const [indexes, setIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (indexes === index) {
            setIndex(null);
        } else {
            setIndex(index);
        }
    };

    return (
      <>
        {faqs.map((faq, index) => (
          <div key={index} tabIndex={1} className="flex flex-col justify-center items-center border-t border-b border-secondary-light w-[70%] min-h-[4rem] cursor-pointer" onClick={() => toggleQuestion(index)}>
            <p className="flex justify-center md:justify-between text-center md:text-start text-xs lg:text-sm font-semibold w-[95%] mt-4 mb-4">{faq.Qtn}<span className="hidden md:block"><img src={Arrow} alt="Icon arrow" className={indexes === index ? "transition duration-500 rotate-0 w-4 h-4" : "transition duration-500 rotate-180 w-4 h-4"} /></span></p>
            <div className={indexes === index ? "max-w-[85%] lg:h-[7rem] mb-10 lg:mb-0 mt-6 md:mr-16 transition-all duration-500 overflow-hidden" : "max-w-[85%] mt-3 md:mr-16 h-0 transition-all duration-500 overflow-hidden"}>
              <p className=" text-center md:text-start text-xs md:text-sm font-normal m-auto">{faq.answ}</p>
            </div>
          </div>
        ))}
      </>
    );
  };


export default Cuestions;