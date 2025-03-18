
const express = require('express')
import {handler6219} from "./handler6219";
const app = express()
app.get('/6219', handler6219)
app.listen(3000, () => {})
        