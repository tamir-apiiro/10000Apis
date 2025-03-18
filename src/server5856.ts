
const express = require('express')
import {handler5856} from "./handler5856";
const app = express()
app.get('/5856', handler5856)
app.listen(3000, () => {})
        