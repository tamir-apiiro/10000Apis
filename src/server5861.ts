
const express = require('express')
import {handler5861} from "./handler5861";
const app = express()
app.get('/5861', handler5861)
app.listen(3000, () => {})
        