
const express = require('express')
import {handler5436} from "./handler5436";
const app = express()
app.get('/5436', handler5436)
app.listen(3000, () => {})
        