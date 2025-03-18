
const express = require('express')
import {handler6519} from "./handler6519";
const app = express()
app.get('/6519', handler6519)
app.listen(3000, () => {})
        