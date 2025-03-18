
const express = require('express')
import {handler5214} from "./handler5214";
const app = express()
app.get('/5214', handler5214)
app.listen(3000, () => {})
        