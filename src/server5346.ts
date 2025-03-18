
const express = require('express')
import {handler5346} from "./handler5346";
const app = express()
app.get('/5346', handler5346)
app.listen(3000, () => {})
        