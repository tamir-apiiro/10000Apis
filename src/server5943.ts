
const express = require('express')
import {handler5943} from "./handler5943";
const app = express()
app.get('/5943', handler5943)
app.listen(3000, () => {})
        