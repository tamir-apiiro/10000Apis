
const express = require('express')
import {handler9358} from "./handler9358";
const app = express()
app.get('/9358', handler9358)
app.listen(3000, () => {})
        