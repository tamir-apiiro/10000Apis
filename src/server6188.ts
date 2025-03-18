
const express = require('express')
import {handler6188} from "./handler6188";
const app = express()
app.get('/6188', handler6188)
app.listen(3000, () => {})
        