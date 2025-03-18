
const express = require('express')
import {handler5605} from "./handler5605";
const app = express()
app.get('/5605', handler5605)
app.listen(3000, () => {})
        