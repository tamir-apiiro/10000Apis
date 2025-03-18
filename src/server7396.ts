
const express = require('express')
import {handler7396} from "./handler7396";
const app = express()
app.get('/7396', handler7396)
app.listen(3000, () => {})
        