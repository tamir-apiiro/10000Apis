
const express = require('express')
import {handler6802} from "./handler6802";
const app = express()
app.get('/6802', handler6802)
app.listen(3000, () => {})
        