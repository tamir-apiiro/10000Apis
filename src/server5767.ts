
const express = require('express')
import {handler5767} from "./handler5767";
const app = express()
app.get('/5767', handler5767)
app.listen(3000, () => {})
        