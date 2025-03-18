
const express = require('express')
import {handler6176} from "./handler6176";
const app = express()
app.get('/6176', handler6176)
app.listen(3000, () => {})
        