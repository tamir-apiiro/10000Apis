
const express = require('express')
import {handler6349} from "./handler6349";
const app = express()
app.get('/6349', handler6349)
app.listen(3000, () => {})
        