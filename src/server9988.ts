
const express = require('express')
import {handler9988} from "./handler9988";
const app = express()
app.get('/9988', handler9988)
app.listen(3000, () => {})
        