
const express = require('express')
import {handler5087} from "./handler5087";
const app = express()
app.get('/5087', handler5087)
app.listen(3000, () => {})
        