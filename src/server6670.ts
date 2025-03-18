
const express = require('express')
import {handler6670} from "./handler6670";
const app = express()
app.get('/6670', handler6670)
app.listen(3000, () => {})
        