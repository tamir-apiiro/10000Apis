
const express = require('express')
import {handler5740} from "./handler5740";
const app = express()
app.get('/5740', handler5740)
app.listen(3000, () => {})
        