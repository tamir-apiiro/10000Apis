
const express = require('express')
import {handler5005} from "./handler5005";
const app = express()
app.get('/5005', handler5005)
app.listen(3000, () => {})
        