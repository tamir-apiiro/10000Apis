
const express = require('express')
import {handler6276} from "./handler6276";
const app = express()
app.get('/6276', handler6276)
app.listen(3000, () => {})
        