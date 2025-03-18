
const express = require('express')
import {handler6018} from "./handler6018";
const app = express()
app.get('/6018', handler6018)
app.listen(3000, () => {})
        