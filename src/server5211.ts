
const express = require('express')
import {handler5211} from "./handler5211";
const app = express()
app.get('/5211', handler5211)
app.listen(3000, () => {})
        