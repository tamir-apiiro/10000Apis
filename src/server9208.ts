
const express = require('express')
import {handler9208} from "./handler9208";
const app = express()
app.get('/9208', handler9208)
app.listen(3000, () => {})
        