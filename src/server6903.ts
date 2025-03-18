
const express = require('express')
import {handler6903} from "./handler6903";
const app = express()
app.get('/6903', handler6903)
app.listen(3000, () => {})
        