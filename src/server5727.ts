
const express = require('express')
import {handler5727} from "./handler5727";
const app = express()
app.get('/5727', handler5727)
app.listen(3000, () => {})
        