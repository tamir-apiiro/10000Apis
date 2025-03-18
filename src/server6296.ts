
const express = require('express')
import {handler6296} from "./handler6296";
const app = express()
app.get('/6296', handler6296)
app.listen(3000, () => {})
        