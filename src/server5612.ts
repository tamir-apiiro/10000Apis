
const express = require('express')
import {handler5612} from "./handler5612";
const app = express()
app.get('/5612', handler5612)
app.listen(3000, () => {})
        