
const express = require('express')
import {handler9802} from "./handler9802";
const app = express()
app.get('/9802', handler9802)
app.listen(3000, () => {})
        