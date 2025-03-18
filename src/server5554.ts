
const express = require('express')
import {handler5554} from "./handler5554";
const app = express()
app.get('/5554', handler5554)
app.listen(3000, () => {})
        