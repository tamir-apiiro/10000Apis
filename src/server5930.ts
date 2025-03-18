
const express = require('express')
import {handler5930} from "./handler5930";
const app = express()
app.get('/5930', handler5930)
app.listen(3000, () => {})
        