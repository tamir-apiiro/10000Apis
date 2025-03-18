
const express = require('express')
import {handler9883} from "./handler9883";
const app = express()
app.get('/9883', handler9883)
app.listen(3000, () => {})
        