
const express = require('express')
import {handler6884} from "./handler6884";
const app = express()
app.get('/6884', handler6884)
app.listen(3000, () => {})
        