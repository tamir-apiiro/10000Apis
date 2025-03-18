
const express = require('express')
import {handler5653} from "./handler5653";
const app = express()
app.get('/5653', handler5653)
app.listen(3000, () => {})
        