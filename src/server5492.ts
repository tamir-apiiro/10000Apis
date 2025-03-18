
const express = require('express')
import {handler5492} from "./handler5492";
const app = express()
app.get('/5492', handler5492)
app.listen(3000, () => {})
        