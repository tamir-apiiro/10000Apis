
const express = require('express')
import {handler9502} from "./handler9502";
const app = express()
app.get('/9502', handler9502)
app.listen(3000, () => {})
        