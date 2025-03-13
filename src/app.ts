import app from '@server/server';
import dotenv from 'dotenv';
import '@config/mongodb'

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});