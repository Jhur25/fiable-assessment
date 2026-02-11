
import "./GridPage.css";
import {Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box} from "@mui/material";
import { ArrowUpwardOutlined, ArrowDownwardOutlined, ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material"
import Avatar from '@mui/material/Avatar';

const signStyle = {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: '3.2rem',
        padding: '25px',
        color:'#f8f7f7c4',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    };

const northStyle = {
            ...signStyle,   
            top: 0, 
            left: '50%', 
            backgroundColor: '#085c25',
            transform: 'translate(-50%, 50%)'
    }

const eastStyle = {
        ...signStyle,
            right: 0, 
            top: '50%', 
            backgroundColor: '#1a67ff',
            transform: 'translate(-60%, -40%)' 
    }

const southStyle = {
         ...signStyle, 
        bottom: 0, 
        left: '50%', 
        backgroundColor: '#673AB7',
        transform: 'translate(-50%, -10%)' 
     }

const westStyle = {
        ...signStyle, 
        left: 0, 
        top: '50%',   
        backgroundColor: '#FF5722',
        transform: 'translate(60%, -40%)' 
     }

const GridPage = ({position}) => {
    const [x,y,direction] = position.split(" ");
    const xCoor = parseInt(x);
    const yCoor = parseInt(y);
    const numberCells = 5;
    const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

    const getDirectionSymbol = (dir) => {
        switch (dir) { 
            case 'NORTH':
                return <ArrowUpwardOutlined className="icon-cell" sx={{color: '#085c25'}} />;
            case 'WEST':
                return <ArrowBackOutlined className="icon-cell" sx={{color: '#FF5722'}} />;
            case 'SOUTH':
                return <ArrowDownwardOutlined className="icon-cell" sx={{color: '#673AB7'}} />;
            case 'EAST':
                return <ArrowForwardOutlined className="icon-cell" sx={{color: '#1a67ff'}} />;
        }
    };
     
    return (
        <Box className="box-container">
            { isNaN(xCoor) || isNaN(yCoor) || !directions.includes(direction) ? (
                 <div className="error" >
                    <h2 className="h1-invalid">Invalid Input or Position!</h2>
                    <p className="p-invalid">Please provide a valid position in the format "X Y DIRECTION".</p>
                </div>
            ) : (
                <>
                <TableContainer component={Paper}  className="grid-table" sx={{maxWidth: '900px', margin: 'auto',  overflow: 'hidden'}}>
                    <Table sx={{ tableLayout: 'fixed' }} >
                        <TableBody >
                            {Array(numberCells).fill(0).map((_, row) => (
                                <TableRow key={row} className="grid-row">
                                    {Array(numberCells).fill(0).map((_, col) => {
                                    return( 
                                    <TableCell  key={col}  className="grid-cell row-cells" align="center">   
                                            {  col === xCoor && 4 - row === yCoor ? (
                                            getDirectionSymbol(direction)
                                            ) : (
                                                ""
                                            )}
                                        </TableCell>
                                    );
                                    })} 
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                 {/* NORTH (Top) */}
                <Avatar sx={{...northStyle}}>N</Avatar>

                {/* EAST (Right) */}
                <Avatar sx={{...eastStyle}}>E</Avatar>

                {/* SOUTH (Bottom) */}
                <Avatar sx={{...southStyle}}>S</Avatar>     

                {/* WEST (Left) */}
                <Avatar sx={{...westStyle}}>W</Avatar>
                </>
            )}
        </Box>
        
    );
}

export default GridPage;