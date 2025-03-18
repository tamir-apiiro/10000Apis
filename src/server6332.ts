
const express = require('express')
import {handler6332} from "./handler6332";
const app = express()
app.get('/6332', handler6332)
app.listen(3000, () => {})
        