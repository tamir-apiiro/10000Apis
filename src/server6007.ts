
const express = require('express')
import {handler6007} from "./handler6007";
const app = express()
app.get('/6007', handler6007)
app.listen(3000, () => {})
        