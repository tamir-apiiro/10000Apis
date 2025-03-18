
const express = require('express')
import {handler5929} from "./handler5929";
const app = express()
app.get('/5929', handler5929)
app.listen(3000, () => {})
        