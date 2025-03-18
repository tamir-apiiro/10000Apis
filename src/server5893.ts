
const express = require('express')
import {handler5893} from "./handler5893";
const app = express()
app.get('/5893', handler5893)
app.listen(3000, () => {})
        