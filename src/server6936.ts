
const express = require('express')
import {handler6936} from "./handler6936";
const app = express()
app.get('/6936', handler6936)
app.listen(3000, () => {})
        