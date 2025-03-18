
const express = require('express')
import {handler6904} from "./handler6904";
const app = express()
app.get('/6904', handler6904)
app.listen(3000, () => {})
        