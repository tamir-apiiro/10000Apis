
const express = require('express')
import {handler6825} from "./handler6825";
const app = express()
app.get('/6825', handler6825)
app.listen(3000, () => {})
        