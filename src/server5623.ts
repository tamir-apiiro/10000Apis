
const express = require('express')
import {handler5623} from "./handler5623";
const app = express()
app.get('/5623', handler5623)
app.listen(3000, () => {})
        