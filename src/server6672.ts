
const express = require('express')
import {handler6672} from "./handler6672";
const app = express()
app.get('/6672', handler6672)
app.listen(3000, () => {})
        