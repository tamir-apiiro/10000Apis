
const express = require('express')
import {handler6453} from "./handler6453";
const app = express()
app.get('/6453', handler6453)
app.listen(3000, () => {})
        