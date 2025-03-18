
const express = require('express')
import {handler6892} from "./handler6892";
const app = express()
app.get('/6892', handler6892)
app.listen(3000, () => {})
        