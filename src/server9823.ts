
const express = require('express')
import {handler9823} from "./handler9823";
const app = express()
app.get('/9823', handler9823)
app.listen(3000, () => {})
        