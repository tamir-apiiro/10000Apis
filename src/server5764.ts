
const express = require('express')
import {handler5764} from "./handler5764";
const app = express()
app.get('/5764', handler5764)
app.listen(3000, () => {})
        