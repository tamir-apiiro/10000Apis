
const express = require('express')
import {handler5678} from "./handler5678";
const app = express()
app.get('/5678', handler5678)
app.listen(3000, () => {})
        