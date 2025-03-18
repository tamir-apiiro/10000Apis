
const express = require('express')
import {handler6073} from "./handler6073";
const app = express()
app.get('/6073', handler6073)
app.listen(3000, () => {})
        