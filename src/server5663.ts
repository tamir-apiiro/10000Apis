
const express = require('express')
import {handler5663} from "./handler5663";
const app = express()
app.get('/5663', handler5663)
app.listen(3000, () => {})
        