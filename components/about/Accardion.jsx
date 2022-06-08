import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    marginBottom: '5px',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        // expandIcon={<AddSharpIcon sx={{ fontSize: '20px' }} />}
        {...props}
    />
))(() => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    borderRadius: '5px',
    padding: '0',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
        backgroundColor: '#F2184F',
        color: '#fff',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        height: '48px',
        padding: '12px 8px',
    },
    '& .css-1betqn-MuiAccordionSummary-content': {
        margin: '0',
    },
    '& .MuiAccordionSummary-content': {
        padding: '14px 0 13px 8px',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        backgroundColor: '#202C45',
        color: '#fff',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    border: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expand, setExpand] = useState([false, false, false, false])

    function handleClick(son) {
        if (son == 0) {
            setExpand([!expand[0], expand[1], expand[2], expand[3]]);
        } else if (son == 1) {
            setExpand([expand[0], !expand[1], expand[2], expand[3]]);
        } else if (son == 2) {
            setExpand([expand[0], expand[1], !expand[2], expand[3]]);
        } else if (son == 3) {
            setExpand([expand[0], expand[1], expand[2], !expand[3]]);
        }
        console.log(expand);
    }

    return (
        <div>
            <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                    expandIcon={expand[0] ? <RemoveIcon /> : <AddSharpIcon />}
                    onClick={() => handleClick(0)}
                >
                    <Typography>Darslar qaysi tilda olib bo'riladi? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        O'quvchilarni butunlay til muhiti bilan o'rab olish uchun darslar butunlay ingliz tilida o'tkaziladi.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" onClick={() => handleClick(1)} expandIcon={expand[1] ? <RemoveIcon /> : <AddSharpIcon />}>
                    <Typography>Kurslarda qatnashish uchun oyiga nech pul to'lash kerak? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ingliz tili kursi - 555 000 so'm
                        IELTS imtihoniga tayyorlanish kursi - 555 000 so'm
                        Math in English - 555 000 so'm
                        Oliy o'quv yurtlariga tayyorlanish kursi - kelishiladi
                        Individual ingliz tili kursi - 1 800 000 so'm
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" onClick={() => handleClick(2)} expandIcon={expand[2] ? <RemoveIcon /> : <AddSharpIcon />}>
                    <Typography>Sinov darsiga qanday qilib yozilsa bo'ladi? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1 yo'l.
                        O'quv markazimizga qo'ng'iroq qiling va zayavka qoldiring.

                        2 yo'l.
                        • "Bizning kurslarimiz" sahifasiga o'ting.
                        • O'zingizga kerakli kursni tanlang
                        • Kursning sahifasini pastida "Ro'yhatdan o'tish" ni bosing
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" onClick={() => handleClick(3)} expandIcon={expand[3] ? <RemoveIcon /> : <AddSharpIcon />}>
                    <Typography>Sinov darsi uchun pul to'lash kerakmi? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yo'q. Sinov darsi mutlaqo bepul.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
