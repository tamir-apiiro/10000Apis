
const express = require('express')
import {handler6224} from "./handler6224";
const app = express()
app.get('/6224', handler6224)
app.listen(3000, () => {})
        