
const express = require('express')
import {handler5761} from "./handler5761";
const app = express()
app.get('/5761', handler5761)
app.listen(3000, () => {})
        