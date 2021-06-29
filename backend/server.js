import app from './app';
import config from './config';

const { PORT } = config;
app.listen(process.env.PORT || PORT, () => console.log(`Server started on PORT ${PORT}`));
