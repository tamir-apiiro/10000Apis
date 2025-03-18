
const express = require('express')
import {handler6367} from "./handler6367";
const app = express()
app.get('/6367', handler6367)
app.listen(3000, () => {})
        