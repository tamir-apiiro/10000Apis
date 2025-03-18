
const express = require('express')
import {handler6336} from "./handler6336";
const app = express()
app.get('/6336', handler6336)
app.listen(3000, () => {})
        