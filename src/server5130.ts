
const express = require('express')
import {handler5130} from "./handler5130";
const app = express()
app.get('/5130', handler5130)
app.listen(3000, () => {})
        