
const express = require('express')
import {handler9373} from "./handler9373";
const app = express()
app.get('/9373', handler9373)
app.listen(3000, () => {})
        