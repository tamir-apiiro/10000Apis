
const express = require('express')
import {handler6226} from "./handler6226";
const app = express()
app.get('/6226', handler6226)
app.listen(3000, () => {})
        