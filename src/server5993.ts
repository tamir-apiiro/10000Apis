
const express = require('express')
import {handler5993} from "./handler5993";
const app = express()
app.get('/5993', handler5993)
app.listen(3000, () => {})
        