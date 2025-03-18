
const express = require('express')
import {handler5615} from "./handler5615";
const app = express()
app.get('/5615', handler5615)
app.listen(3000, () => {})
        