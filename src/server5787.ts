
const express = require('express')
import {handler5787} from "./handler5787";
const app = express()
app.get('/5787', handler5787)
app.listen(3000, () => {})
        