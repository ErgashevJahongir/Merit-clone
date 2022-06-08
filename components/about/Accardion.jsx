import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddSharpIcon sx={{ fontSize: 'large' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {

    return (
        <div>
            <Accordion expandicon={<AddSharpIcon />}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Darslar qaysi tilda olib bo'riladi? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        O'quvchilarni butunlay til muhiti bilan o'rab olish uchun darslar butunlay ingliz tilida o'tkaziladi.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expandicon={<AddSharpIcon />}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
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
            <Accordion expandicon={<AddSharpIcon />}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
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
            <Accordion expandicon={<AddSharpIcon />}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
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
