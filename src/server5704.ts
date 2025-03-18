
const express = require('express')
import {handler5704} from "./handler5704";
const app = express()
app.get('/5704', handler5704)
app.listen(3000, () => {})
        