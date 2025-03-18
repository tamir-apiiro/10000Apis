
const express = require('express')
import {handler5425} from "./handler5425";
const app = express()
app.get('/5425', handler5425)
app.listen(3000, () => {})
        