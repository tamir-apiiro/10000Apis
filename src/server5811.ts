
const express = require('express')
import {handler5811} from "./handler5811";
const app = express()
app.get('/5811', handler5811)
app.listen(3000, () => {})
        