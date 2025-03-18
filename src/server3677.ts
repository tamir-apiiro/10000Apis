
const express = require('express')
import {handler3677} from "./handler3677";
const app = express()
app.get('/3677', handler3677)
app.listen(3000, () => {})
        