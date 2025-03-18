
const express = require('express')
import {handler9810} from "./handler9810";
const app = express()
app.get('/9810', handler9810)
app.listen(3000, () => {})
        