
const express = require('express')
import {handler5018} from "./handler5018";
const app = express()
app.get('/5018', handler5018)
app.listen(3000, () => {})
        