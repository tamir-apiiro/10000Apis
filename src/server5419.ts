
const express = require('express')
import {handler5419} from "./handler5419";
const app = express()
app.get('/5419', handler5419)
app.listen(3000, () => {})
        