import React, { useState } from 'react'
import "./ChatBot.css"
import { Box, TextField, Paper, Typography, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PLANTera2 from "../../assets/PLANTera2.svg"

const ChatBot = () => {
    const [mensagens, setMensagens] = useState([
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
        { autor: 'bot', text: 'Olá! Eu sou a PLANTera, o chatbot oficial da Fúria. Como posso te ajudar?' },
    ]);
    const [input, setInput] = useState('');

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                borderLeft: '1px solid #390072',
                borderRight: '1px solid #390072',
            }}>

            <Box
                className="Essa aqui chat"
                sx={{
                    flex: 1,
                    bgcolor: '#1C1C1C',
                    height: '100%',
                    maxHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    overflowY: 'auto',
                }}
            >
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    padding: '1rem',
                    top: 0,
                    backgroundColor: '#1C1C1C',
                }}>
                    <Typography variant='h3' sx={{ fontFamily: '"Jersey 25", sans-serif', color:'white' }}>PLANTera</Typography>
                </Box>
                <Box 
                    className="chat-scroll"
                    sx={{ 
                        overflowY: 'auto',
                        flex: 1,
                        padding: '1rem',
                    }}
                >
                    {mensagens.map((msg, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                display: 'flex',
                                justifyContent: msg.autor === 'bot' ? 'flex-start' : 'flex-end',
                                alignItems: 'center',
                                padding: 1,
                                marginLeft: msg.autor === 'bot' ? 2 : 0,
                                marginRight: msg.autor === 'usuário' ? 2 : 0,
                            }}
                        >
                            <Box
                                component="img"
                                src={PLANTera2}
                                alt="bot"
                                sx={{ width: 64, mr: 1 }}
                            />
                            <Paper
                                elevation={2}
                                sx={{
                                    px: 2,
                                    py: 1,
                                    bgcolor: msg.autor === 'usuário' ? '#1976d2' : '#e0e0e0',
                                    color: msg.autor === 'usuário' ? '#fff' : '#000',
                                    borderRadius: 2,
                                    maxWidth: '60%',
                                }}
                            >
                                <Typography>{msg.text}</Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ 
                    display: 'flex', 
                    p: 2,
                    position: 'sticky',
                    bottom: 0,
                    backgroundColor: '#1C1C1C',
                }}>
                    <TextField
                        fullWidth
                        placeholder="Digite sua mensagem..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && enviarMensagem()}
                        variant="outlined"
                        InputProps={{
                            sx: textFieldStyles,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" sx={{ color: '#390072' }}>
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

const textFieldStyles = {
    backgroundColor: '#fff',
    borderRadius: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#390072',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#390072',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#390072',
    },
};

export default ChatBot