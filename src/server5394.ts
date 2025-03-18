
const express = require('express')
import {handler5394} from "./handler5394";
const app = express()
app.get('/5394', handler5394)
app.listen(3000, () => {})
        