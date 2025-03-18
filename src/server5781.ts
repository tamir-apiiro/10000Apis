
const express = require('express')
import {handler5781} from "./handler5781";
const app = express()
app.get('/5781', handler5781)
app.listen(3000, () => {})
        