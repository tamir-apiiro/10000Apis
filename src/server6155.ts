
const express = require('express')
import {handler6155} from "./handler6155";
const app = express()
app.get('/6155', handler6155)
app.listen(3000, () => {})
        