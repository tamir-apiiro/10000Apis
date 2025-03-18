
const express = require('express')
import {handler5379} from "./handler5379";
const app = express()
app.get('/5379', handler5379)
app.listen(3000, () => {})
        