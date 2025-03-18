
const express = require('express')
import {handler5510} from "./handler5510";
const app = express()
app.get('/5510', handler5510)
app.listen(3000, () => {})
        