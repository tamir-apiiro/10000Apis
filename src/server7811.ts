
const express = require('express')
import {handler7811} from "./handler7811";
const app = express()
app.get('/7811', handler7811)
app.listen(3000, () => {})
        