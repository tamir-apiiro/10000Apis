
const express = require('express')
import {handler5339} from "./handler5339";
const app = express()
app.get('/5339', handler5339)
app.listen(3000, () => {})
        