
const express = require('express')
import {handler5885} from "./handler5885";
const app = express()
app.get('/5885', handler5885)
app.listen(3000, () => {})
        