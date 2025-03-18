
const express = require('express')
import {handler5342} from "./handler5342";
const app = express()
app.get('/5342', handler5342)
app.listen(3000, () => {})
        