
const express = require('express')
import {handler6781} from "./handler6781";
const app = express()
app.get('/6781', handler6781)
app.listen(3000, () => {})
        