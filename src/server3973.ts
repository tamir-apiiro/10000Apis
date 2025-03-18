
const express = require('express')
import {handler3973} from "./handler3973";
const app = express()
app.get('/3973', handler3973)
app.listen(3000, () => {})
        