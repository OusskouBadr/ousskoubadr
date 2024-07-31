import React, {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext(); // créer un contexte qui va contenir les valeurs liées au thème de l'application (par exemple, 'light' ou 'dark'). 
                                     //ThemeContext sera utilisé pour fournir et consommer ces valeurs dans le reste de l'application.

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState( //Il initialise cet état en récupérant le thème stocké dans localStorage, ou en utilisant 'light' par défaut si aucune valeur n'est trouvée.
        () => localStorage.getItem('theme') || 'light' 
    )

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },  [theme]);

    const toggleTheme = () => {
        console.log("Theme switched");
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')) // Permet de switch  entre les thémes : si c'est light switch sur dark et si sur dark switch sur light
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}