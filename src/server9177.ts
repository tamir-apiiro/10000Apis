
const express = require('express')
import {handler9177} from "./handler9177";
const app = express()
app.get('/9177', handler9177)
app.listen(3000, () => {})
        