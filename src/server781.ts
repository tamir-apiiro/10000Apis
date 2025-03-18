
const express = require('express')
import {handler781} from "./handler781";
const app = express()
app.get('/781', handler781)
app.listen(3000, () => {})
        