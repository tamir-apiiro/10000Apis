
const express = require('express')
import {handler3407} from "./handler3407";
const app = express()
app.get('/3407', handler3407)
app.listen(3000, () => {})
        