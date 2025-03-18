
const express = require('express')
import {handler5448} from "./handler5448";
const app = express()
app.get('/5448', handler5448)
app.listen(3000, () => {})
        