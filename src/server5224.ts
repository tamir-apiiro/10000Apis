
const express = require('express')
import {handler5224} from "./handler5224";
const app = express()
app.get('/5224', handler5224)
app.listen(3000, () => {})
        