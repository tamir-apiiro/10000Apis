
const express = require('express')
import {handler5753} from "./handler5753";
const app = express()
app.get('/5753', handler5753)
app.listen(3000, () => {})
        