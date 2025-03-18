
const express = require('express')
import {handler5974} from "./handler5974";
const app = express()
app.get('/5974', handler5974)
app.listen(3000, () => {})
        