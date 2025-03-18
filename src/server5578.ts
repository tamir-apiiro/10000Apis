
const express = require('express')
import {handler5578} from "./handler5578";
const app = express()
app.get('/5578', handler5578)
app.listen(3000, () => {})
        