
const express = require('express')
import {handler6930} from "./handler6930";
const app = express()
app.get('/6930', handler6930)
app.listen(3000, () => {})
        