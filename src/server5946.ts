
const express = require('express')
import {handler5946} from "./handler5946";
const app = express()
app.get('/5946', handler5946)
app.listen(3000, () => {})
        