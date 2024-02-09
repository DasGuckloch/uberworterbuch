export const getRandomNumber = (exclusiveTo: number): number => {
    return Math.floor(Math.random() * exclusiveTo);
};

export const getRandomMessage = (title: string): string => {
    const messages = [
        `Ein neues Wort wurde hinzugefügt!${title}Viel Spaß beim Entdecken!`,
        `Es gibt ein neues Wort!${title}Entdecke es jetzt!`,
        `Neues Wort!${title}Schau mal rein und entdecke!`,
        `Entdecke das neue Wort!${title}Viel Spaß damit!`,
        `Es gibt ein neues Wort!${title}Finde es und lass dich überraschen!`,
    ];

    const messageNumber = getRandomNumber(messages.length);

    return messages[messageNumber];
};
