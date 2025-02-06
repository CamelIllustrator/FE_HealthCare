import { data } from 'react-router-dom';
import { create } from 'zustand';

export const useFamilyFormStore = create(set => ({
    formInput: {
        ...JSON.parse(localStorage.getItem('formInput')) ?? {
            profile: {
                fullName: '',
                education: '',
                gender: '',
                relation: '',
            },
            job: {
                income: 0,
                jobTypeId: 1
            },
            residence: {
                status: '',
                address: '',
                description: ''
            },

            institutionId: 0,
            nutrition: {
                height: 0,
                weight: 0,
                birth_weight: 0,
            },
            behaviour: {
                eatFrequency: 0,
                drinkFrequency: 0,
                physicalActivity: 0,
                sleepQuality: 0,
                phbs: 0
            },
            knowledgeNutrition: {
                knowledge: '',
                score: 0
            },
        }
    },
    fatherFormInput: {
        ...JSON.parse(localStorage.getItem('fatherFormInput')) ?? {
            profile: {
                fullName: '',
                education: '',
                gender: '',
                relation: '',
            },
            job: {
                income: 0,
                jobTypeId: 1
            },
            residence: {
                status: '',
                address: '',
                description: ''
            },

            institutionId: 0,
            nutrition: {
                height: 0,
                weight: 0,
                birth_weight: 0,
            },
            behaviour: {
                eatFrequency: 0,
                drinkFrequency: 0,
                physicalActivity: 0,
                sleepQuality: 0,
                phbs: 0
            },
            knowledgeNutrition: {
                knowledge: '',
                score: 0
            },
        }
    },
    childrenFormInput: [],
    onInputChange: (key, value, parentKey = null, whatForm = "formInput") => {
        if (parentKey) {
            set(state => ({
                [whatForm]: {
                    ...state[whatForm],
                    [parentKey]: {
                        ...state[whatForm][parentKey],
                        [key]: value
                    }
                }
            }))
        } else {
            set(state => ({
                [whatForm]: {
                    ...state[whatForm],
                    [key]: value
                }
            }))
        }
    },
    selfBirthDate: JSON.parse(localStorage.getItem('formInput'))?.birthDate || null,
    setSelfBirthDate: (value) => set({ selfBirthDate: value }),
    fatherBirthDate: JSON.parse(localStorage.getItem('fatherFormInput'))?.birthDate || null,
    setFatherBirthDate: (value) => set({ fatherBirthDate: value }),
    addChildren: (data) => set(state => ({
        childrenFormInput: [...state.childrenFormInput, data]
    })),
    onChildrenInputForm: (key, value, parentKey = null, index) => {
        if (parentKey) {
            set(state => ({
                childrenFormInput: state.childrenFormInput.map((children, i) => {
                    if (i === index) {
                        return {
                            ...children,
                            [parentKey]: {
                                ...children[parentKey],
                                [key]: value
                            }
                        }
                    }
                    return children;
                })
            }))
        } else {
            set(state => ({
                childrenFormInput: state.childrenFormInput.map((children, i) => {
                    if (i === index) {
                        return {
                            ...children,
                            [key]: value
                        }
                    }
                    return children;
                })
            }))
        }
    }
}))