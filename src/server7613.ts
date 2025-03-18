
const express = require('express')
import {handler7613} from "./handler7613";
const app = express()
app.get('/7613', handler7613)
app.listen(3000, () => {})
        