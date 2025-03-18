
const express = require('express')
import {handler6091} from "./handler6091";
const app = express()
app.get('/6091', handler6091)
app.listen(3000, () => {})
        