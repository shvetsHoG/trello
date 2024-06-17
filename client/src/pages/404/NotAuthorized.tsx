import A from '../../components/ui/link/A.tsx';

const NotAuthorized = () => {
    return (
        <div>
            <div>You are not authorized!</div>
            <A path={'/login'}>login</A>
            <br />
            <A path={'/registration'}>registration</A>
        </div>
    );
};

export default NotAuthorized;
