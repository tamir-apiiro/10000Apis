
const express = require('express')
import {handler6813} from "./handler6813";
const app = express()
app.get('/6813', handler6813)
app.listen(3000, () => {})
        