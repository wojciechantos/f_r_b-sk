import themeConfig from 'src/theme/themeConfig';

import { Head } from 'src/components/Head';
import { MantineProvider } from '@mantine/core';
import { GlobalStyles } from 'src/theme/GlobalStyles';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <MantineProvider
                theme={themeConfig}
                withGlobalStyles
                withNormalizeCSS
            >
                <Head />
                <GlobalStyles />
                {children}
            </MantineProvider>
        </>
    );
};

export default DefaultLayout;
