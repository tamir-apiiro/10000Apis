
const express = require('express')
import {handler9781} from "./handler9781";
const app = express()
app.get('/9781', handler9781)
app.listen(3000, () => {})
        