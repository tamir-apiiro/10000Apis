
const express = require('express')
import {handler6851} from "./handler6851";
const app = express()
app.get('/6851', handler6851)
app.listen(3000, () => {})
        