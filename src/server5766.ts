
const express = require('express')
import {handler5766} from "./handler5766";
const app = express()
app.get('/5766', handler5766)
app.listen(3000, () => {})
        