
const express = require('express')
import {handler5240} from "./handler5240";
const app = express()
app.get('/5240', handler5240)
app.listen(3000, () => {})
        