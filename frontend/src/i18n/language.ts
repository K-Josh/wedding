import LabelsEng from './labels/en/labels.en'
import LabelsFrn from './labels/fr/labels.fr'

export const Language = <any>{
    ENG: 'en',
    FRA: 'fr',
};

export const MapLangs = <object>{
    [Language.ENG]: 'English',
    [Language.FRA]: 'French',
};

export const BundleLangs = <any>{
    [Language.ENG]: LabelsEng,
    [Language.FRA]: LabelsFrn,
}