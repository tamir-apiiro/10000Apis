
const express = require('express')
import {handler5064} from "./handler5064";
const app = express()
app.get('/5064', handler5064)
app.listen(3000, () => {})
        