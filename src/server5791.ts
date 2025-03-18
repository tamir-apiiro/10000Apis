
const express = require('express')
import {handler5791} from "./handler5791";
const app = express()
app.get('/5791', handler5791)
app.listen(3000, () => {})
        