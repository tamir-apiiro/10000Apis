
const express = require('express')
import {handler5926} from "./handler5926";
const app = express()
app.get('/5926', handler5926)
app.listen(3000, () => {})
        