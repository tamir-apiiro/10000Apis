
const express = require('express')
import {handler5136} from "./handler5136";
const app = express()
app.get('/5136', handler5136)
app.listen(3000, () => {})
        