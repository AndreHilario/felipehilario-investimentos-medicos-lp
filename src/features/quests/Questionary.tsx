// import React from 'react';
// import {
//   Container,
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   TextField,
//   Slider,
//   Button,
//   Grid,
//   Stepper,
//   Step,
//   StepLabel,
//   StepConnector, // Para estilizar a linha do Stepper
// } from '@mui/material';
// import Check from '@mui/icons-material/Check'; // Ícone de check para etapas concluídas
// import { styled } from '@mui/system';

// // --- Componentes Estilizados ---
// const StyledContainer = styled(Container)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: '100vh',
//   backgroundColor: '#f5f7fa', // Fundo suave
//   padding: theme.spacing(4),
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(2),
//   },
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   width: '100%',
//   maxWidth: 700,
//   borderRadius: 4,
//   boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
//   padding: theme.spacing(3),
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(2),
//   },
// }));

// const FormSection = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   paddingBottom: theme.spacing(2),
//   // Não precisa de border-bottom aqui, já que é uma pergunta por tela
//   '&:last-child': {
//     marginBottom: 0,
//     paddingBottom: 0,
//   },
// }));

// // --- Estilos Personalizados para o Stepper (Ícones e Conector) ---
// const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//   color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//   display: 'flex',
//   height: 22,
//   alignItems: 'center',
//   ...(ownerState.active && {
//     color: theme.palette.primary.main, // Cor padrão do MUI para o ícone ativo
//   }),
//   '& .QontoStepIcon-completedIcon': {
//     color: '#4CAF50', // VERDE para ícone de etapa concluída
//     zIndex: 1,
//     fontSize: 24,
//   },
//   '& .QontoStepIcon-circle': {
//     width: 8,
//     height: 8,
//     borderRadius: '50%',
//     backgroundColor: 'currentColor',
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${'Mui-active'}`]: {
//     [`& .${'MuiStepConnector-line'}`]: {
//       borderColor: theme.palette.primary.main, // Cor padrão do MUI para a linha ativa
//     },
//   },
//   [`&.${'Mui-completed'}`]: {
//     [`& .${'MuiStepConnector-line'}`]: {
//       borderColor: '#4CAF50', // VERDE para a linha de etapa concluída
//     },
//   },
//   [`& .${'MuiStepConnector-line'}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// // Definição das etapas para o Stepper
// const steps = [
//   'Investimento',
//   'Meta Financeira',
//   'Desafio',
//   'Urgência',
//   'Nome',
//   'Contato',
// ];

// function FinancialForm() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({}); // Objeto para controlar quais etapas foram concluídas

//   // Estado para os dados do formulário
//   const [formData, setFormData] = React.useState({
//     investimento: '',
//     metaFinanceira: '',
//     desafio: '',
//     urgencia: 5, // Valor padrão para o slider
//     nomeCompleto: '',
//     whatsapp: '',
//   });

//   const totalSteps = steps.length;
//   const allStepsCompleted = Object.keys(completed).length === totalSteps; // Verifica se todas as etapas foram completas

//   const handleChange = (field) => (event, newValue) => {
//     // Para Slider, newValue é o valor direto; para outros, event.target.value
//     setFormData((prev) => ({
//       ...prev,
//       [field]: newValue !== undefined ? newValue : event.target.value,
//     }));
//   };

//   const handleNext = () => {
//     // Marca a etapa atual como concluída antes de avançar
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//     setFormData({ // Reseta os dados do formulário
//       investimento: '',
//       metaFinanceira: '',
//       desafio: '',
//       urgencia: 5,
//       nomeCompleto: '',
//       whatsapp: '',
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (activeStep === totalSteps - 1) { // Se for a última etapa
//       // Aqui você enviaria os dados para um backend ou processaria
//       console.log('Formulário Completo:', formData);
//       alert('Formulário enviado com sucesso! (Verifique o console para os dados)');
//       // Marca todas as etapas como concluídas para exibir a tela final
//       setCompleted(steps.reduce((acc, _, index) => ({ ...acc, [index]: true }), {}));
//     } else {
//       handleNext(); // Avança para a próxima etapa
//     }
//   };

//   const urgenciaMarks = [
//     { value: 0, label: '0' },
//     { value: 1, label: '1' },
//     { value: 2, label: '2' },
//     { value: 3, label: '3' },
//     { value: 4, label: '4 (Posso esperar)' },
//     { value: 5, label: '5' },
//     { value: 6, label: '6' },
//     { value: 7, label: '7' },
//     { value: 8, label: '8 (É importante)' },
//     { value: 9, label: '9' },
//     { value: 10, label: '10 (Preciso resolver agora)' },
//   ];

//   // Função que renderiza o conteúdo da etapa atual
//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <FormSection>
//             <Typography variant="h6" gutterBottom>
//               1- Quanto você já possui investido ou disponível para investir nos seus objetivos?
//             </Typography>
//             <FormControl component="fieldset" fullWidth>
//               <RadioGroup
//                 aria-label="investimento"
//                 name="investimento"
//                 value={formData.investimento}
//                 onChange={handleChange('investimento')}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="ate-300k" control={<Radio />} label="Até R\$300.000" />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="300k-1m" control={<Radio />} label="De R\$300.001 a R\$1.000.000" />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="1m-3m" control={<Radio />} label="De R\$1.000.001 a R\$3.000.000" />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="acima-3m" control={<Radio />} label="Acima de R\$3.000.001" />
//                   </Grid>
//                 </Grid>
//               </RadioGroup>
//             </FormControl>
//           </FormSection>
//         );
//       case 1:
//         return (
//           <FormSection>
//             <Typography variant="h6" gutterBottom>
//               2- Qual das seguintes metas financeiras melhor descreve seu objetivo para os próximos anos?
//             </Typography>
//             <FormControl component="fieldset" fullWidth>
//               <RadioGroup
//                 aria-label="meta-financeira"
//                 name="meta-financeira"
//                 value={formData.metaFinanceira}
//                 onChange={handleChange('metaFinanceira')}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="reduzir-plantao" control={<Radio />} label="Reduzir carga de plantões" />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="manutencao-patrimonio" control={<Radio />} label="Manutenção e proteção do patrimônio construído" />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="aposentadoria-renda-passiva" control={<Radio />} label="Garantir aposentadoria através de renda passiva de investimentos" />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel value="se-organizar" control={<Radio />} label="Se organizar financeiramente" />
//                   </Grid>
//                 </Grid>
//               </RadioGroup>
//             </FormControl>
//           </FormSection>
//         );
//       case 2:
//         return (
//           <FormSection>
//             <Typography variant="h6" gutterBottom>
//               3- Qual é o maior desafio específico que tem te impedido de alcançar esse objetivo?
//               <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                 (Ex: falta de tempo para gerenciar investimentos, excesso de informações, estratégias genéricas que não funcionam para sua realidade, etc.)
//               </Typography>
//             </Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={4}
//               variant="outlined"
//               placeholder="Descreva seu desafio aqui..."
//               value={formData.desafio}
//               onChange={handleChange('desafio')}
//             />
//           </FormSection>
//         );
//       case 3:
//         return (
//           <FormSection>
//             <Typography variant="h6" gutterBottom>
//               4- Em uma escala de 0 a 10, qual a urgência em resolver esse problema?
//             </Typography>
//             <Slider
//               aria-label="Urgência"
//               defaultValue={5}
//               step={1}
//               marks={urgenciaMarks}
//               min={0}
//               max={10}
//               valueLabelDisplay="auto"
//               value={typeof formData.urgencia === 'number' ? formData.urgencia : 0}
//               onChange={handleChange('urgencia')}
//               sx={{ mt: 4 }}
//             />
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
//               <Typography variant="caption" sx={{ width: '30%', textAlign: 'left' }}>
//                 0-4 (Posso esperar)
//               </Typography>
//               <Typography variant="caption" sx={{ width: '40%', textAlign: 'center' }}>
//                 5-8 (É importante)
//               </Typography>
//               <Typography variant="caption" sx={{ width: '30%', textAlign: 'right' }}>
//                 9-10 (Preciso resolver agora)
//               </Typography>
//             </Box>
//           </FormSection>
//         );
//       case 4:
//         return (
//           <FormSection>
//             <Typography variant="h6" gutterBottom>5- Nome completo</Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Seu nome completo"
//               value={formData.nomeCompleto}
//               onChange={handleChange('nomeCompleto')}
//             />
//           </FormSection>
//         );
//       case 5:
//         return (
//           <FormSection>
//             <Typography variant="h6" gutterBottom>6- Whatsapp</Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="(XX) XXXXX-XXXX"
//               value={formData.whatsapp}
//               onChange={handleChange('whatsapp')}
//               type="tel" // Sugere teclado numérico em mobile
//             />
//           </FormSection>
//         );
//       default:
//         return 'Etapa desconhecida.';
//     }
//   };

//   return (
//     <StyledContainer maxWidth="md">
//       <StyledCard>
//         <CardContent>
//           <Box sx={{ textAlign: 'center', mb: 4 }}>
//             <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
//               Seus Objetivos Financeiros
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               Preencha este formulário para nos ajudar a entender suas necessidades e como podemos te auxiliar.
//             </Typography>
//           </Box>

//           {/* Stepper para indicar o progresso */}
//           <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} sx={{ mb: 4 }}>
//             {steps.map((label, index) => (
//               <Step key={label} completed={completed[index]}>
//                 <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           <div>
//             {allStepsCompleted ? (
//               // Tela de conclusão do formulário
//               <Box sx={{ p: 3, textAlign: 'center' }}>
//                 <Typography variant="h5" sx={{ mb: 2 }}>
//                   Formulário Completo! 🎉
//                 </Typography>
//                 <Typography sx={{ mb: 3 }}>
//                   Obrigado por preencher o formulário. Seus dados foram enviados.
//                 </Typography>
//                 <Button onClick={handleReset} variant="outlined" color="primary" sx={{ mr: 1 }}>
//                   Preencher Novamente
//                 </Button>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Gradiente de cor para Finalizar
//                     color: 'white',
//                     '&:hover': {
//                       boxShadow: '0px 6px 20px rgba(255, 142, 83, 0.4)',
//                     },
//                   }}
//                   onClick={() => {
//                     console.log('Dados Finais:', formData);
//                     alert('Dados Finais: ' + JSON.stringify(formData, null, 2));
//                   }}
//                 >
//                   Ver Dados
//                 </Button>
//               </Box>
//             ) : (
//               // Conteúdo da etapa atual do formulário
//               <form onSubmit={handleSubmit}>
//                 {getStepContent(activeStep)}
//                 <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                   <Button
//                     color="inherit"
//                     disabled={activeStep === 0} // Desabilita o botão "Voltar" na primeira etapa
//                     onClick={handleBack}
//                     sx={{ mr: 1 }}
//                   >
//                     Voltar
//                   </Button>
//                   <Box sx={{ flex: '1 1 auto' }} /> {/* Empurra o botão "Próximo" para a direita */}
//                   <Button
//                     type="submit" // Faz com que o botão submeta o formulário (e chame handleSubmit)
//                     variant="contained"
//                     sx={{
//                       background: 'linear-gradient(45deg, #2ecc71 30%, #27ae60 90%)', // VERDE para o botão "Próximo"
//                       color: 'white',
//                       '&:hover': {
//                         boxShadow: '0px 6px 20px rgba(46, 204, 113, 0.4)',
//                       },
//                     }}
//                   >
//                     {activeStep === totalSteps - 1 ? 'Finalizar' : 'Próximo'}
//                   </Button>
//                 </Box>
//               </form>
//             )}
//           </div>
//         </CardContent>
//       </StyledCard>
//     </StyledContainer>
//   );
// }

// export default FinancialForm;