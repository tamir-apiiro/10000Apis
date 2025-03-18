
const express = require('express')
import {handler6436} from "./handler6436";
const app = express()
app.get('/6436', handler6436)
app.listen(3000, () => {})
        