
const express = require('express')
import {handler5465} from "./handler5465";
const app = express()
app.get('/5465', handler5465)
app.listen(3000, () => {})
        