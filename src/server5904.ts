
const express = require('express')
import {handler5904} from "./handler5904";
const app = express()
app.get('/5904', handler5904)
app.listen(3000, () => {})
        