
const express = require('express')
import {handler5193} from "./handler5193";
const app = express()
app.get('/5193', handler5193)
app.listen(3000, () => {})
        