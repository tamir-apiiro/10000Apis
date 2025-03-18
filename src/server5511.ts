
const express = require('express')
import {handler5511} from "./handler5511";
const app = express()
app.get('/5511', handler5511)
app.listen(3000, () => {})
        