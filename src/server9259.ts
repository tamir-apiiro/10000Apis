
const express = require('express')
import {handler9259} from "./handler9259";
const app = express()
app.get('/9259', handler9259)
app.listen(3000, () => {})
        