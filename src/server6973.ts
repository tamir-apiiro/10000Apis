
const express = require('express')
import {handler6973} from "./handler6973";
const app = express()
app.get('/6973', handler6973)
app.listen(3000, () => {})
        