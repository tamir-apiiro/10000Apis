
const express = require('express')
import {handler6521} from "./handler6521";
const app = express()
app.get('/6521', handler6521)
app.listen(3000, () => {})
        