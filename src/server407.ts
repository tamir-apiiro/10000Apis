
const express = require('express')
import {handler407} from "./handler407";
const app = express()
app.get('/407', handler407)
app.listen(3000, () => {})
        