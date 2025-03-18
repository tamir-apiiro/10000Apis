
const express = require('express')
import {handler9179} from "./handler9179";
const app = express()
app.get('/9179', handler9179)
app.listen(3000, () => {})
        