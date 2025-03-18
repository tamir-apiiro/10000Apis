
const express = require('express')
import {handler5955} from "./handler5955";
const app = express()
app.get('/5955', handler5955)
app.listen(3000, () => {})
        