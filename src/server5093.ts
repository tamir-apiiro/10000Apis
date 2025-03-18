
const express = require('express')
import {handler5093} from "./handler5093";
const app = express()
app.get('/5093', handler5093)
app.listen(3000, () => {})
        