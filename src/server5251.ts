
const express = require('express')
import {handler5251} from "./handler5251";
const app = express()
app.get('/5251', handler5251)
app.listen(3000, () => {})
        