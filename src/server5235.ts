
const express = require('express')
import {handler5235} from "./handler5235";
const app = express()
app.get('/5235', handler5235)
app.listen(3000, () => {})
        