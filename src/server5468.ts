
const express = require('express')
import {handler5468} from "./handler5468";
const app = express()
app.get('/5468', handler5468)
app.listen(3000, () => {})
        