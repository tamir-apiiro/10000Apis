
const express = require('express')
import {handler5673} from "./handler5673";
const app = express()
app.get('/5673', handler5673)
app.listen(3000, () => {})
        