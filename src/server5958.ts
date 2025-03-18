
const express = require('express')
import {handler5958} from "./handler5958";
const app = express()
app.get('/5958', handler5958)
app.listen(3000, () => {})
        