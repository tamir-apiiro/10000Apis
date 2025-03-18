
const express = require('express')
import {handler5810} from "./handler5810";
const app = express()
app.get('/5810', handler5810)
app.listen(3000, () => {})
        