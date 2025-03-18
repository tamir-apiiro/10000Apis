
const express = require('express')
import {handler6092} from "./handler6092";
const app = express()
app.get('/6092', handler6092)
app.listen(3000, () => {})
        