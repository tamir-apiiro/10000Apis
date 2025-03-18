
const express = require('express')
import {handler5430} from "./handler5430";
const app = express()
app.get('/5430', handler5430)
app.listen(3000, () => {})
        