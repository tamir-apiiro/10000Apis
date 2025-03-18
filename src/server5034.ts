
const express = require('express')
import {handler5034} from "./handler5034";
const app = express()
app.get('/5034', handler5034)
app.listen(3000, () => {})
        