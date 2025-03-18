
const express = require('express')
import {handler5608} from "./handler5608";
const app = express()
app.get('/5608', handler5608)
app.listen(3000, () => {})
        