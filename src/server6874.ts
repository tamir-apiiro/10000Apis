
const express = require('express')
import {handler6874} from "./handler6874";
const app = express()
app.get('/6874', handler6874)
app.listen(3000, () => {})
        