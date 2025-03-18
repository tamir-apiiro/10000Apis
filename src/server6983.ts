
const express = require('express')
import {handler6983} from "./handler6983";
const app = express()
app.get('/6983', handler6983)
app.listen(3000, () => {})
        