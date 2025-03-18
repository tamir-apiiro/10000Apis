
const express = require('express')
import {handler6099} from "./handler6099";
const app = express()
app.get('/6099', handler6099)
app.listen(3000, () => {})
        