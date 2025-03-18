
const express = require('express')
import {handler5359} from "./handler5359";
const app = express()
app.get('/5359', handler5359)
app.listen(3000, () => {})
        