
const express = require('express')
import {handler5048} from "./handler5048";
const app = express()
app.get('/5048', handler5048)
app.listen(3000, () => {})
        