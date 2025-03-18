
const express = require('express')
import {handler5944} from "./handler5944";
const app = express()
app.get('/5944', handler5944)
app.listen(3000, () => {})
        