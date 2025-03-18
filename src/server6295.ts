
const express = require('express')
import {handler6295} from "./handler6295";
const app = express()
app.get('/6295', handler6295)
app.listen(3000, () => {})
        