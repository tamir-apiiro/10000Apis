
const express = require('express')
import {handler6717} from "./handler6717";
const app = express()
app.get('/6717', handler6717)
app.listen(3000, () => {})
        