
const express = require('express')
import {handler9697} from "./handler9697";
const app = express()
app.get('/9697', handler9697)
app.listen(3000, () => {})
        