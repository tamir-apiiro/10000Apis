
const express = require('express')
import {handler6669} from "./handler6669";
const app = express()
app.get('/6669', handler6669)
app.listen(3000, () => {})
        