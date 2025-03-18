
const express = require('express')
import {handler6943} from "./handler6943";
const app = express()
app.get('/6943', handler6943)
app.listen(3000, () => {})
        