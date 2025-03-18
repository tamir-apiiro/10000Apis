
const express = require('express')
import {handler5829} from "./handler5829";
const app = express()
app.get('/5829', handler5829)
app.listen(3000, () => {})
        