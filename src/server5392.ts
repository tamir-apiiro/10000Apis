
const express = require('express')
import {handler5392} from "./handler5392";
const app = express()
app.get('/5392', handler5392)
app.listen(3000, () => {})
        