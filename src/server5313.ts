
const express = require('express')
import {handler5313} from "./handler5313";
const app = express()
app.get('/5313', handler5313)
app.listen(3000, () => {})
        