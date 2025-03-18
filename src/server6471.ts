
const express = require('express')
import {handler6471} from "./handler6471";
const app = express()
app.get('/6471', handler6471)
app.listen(3000, () => {})
        