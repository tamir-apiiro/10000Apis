
const express = require('express')
import {handler5218} from "./handler5218";
const app = express()
app.get('/5218', handler5218)
app.listen(3000, () => {})
        