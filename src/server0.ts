import {handler0} from "@handlers/handler0";

const express = require('express')
const app = express()
app.get('/0', handler0)
app.listen(3000, () => {})
        