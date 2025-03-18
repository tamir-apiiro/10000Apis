
const express = require('express')
import {handler5816} from "./handler5816";
const app = express()
app.get('/5816', handler5816)
app.listen(3000, () => {})
        