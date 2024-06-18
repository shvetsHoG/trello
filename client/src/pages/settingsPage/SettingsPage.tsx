import PageWrapper from '../../components/wrapper/PageWrapper.tsx';
import Settings from '../../components/settings/Settings.tsx';

const SettingsPage = () => {
    return (
        <>
            <PageWrapper title={'Settings'}>
                <Settings />
            </PageWrapper>
        </>
    );
};

export default SettingsPage;
