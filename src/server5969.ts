
const express = require('express')
import {handler5969} from "./handler5969";
const app = express()
app.get('/5969', handler5969)
app.listen(3000, () => {})
        