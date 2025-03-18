
const express = require('express')
import {handler5076} from "./handler5076";
const app = express()
app.get('/5076', handler5076)
app.listen(3000, () => {})
        