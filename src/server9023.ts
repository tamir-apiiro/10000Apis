
const express = require('express')
import {handler9023} from "./handler9023";
const app = express()
app.get('/9023', handler9023)
app.listen(3000, () => {})
        