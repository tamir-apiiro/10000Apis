
const express = require('express')
import {handler9423} from "./handler9423";
const app = express()
app.get('/9423', handler9423)
app.listen(3000, () => {})
        