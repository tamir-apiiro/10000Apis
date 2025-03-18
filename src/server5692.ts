
const express = require('express')
import {handler5692} from "./handler5692";
const app = express()
app.get('/5692', handler5692)
app.listen(3000, () => {})
        