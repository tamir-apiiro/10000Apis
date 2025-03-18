
const express = require('express')
import {handler5912} from "./handler5912";
const app = express()
app.get('/5912', handler5912)
app.listen(3000, () => {})
        