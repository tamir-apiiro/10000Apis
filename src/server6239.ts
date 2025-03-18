
const express = require('express')
import {handler6239} from "./handler6239";
const app = express()
app.get('/6239', handler6239)
app.listen(3000, () => {})
        