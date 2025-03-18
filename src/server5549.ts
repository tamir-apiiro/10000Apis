
const express = require('express')
import {handler5549} from "./handler5549";
const app = express()
app.get('/5549', handler5549)
app.listen(3000, () => {})
        