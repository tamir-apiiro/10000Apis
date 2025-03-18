
const express = require('express')
import {handler5798} from "./handler5798";
const app = express()
app.get('/5798', handler5798)
app.listen(3000, () => {})
        