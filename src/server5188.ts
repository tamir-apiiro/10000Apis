
const express = require('express')
import {handler5188} from "./handler5188";
const app = express()
app.get('/5188', handler5188)
app.listen(3000, () => {})
        