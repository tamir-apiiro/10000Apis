
const express = require('express')
import {handler6055} from "./handler6055";
const app = express()
app.get('/6055', handler6055)
app.listen(3000, () => {})
        