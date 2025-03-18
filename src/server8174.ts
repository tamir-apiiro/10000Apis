
const express = require('express')
import {handler8174} from "./handler8174";
const app = express()
app.get('/8174', handler8174)
app.listen(3000, () => {})
        