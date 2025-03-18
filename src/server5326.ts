
const express = require('express')
import {handler5326} from "./handler5326";
const app = express()
app.get('/5326', handler5326)
app.listen(3000, () => {})
        