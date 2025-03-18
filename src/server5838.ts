
const express = require('express')
import {handler5838} from "./handler5838";
const app = express()
app.get('/5838', handler5838)
app.listen(3000, () => {})
        