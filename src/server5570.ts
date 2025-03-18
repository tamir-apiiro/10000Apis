
const express = require('express')
import {handler5570} from "./handler5570";
const app = express()
app.get('/5570', handler5570)
app.listen(3000, () => {})
        