
const express = require('express')
import {handler5245} from "./handler5245";
const app = express()
app.get('/5245', handler5245)
app.listen(3000, () => {})
        