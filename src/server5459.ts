
const express = require('express')
import {handler5459} from "./handler5459";
const app = express()
app.get('/5459', handler5459)
app.listen(3000, () => {})
        