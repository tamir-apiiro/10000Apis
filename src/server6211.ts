
const express = require('express')
import {handler6211} from "./handler6211";
const app = express()
app.get('/6211', handler6211)
app.listen(3000, () => {})
        