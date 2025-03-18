
const express = require('express')
import {handler6740} from "./handler6740";
const app = express()
app.get('/6740', handler6740)
app.listen(3000, () => {})
        