
const express = require('express')
import {handler6963} from "./handler6963";
const app = express()
app.get('/6963', handler6963)
app.listen(3000, () => {})
        