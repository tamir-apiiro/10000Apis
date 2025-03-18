
const express = require('express')
import {handler5378} from "./handler5378";
const app = express()
app.get('/5378', handler5378)
app.listen(3000, () => {})
        