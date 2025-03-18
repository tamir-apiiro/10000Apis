
const express = require('express')
import {handler5877} from "./handler5877";
const app = express()
app.get('/5877', handler5877)
app.listen(3000, () => {})
        