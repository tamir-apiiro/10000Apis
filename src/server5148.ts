
const express = require('express')
import {handler5148} from "./handler5148";
const app = express()
app.get('/5148', handler5148)
app.listen(3000, () => {})
        