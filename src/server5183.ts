
const express = require('express')
import {handler5183} from "./handler5183";
const app = express()
app.get('/5183', handler5183)
app.listen(3000, () => {})
        