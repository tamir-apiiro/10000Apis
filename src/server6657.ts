
const express = require('express')
import {handler6657} from "./handler6657";
const app = express()
app.get('/6657', handler6657)
app.listen(3000, () => {})
        