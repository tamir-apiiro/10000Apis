
const express = require('express')
import {handler6003} from "./handler6003";
const app = express()
app.get('/6003', handler6003)
app.listen(3000, () => {})
        