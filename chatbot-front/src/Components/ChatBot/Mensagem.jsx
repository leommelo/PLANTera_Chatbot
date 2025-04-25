import React from 'react'

import { Box, Paper, Typography, } from '@mui/material';
import PLANTera2 from "../../assets/PLANTera2.svg"

const Mensagem = ({ mensagens }) => {
    return (
        <>
            {mensagens.map((msg, idx) => (
                <Box
                    key={idx}
                    sx={{
                        display: 'flex',
                        justifyContent: msg.autor === 'bot' ? 'flex-start' : 'flex-end',
                        alignItems: 'center',
                        padding: 1,
                        marginLeft: msg.autor === 'bot' ? 2 : 0,
                        marginRight: msg.autor === 'user' ? 2 : 0,
                    }}
                >
                    {msg.autor === 'bot' && (
                        <Box
                            component="img"
                            src={PLANTera2}
                            alt="bot"
                            sx={{ width: 64, mr: 1 }}
                        />
                    )}
                    <Paper
                        elevation={2}
                        sx={{
                            px: 2,
                            py: 1,
                            bgcolor: msg.autor === 'user' ? '#1976d2' : '#e0e0e0',
                            color: msg.autor === 'user' ? '#fff' : '#000',
                            borderRadius: 2,
                            maxWidth: '60%',
                        }}
                    >
                        <Typography
                            style={{ whiteSpace: 'pre-line' }}
                            dangerouslySetInnerHTML={{ __html: msg.text }}
                        />
                    </Paper>
                </Box>
            ))}

        </>
    )
}

export default Mensagem