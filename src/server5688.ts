
const express = require('express')
import {handler5688} from "./handler5688";
const app = express()
app.get('/5688', handler5688)
app.listen(3000, () => {})
        