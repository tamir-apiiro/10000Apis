
const express = require('express')
import {handler5908} from "./handler5908";
const app = express()
app.get('/5908', handler5908)
app.listen(3000, () => {})
        