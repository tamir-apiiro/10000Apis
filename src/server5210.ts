
const express = require('express')
import {handler5210} from "./handler5210";
const app = express()
app.get('/5210', handler5210)
app.listen(3000, () => {})
        