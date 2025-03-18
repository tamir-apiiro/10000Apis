
const express = require('express')
import {handler9200} from "./handler9200";
const app = express()
app.get('/9200', handler9200)
app.listen(3000, () => {})
        