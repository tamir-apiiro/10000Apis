
const express = require('express')
import {handler6303} from "./handler6303";
const app = express()
app.get('/6303', handler6303)
app.listen(3000, () => {})
        