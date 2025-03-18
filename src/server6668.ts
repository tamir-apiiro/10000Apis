
const express = require('express')
import {handler6668} from "./handler6668";
const app = express()
app.get('/6668', handler6668)
app.listen(3000, () => {})
        