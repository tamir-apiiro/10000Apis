
const express = require('express')
import {handler5899} from "./handler5899";
const app = express()
app.get('/5899', handler5899)
app.listen(3000, () => {})
        