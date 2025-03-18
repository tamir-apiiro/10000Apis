
const express = require('express')
import {handler6484} from "./handler6484";
const app = express()
app.get('/6484', handler6484)
app.listen(3000, () => {})
        