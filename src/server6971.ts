
const express = require('express')
import {handler6971} from "./handler6971";
const app = express()
app.get('/6971', handler6971)
app.listen(3000, () => {})
        