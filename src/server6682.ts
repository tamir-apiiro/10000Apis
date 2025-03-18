
const express = require('express')
import {handler6682} from "./handler6682";
const app = express()
app.get('/6682', handler6682)
app.listen(3000, () => {})
        