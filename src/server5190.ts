
const express = require('express')
import {handler5190} from "./handler5190";
const app = express()
app.get('/5190', handler5190)
app.listen(3000, () => {})
        