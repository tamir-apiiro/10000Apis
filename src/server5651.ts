
const express = require('express')
import {handler5651} from "./handler5651";
const app = express()
app.get('/5651', handler5651)
app.listen(3000, () => {})
        