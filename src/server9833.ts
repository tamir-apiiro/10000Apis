
const express = require('express')
import {handler9833} from "./handler9833";
const app = express()
app.get('/9833', handler9833)
app.listen(3000, () => {})
        