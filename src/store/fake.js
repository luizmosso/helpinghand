import profilePic from '../content/images/profilePicture.png'
import gardeningIcon from '../content/icons/gardening.svg'
import plumbingIcon from '../content/icons/plumbing.svg'
import maidIcon from '../content/icons/maid.svg'
import paintingIcon from '../content/icons/painting.svg'
import fixingIcon from '../content/icons/fixing.svg'
import ironingIcon from '../content/icons/ironing.svg'
import cookingIcon from '../content/icons/cooking.svg'
import washingIcon from '../content/icons/washing.svg'
import masonryIcon from '../content/icons/masonry.svg'
import electricityIcon from '../content/icons/electricity.svg'

const data = {
    categories : [
        { id : 1, name : 'Jardinagem', icon : gardeningIcon, 
            description : `É uma atividade profissional que tem o objetivo de embelezar determinados locais, públicos ou privados pelo cultivo e manutenção de plantas.<br>
            Este serviço é cobrado por metro quadrado da área ou jardim a ser trabalhado. Podendo ser contratado para capinas, podas, aparos de grama, adubação e demais serviço com plantas.` 
            },
        { id : 2, name : 'Alvenaria', icon : masonryIcon, 
            description : `É a construção de estruturas e de paredes utilizando unidades unidas entre si ou não por argamassa. Estas unidades podem ser blocos de cerâmica, de vidro, de concreto, pedras, tijolos etc.<br>
        Este serviço é cobrado por metro quadrado construído. Podendo ser contratado para pequenos reparos ou para construção de paredes, revestimentos, acabamentos em cerâmica, entre outros.` 
            },
        { id : 3, name : 'Diarista', icon : maidIcon },
        { id : 4, name : 'Encanamento', icon : plumbingIcon },
        { id : 5, name : 'Pintura', icon : paintingIcon },
        { id : 6, name : 'Elétrica', icon : electricityIcon },
        { id : 7, name : 'Cozinhar', icon : cookingIcon },
        { id : 8, name : 'Lavar', icon : washingIcon },
        { id : 9, name : 'Passar', icon : ironingIcon },
        { id : 10, name : 'Consertos', icon : fixingIcon },
      ],
    user : {
        photo : profilePic,
        name : "Raquel Murillo"
    },
    workers : {

    },
    job : {

    }
}

export default data