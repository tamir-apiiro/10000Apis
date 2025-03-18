
const express = require('express')
import {handler5646} from "./handler5646";
const app = express()
app.get('/5646', handler5646)
app.listen(3000, () => {})
        