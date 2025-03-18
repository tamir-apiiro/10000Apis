
const express = require('express')
import {handler5864} from "./handler5864";
const app = express()
app.get('/5864', handler5864)
app.listen(3000, () => {})
        