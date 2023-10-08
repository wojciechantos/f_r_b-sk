import { Global } from '@mantine/core';
import themeConfig from 'src/theme/themeConfig';

export const GlobalStyles = () => {
    const useGlobal = () => [
        {
            body: {
                backgroundColor: themeConfig.colors.backgroundColor[0],
            },
        },
    ];

    return <Global styles={useGlobal} />;
};
