
const express = require('express')
import {handler6754} from "./handler6754";
const app = express()
app.get('/6754', handler6754)
app.listen(3000, () => {})
        