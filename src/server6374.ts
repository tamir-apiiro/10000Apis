
const express = require('express')
import {handler6374} from "./handler6374";
const app = express()
app.get('/6374', handler6374)
app.listen(3000, () => {})
        