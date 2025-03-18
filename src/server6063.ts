
const express = require('express')
import {handler6063} from "./handler6063";
const app = express()
app.get('/6063', handler6063)
app.listen(3000, () => {})
        