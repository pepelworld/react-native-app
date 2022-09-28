export interface Props {
    navigation: {
        setOptions: ({}) => void;
        goBack: () => void;
        navigate: (route: string) => void;
    };
}
