
const express = require('express')
import {handler5381} from "./handler5381";
const app = express()
app.get('/5381', handler5381)
app.listen(3000, () => {})
        