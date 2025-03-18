
const express = require('express')
import {handler5996} from "./handler5996";
const app = express()
app.get('/5996', handler5996)
app.listen(3000, () => {})
        