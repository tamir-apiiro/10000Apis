
const express = require('express')
import {handler5349} from "./handler5349";
const app = express()
app.get('/5349', handler5349)
app.listen(3000, () => {})
        