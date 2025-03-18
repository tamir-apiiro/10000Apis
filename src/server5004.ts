
const express = require('express')
import {handler5004} from "./handler5004";
const app = express()
app.get('/5004', handler5004)
app.listen(3000, () => {})
        