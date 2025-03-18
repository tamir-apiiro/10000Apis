
const express = require('express')
import {handler5728} from "./handler5728";
const app = express()
app.get('/5728', handler5728)
app.listen(3000, () => {})
        