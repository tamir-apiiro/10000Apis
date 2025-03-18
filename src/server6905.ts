
const express = require('express')
import {handler6905} from "./handler6905";
const app = express()
app.get('/6905', handler6905)
app.listen(3000, () => {})
        