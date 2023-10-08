import themeConfig from 'src/theme/themeConfig';

import { Head } from 'src/components/Head';
import { MantineProvider } from '@mantine/core';
import { GlobalStyles } from 'src/theme/GlobalStyles';

import CMS from 'decap-cms-app';
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)

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
