
const express = require('express')
import {handler5902} from "./handler5902";
const app = express()
app.get('/5902', handler5902)
app.listen(3000, () => {})
        