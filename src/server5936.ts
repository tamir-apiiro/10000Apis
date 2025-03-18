
const express = require('express')
import {handler5936} from "./handler5936";
const app = express()
app.get('/5936', handler5936)
app.listen(3000, () => {})
        