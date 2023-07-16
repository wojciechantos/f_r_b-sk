import { MantineProvider } from '@mantine/core';
import { GlobalStyles } from 'src/components/GlobalStyles';
import { Head } from 'src/components/Head';
import themeConfig from 'src/theme/themeConfig';

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
