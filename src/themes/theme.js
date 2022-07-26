import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1D2D44",
            contrastText: "#fff"
        },
        secondary: {
            main: "#3E5C76",
            contrastText: "#fff"
        }
    },

    ItemListCategoryTitle: {
        color:'#fff',
        fontWeight:'bold',
        marginTop:'30px',
        marginBottom:0
    },

    ItemListContainer: {
        display:'flex',
        justifyContent:'center',
        marginBottom:'50px'
    },

    ItemDetailsContainer: {
        display:'flex',
        justifyContent:'center',
        marginTop:'60px',
        marginBottom:'50px'
    },

    ItemDetailsCard: {
        display:{ xs: 'none', md: 'flex' },
        flexDirection:'row'
    },

    ItemDetailsContent: {
        display:'flex',
        flexDirection:'column',
        width:'160%'
    },

    ItemDetailsTitle: {
        marginTop:'35px',
        fontWeight:'bold',
    },

    ItemDetailsDescription: {
        marginBottom:'30px',
    },

    ItemDetailsPrice: {
        alignSelf:'flex-end',
        marginTop:'10px',
        marginBottom:'15px'
    },

    ItemDetailsCounter: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },

    ItemCard: {
        margin:'25px',
        display:'flex',
        flexDirection:'column',
        maxWidth:'300px',
        minWidth:'300px',
        textDecoration: 'none',
        maxHeight:'fit-content'
    }

});


export default theme;
