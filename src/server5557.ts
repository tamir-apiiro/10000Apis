
const express = require('express')
import {handler5557} from "./handler5557";
const app = express()
app.get('/5557', handler5557)
app.listen(3000, () => {})
        